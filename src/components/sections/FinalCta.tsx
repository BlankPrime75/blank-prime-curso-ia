import { CtaButton } from "@/components/CtaButton";
import { BlankPrimeLogo } from "@/components/BlankPrimeLogo";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  SOFIA_WHATSAPP,
  SOFIA_WHATSAPP_DATAS,
  TURMA_TOTAL_VAGAS,
  TURMA_VAGAS_PREENCHIDAS,
} from "@/lib/constants";

const vagasInfo =
  TURMA_VAGAS_PREENCHIDAS > 0 && TURMA_VAGAS_PREENCHIDAS < TURMA_TOTAL_VAGAS
    ? `${TURMA_VAGAS_PREENCHIDAS} de ${TURMA_TOTAL_VAGAS} vagas preenchidas, restam ${TURMA_TOTAL_VAGAS - TURMA_VAGAS_PREENCHIDAS}`
    : `${TURMA_TOTAL_VAGAS} vagas no total, turma fecha ao completar`;

const info = [
  { label: "Formato", value: "Presencial" },
  { label: "Duração", value: "4 encontros · 3h cada · 12h no total" },
  { label: "Turma", value: vagasInfo },
  { label: "Certificado", value: "Emitido pela Blank Prime ao final do curso" },
  { label: "Inscrições", value: "Atendimento individual com a Sofia" },
];

export function FinalCta() {
  return (
    <>
      <AnimatedSection
        id="inscrever"
        className="relative overflow-hidden bg-bp-bg"
      >
        <div className="absolute inset-0 grid-bg radial-fade-bottom opacity-50" />
        <div className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-bp-accent/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeading
            number="/09"
            eyebrow="Garantir minha vaga"
            title={
              <>
                Pronto para parar de experimentar IA{" "}
                <span className="text-bp-accent">e começar a usar com resultado?</span>
              </>
            }
            subtitle="Próxima turma com inscrições abertas. Vagas limitadas."
          />

          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-8">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
                  Informações práticas
                </div>
                <dl className="mt-7 divide-y divide-bp-border">
                  {info.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[120px_1fr] gap-4 py-4"
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-bp-text-muted">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-bp-text-primary md:text-base">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="space-y-5 text-base text-bp-text-secondary md:text-lg">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-bp-text-bright md:text-3xl">
                  Como garantir sua vaga
                </h3>
                <p>
                  A inscrição é feita em conversa direta com a{" "}
                  <span className="text-bp-text-primary">Sofia</span>, nossa
                  consultora. Ela vai entender o seu negócio, esclarecer suas
                  dúvidas sobre formato, datas e investimento, e confirmar se
                  ainda há vaga na próxima turma.
                </p>
                <p>
                  Não é formulário automático. É conversa. Porque turma de 30
                  empresários a gente monta com cuidado.
                </p>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:flex-wrap">
                  <CtaButton href={SOFIA_WHATSAPP} size="lg">
                    Conversar com a Sofia agora
                  </CtaButton>
                  <CtaButton
                    href={SOFIA_WHATSAPP_DATAS}
                    variant="secondary"
                    size="lg"
                  >
                    Quero saber datas e investimento
                  </CtaButton>
                </div>
              </div>

              <blockquote className="mt-14 border-l-2 border-bp-accent bg-bp-bg-elevated p-7 md:p-8">
                <p className="text-lg leading-relaxed text-bp-text-primary md:text-xl">
                  Daqui 2 anos, IA vai estar em todo lugar. A diferença entre
                  quem vai liderar e quem vai correr atrás se decide nos
                  próximos 6 meses.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-bp-text-secondary md:text-xl">
                  Você tem 4 encontros de distância da decisão certa.
                </p>
                <p className="mt-4 font-medium text-bp-accent">
                  Fale com a Sofia. Garanta sua vaga.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="border-t border-bp-border bg-bp-bg">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <BlankPrimeLogo size="sm" />
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-bp-text-muted">
            © 2026 Blank Prime · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
