"use client";

import { useEffect } from "react";

// Dispara um evento custom ÚNICO pra rota /junho.
// O PageView padrão e o LandingPageView genérico continuam saindo do meta-pixel.tsx
// no layout — esse aqui adiciona um sinal próprio pra montar Audience separada
// no Gerenciador (ex.: "Visitou /junho", remarketing focado em quem viu essa LP).
export function JunhoPixelEvent() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Pixel pode demorar uns ms pra carregar (afterInteractive no layout).
    // Tenta agora; se não tiver pronto, espera 1 tick e tenta de novo.
    const fire = () => {
      if (typeof window.fbq === "function") {
        try {
          window.fbq("trackCustom", "JunhoLandingView", {
            domain: "blankprime.com",
            source: "junho",
            edition: "3a",
            month: "junho-2026",
          });
        } catch {
          /* pixel ainda não carregou — ignora silencioso */
        }
        return true;
      }
      return false;
    };
    if (fire()) return;
    const t = setTimeout(fire, 800);
    return () => clearTimeout(t);
  }, []);

  return null;
}
