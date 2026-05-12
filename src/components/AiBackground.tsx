"use client";

import { useEffect, useRef } from "react";

/**
 * Fundo animado estilo "IA avançada":
 *  - rede de partículas (nós) que flutuam e se conectam por linhas verdes
 *  - pulso de "energia" que viaja pelas conexões de vez em quando
 *  - respeita prefers-reduced-motion (renderiza estático)
 *
 * Renderizado num <canvas> absoluto, atrás do conteúdo. Leve: ~50 nós.
 */
export function AiBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ACCENT = "31, 231, 79"; // rgb do verde neon
    const LINK_DIST = 150; // distância máx pra desenhar linha
    let width = 0;
    let height = 0;
    let dpr = 1;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number; // pra pulsar o brilho
    };
    let nodes: Node[] = [];

    type Pulse = { a: number; b: number; t: number; speed: number };
    let pulses: Pulse[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // densidade proporcional à área, com teto
      const count = Math.min(
        70,
        Math.max(28, Math.round((width * height) / 26000)),
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1 + Math.random() * 1.8,
        phase: Math.random() * Math.PI * 2,
      }));
      pulses = [];
    }

    function spawnPulse() {
      if (nodes.length < 2) return;
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      if (b === a) b = (b + 1) % nodes.length;
      // só cria se estiverem perto
      const dx = nodes[a].x - nodes[b].x;
      const dy = nodes[a].y - nodes[b].y;
      if (Math.hypot(dx, dy) > LINK_DIST) return;
      pulses.push({ a, b, t: 0, speed: 0.012 + Math.random() * 0.02 });
    }

    let raf = 0;
    let frame = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      frame++;

      // atualiza posições
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
        n.phase += 0.02;
      }

      // linhas entre nós próximos
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.22;
            ctx!.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // pulsos de energia viajando pelas conexões
      if (!reduceMotion) {
        if (frame % 30 === 0 && pulses.length < 10) spawnPulse();
        for (let k = pulses.length - 1; k >= 0; k--) {
          const p = pulses[k];
          p.t += p.speed;
          if (p.t >= 1) {
            pulses.splice(k, 1);
            continue;
          }
          const a = nodes[p.a];
          const b = nodes[p.b];
          if (!a || !b) {
            pulses.splice(k, 1);
            continue;
          }
          const x = a.x + (b.x - a.x) * p.t;
          const y = a.y + (b.y - a.y) * p.t;
          const fade = Math.sin(p.t * Math.PI); // brilha no meio
          ctx!.fillStyle = `rgba(${ACCENT}, ${0.9 * fade})`;
          ctx!.beginPath();
          ctx!.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx!.fill();
          // halo do pulso
          ctx!.fillStyle = `rgba(${ACCENT}, ${0.18 * fade})`;
          ctx!.beginPath();
          ctx!.arc(x, y, 7 * fade, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // nós (com pulso de brilho)
      for (const n of nodes) {
        const glow = 0.5 + 0.5 * Math.sin(n.phase);
        // halo
        ctx!.fillStyle = `rgba(${ACCENT}, ${0.06 + glow * 0.06})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx!.fill();
        // núcleo
        ctx!.fillStyle = `rgba(${ACCENT}, ${0.5 + glow * 0.4})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    if (reduceMotion) {
      // render estático único
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
