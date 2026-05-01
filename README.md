# Blank Prime — Landing Page Curso IA para Empresários

LP do curso "IA para Empresários" da Blank Prime. Vai pro domínio raiz `blankprime.com`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion 12
- lucide-react
- @base-ui/react

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:8082
```

## Build de produção

```bash
npm run build
npm run start    # http://localhost:8082
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Geist + metadata SEO
│   ├── page.tsx          # Compõe as 10 seções
│   └── globals.css       # Paleta BP + utilitários (grid-bg, shine, glow-gold)
├── components/
│   ├── BlankPrimeLogo.tsx     # Logo via tipografia + SVG do gráfico+seta
│   ├── AnimatedSection.tsx    # whileInView + variants stagger
│   ├── CtaButton.tsx          # Botão dourado com efeito shine
│   ├── SectionHeading.tsx     # Eyebrow + número + título + subtítulo
│   └── sections/
│       ├── Hero.tsx           # Headline com stagger por palavra
│       ├── Problem.tsx        # /01 — A IA não é o problema
│       ├── Agitation.tsx      # /02 — Tabela "eles vs você"
│       ├── Solution.tsx       # /03 — O que você constrói
│       ├── Differentials.tsx  # /04 — 5 cards
│       ├── Curriculum.tsx     # /05 — 4 encontros numerados
│       ├── Outcome.tsx        # /06 — Lista numerada + cálculo ROI
│       ├── SocialProof.tsx    # /07 — Case Bondmann + stats
│       ├── Audience.tsx       # /08 — Para quem é / não é
│       └── FinalCta.tsx       # /09 — Info + CTAs + footer
└── lib/
    ├── utils.ts          # cn()
    └── constants.ts      # SOFIA_WHATSAPP (PRECISA TROCAR NÚMERO)
```

## TODOs antes de publicar

1. **Trocar número da Sofia** em `src/lib/constants.ts` — `SOFIA_PHONE` está com placeholder `55XXXXXXXXXXX`. Formato: `5551999999999` (sem espaços/hífens, com DDI 55).
2. Adicionar `og-image.png` em `/public` (1200x630) e referenciar no `metadata.openGraph.images` do `layout.tsx`.
3. Adicionar `favicon.ico` + ícones em `/public`.
4. Datas/investimento da turma — quando definir, atualizar badge no Hero ("Inscrições abertas") e Section 9 (FinalCta).

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--color-bp-bg` | `#0A0A0F` | Fundo principal |
| `--color-bp-bg-elevated` | `#0D0D14` | Cards / superfícies |
| `--color-bp-text-bright` | `#B4BCCC` | Headings |
| `--color-bp-text-primary` | `#8C95A8` | Texto principal ("Blank") |
| `--color-bp-text-secondary` | `#5A6478` | Texto secundário ("Prime") |
| `--color-bp-text-muted` | `#3A4458` | Captions, taglines, "/01" |
| `--color-bp-accent` | `#C9A961` | CTAs, números, highlights |

## Convenções do braço SITE

- Pasta: `/config/workspace/SITE/clientes/blank-prime-curso-ia/`
- Porta dev: `8082` (registrada em `_blank-prime/portas.md`)
- Status: 🟡 em desenvolvimento (registrado em `_blank-prime/clientes-mestre.md`)
