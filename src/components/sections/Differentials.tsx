"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Hammer,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  {
    icon: Briefcase,
    title: "Para empresários, não para técnicos.",
    body: "Linguagem de negócio. Exemplos de gestão, vendas, marketing e operação. Zero código. Zero configuração complexa. Se a sua dor é vender mais, a aula vai falar de venda, não de algoritmo.",
  },
  {
    icon: Users,
    title: "Turma reduzida e mista por segmento.",
    body: "Máximo 30 empresários de áreas diferentes. Você aprende com o que o dono da farmácia descobriu, com o que a empresária do imobiliário testou, com o que o industrial automatizou. Curso homogêneo não entrega isso.",
  },
  {
    icon: Hammer,
    title: "Prática desde o primeiro minuto.",
    body: "Você não vai ouvir 3 horas de teoria para usar 30 minutos. É o contrário. Você abre seu computador, configura, testa, ajusta e sai com algo pronto.",
  },
  {
    icon: ShieldCheck,
    title: "Sem promessa mirabolante.",
    body: "Não vai te transformar em milionário. Vai te dar método para usar uma ferramenta que já está aí, e que seu concorrente provavelmente está usando errado também. Quem aplicar, sai na frente. É simples assim.",
  },
  {
    icon: Building2,
    title: "Metodologia testada em empresa real.",
    body: "O mesmo método já foi aplicado na Bondmann Química, com 20 profissionais de áreas distintas. Saíram com agentes funcionando e projetos apresentados para a diretoria.",
  },
];

export function Differentials() {
  return (
    <AnimatedSection
      id="diferenciais"
      className="relative border-b border-bp-border bg-bp-bg-elevated"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/04"
          eyebrow="Diferenciais"
          title={
            <>
              Por que esse curso entrega{" "}
              <span className="text-bp-accent">o que outros prometem.</span>
            </>
          }
          subtitle="Se você já tentou outros treinamentos de IA e não viu resultado, o motivo está aqui."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative flex flex-col gap-5 rounded-2xl border border-bp-border bg-bp-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bp-accent/30 hover:bg-bp-bg-card"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-bp-border-strong bg-bp-bg-elevated transition-colors group-hover:border-bp-accent/40 group-hover:bg-bp-accent-soft">
                  <Icon className="size-5 text-bp-text-secondary transition-colors group-hover:text-bp-accent" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-bp-text-bright">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-bp-text-secondary md:text-base">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
