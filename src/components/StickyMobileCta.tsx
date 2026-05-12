"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SYMPLA_CHECKOUT } from "@/lib/constants";
import { trackSymplaClick } from "@/lib/track";

/**
 * Botão fixo no bottom em mobile (< md). Some assim que o user
 * passa do hero (~60vh), pra não obstruir conteúdo no início,
 * só apoiar quem está rolando e considerando. Leva direto ao Sympla.
 */
export function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SYMPLA_CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackSymplaClick("sticky-mobile")}
      aria-label="Garantir minha vaga"
      className={`fixed bottom-4 left-4 right-20 z-40 md:hidden flex items-center justify-center gap-2 h-12 rounded-full bg-bp-accent text-black text-sm font-semibold uppercase tracking-wide shadow-[0_8px_32px_-8px_rgba(31,231,79,0.6)] transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      Garantir minha vaga <ArrowRight className="size-4" />
    </a>
  );
}
