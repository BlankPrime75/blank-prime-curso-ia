// Fonte única de verdade dos lotes do curso. CountdownBanner + seção
// Investimento leem daqui pra trocar automático quando uma deadline passa.
//
// Datas em horário BRT (-03:00). Cada deadline = ÚLTIMO segundo daquele dia.
// Quando deadline_1 passa, o lote vigente vira o 2; quando deadline_2 passa,
// vira o 3; depois disso vira null (todos acabaram, banner some e a UI
// pode mostrar uma fallback CTA neutro).

export type LoteIndex = 0 | 1 | 2;

export interface Lote {
  tag: string;
  data: string;            // texto humano pro card
  deadline: number;        // timestamp ms — fim deste lote
  individual: string;
  individualParc?: string;
  dupla: string;
  duplaPP?: string;
}

// ⚠️ Pra ajustar lote no futuro, mexer SÓ aqui. Tudo na LP segue.
export const LOTES: readonly Lote[] = [
  {
    tag: "🟢 1º LOTE",
    data: "até 17/05",
    deadline: new Date("2026-05-17T23:59:59-03:00").getTime(),
    individual: "R$ 697",
    individualParc: "12x",
    dupla: "R$ 1.184",
    duplaPP: "R$ 592/pessoa",
  },
  {
    tag: "🟡 2º LOTE",
    data: "18/05 a 02/06",
    deadline: new Date("2026-06-02T23:59:59-03:00").getTime(),
    individual: "R$ 897",
    dupla: "R$ 1.524",
  },
  {
    tag: "🔴 3º LOTE",
    data: "03/06 a 08/06",
    deadline: new Date("2026-06-08T23:59:59-03:00").getTime(),
    individual: "R$ 1.097",
    dupla: "R$ 1.864",
  },
];

// Retorna o índice do lote vigente agora, ou null se todos já acabaram.
// Recebe Date.now() injetado pra facilitar teste / mock.
export function getCurrentLoteIndex(now: number = Date.now()): LoteIndex | null {
  for (let i = 0; i < LOTES.length; i++) {
    if (now <= LOTES[i].deadline) return i as LoteIndex;
  }
  return null;
}

// Texto curto pro banner: "1º lote termina em" / "2º lote termina em"...
export function loteLabel(index: LoteIndex): string {
  return `${index + 1}º lote termina em`;
}
