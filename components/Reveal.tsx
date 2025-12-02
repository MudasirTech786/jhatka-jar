"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  effect?: 
    | "fade"
    | "slide-up"
    | "slide-left"
    | "slide-right"
    | "zoom";
};

export default function Reveal({
  children,
  delay = 0,
  duration = 1.5,
  effect = "fade",
}: RevealProps) {
  const variants: any = {
    fade: { opacity: 0 },
    "slide-up": { opacity: 0, y: 40 },
    "slide-left": { opacity: 0, x: 40 },
    "slide-right": { opacity: 0, x: -40 },
    zoom: { opacity: 0, scale: 0.85 },
  };

  const finalState: any = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  };

  return (
    <motion.div
      initial={variants[effect]}
      whileInView={finalState}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
