import { Check, X } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { LightFx } from "@/components/LightFx";

const forYou = [
  "Tem uma empresa de pequeno ou médio porte e quer a IA trabalhando pelo seu negócio, não você trabalhando para entender IA",
  "Está cansado de apagar incêndio e quer tempo para o estratégico",
  "Tem equipe que poderia ser mais produtiva com método, mas hoje cada um faz do seu jeito",
  "Quer previsibilidade de resultado e parar de depender de mês bom e mês ruim",
  "Quer sair na frente antes que o seu concorrente direto chegue lá",
];

const notForYou = [
  "Quer aprender a programar ou desenvolver sistemas do zero",
  "Busca curso teórico, com muito material e pouca aplicação",
  "Não está disposto a abrir o computador durante a aula e implementar",
  'Espera "mágica", não método',
];

export function Audience() {
  return (
    <AnimatedSection
      id="para-quem"
      className="section-light relative overflow-hidden border-b border-bp-border"
    >
      <LightFx />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/08"
          eyebrow="Para quem é"
          title={
            <>
              Esse curso é <span className="text-bp-accent">para você</span>.{" "}
              Ou não.
            </>
          }
          subtitle="Vamos ser diretos para você não perder tempo nem dinheiro."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-bp-accent/25 bg-bp-bg p-8 md:p-10">
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-bp-accent">
              É para você
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-bp-text-bright">
              Esse curso é para você se:
            </h3>
            <ul className="mt-8 space-y-5">
              {forYou.map((item, i) => (
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

          <div className="rounded-2xl border border-bp-border bg-bp-bg p-8 md:p-10">
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
              Não é para você
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-bp-text-bright">
              Esse curso NÃO é para você se:
            </h3>
            <ul className="mt-8 space-y-5">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-bp-border-strong bg-bp-bg-elevated">
                    <X className="size-3.5 text-bp-text-muted" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-bp-text-secondary md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-bp-text-muted md:text-base">
          Se você está no segundo grupo, melhor esperar outro produto.
          Esse aqui é prático, direto e exige que você aplique.
        </p>
      </div>
    </AnimatedSection>
  );
}
