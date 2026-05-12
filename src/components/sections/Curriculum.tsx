"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { LightFx } from "@/components/LightFx";

const meetings = [
  {
    n: "01",
    title: "Mentalidade e Ferramentas",
    body: "Como a IA realmente funciona, quais ferramentas escolher para o seu caso, como configurar um perfil profissional e como sair do uso aleatório para o uso com método.",
    output: "Seu ambiente de trabalho de IA já configurado.",
  },
  {
    n: "02",
    title: "Prompts, Contexto e Matéria-Prima",
    body: "Como estruturar pedidos para a IA e obter resultados que você usa de verdade, não respostas genéricas. Criação de propostas comerciais, análise de dados do seu negócio e produção de conteúdo com IA.",
    output: "Biblioteca de prompts profissionais.",
  },
  {
    n: "03",
    title: "IA Criativa e Agentes Inteligentes",
    body: "Apresentações automáticas, geração de imagens, vídeos e construção de um assistente inteligente para a sua área de maior dor, configurado ao vivo durante a aula.",
    output: "Um agente funcionando.",
  },
  {
    n: "04",
    title: "Automação e Projeto Final",
    body: "Agentes autônomos, automação de processos repetitivos e apresentação do projeto desenvolvido ao longo do curso.",
    output: "Plano de implementação concreto e ao menos um processo automatizado.",
  },
];

export function Curriculum() {
  return (
    <AnimatedSection
      id="encontros"
      className="section-light relative overflow-hidden border-b border-bp-border"
    >
      <LightFx />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/05"
          eyebrow="Conteúdo"
          title="O que você aprende em cada encontro."
          subtitle="4 encontros de 3 horas cada. Cada um entrega algo que você usa na semana seguinte."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 space-y-4"
        >
          {meetings.map((m, i) => (
            <motion.div
              key={m.n}
              variants={staggerItem}
              className="group relative grid gap-6 rounded-2xl border border-bp-border bg-bp-bg-elevated p-7 transition-all duration-300 hover:border-bp-accent/30 md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-10"
            >
              <div className="font-mono text-5xl font-semibold leading-none text-bp-accent md:text-6xl">
                {m.n}
              </div>

              <div className="space-y-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted">
                  Encontro {m.n} · 3h
                </div>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-bp-text-bright md:text-3xl">
                  {m.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bp-text-secondary md:text-base">
                  {m.body}
                </p>
              </div>

              <div className="md:max-w-[260px] md:border-l md:border-bp-border md:pl-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted">
                  Você sai com
                </div>
                <p className="mt-3 text-base font-medium leading-snug text-bp-text-primary md:text-lg">
                  {m.output}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-bp-accent/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
          <span className="h-px flex-1 bg-bp-border-strong" />
          <span>12h totais · 4 encontros · presencial</span>
          <span className="h-px flex-1 bg-bp-border-strong" />
        </div>
      </div>
    </AnimatedSection>
  );
}
