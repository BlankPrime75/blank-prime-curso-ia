import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  number?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  number,
  title,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {(eyebrow || number) && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-bp-text-muted",
            align === "center" && "justify-center"
          )}
        >
          {number && <span className="text-bp-accent">{number}</span>}
          {number && eyebrow && (
            <span className="h-px w-8 bg-bp-text-muted/40" />
          )}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-bp-text-bright sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-pretty text-base text-bp-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
