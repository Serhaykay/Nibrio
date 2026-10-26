import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxReveal({
  children,
  y = 28,
  className,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [y, -y * 0.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.75], [0, 1, 1]);

  return (
    <motion.div ref={ref} style={{ y: translateY, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export default Reveal;
