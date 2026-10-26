import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const ry = useTransform(sx, [-0.5, 0.5], [-7, 7]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    if (!window.matchMedia("(pointer: fine)").matches) return;
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="relative select-none">
      {/* ambient washes */}
      <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[48px] bg-[radial-gradient(520px_360px_at_35%_25%,rgba(216,196,154,0.18),transparent_65%),radial-gradient(560px_380px_at_85%_75%,rgba(167,183,170,0.14),transparent_60%)] blur-[0.5px]" />
      {/* hairline frame */}
      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[36px] border border-white/10" />

      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="relative mx-auto grid max-w-[560px] grid-cols-[1.15fr_0.85fr] gap-4 [perspective:1200px] [transform-style:preserve-3d]"
      >
        {/* Main storefront */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-2 rounded-[28px] border border-white/20 bg-white/[0.09] p-5 backdrop-blur-xl md:p-6"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.22)" }}
        >
          {/* window chrome */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="ml-3 hidden font-mono text-[11px] tracking-wide text-white/40 md:inline">orbis — home</span>
            </div>
            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-white/70">OS 2.0</span>
          </div>

          {/* hero strip inside mock */}
          <div className="mt-5 rounded-2xl bg-nibrio-ivory p-4 md:p-5">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="font-display text-sm font-bold leading-tight tracking-tight text-nibrio-teal">New season, considered.</div>
                <p className="mt-1.5 max-w-[22ch] text-xs leading-5 text-nibrio-charcoal/60">A calm editorial hero — products stay front and centre.</p>
                <span className="mt-3 inline-flex rounded-full bg-nibrio-teal px-3 py-1.5 text-xs font-semibold text-white">Shop collection</span>
              </div>
              <div className="hidden w-20 shrink-0 rounded-xl bg-white p-2 ring-1 ring-black/5 md:block">
                <div className="aspect-square rounded-lg bg-nibrio-teal/10" />
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-black/10" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl bg-white p-2.5 ring-1 ring-black/[0.04]">
                  <div className="aspect-[4/3] rounded-lg bg-nibrio-teal/8 ring-1 ring-black/5" />
                  <div className="mt-2.5 h-1.5 w-3/4 rounded-full bg-nibrio-charcoal/10" />
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-nibrio-gold" />
                    <span className="h-1.5 w-8 rounded-full bg-black/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* utility row */}
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nibrio-teal text-[11px] font-bold text-white">◯</span>
            <span className="h-1.5 w-24 rounded-full bg-black/10 md:w-32" />
            <span className="ml-auto rounded-full bg-nibrio-gold px-3 py-1 font-mono text-xs font-semibold text-nibrio-teal">Orbis</span>
          </div>
        </motion.div>

        {/* Collections stack */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.65 }}
          className="rounded-[22px] border border-white/15 bg-gradient-to-b from-white/[0.14] to-white/[0.04] p-4 backdrop-blur-xl"
        >
          <div className="font-mono text-[11px] font-semibold tracking-[0.14em] text-white/60">Collections</div>
          <div className="mt-3 grid gap-2">
            {["New arrivals", "Essentials", "Archive"].map((t) => (
              <div key={t} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5">
                <span className="text-sm font-medium tracking-tight text-nibrio-teal">{t}</span>
                <span className="h-2 w-2 rounded-full bg-nibrio-gold" />
              </div>
            ))}
          </div>
          <div className="mt-3 h-px bg-white/10" />
          <div className="mt-3 font-mono text-[11px] text-white/40">3 sections · drag to reorder</div>
        </motion.div>

        {/* Product card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
          className="rounded-[22px] border border-white/15 bg-white p-4"
        >
          <div className="aspect-[4/3] rounded-xl bg-nibrio-ivory ring-1 ring-black/5" />
          <div className="mt-3 h-1.5 w-2/3 rounded-full bg-black/10" />
          <div className="mt-1 h-1.5 w-1/3 rounded-full bg-black/5" />
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-nibrio-teal px-3 py-1.5 text-xs font-semibold text-white">Add to cart</span>
            <span className="font-mono text-xs text-black/40">From $89</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
