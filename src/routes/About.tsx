import Reveal from "../components/Reveal";

export default function About() {
  return (
    <div className="bg-white">
      <div className="bg-nibrio-teal">
        <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/60">About Nibrio</div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">Commerce, thoughtfully built.</h1>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Nibrio is a technology product company focused on commerce. We design and build practical, high-quality software
              that helps merchants create better shopping experiences — beautifully, reliably, and without unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-bold tracking-tight text-nibrio-teal">Why we exist</h2>
            <p className="mt-3 text-sm leading-7 text-nibrio-charcoal/60">
              Most stores do not need more features — they need better foundations. We build opinionated products with calm
              defaults and flexible controls, so merchants can ship a store they are proud of and keep improving it over time.
            </p>
            <h3 className="mt-8 font-display text-base font-bold tracking-tight text-nibrio-teal">What we build</h3>
            <p className="mt-2 text-sm leading-7 text-nibrio-charcoal/60">
              Today: <strong className="text-nibrio-teal">Orbis</strong>, our Shopify theme. Next: additional themes, practical extensions, and
              independent tools — released when they are ready, not before. We do not ship half-baked products to fill a roadmap
              slide.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[20px] border border-black/5 bg-nibrio-ivory p-6">
              <div className="font-display text-base font-bold tracking-tight text-nibrio-teal">Principles</div>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-nibrio-charcoal/60">
                <li><strong className="text-nibrio-teal">Thoughtful design</strong> — hierarchy and restraint, not decoration.</li>
                <li><strong className="text-nibrio-teal">Useful defaults</strong> — solve real merchandising jobs out of the box.</li>
                <li><strong className="text-nibrio-teal">Performance & care</strong> — lean, accessible, and maintainable.</li>
                <li><strong className="text-nibrio-teal">Honest support</strong> — clear docs and help that respects your time.</li>
              </ul>
            </div>
            <div className="mt-4 rounded-[20px] bg-nibrio-teal p-6 text-white">
              <div className="font-display text-base font-bold">Long-term vision</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A small, focused product family that earns its place in your stack — each piece well-made, well-documented, and
                worth keeping.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
