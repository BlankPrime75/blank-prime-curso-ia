"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { BlankPrimeLogo } from "@/components/BlankPrimeLogo";
import {
  SOFIA_WHATSAPP,
  TURMA_TOTAL_VAGAS,
  TURMA_VAGAS_PREENCHIDAS,
} from "@/lib/constants";

const HERO_FACTS = [
  {
    icon: CalendarDays,
    label: "9, 16, 23 e 30 de Junho de 2026 · Terças-feiras",
  },
  { icon: Clock, label: "18h30 às 21h30 · 12h totais" },
  { icon: MapPin, label: "CICS Canoas · Rua Ipiranga, 95 · Centro" },
  {
    icon: Users,
    label:
      TURMA_VAGAS_PREENCHIDAS > 0 &&
      TURMA_VAGAS_PREENCHIDAS < TURMA_TOTAL_VAGAS
        ? `${TURMA_TOTAL_VAGAS - TURMA_VAGAS_PREENCHIDAS} vagas restantes · turma de ${TURMA_TOTAL_VAGAS}`
        : `Vagas limitadas · turma de ${TURMA_TOTAL_VAGAS} empresários`,
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-bp-border-neutral">
      {/* fundo: grid sutil + halo verde radial */}
      <div className="absolute inset-0 grid-bg radial-fade-bottom opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 accent-halo blur-2xl" />
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-bp-accent/[0.06] blur-3xl" />

      {/* Header da página */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-7 md:pt-9">
        <BlankPrimeLogo size="md" priority />
        <a
          href={SOFIA_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm text-bp-text-secondary transition-colors hover:text-bp-accent md:inline-flex md:items-center md:gap-2"
        >
          Falar com a Sofia
          <ArrowRight className="size-3.5" />
        </a>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pt-16 pb-24 md:pt-20 md:pb-32 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* COLUNA TEXTO */}
        <div>
          {/* Badges do topo (espelha o card) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-secondary"
          >
            <span className="inline-flex items-center gap-1.5 text-bp-accent">
              <Sparkles className="size-3" />
              3ª edição
            </span>
            <span className="size-1 rounded-full bg-bp-text-muted/60" />
            <span>Turma 2026</span>
            <span className="size-1 rounded-full bg-bp-text-muted/60" />
            <span>Em Canoas</span>
          </motion.div>

          {/* HEADLINE — IA gigante + para italic + Empresários */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 leading-[0.85]"
          >
            <span className="block">
              <span className="font-display text-[clamp(5.5rem,16vw,11rem)] uppercase text-bp-accent text-glow-green">
                IA
              </span>
              <span className="font-serif-italic ml-3 align-baseline text-[clamp(2.5rem,7vw,5rem)] text-bp-text-bright">
                para
              </span>
            </span>
            <span className="mt-2 block font-display text-[clamp(2.5rem,8vw,6rem)] uppercase tracking-tight text-bp-text-bright">
              Empresários
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-pretty text-lg text-bp-text-primary md:text-xl"
          >
            Sua concorrência já está usando IA.{" "}
            <span className="text-bp-text-bright">E você?</span>{" "}
            Da curiosidade à implementação em 4 encontros presenciais.
          </motion.p>

          {/* Bullets com ícones verdes (mesmo padrão do card) */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 space-y-3.5"
          >
            {HERO_FACTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-bp-accent/30 bg-bp-accent-soft text-bp-accent">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm text-bp-text-bright/90 md:text-base">
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <CtaButton href={SOFIA_WHATSAPP} size="lg">
              Inscrições abertas
            </CtaButton>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted">
              Vagas limitadas
            </span>
          </motion.div>

          {/* Tag PRESENCIAL no rodapé */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 flex items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-bp-accent/40 to-transparent" />
            <span className="font-display text-2xl uppercase tracking-[0.32em] text-bp-accent text-glow-green">
              Presencial
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-bp-accent/40 to-transparent" />
          </motion.div>
        </div>

        {/* COLUNA VISUAL — card sintético com paleta do flyer */}
        <motion.aside
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-bp-accent/20 bg-bp-bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-bp-accent/[0.18] via-transparent to-transparent" />
            <div className="absolute -right-20 -top-20 size-[400px] rounded-full bg-bp-accent/[0.18] blur-3xl" />
            <div className="absolute -bottom-32 -left-20 size-[400px] rounded-full bg-bp-accent/[0.08] blur-3xl" />

            <div className="absolute inset-0 circuit-dots opacity-40" />

            {/* Faixa superior */}
            <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-bp-accent/20 bg-bp-bg/40 px-6 py-4 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bp-accent">
                3ª edição
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bp-text-secondary">
                Turma 2026
              </span>
            </div>

            {/* Tipografia central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <span className="font-display text-7xl uppercase leading-none text-bp-accent text-glow-green">
                IA
              </span>
              <span className="font-serif-italic mt-2 text-3xl text-bp-text-bright">
                para
              </span>
              <span className="mt-2 block font-display text-4xl uppercase leading-none text-bp-text-bright">
                Empresários
              </span>
              <span className="mt-6 max-w-[14rem] text-xs leading-relaxed text-bp-text-secondary">
                Da curiosidade à implementação em{" "}
                <span className="text-bp-accent">4 encontros</span>
              </span>
            </div>

            {/* Faixa PRESENCIAL */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-bp-accent/20 bg-bp-accent px-6 py-3 text-center">
              <span className="font-display text-lg uppercase tracking-[0.32em] text-black">
                Presencial
              </span>
            </div>

            {/* Cantos decorativos */}
            <span className="absolute left-3 top-16 block h-12 w-12 border-l border-t border-bp-accent/40" />
            <span className="absolute right-3 bottom-16 block h-12 w-12 border-b border-r border-bp-accent/40" />
          </div>

          <div className="pointer-events-none absolute -inset-x-8 -bottom-12 h-32 bg-bp-accent/15 blur-3xl" />
        </motion.aside>
      </div>
    </section>
  );
}
