"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const comparisons = [
  {
    them: "Responde cliente em segundos",
    you: "ainda está escrevendo",
  },
  {
    them: "Produz proposta comercial em 10 minutos",
    you: "leva 2 horas",
  },
  {
    them: "Tem assistente atendendo 24h por dia",
    you: "atende só no horário comercial",
  },
  {
    them: "Roda 5 projetos de automação",
    you: "ainda está mapeando o primeiro",
  },
  {
    them: "Toma decisão com dados estruturados",
    you: "decide no feeling",
  },
];

export function Agitation() {
  return (
    <AnimatedSection
      id="agitacao"
      className="relative overflow-hidden border-b border-bp-border bg-bp-bg-elevated"
    >
      <div className="absolute inset-0 grid-bg-soft opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/02"
          eyebrow="A Janela Está Fechando"
          title={
            <>
              Em 2027, IA vai ser igual ter e-mail.
              <br />
              <span className="text-bp-accent">
                Quem chegar atrasado, começa do zero.
              </span>
            </>
          }
          subtitle="A janela para sair na frente está fechando rápido."
        />

        <div className="mt-16 max-w-3xl space-y-6 text-base text-bp-text-secondary md:text-lg">
          <p>
            Existe uma diferença gigante entre{" "}
            <span className="text-bp-text-primary">usar ChatGPT</span> e{" "}
            <span className="text-bp-accent">
              ter IA trabalhando para o seu negócio
            </span>
            .
          </p>
          <p className="font-medium text-bp-text-primary">
            Quem está usando IA com método hoje:
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 overflow-hidden rounded-2xl border border-bp-border-strong"
        >
          <div className="grid grid-cols-[1fr_auto_1fr] border-b border-bp-border bg-bp-bg/40 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bp-text-muted md:px-8 md:text-xs">
            <span className="text-bp-accent">Quem usa com método</span>
            <span className="px-3 text-center md:px-6">vs</span>
            <span className="text-right">Você (ainda)</span>
          </div>
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-bp-border px-4 py-5 text-sm last:border-b-0 md:gap-6 md:px-8 md:py-6 md:text-base"
            >
              <span className="text-bp-text-bright">{row.them}</span>
              <Zap className="size-3.5 shrink-0 text-bp-accent/60 md:size-4" />
              <span className="text-right text-bp-text-muted line-through decoration-bp-text-muted/40">
                {row.you}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="space-y-5 text-base text-bp-text-secondary md:col-span-7 md:text-lg">
            <p>
              E o pior:{" "}
              <span className="text-bp-text-primary">isso não é mais futuro.</span>{" "}
              É agora. Os empresários da Bondmann Química fizeram isso em 4
              encontros. Os 30 empresários da próxima turma vão fazer o mesmo.
            </p>
            <p>
              Cada mês que você adia esse curso é um mês de vantagem que você dá
              para quem já entendeu.
            </p>
            <p>
              E quando a IA virar básico — daqui 12, 18, no máximo 24 meses —
              quem aprendeu agora vai estar 2 anos à frente. Quem deixou para
              depois vai estar correndo atrás, no escuro, gastando o dobro.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-bp-accent/20 bg-bp-bg p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-bp-text-muted">
                A Pergunta Real
              </div>
              <p className="mt-5 text-xl font-medium leading-snug text-bp-text-secondary md:text-2xl">
                A pergunta não é mais{" "}
                <span className="text-bp-text-primary">se</span> você vai usar
                IA no seu negócio.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-bp-accent/40 via-bp-accent/10 to-transparent" />
              <p className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-bp-text-bright md:text-3xl">
                A pergunta é:{" "}
                <span className="text-bp-accent">
                  você vai usar antes ou depois do seu concorrente?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
