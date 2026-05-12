/**
 * Efeito de fundo pras seções claras — DIFERENTE da rede neural das escuras.
 * Blobs verdes grandes e desfocados que driftam devagar + pontilhado sutil.
 * 100% CSS, sem canvas/JS. Respeita prefers-reduced-motion.
 */
export function LightFx() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* pontilhado verde muito sutil */}
      <div className="absolute inset-0 circuit-dots opacity-25" />

      {/* blobs que driftam */}
      <div className="lightfx-a absolute -left-32 top-[12%] h-[420px] w-[420px] rounded-full bg-bp-accent/[0.1] blur-3xl" />
      <div className="lightfx-b absolute right-[-12%] bottom-[-18%] h-[480px] w-[480px] rounded-full bg-bp-accent/[0.07] blur-3xl" />
      <div className="lightfx-c absolute left-[40%] top-[-20%] h-[340px] w-[340px] rounded-full bg-bp-accent/[0.08] blur-3xl" />

      {/* linha de "fluxo de dados" que atravessa devagar */}
      <div className="lightfx-line absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-bp-accent/30 to-transparent" />
    </div>
  );
}
