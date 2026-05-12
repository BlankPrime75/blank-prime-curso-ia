import Image from "next/image";
import { cn } from "@/lib/utils";
import logoSrc from "../../public/blank-prime-logo.png";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizes = {
  sm: { w: 110, h: 44 },
  md: { w: 148, h: 59 },
  lg: { w: 200, h: 80 },
} as const;

export function BlankPrimeLogo({ className, size = "md", priority = false }: Props) {
  const { w, h } = sizes[size];
  return (
    <Image
      src={logoSrc}
      alt="Blank Prime, Serviços Empresariais"
      width={w}
      height={h}
      priority={priority}
      className={cn("h-auto w-auto select-none", className)}
      style={{ width: w, height: h }}
    />
  );
}
