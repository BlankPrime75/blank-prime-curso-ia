"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { BlankPrimeLogo } from "@/components/BlankPrimeLogo";
import { SOFIA_WHATSAPP } from "@/lib/constants";

const headline = [
  ["Sua", "concorrência"],
  ["já", "está", "usando", "IA."],
  ["E", "você", "ainda", "está"],
  ['"experimentando".'],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-bp-border">
      <div className="absolute inset-0 grid-bg radial-fade-bottom opacity-60" />
      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-bp-accent/40 to-transparent" />

      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-bp-accent/[0.04] blur-3xl" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-7 md:pt-9">
        <BlankPrimeLogo size="md" showTagline={false} />
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-bp-border-strong bg-bp-bg-elevated px-3.5 py-1.5"
        >
          <Sparkles className="size-3.5 text-bp-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bp-text-secondary">
            Curso Presencial · Próxima Turma
          </span>
        </motion.div>

        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-bp-text-bright sm:text-5xl md:text-6xl lg:text-7xl">
          {headline.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.map((word, wIdx) => {
                const flatIdx =
                  headline.slice(0, lineIdx).flat().length + wIdx;
                const isHighlight = word === "IA.";
                return (
                  <motion.span
                    key={`${lineIdx}-${wIdx}`}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + flatIdx * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mr-[0.25em] inline-block"
                  >
                    <span className={isHighlight ? "text-bp-accent" : ""}>
                      {word}
                    </span>
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-pretty text-lg text-bp-text-secondary md:text-xl"
        >
          Em 4 encontros presenciais, você sai com IA funcionando de verdade no
          seu negócio — não com mais um certificado na gaveta. Turma de no
          máximo 30 empresários.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl space-y-5 text-base text-bp-text-secondary md:text-lg"
        >
          <p>
            Você abre o ChatGPT, faz uma pergunta, copia uma resposta e fecha.
            Sua equipe faz o mesmo — cada um do seu jeito. No final do mês,
            ninguém sabe explicar onde a IA realmente economizou tempo, gerou
            venda ou trouxe vantagem.
          </p>
          <p className="text-bp-text-bright">Esse curso resolve isso.</p>
          <p>
            12 horas de prática direta com Sofia e o método já aplicado em
            empresas como a Bondmann Química. Você sai com prompts
            profissionais, um agente inteligente configurado para a sua dor e
            um projeto de automação rodando.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <CtaButton href={SOFIA_WHATSAPP} size="lg">
            Falar com a Sofia e garantir minha vaga
          </CtaButton>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-bp-text-muted">
            Vagas limitadas · 30 empresários
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 flex items-center gap-6 text-xs text-bp-text-muted md:text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="block size-1.5 rounded-full bg-bp-accent" />
            <span className="font-mono uppercase tracking-[0.18em]">
              Inscrições abertas
            </span>
          </div>
          <span className="h-px w-12 bg-bp-text-muted/30" />
          <span className="font-mono uppercase tracking-[0.18em]">
            12h · 4 encontros · Presencial
          </span>
        </motion.div>
      </div>
    </section>
  );
}
