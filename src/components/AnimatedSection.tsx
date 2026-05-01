"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div" | "article";
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "section",
  id,
}: Props) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        ...defaultVariants,
        visible: {
          ...defaultVariants.visible,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
