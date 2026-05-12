import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const outcomes = [
  "IA funcionando como ferramenta de trabalho real, não como curiosidade ocasional",
  "Processos do seu negócio mapeados com oportunidades concretas de automação",
  "Assistente inteligente configurado para a sua área de maior dor (atendimento, vendas, gestão, comunicação, você escolhe)",
  "Material de comunicação e vendas produzido com IA, pronto para usar",
  "Método claro para sua equipe parar de usar IA cada um do seu jeito",
  "Vantagem de 2 anos sobre quem ainda vai começar",
];

export function Outcome() {
  return (
    <AnimatedSection
      id="resultado"
      className="relative border-b border-bp-border bg-bp-bg-elevated"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/06"
          eyebrow="Resultado"
          title={
            <>
              O que você tem na mão ao final dos{" "}
              <span className="text-bp-accent">4 encontros</span>.
            </>
          }
          subtitle="Não é certificado. É implementação."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
              Saída
            </div>
            <ul className="mt-6 divide-y divide-bp-border">
              {outcomes.map((o, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-5 py-5 transition-colors"
                >
                  <span className="mt-1 font-mono text-xs text-bp-accent/70 group-hover:text-bp-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base text-bp-text-primary md:text-lg">
                    {o}
                  </span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-bp-text-muted transition-colors group-hover:text-bp-accent" />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-bp-accent/25 bg-bp-bg p-8 glow-gold">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-accent">
                  Conta simples
                </div>
                <p className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-bp-text-bright md:text-3xl">
                  Se você economizar{" "}
                  <span className="text-bp-accent">5 horas por semana</span> com o
                  que aprender,
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-bp-text-bright md:text-3xl">
                  o curso se paga{" "}
                  <span className="text-bp-accent">no primeiro mês.</span>
                </p>
                <div className="mt-7 h-px w-full bg-bp-border" />
                <p className="mt-6 text-sm text-bp-text-secondary">
                  O resto é vantagem competitiva. Pelos próximos 2 anos.
                </p>
              </div>

              <div className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted">
                  Sobre o investimento
                </div>
                <p className="mt-4 text-base text-bp-text-primary md:text-lg">
                  Equivale a contratar um colaborador júnior por{" "}
                  <span className="text-bp-text-bright font-medium">um único mês</span>
                  {" "}mas o método fica com você e sua equipe pra sempre.
                </p>
                <p className="mt-3 text-sm text-bp-text-secondary">
                  Condições especiais pra empresários do RS. Valor exato e formas de pagamento direto com a Sofia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
