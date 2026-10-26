import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const ry = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const m = window.matchMedia("(pointer: fine)");
    if (!m.matches) return;
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="relative select-none">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(600px_400px_at_50%_30%,rgba(216,196,154,0.18),transparent_70%),radial-gradient(700px_500px_at_80%_80%,rgba(167,183,170,0.16),transparent_60%)] blur-[1px]" />
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="relative mx-auto grid max-w-[560px] grid-cols-[1.15fr_0.85fr] gap-4 [perspective:1200px] [transform-style:preserve-3d]"
      >
        {/* main panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-2 rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl md:p-6"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)" }}
        >
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-white/60" />
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-white p-3">
                <div className="aspect-[4/3] rounded-xl bg-nibrio-ivory" />
                <div className="mt-3 h-2 w-3/4 rounded-full bg-black/10" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-black/5" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-nibrio-teal" />
            <div className="h-2 flex-1 rounded-full bg-black/10" />
            <span className="rounded-full bg-nibrio-gold px-3 py-1 text-xs font-semibold text-nibrio-teal">Orbis</span>
          </div>
        </motion.div>

        {/* left stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="rounded-[22px] border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-4 backdrop-blur-xl"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">Collections</div>
          <div className="mt-3 grid gap-2">
            {["New arrivals", "Essentials", "Archive"].map((t) => (
              <div key={t} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-nibrio-teal">
                <span>{t}</span>
                <span className="h-2 w-2 rounded-full bg-nibrio-gold" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* right card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7 }}
          className="rounded-[22px] border border-white/15 bg-white p-4"
        >
          <div className="aspect-[4/3] rounded-xl bg-nibrio-teal/10 ring-1 ring-black/5" />
          <div className="mt-3 h-2 w-2/3 rounded-full bg-black/10" />
          <div className="mt-2 flex items-center gap-2">
            <span className="h-6 rounded-full bg-nibrio-teal px-3 py-1 text-xs font-semibold text-white">Add to cart</span>
            <span className="text-xs text-black/40">From $89</span>
          </div>
        </motion.div>
      </motion.div>

      {/* floating N mark */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="pointer-events-none absolute -right-2 -top-6 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur md:flex"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.25)" }}
      >
        <span className="font-display text-xl font-bold tracking-tight text-white">N</span>
      </motion.div>
    </div>
  );
}
