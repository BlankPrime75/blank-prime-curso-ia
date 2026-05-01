import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

export function BlankPrimeLogo({
  className,
  showTagline = true,
  size = "md",
}: Props) {
  const sizes = {
    sm: { word: "text-base", tag: "text-[8px]", gap: "gap-2" },
    md: { word: "text-xl", tag: "text-[9px]", gap: "gap-2.5" },
    lg: { word: "text-3xl md:text-4xl", tag: "text-[10px] md:text-xs", gap: "gap-3" },
  } as const;

  const s = sizes[size];

  return (
    <div className={cn("inline-flex items-center", s.gap, className)}>
      <GrowthMark className={cn(size === "sm" ? "h-5 w-5" : size === "md" ? "h-7 w-7" : "h-10 w-10 md:h-12 md:w-12")} />
      <div className="flex flex-col leading-none">
        <div className={cn("font-semibold tracking-tight", s.word)}>
          <span className="text-bp-text-primary">Blank</span>
          <span className="text-bp-text-secondary">Prime</span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "mt-1 font-mono uppercase tracking-[0.22em] text-bp-text-muted",
              s.tag
            )}
          >
            Serviços Empresariais
          </span>
        )}
      </div>
    </div>
  );
}

function GrowthMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="3" y="20" width="3.5" height="9" rx="0.5" fill="#8C95A8" />
      <rect x="9" y="15" width="3.5" height="14" rx="0.5" fill="#8C95A8" />
      <rect x="15" y="11" width="3.5" height="18" rx="0.5" fill="#8C95A8" />
      <path
        d="M3 22 L11 16 L17 12 L25 6"
        stroke="#C9A961"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5 L26 5 L26 10"
        stroke="#C9A961"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { GrowthMark };
