"use client";

import { useEffect, useState } from "react";
import { LOTES, getCurrentLoteIndex } from "@/lib/lotes";

// Card único de lote. Recebe `vigente` calculado pelo wrapper.
function Card({
  lote,
  vigente,
}: {
  lote: (typeof LOTES)[number];
  vigente: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur transition-all hover:-translate-y-1 ${
        vigente
          ? "border-bp-accent bg-bp-bg-card shadow-[0_20px_60px_-20px_rgba(31,231,79,0.6)] md:scale-105"
          : "border-bp-border bg-bp-bg-card/60"
      }`}
    >
      {vigente && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bp-accent px-4 py-1 font-mono text-[11px] uppercase tracking-wider text-black">
          Lote vigente
        </span>
      )}
      <div className="font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted">
        {lote.tag} · {lote.data}
      </div>
      <div className="mt-6 space-y-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-bp-text-muted">
            Individual
          </div>
          <div className="mt-1 font-display text-3xl text-bp-text-bright sm:text-4xl">
            {lote.individual}
          </div>
          {lote.individualParc && (
            <div className="text-xs text-bp-text-muted">
              em {lote.individualParc} sem juros
            </div>
          )}
        </div>
        <div className="h-px bg-bp-border" />
        <div>
          <div className="text-xs uppercase tracking-wider text-bp-text-muted">
            Combo Dupla
          </div>
          <div className="mt-1 font-display text-2xl text-bp-text-bright sm:text-3xl">
            {lote.dupla}
          </div>
          {lote.duplaPP && (
            <div className="text-xs text-bp-text-muted">{lote.duplaPP}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function LoteCards() {
  // No SSR não sabemos a hora atual do usuário; renderizamos com índice 0
  // (1º lote como vigente, sem flash visual estranho). Depois que monta,
  // o useEffect recalcula com Date.now() e re-renderiza se mudou.
  const [loteIndex, setLoteIndex] = useState<number | null>(0);

  useEffect(() => {
    setLoteIndex(getCurrentLoteIndex());
    // não precisa intervalo: a página vive minutos, no máximo. Quando
    // recarregar amanhã, recalcula. Se quiser ser mais agressivo, dá
    // pra colocar um setInterval(..., 60_000).
  }, []);

  return (
    <div className="mt-16 grid gap-4 md:grid-cols-3">
      {LOTES.map((lote, i) => (
        <Card key={i} lote={lote} vigente={loteIndex === i} />
      ))}
    </div>
  );
}
