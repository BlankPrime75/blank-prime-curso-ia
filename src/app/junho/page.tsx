import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  MapPin,
  Sparkles,
  Users,
  Check,
  Calendar,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { AiBackground } from "@/components/AiBackground";
import { LightFx } from "@/components/LightFx";
import { JunhoCtaButton } from "@/components/JunhoCtaButton";
import { JunhoPixelEvent } from "@/components/JunhoPixelEvent";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CountdownBanner } from "@/components/CountdownBanner";

export const metadata: Metadata = {
  title: "Curso IA para Empresários · Junho 2026 | Blank Prime",
  description:
    "4 terças em junho. Você sai com IA funcionando no seu negócio. Conversa direta com a Aline pelo WhatsApp.",
  alternates: { canonical: "https://blankprime.com/junho" },
  openGraph: {
    title: "Curso IA para Empresários · 3ª edição · Junho 2026",
    description:
      "4 encontros presenciais em Canoas. Turma reduzida. Inscrição direta com a Aline.",
    url: "https://blankprime.com/junho",
    siteName: "Blank Prime",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const HERO_FACTS = [
  { icon: CalendarDays, label: "9, 16, 23 e 30 de Junho de 2026 · Terças-feiras" },
  { icon: Clock, label: "18h30 às 21h30 · 12h totais" },
  { icon: MapPin, label: "CICS Canoas · Rua Ipiranga, 95 · Centro" },
  { icon: Users, label: "Turma reduzida · vagas limitadas" },
];

// ─── SEÇÃO 1 · ATENÇÃO (mesmo layout do Hero principal) ─────────────────
function Atencao() {
  return (
    <section className="relative isolate overflow-hidden border-b border-bp-border-neutral bg-bp-bg">
      {/* fundo: rede neural + grid sutil + halos verdes */}
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      <div className="absolute inset-0 grid-bg radial-fade-bottom opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 accent-halo blur-2xl ai-pulse" />
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-bp-accent/[0.07] blur-3xl ai-pulse [animation-delay:1.6s]" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-[360px] w-[360px] rounded-full bg-bp-accent/[0.05] blur-3xl ai-pulse [animation-delay:3.2s]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pt-8 pb-14 md:pt-10 md:pb-18 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* COLUNA TEXTO — em mobile fica DEPOIS da foto (ordem invertida) */}
        <div className="order-2 lg:order-1">
          {/* Badges do topo */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-secondary">
            <span className="inline-flex items-center gap-1.5 text-bp-accent">
              <Sparkles className="size-3" />
              3ª edição
            </span>
            <span className="size-1 rounded-full bg-bp-text-muted/60" />
            <span>Turma de Junho</span>
            <span className="size-1 rounded-full bg-bp-text-muted/60" />
            <span>Em Canoas</span>
          </div>

          {/* HEADLINE: 2 anos atrasado. Tamanho min reduzido pra não estourar mobile. */}
          <h1 className="mt-6 leading-[0.92] sm:mt-8">
            <span className="block font-display text-[clamp(2rem,7vw,5.5rem)] uppercase tracking-tight text-bp-text-bright">
              Você está
            </span>
            <span className="block font-display text-[clamp(2.5rem,9vw,6.5rem)] uppercase tracking-tight text-bp-accent text-glow-green">
              2 anos
            </span>
            <span className="block font-display text-[clamp(2rem,7vw,5.5rem)] uppercase tracking-tight text-bp-text-bright">
              atrasado.
            </span>
            <span className="mt-3 block font-serif-italic text-[clamp(1.125rem,3.5vw,2.5rem)] text-bp-text-bright/85">
              E cada mês custa{" "}
              <span className="not-italic font-display uppercase text-bp-accent">
                mais caro.
              </span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 max-w-xl text-pretty text-base text-bp-text-primary sm:mt-8 sm:text-lg md:text-xl">
            A IA já chegou no seu mercado. Seu concorrente já está usando.{" "}
            <span className="text-bp-text-bright">
              Junho é a sua chance de virar o jogo.
            </span>
          </p>

          {/* Bullets com ícones verdes */}
          <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-3.5">
            {HERO_FACTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-bp-accent/30 bg-bp-accent-soft text-bp-accent">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm text-bp-text-bright/90 md:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <JunhoCtaButton origem="hero" size="xl">
              Garantir minha vaga
            </JunhoCtaButton>
            <span className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted sm:text-left">
              Conversa direta · sem formulário
            </span>
          </div>

          {/* Tag PRESENCIAL no rodapé */}
          <div className="mt-10 flex items-center gap-4 sm:mt-12">
            <span className="h-px flex-1 bg-gradient-to-r from-bp-accent/40 to-transparent" />
            <span className="font-display text-lg uppercase tracking-[0.32em] text-bp-accent text-glow-green sm:text-2xl">
              Presencial
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-bp-accent/40 to-transparent" />
          </div>
        </div>

        {/* COLUNA VISUAL · foto do instrutor.
            Mobile: aparece NO TOPO, contida em max-w-xs (320px) pra não dominar.
            Desktop: vai pro lado direito normal. */}
        <aside className="relative order-1 mx-auto w-full max-w-xs lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-bp-accent/25">
            <Image
              src="/instrutor.png"
              alt="Instrutor do curso IA para Empresários"
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 80vw"
              priority
              className="object-cover"
            />

            {/* vinheta */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent sm:h-24" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent sm:h-20" />

            {/* badges topo */}
            <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-bp-accent text-glow-green sm:text-[10px]">
                3ª edição
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/80 sm:text-[10px]">
                Junho 2026
              </span>
            </div>

            {/* faixa PRESENCIAL */}
            <div className="absolute bottom-0 left-0 right-0 bg-bp-accent px-3 py-2 text-center sm:px-6 sm:py-3">
              <span className="font-display text-xs uppercase tracking-[0.22em] text-black sm:text-lg sm:tracking-[0.32em]">
                Presencial · Em Canoas
              </span>
            </div>

            {/* cantos decorativos */}
            <span className="absolute left-3 top-12 block h-10 w-10 border-l border-t border-bp-accent/50" />
            <span className="absolute right-3 bottom-16 block h-10 w-10 border-b border-r border-bp-accent/50" />
          </div>

          {/* glow externo */}
          <div className="pointer-events-none absolute -inset-x-8 -bottom-12 h-32 bg-bp-accent/15 blur-3xl" />
        </aside>
      </div>
    </section>
  );
}

// ─── SEÇÃO 2 · INTERESSE (Dor) ──────────────────────────────────────────
function InteresseDor() {
  return (
    <AnimatedSection className="relative isolate overflow-hidden border-b border-bp-border bg-bp-bg-elevated">
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/02"
          eyebrow="O que está acontecendo"
          title={
            <>
              Você sabe que precisa{" "}
              <span className="text-bp-accent">fazer alguma coisa.</span>
            </>
          }
        />
        <div className="mt-8 space-y-3 text-pretty text-lg leading-relaxed text-bp-text-secondary md:text-xl">
          <p>Toda noite você deita pensando a mesma coisa.</p>
          <p>
            Que precisa <strong className="text-bp-text-bright">organizar a empresa.</strong>{" "}
            Que precisa <strong className="text-bp-text-bright">parar de apagar incêndio.</strong>{" "}
            Que precisa <strong className="text-bp-text-bright">dormir sem o medo de perder um cliente</strong>{" "}
            que vai desequilibrar o mês inteiro.
          </p>
          <p>
            E o pior: você até <em className="font-serif-italic">usa</em> a IA. Sua equipe também usa.
          </p>
          <p>
            Mas usa pra corrigir texto. Pra ajeitar um e-mail. Pra mandar mensagem mais bonita
            no WhatsApp. Pra gerar aquela imagem de trend pro Instagram.
          </p>
          <p className="rounded-2xl border-l-2 border-bp-accent bg-bp-bg/60 px-6 py-5 text-xl text-bp-text-bright md:text-2xl">
            Vocês estão usando <span className="text-bp-accent">menos de 5%</span> do que ela é capaz.
          </p>
          <p>
            A IA que está aí, na sua tela, é a máquina mais extraordinária que já existiu
            na história dos negócios. Ela pode otimizar tarefas que tomam horas da sua semana,
            padronizar processos, treinar sua equipe, te ajudar a tomar decisão com mais
            inteligência.{" "}
            <strong className="text-bp-text-bright">Funcionando 24 horas, sem pedir aumento.</strong>
          </p>
          <p>
            Mas pra isso ela precisa de{" "}
            <strong className="text-bp-text-bright">técnica.</strong> Não de truque. Não de
            &ldquo;dica&rdquo;. <span className="text-bp-accent font-semibold">Técnica.</span>
          </p>
          <p>
            E enquanto você usa a IA pra corrigir e-mail,{" "}
            <strong className="text-bp-text-bright">
              alguém com método está usando ela pra roubar seu cliente.
            </strong>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 3 · INTERESSE (Virada) ───────────────────────────────────────
function InteresseVirada() {
  return (
    <AnimatedSection className="section-light relative isolate overflow-hidden border-b border-bp-border">
      <LightFx />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/03"
          eyebrow="A virada"
          title={
            <>
              E se em 4 terças à noite{" "}
              <span className="text-bp-accent">isso mudasse?</span>
            </>
          }
        />
        <div className="mt-10 space-y-5">
          {[
            "Chegar em casa numa terça de junho e, antes de dormir, já ter aplicado algo que vai te economizar tempo na quarta de manhã.",
            "Sair do quarto encontro com um assistente inteligente cuidando daquela tarefa repetitiva que hoje toma horas da sua semana.",
            "Sua equipe treinada por um assistente que você mesmo construiu, repetindo o seu padrão de qualidade, sem você precisar estar em cima.",
            "Seus processos rodando com menos retrabalho, menos erro humano, menos &ldquo;esqueci de fazer&rdquo;.",
            "Chegar em dezembro de 2026 e saber que você está 2 anos à frente de quem só vai começar quando todo mundo já estiver no automático.",
          ].map((line, i) => (
            <div
              key={i}
              className="group flex gap-4 rounded-xl border border-bp-border bg-bp-bg-card/60 p-5 backdrop-blur transition-all hover:border-bp-accent/40 hover:bg-bp-bg-card md:p-6"
            >
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-bp-accent text-black">
                <Sparkles className="size-4" strokeWidth={2.5} />
              </div>
              <p
                className="text-pretty text-base leading-relaxed text-bp-text-primary md:text-lg"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            </div>
          ))}
        </div>
        <p className="mt-12 text-balance text-center text-lg italic text-bp-text-secondary md:text-xl">
          Isso não é promessa. É{" "}
          <span className="font-semibold not-italic text-bp-accent">o que esse curso entrega.</span>
        </p>

        <div className="mt-12 flex justify-center">
          <JunhoCtaButton origem="pos-virada" size="lg">
            Quero entrar na turma
          </JunhoCtaButton>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 4 · DESEJO (4 encontros) ─────────────────────────────────────
function Encontros() {
  const items = [
    {
      data: "09/06",
      titulo: "Mentalidade e Ferramentas",
      body: "Como a IA funciona de verdade. Quais ferramentas escolher. Como configurar seu ambiente profissional.",
    },
    {
      data: "16/06",
      titulo: "Prompts, Contexto e Matéria-Prima",
      body: "A técnica que faz a IA parar de dar resposta genérica. Você aprende a criar seus próprios prompts (inclusive os system prompts que profissionais usam) pra qualquer demanda da sua empresa.",
    },
    {
      data: "23/06",
      titulo: "IA Criativa e Agentes Inteligentes",
      body: "Apresentações, imagens, vídeos e a construção ao vivo do seu assistente inteligente, pra otimizar tarefas, padronizar processos ou treinar equipe. Você escolhe a sua maior dor.",
    },
    {
      data: "30/06",
      titulo: "Automação e Projeto Final",
      body: "Agentes autônomos, automação de processos repetitivos e o seu projeto rodando.",
    },
  ];

  return (
    <AnimatedSection className="relative isolate overflow-hidden border-b border-bp-border bg-bp-bg">
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-45 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/04"
          eyebrow="O que acontece"
          title={
            <>
              4 encontros. 12 horas. Cada um com algo que{" "}
              <span className="text-bp-accent">você usa na semana seguinte.</span>
            </>
          }
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative flex flex-col gap-4 rounded-2xl border border-bp-border bg-bp-bg-elevated p-5 transition-all hover:-translate-y-1 hover:border-bp-accent/40 hover:bg-bp-bg-card md:p-6"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-xl border border-bp-accent/30 bg-bp-accent-soft font-display text-base text-bp-accent">
                  {it.data}
                </span>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bp-text-muted">
                  Encontro {i + 1}
                </div>
              </div>
              <h3 className="font-display text-xl uppercase leading-tight tracking-tight text-bp-text-bright sm:text-2xl md:text-3xl">
                {it.titulo}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-bp-text-secondary md:text-lg">
                {it.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-pretty text-sm italic text-bp-text-muted md:text-base">
          Conteúdo atualizado com as ferramentas mais recentes.
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 5 · DESEJO (Diferencial) ─────────────────────────────────────
function Diferencial() {
  const items = [
    { titulo: "É só pra empresário, sócio ou gestor.", body: "Linguagem de negócio. Zero código." },
    { titulo: "Você aprende a pescar, não recebe o peixe.", body: "A gente não te entrega biblioteca pronta. Ensina a técnica pra você criar seus próprios prompts, inclusive system prompts. No fim do curso, você é autônomo." },
    { titulo: "Turma reduzida e mista por segmento.", body: "Você troca experiência com empresários de outros mercados, e leva insight que turma homogênea nunca daria." },
    { titulo: "Prática desde o primeiro minuto.", body: "Notebook aberto. Implementação real. Nada de slide." },
    { titulo: "Você sai com coisa funcionando.", body: "Não com certificado de gaveta." },
  ];

  return (
    <AnimatedSection className="relative isolate overflow-hidden border-b border-bp-border bg-bp-bg-elevated">
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/05"
          eyebrow="Diferencial"
          title={
            <>
              Por que esse curso é{" "}
              <span className="text-bp-accent">diferente:</span>
            </>
          }
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {items.map((it, i) => {
            const placement = i === items.length - 2 ? "lg:col-start-2" : "";
            return (
              <article
                key={i}
                className={`group flex flex-col gap-4 rounded-2xl border border-bp-border bg-bp-bg p-5 transition-all hover:-translate-y-1 hover:border-bp-accent/30 hover:bg-bp-bg-card lg:col-span-2 ${placement}`}
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-bp-accent/30 bg-bp-accent-soft text-bp-accent">
                  <span aria-hidden className="font-display text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-bp-text-bright">
                  {it.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-bp-text-secondary md:text-base">
                  {it.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 6 · DESEJO (Prova social) ────────────────────────────────────
function ProvaSocial() {
  return (
    <AnimatedSection className="section-light relative isolate overflow-hidden border-b border-bp-border">
      <LightFx />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
          /06 · Prova social
        </div>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-balance text-3xl uppercase leading-[0.95] tracking-tight text-bp-text-bright sm:text-4xl md:text-5xl lg:text-6xl">
          Mais de <span className="text-bp-accent">100 empresários</span> já passaram por esse método.
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Donos de loja",
            "Donos de indústria",
            "Advogados",
            "Contadores",
            "Imobiliárias",
            "Restaurantes",
            "Consultórios",
            "Sócios e gestores",
            "Empresas familiares",
          ].map((seg) => (
            <div
              key={seg}
              className="rounded-xl border border-bp-border bg-bp-bg-card/60 px-5 py-4 text-sm font-medium text-bp-text-primary backdrop-blur transition-colors hover:border-bp-accent/40"
            >
              {seg}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl border border-bp-accent/30 bg-bp-bg/60 p-8 backdrop-blur sm:grid-cols-3 md:p-10">
          <div>
            <div className="font-display text-4xl text-bp-accent sm:text-5xl md:text-6xl">+100</div>
            <p className="mt-2 text-sm uppercase tracking-wider text-bp-text-muted">Alunos formados</p>
          </div>
          <div>
            <div className="font-display text-4xl text-bp-accent sm:text-5xl md:text-6xl">3</div>
            <p className="mt-2 text-sm uppercase tracking-wider text-bp-text-muted">Edições validadas</p>
          </div>
          <div>
            <div className="font-display text-4xl text-bp-accent sm:text-5xl md:text-6xl">100%</div>
            <p className="mt-2 text-sm uppercase tracking-wider text-bp-text-muted">Aplicação prática</p>
          </div>
        </div>

        <p className="mt-12 text-pretty text-base leading-relaxed text-bp-text-primary md:text-lg">
          Não é teoria. É método testado, refinado e validado em <strong>3 edições.</strong>
        </p>
        <p className="mt-3 text-pretty text-base text-bp-text-secondary md:text-lg">
          A 3ª edição é em junho.{" "}
          <strong className="text-bp-text-bright">A próxima pode demorar.</strong>
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 7 · DESEJO (Incluído) ────────────────────────────────────────
function Incluido() {
  const items = [
    "4 encontros presenciais (12 horas)",
    "Material de apoio digital",
    "Certificado Blank Prime",
    "Networking com empresários de outros setores",
    "Grupo exclusivo de alunos pós-curso",
  ];
  return (
    <AnimatedSection className="relative isolate overflow-hidden border-b border-bp-border bg-bp-bg">
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/07"
          eyebrow="O que está incluído"
          title={
            <>
              Tudo que você leva <span className="text-bp-accent">pra casa.</span>
            </>
          }
        />
        <ul className="mt-12 space-y-3">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-center gap-4 rounded-xl border border-bp-border bg-bp-bg-elevated/70 px-6 py-4 backdrop-blur transition-colors hover:border-bp-accent/30"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-bp-accent/40 bg-bp-accent-soft">
                <Check className="size-4 text-bp-accent" strokeWidth={3} />
              </span>
              <span className="text-base text-bp-text-bright md:text-lg">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 8 · AÇÃO (Investimento) ──────────────────────────────────────
function Investimento() {
  const lotes = [
    { tag: "🟢 1º LOTE", data: "até 17/05", individual: "R$ 697", individualParc: "12x", dupla: "R$ 1.184", duplaPP: "R$ 592/pessoa", destaque: true },
    { tag: "🟡 2º LOTE", data: "18/05 a 02/06", individual: "R$ 897", dupla: "R$ 1.524", destaque: false },
    { tag: "🔴 3º LOTE", data: "03/06 a 08/06", individual: "R$ 1.097", dupla: "R$ 1.864", destaque: false },
  ];

  return (
    <AnimatedSection className="section-light relative isolate overflow-hidden border-b border-bp-border">
      <LightFx />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/08"
          eyebrow="Investimento"
          align="center"
          title={
            <>
              Cada mês de hesitação custa mais caro.{" "}
              <span className="text-bp-accent">Inclusive na inscrição.</span>
            </>
          }
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {lotes.map((l, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur transition-all hover:-translate-y-1 ${
                l.destaque
                  ? "border-bp-accent bg-bp-bg-card shadow-[0_20px_60px_-20px_rgba(31,231,79,0.6)] md:scale-105"
                  : "border-bp-border bg-bp-bg-card/60"
              }`}
            >
              {l.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bp-accent px-4 py-1 font-mono text-[11px] uppercase tracking-wider text-black">
                  Lote vigente
                </span>
              )}
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
                {l.tag} · {l.data}
              </div>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-bp-text-muted">Individual</div>
                  <div className="mt-1 font-display text-2xl text-bp-text-bright sm:text-3xl sm:text-4xl">{l.individual}</div>
                  {l.individualParc && (
                    <div className="text-xs text-bp-text-muted">em {l.individualParc} sem juros</div>
                  )}
                </div>
                <div className="h-px bg-bp-border" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-bp-text-muted">Combo Dupla</div>
                  <div className="mt-1 font-display text-2xl text-bp-text-bright sm:text-3xl">{l.dupla}</div>
                  {l.duplaPP && <div className="text-xs text-bp-text-muted">{l.duplaPP}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-bp-accent/30 bg-bp-bg-card/60 p-8 backdrop-blur">
            <Users className="size-7 text-bp-accent" strokeWidth={1.6} />
            <h3 className="mt-4 text-xl font-semibold text-bp-text-bright">Combo Dupla · 15% off</h3>
            <p className="mt-3 text-base leading-relaxed text-bp-text-secondary">
              2 ingressos com <strong className="text-bp-text-bright">15% off.</strong> Pra sócios,
              casal empresário ou empresário + gestor.
            </p>
            <p className="mt-3 text-base italic leading-relaxed text-bp-text-primary">
              Quem aplica em dupla, implementa em metade do tempo.
            </p>
          </div>

          <div className="rounded-2xl border border-bp-border bg-bp-bg-card/60 p-8 backdrop-blur">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">Conta simples</div>
            <p className="mt-4 text-base leading-relaxed text-bp-text-primary md:text-lg">
              Se você economizar <strong className="text-bp-text-bright">5 horas por semana</strong>{" "}
              com o que aprender,{" "}
              <span className="text-bp-accent font-semibold">o curso se paga no primeiro mês.</span>{" "}
              O resto é vantagem.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <JunhoCtaButton
            origem="pos-investimento"
            size="xl"
            message="Quero garantir vaga no 1º lote do curso de IA de junho."
          >
            Garantir vaga no 1º lote
          </JunhoCtaButton>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-bp-text-muted">
            Conversa direta com a Aline · WhatsApp
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 9 · AÇÃO (Logística) ─────────────────────────────────────────
function Logistica() {
  return (
    <AnimatedSection className="relative isolate overflow-hidden border-b border-bp-border bg-bp-bg">
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-14">
        <SectionHeading
          number="/09"
          eyebrow="Logística"
          title={
            <>
              Onde, quando e o que <span className="text-bp-accent">levar.</span>
            </>
          }
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-5">
            <MapPin className="size-7 text-bp-accent" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-2xl text-bp-text-bright">Onde</h3>
            <p className="mt-3 text-base leading-relaxed text-bp-text-primary">
              <strong className="text-bp-text-bright">CICS Canoas</strong>
              <br />
              Rua Ipiranga, 95 · Centro
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bp-text-secondary">
              Estacionamento próprio. Acesso pela BR-116 e Av. Guilherme Schell.
            </p>
          </div>

          <div className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-5">
            <Calendar className="size-7 text-bp-accent" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-2xl text-bp-text-bright">Quando</h3>
            <p className="mt-3 text-base leading-relaxed text-bp-text-primary">
              <strong className="text-bp-text-bright">Terças: 9, 16, 23 e 30</strong>
              <br />
              de junho de 2026
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bp-text-secondary">
              18h30 às 21h30 · depois do expediente.
            </p>
          </div>

          <div className="rounded-2xl border border-bp-border bg-bp-bg-elevated p-5">
            <Sparkles className="size-7 text-bp-accent" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-2xl text-bp-text-bright">O que levar</h3>
            <p className="mt-3 text-base leading-relaxed text-bp-text-primary">
              Notebook. Cabo.{" "}
              <strong className="text-bp-text-bright">Vontade de implementar.</strong>
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── SEÇÃO 10 · AÇÃO (CTA Final) ────────────────────────────────────────
function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-bp-bg">
      <AiBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
      {/* glow no centro */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bp-accent/12 blur-[120px]"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center md:py-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-bp-accent/40 bg-bp-accent-soft px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-bp-accent">
          <span className="size-1.5 animate-pulse rounded-full bg-bp-accent" />
          Última chamada
        </div>

        <h2 className="mt-6 font-display text-balance text-3xl uppercase leading-[0.94] tracking-tight text-bp-text-bright sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
          Dia 17 de maio o preço <span className="text-bp-accent">sobe R$ 200.</span>
          <br className="hidden sm:block" />
          <span className="font-serif-italic text-bp-text-bright/90 normal-case tracking-tight">
            Em junho o curso acontece
          </span>{" "}
          <span className="text-bp-accent">com ou sem você.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-bp-text-secondary md:text-xl">
          A inscrição é direta com a{" "}
          <strong className="text-bp-text-bright">Aline Blank</strong>, no WhatsApp.
          Ela esclarece dúvida, indica o lote certo pro seu caso e te manda o link.
        </p>

        <p className="mt-4 font-mono text-sm uppercase tracking-[0.22em] text-bp-text-muted">
          Sem formulário · Sem espera · Conversa direta
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <JunhoCtaButton origem="final" size="xl">
            Chamar a Aline no WhatsApp
          </JunhoCtaButton>
          <a
            href="tel:+5551993304978"
            className="font-display text-2xl text-bp-text-bright transition-colors hover:text-bp-accent sm:text-3xl md:text-4xl"
          >
            (51) 99330-4978
          </a>
          <p className="max-w-md text-pretty text-sm italic leading-relaxed text-bp-text-muted">
            Manda: &ldquo;Quero saber do curso de IA de junho.&rdquo;
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider text-bp-text-muted">
          <span>⏳ 1º lote válido até 17/05</span>
          <span className="hidden h-1 w-1 rounded-full bg-bp-text-muted/40 sm:inline-block" />
          <span>🪑 Turma reduzida · vagas limitadas</span>
        </div>
      </div>
    </section>
  );
}

// ─── Rodapé ─────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-bp-border bg-bp-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
          Curso IA para Empresários · 3ª edição
        </p>
        <p className="mt-2 text-sm text-bp-text-secondary">
          Realização: <strong className="text-bp-text-bright">Blank Prime</strong> ·
          Local: CICS Canoas
        </p>
        <p className="mt-2 text-xs text-bp-text-muted">
          Recomendado pra donos de negócio, sócios e gestores.
        </p>
      </div>
    </footer>
  );
}

export default function JunhoPage() {
  return (
    <main className="min-h-screen bg-bp-bg">
      <JunhoPixelEvent />
      <CountdownBanner />
      <Atencao />
      <InteresseDor />
      <InteresseVirada />
      <Encontros />
      <Diferencial />
      <ProvaSocial />
      <Incluido />
      <Investimento />
      <Logistica />
      <CtaFinal />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
