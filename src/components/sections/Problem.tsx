import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const consequences = [
  {
    text: "Continua **apagando incêndio** o dia inteiro em vez de pensar no estratégico",
  },
  {
    text: "Continua perdendo cliente porque **o tempo de resposta é lento demais**",
  },
  {
    text: "Continua **sem previsibilidade**, em meses bons fatura bem, em meses ruins um cliente cancela e tudo balança",
  },
  {
    text: "Continua dependendo de você para **tudo**, porque a equipe não tem método",
  },
];

export function Problem() {
  return (
    <AnimatedSection
      id="problema"
      className="relative border-b border-bp-border bg-bp-bg"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeading
          number="/01"
          eyebrow="O Problema"
          title={
            <>
              O problema não é a IA.
              <br />
              <span className="text-bp-text-secondary">
                É a forma como você está usando ela.
              </span>
            </>
          }
          subtitle="Você não está parado. Está só andando em círculos."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="space-y-5 text-base text-bp-text-secondary md:col-span-7 md:text-lg">
            <p className="font-medium text-bp-text-primary">
              Olha se isso aqui parece com a sua semana:
            </p>
            <p>
              Você usa ChatGPT para responder um e-mail difícil. Funciona. No
              dia seguinte, esquece de usar para a proposta comercial, e gasta
              2 horas escrevendo no braço. Sua equipe usa{" "}
              <span className="text-bp-text-primary">"quando lembra"</span>. Um
              vendedor ama, outro nem abre. O time de marketing pediu para a
              agência fazer o post, que poderia estar pronto em 10 minutos.
            </p>
            <p>
              No final do mês, você olha o faturamento e percebe:
            </p>

            <ul className="space-y-3 pt-2">
              {consequences.map((item, i) => (
                <li
                  key={i}
                  className="group flex gap-4 rounded-lg border border-bp-border bg-bp-bg-elevated/40 p-4 transition-colors hover:border-bp-border-strong"
                >
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-bp-accent/70" />
                  <span
                    className="text-bp-text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: item.text.replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-bp-text-primary font-medium">$1</strong>'
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>

            <p className="pt-2">
              E enquanto isso, o concorrente que estudou IA seis meses atrás já
              está atendendo cliente no automático, fechando proposta em metade
              do tempo e gastando menos com agência.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-bp-border bg-bp-bg-elevated p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-bp-text-muted">
                Diagnóstico
              </div>
              <p className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-bp-text-bright md:text-3xl">
                A IA não é o problema.
              </p>
              <p className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-bp-accent md:text-3xl">
                A falta de método é.
              </p>
              <div className="mt-8 h-px w-full bg-bp-border" />
              <p className="mt-6 text-sm text-bp-text-secondary">
                Sem processo, ferramenta vira hobby. Com método, vira
                vantagem competitiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
