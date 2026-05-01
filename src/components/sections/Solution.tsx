import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const deliverables = [
  "Um perfil de IA configurado especificamente para o seu negócio",
  "Prompts profissionais prontos para sua equipe usar com método",
  "Material de comunicação e vendas produzido com IA",
  "Um agente inteligente construído e testado ao vivo, na sua frente",
  "Um projeto de automação real desenvolvido durante o curso",
];

const segments = [
  "Advocacia",
  "Indústria",
  "Varejo",
  "Serviços",
  "Saúde",
  "Imobiliário",
  "Farmácia",
  "Alimentação",
];

export function Solution() {
  return (
    <AnimatedSection
      id="solucao"
      className="relative border-b border-bp-border bg-bp-bg"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/03"
          eyebrow="A Solução"
          title={
            <>
              IA para Empresários:{" "}
              <span className="text-bp-text-secondary">
                o método presencial que transforma curiosidade em resultado.
              </span>
            </>
          }
          subtitle="4 encontros. 12 horas. Você sai com IA implementada — não com slides."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="space-y-6 text-base text-bp-text-secondary md:col-span-6 md:text-lg">
            <p>
              Esse curso foi desenhado para quem{" "}
              <span className="text-bp-text-primary">tem empresa para tocar</span>{" "}
              — não para quem tem tempo de sobra para teoria.
            </p>
            <p>
              A cada encontro você sai com algo funcionando que pode usar no seu
              negócio na semana seguinte. Sem código. Sem configuração complexa.
              Sem jargão técnico.
            </p>
            <p>
              E você não faz isso sozinho. Faz junto com outros 29 empresários
              de segmentos diferentes. A troca entre quem está em mercados
              diferentes é o que faz cada participante sair com 10 ideias que
              não teria se estivesse em uma turma homogênea.
            </p>

            <div className="pt-4">
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-bp-text-muted">
                Segmentos representados na turma
              </div>
              <div className="flex flex-wrap gap-2">
                {segments.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-bp-border bg-bp-bg-elevated px-3 py-1.5 text-xs text-bp-text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-8 md:p-10">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-bp-accent">
                O que você constrói no curso
              </div>
              <ul className="mt-8 space-y-5">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-bp-accent/40 bg-bp-accent/10">
                      <Check className="size-3.5 text-bp-accent" strokeWidth={3} />
                    </span>
                    <span className="text-base text-bp-text-primary md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
