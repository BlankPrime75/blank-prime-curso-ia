"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_DUVIDAS } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/track";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <a
      href={WHATSAPP_DUVIDAS}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("fab")}
      aria-label="Tirar dúvidas no WhatsApp"
      className={`group fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_-4px_rgba(37,211,102,0.5)] transition-all duration-300 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 transition-transform group-hover:animate-ping"
      />
      <WhatsAppGlyph className="relative h-7 w-7 sm:h-8 sm:w-8" />
      {/* tooltip em desktop */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-bp-bg-card px-3 py-1.5 text-xs text-bp-text-bright opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Dúvidas? Fale no WhatsApp
      </span>
    </a>
  );
}
