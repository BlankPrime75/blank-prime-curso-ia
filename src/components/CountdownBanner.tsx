"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_JUNHO } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/track";
import { LOTES, getCurrentLoteIndex, loteLabel } from "@/lib/lotes";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Cell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span className="font-display text-base tabular-nums sm:text-lg md:text-xl">
        {value}
      </span>
      <span className="mt-0.5 text-[9px] uppercase tracking-[0.18em] opacity-70 sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

export function CountdownBanner() {
  // now = null até montar no client (evita mismatch SSR/CSR).
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // SSR / 1º render: reserva o espaço com placeholder neutro,
  // assim o sticky já posiciona certo o conteúdo abaixo.
  if (now === null) {
    return (
      <div
        aria-hidden
        className="sticky top-0 z-50 h-12 w-full bg-bp-accent sm:h-14"
      />
    );
  }

  const loteIndex = getCurrentLoteIndex(now);
  // Todos os lotes acabaram — banner some.
  if (loteIndex === null) return null;

  const diff = LOTES[loteIndex].deadline - now;
  if (diff <= 0) return null; // proteção (geralmente getCurrentLoteIndex já cuidou)

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  const longLabel = loteLabel(loteIndex);       // "1º lote termina em"
  const shortLabel = `${loteIndex + 1}º lote em`; // mobile

  return (
    <div className="sticky top-0 z-50 w-full bg-bp-accent text-black shadow-[0_2px_24px_-4px_rgba(31,231,79,0.55)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span
            aria-hidden
            className="hidden size-2 shrink-0 animate-pulse rounded-full bg-black sm:block"
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.18em]">
            <span className="hidden sm:inline">{longLabel}</span>
            <span className="sm:hidden">{shortLabel}</span>
          </span>
          <div aria-hidden className="hidden h-6 w-px bg-black/20 sm:block" />
          <div className="flex items-center gap-2 sm:gap-3">
            <Cell value={pad(days)} label="dias" />
            <span className="font-display text-lg opacity-50 sm:text-xl">:</span>
            <Cell value={pad(hours)} label="hrs" />
            <span className="font-display text-lg opacity-50 sm:text-xl">:</span>
            <Cell value={pad(mins)} label="min" />
            <span className="font-display text-lg opacity-50 sm:text-xl">:</span>
            <Cell value={pad(secs)} label="seg" />
          </div>
        </div>

        <a
          href={WHATSAPP_JUNHO}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(`junho-banner-countdown-lote${loteIndex + 1}`)}
          className="group hidden shrink-0 items-center gap-1.5 rounded-full bg-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-bp-accent transition-all hover:gap-2.5 sm:inline-flex"
        >
          Garantir vaga
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href={WHATSAPP_JUNHO}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(`junho-banner-countdown-lote${loteIndex + 1}-mobile`)}
          aria-label="Garantir vaga"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-black text-bp-accent sm:hidden"
        >
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
