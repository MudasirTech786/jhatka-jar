"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  effect?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom";
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  effect = "fade",
}: RevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    }
  }, []);

  // ❌ On mobile: RETURN NORMAL CONTENT (no animation)
  if (isMobile) {
    return <>{children}</>;
  }

  // ✅ Animation variants for desktop/tablet
  const variants: any = {
    fade: { opacity: 0 },
    "slide-up": { opacity: 0, y: 40 },
    "slide-left": { opacity: 0, x: 40 },
    "slide-right": { opacity: 0, x: -40 },
    zoom: { opacity: 0, scale: 0.85 },
  };

  return (
    <motion.div
      initial={variants[effect]}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
