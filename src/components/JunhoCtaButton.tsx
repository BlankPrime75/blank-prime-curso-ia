"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { WHATSAPP_JUNHO } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/track";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";

type Props = {
  /** Identifica de QUAL CTA o clique veio. Vai parar nos params do evento Meta */
  origem: string;
  children: ReactNode;
  size?: "md" | "lg" | "xl";
  variant?: "primary" | "outline";
  className?: string;
  /** Texto custom de mensagem WhatsApp. Sem isso, usa a default "Quero saber do curso de IA de junho." */
  message?: string;
};

export function JunhoCtaButton({
  origem,
  children,
  size = "lg",
  variant = "primary",
  className,
  message,
}: Props) {
  const href = message
    ? `https://wa.me/5551993304978?text=${encodeURIComponent(message)}`
    : WHATSAPP_JUNHO;

  // Mobile: botão "lg" e "xl" são FLEX (full width do container do CTA),
  // com altura/tipografia menores pra não estourar margem no celular.
  // Em sm+ voltam pra inline-flex e respiram com px maior.
  const sizes = {
    md: "h-11 px-5 text-sm",
    lg: "flex sm:inline-flex w-full sm:w-auto h-12 sm:h-14 px-5 sm:px-7 text-sm sm:text-base",
    xl: "flex sm:inline-flex w-full sm:w-auto h-12 sm:h-16 px-5 sm:px-9 text-sm sm:text-lg",
  } as const;

  const variants = {
    primary: cn(
      "bg-bp-accent text-black",
      "hover:bg-bp-accent-hover hover:-translate-y-0.5",
      "shadow-[0_8px_32px_-8px_rgba(31,231,79,0.55)]",
      "hover:shadow-[0_14px_48px_-8px_rgba(31,231,79,0.85)]",
    ),
    outline: cn(
      "border-2 border-bp-accent bg-transparent text-bp-accent",
      "hover:bg-bp-accent hover:text-black hover:-translate-y-0.5",
    ),
  } as const;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(`junho-${origem}`)}
      className={cn(
        "shine group items-center justify-center gap-2 sm:gap-2.5 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 select-none text-center",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <WhatsAppGlyph className="relative z-10 size-5" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
