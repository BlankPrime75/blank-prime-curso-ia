"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const built = [
  "Guia de prompts profissional organizado por área",
  "Assistente de treinamento comercial funcionando",
  "5 projetos de automação apresentados para a diretoria",
  "Equipe saiu com ferramentas implementadas, não com slides",
];

const stats = [
  { n: "20", label: "profissionais" },
  { n: "4", label: "áreas distintas" },
  { n: "5", label: "projetos apresentados" },
  { n: "100%", label: "saíram com agente funcionando" },
];

export function SocialProof() {
  return (
    <AnimatedSection
      id="prova-social"
      className="relative border-b border-bp-border bg-bp-bg"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/07"
          eyebrow="Prova Social · Bondmann Química"
          title={
            <>
              O método já foi aplicado em indústria de verdade.{" "}
              <span className="text-bp-accent">Com resultado.</span>
            </>
          }
          subtitle="Caso Bondmann Química, Canoas/RS e Indaiatuba/SP"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="space-y-6 text-base text-bp-text-secondary md:col-span-7 md:text-lg">
            <p>
              A Bondmann Química trouxe 20 profissionais de áreas completamente
              diferentes,{" "}
              <span className="text-bp-text-primary">
                Controladoria, Qualidade, Marketing e RH
              </span>{" "}
             , para passar pelo mesmo método que agora chega em formato de
              turma aberta.
            </p>

            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
                O que foi construído
              </div>
              <ul className="space-y-3">
                {built.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-bp-text-primary md:text-lg"
                  >
                    <span className="mt-2.5 block h-1 w-4 shrink-0 bg-bp-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              A turma chegou usando IA de forma esporádica. Saiu com{" "}
              <span className="text-bp-text-primary">método</span>, projetos
              rodando e cultura de IA instalada na empresa.
            </p>
            <p>
              E o que funcionou na Bondmann é exatamente o que vai funcionar
              para você, com a vantagem extra de estar numa turma com
              empresários de outros segmentos, trocando o que cada um descobriu
              no próprio mercado.
            </p>
          </div>

          <div className="md:col-span-5">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="sticky top-24 grid grid-cols-2 gap-3"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-6 transition-colors hover:border-bp-accent/30"
                >
                  <div className="font-mono text-3xl font-semibold leading-none text-bp-accent md:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-3 text-xs leading-snug text-bp-text-secondary md:text-sm">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
