import { CtaButton } from "@/components/CtaButton";
import { SYMPLA_CHECKOUT } from "@/lib/constants";

/**
 * Faixa de CTA pra inserir entre seções — leva direto ao checkout do Sympla.
 * Padrão de landing de alta conversão: repetir o CTA principal ao longo da
 * página pra captar quem já decidiu, sem obrigar a rolar até o fim.
 */
export function CtaBand({
  origem,
  titulo = "Pronto pra colocar IA pra trabalhar no seu negócio?",
  subtitulo = "Inscrição direta e segura pelo Sympla. Sem formulário de espera.",
  cta = "Garantir minha vaga",
}: {
  origem: string;
  titulo?: string;
  subtitulo?: string;
  cta?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-bp-border bg-bp-bg">
      {/* faixa sutil verde no topo + halo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bp-accent/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[700px] -translate-x-1/2 rounded-full bg-bp-accent/[0.06] blur-3xl ai-pulse" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
        <h3 className="font-display text-2xl uppercase leading-tight text-bp-text-bright sm:text-3xl md:text-4xl">
          {titulo}
        </h3>
        <p className="max-w-xl text-sm text-bp-text-secondary md:text-base">
          {subtitulo}
        </p>
        <CtaButton
          href={SYMPLA_CHECKOUT}
          size="lg"
          track={{ type: "sympla", origem }}
        >
          {cta}
        </CtaButton>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted">
          Turma reduzida · vagas limitadas
        </span>
      </div>
    </section>
  );
}
