"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import { trackSymplaClick, trackWhatsAppClick } from "@/lib/track";

type TrackInfo = { type: "sympla" | "whatsapp"; origem: string };

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
  /** Dispara evento no Meta Pixel ao clicar (objeto serializável, ok em server components) */
  track?: TrackInfo;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  track,
}: Props) {
  const base =
    "shine group inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 select-none whitespace-nowrap";

  const sizes = {
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-7 text-base",
  } as const;

  const variants = {
    primary: cn(
      "bg-bp-accent text-black",
      "hover:bg-bp-accent-hover hover:-translate-y-0.5",
      "shadow-[0_8px_32px_-8px_rgba(31,231,79,0.55)]",
      "hover:shadow-[0_12px_40px_-8px_rgba(31,231,79,0.75)]",
    ),
    secondary: cn(
      "border border-bp-border-strong bg-bp-bg-elevated text-bp-text-primary",
      "hover:border-bp-accent hover:text-bp-accent hover:-translate-y-0.5",
    ),
    ghost:
      "text-bp-text-primary hover:text-bp-accent underline-offset-4 hover:underline normal-case tracking-normal font-medium",
  } as const;

  const isExternal = href.startsWith("http");

  function handleClick() {
    if (!track) return;
    if (track.type === "sympla") trackSymplaClick(track.origem);
    else trackWhatsAppClick(track.origem);
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
