"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SOFIA_WHATSAPP } from "@/lib/constants";

/**
 * Botão fixo no bottom em mobile (< md). Some assim que o user
 * passa do hero (~80vh) — pra não obstruir conteúdo no início,
 * só apoiar quem está rolando e considerando.
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
      href={SOFIA_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Sofia"
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden flex items-center justify-center gap-2 h-12 rounded-full bg-bp-accent text-bp-bg text-sm font-medium shadow-[0_8px_32px_-8px_rgba(201,169,97,0.55)] transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      Falar com a Sofia <ArrowRight className="size-4" />
    </a>
  );
}
