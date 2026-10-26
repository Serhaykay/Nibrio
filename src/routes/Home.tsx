import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, LifeBuoy, Wrench, Sparkles, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import Reveal from "../components/Reveal";
import HeroArt from "../components/HeroArt";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(216,196,154,0.14),transparent_60%),radial-gradient(800px_500px_at_90%_80%,rgba(167,183,170,0.12),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-20 lg:px-8 lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-nibrio-gold" />
              A better foundation for commerce.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[34px] font-bold leading-[0.95] tracking-tight text-white md:text-[52px] lg:text-[56px]"
            >
              Beautifully built
              <br />
              <span className="text-nibrio-gold">for the way</span> you sell.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-5 max-w-[48ch] text-[15px] leading-7 text-white/70 md:text-base"
            >
              Thoughtful Shopify themes and practical tools that help you create better shopping experiences — with less
              friction and more room to grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/products/orbis"
                className="inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-6 py-3 text-sm font-semibold text-nibrio-teal transition hover:bg-nibrio-gold-2"
              >
                Explore Orbis <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Explore our products
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 font-mono text-xs tracking-wide text-white/50"
            >
              Designed for merchants. Built with care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </section>

      {/* B — Introduction */}
      <section className="bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-nibrio-teal/60">
                Not an agency
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-nibrio-teal md:text-4xl">
                Good commerce starts with good foundations.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-nibrio-charcoal/70">
                Nibrio is a product company. We design and build focused, high-quality software — thoughtful themes,
                practical tools, and integrations — that help merchants create better stores without wrestling their
                stack. Orbis is our first theme. More considered products will follow.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { k: "01", t: "Design with intent", d: "Editorial spacing, calm hierarchy, and tasteful defaults — so your products stay the hero." },
              { k: "02", t: "Useful by default", d: "Built-in sections and sensible settings that solve real merchandising problems." },
              { k: "03", t: "Care in the details", d: "Fast, accessible, and maintainable — engineered to stay pleasant as your store grows." },
            ].map((c) => (
              <Reveal key={c.k}>
                <div className="rounded-[20px] border border-black/5 bg-white p-6">
                  <div className="font-mono text-xs tracking-wide text-nibrio-gold">{c.k}</div>
                  <div className="mt-2 font-display text-lg font-bold tracking-tight text-nibrio-teal">{c.t}</div>
                  <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* C — Orbis feature */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-nibrio-teal px-3 py-1 text-xs font-semibold tracking-wide text-white">
                <Sparkles className="h-3.5 w-3.5 text-nibrio-gold" /> Featured product
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-nibrio-teal md:text-4xl">Orbis</h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-nibrio-teal/60">
                Available Shopify theme · Online Store 2.0
              </p>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-7 text-nibrio-charcoal/70">
                A refined, flexible theme for modern commerce — clean product storytelling, composed collection layouts, and
                calm, confident typography. Built for real stores, not just demos. No invented presets or inflated claims —
                just a polished foundation you can shape to your brand.
              </p>
              <ul className="mt-6 grid gap-2 text-sm leading-6 text-nibrio-charcoal/70">
                <li className="flex gap-2"><span className="text-nibrio-gold">—</span> Sections & blocks for the Home, Product, and Collection templates</li>
                <li className="flex gap-2"><span className="text-nibrio-gold">—</span> Global colours, typography, and layout in Theme settings</li>
                <li className="flex gap-2"><span className="text-nibrio-gold">—</span> Product media, variant selectors, and collection filtering via Shopify</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products/orbis" className="rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white hover:bg-nibrio-teal-2">
                  Explore Orbis
                </Link>
                <Link to="/docs/orbis" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-ivory">
                  Orbis docs
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-[28px] border border-black/5 bg-nibrio-ivory p-4 md:p-6">
                <div className="overflow-hidden rounded-2xl border border-black/5 bg-white">
                  <div className="flex items-center gap-1.5 border-b border-black/5 bg-nibrio-ivory px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    <span className="ml-3 hidden text-xs text-black/40 md:inline">orbis-demo — Home</span>
                  </div>
                  <div className="grid gap-4 p-4 md:grid-cols-[1.2fr_0.8fr] md:p-6">
                    <div className="rounded-xl bg-nibrio-teal p-5 text-white">
                      <div className="font-display text-lg font-bold leading-tight">New season, considered.</div>
                      <p className="mt-2 text-xs leading-5 text-white/70">A calm editorial hero for your latest collection.</p>
                      <span className="mt-4 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-nibrio-teal">Shop collection</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="rounded-xl border border-black/5 bg-nibrio-ivory p-2">
                          <div className="aspect-square rounded-lg bg-white ring-1 ring-black/5" />
                          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-black/10" />
                          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-black/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center font-mono text-xs text-black/40">
                  Real Orbis layout — representative preview. Final screenshots replace placeholders when supplied.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* D — Philosophy */}
      <section className="bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-nibrio-teal md:text-3xl">How we build</h2>
            <p className="mt-2 max-w-[60ch] text-sm leading-6 text-nibrio-charcoal/60">Four principles that shape every Nibrio product.</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { icon: Sparkles, title: "Thoughtful design", text: " Calm hierarchy, generous whitespace, and typography that lets products breathe." },
              { icon: Wrench, title: "Useful built-ins", text: "Sensible sections and settings that solve real jobs — without app sprawl." },
              { icon: Zap, title: "Performance-minded", text: "Lean, accessible, and fast by default. No autoplay, no bloat, no layout jank." },
              { icon: HeartHandshake, title: "Merchant-friendly support", text: "Clear docs, honest guidance, and help that actually helps." },
            ].map((c) => (
              <Reveal key={c.title}>
                <div className="group rounded-[20px] border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,46,50,0.08)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nibrio-teal text-white">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-base font-bold tracking-tight text-nibrio-teal">{c.title}</div>
                  <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E — Ecosystem */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-nibrio-teal md:text-3xl">Product ecosystem</h2>
            <p className="mt-2 max-w-[60ch] text-sm leading-6 text-nibrio-charcoal/60">
              Orbis is available today. Everything else is in progress — clearly labelled, no fake launches.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-[20px] border border-nibrio-teal/15 bg-nibrio-teal p-6 text-white">
              <div className="inline-flex rounded-full bg-nibrio-gold px-2.5 py-1 text-xs font-bold tracking-wide text-nibrio-teal">Available</div>
              <div className="mt-3 font-display text-lg font-bold">Orbis</div>
              <p className="mt-2 text-sm leading-6 text-white/70">Shopify theme — Online Store 2.0. Our current flagship.</p>
              <Link to="/products/orbis" className="mt-4 inline-flex text-sm font-semibold text-nibrio-gold hover:text-white">Explore Orbis →</Link>
            </div>
            {[
              { label: "Planned", title: "Future themes", text: "Additional themes are on the roadmap. Details when they are real." },
              { label: "Coming later", title: "Extensions & apps", text: "Practical tools and integrations to extend your store — when ready." },
              { label: "In development", title: "Nibrio Labs", text: "Experimental work and early explorations. Not yet products." },
            ].map((c) => (
              <div key={c.title} className="rounded-[20px] border border-black/5 bg-nibrio-ivory p-6">
                <span className="inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs font-semibold text-nibrio-charcoal/60">{c.label}</span>
                <div className="mt-3 font-display text-base font-bold tracking-tight text-nibrio-teal">{c.title}</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F — Theme preview */}
      <section className="overflow-hidden bg-nibrio-teal">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">See Orbis in context</h2>
              <p className="mt-3 max-w-[50ch] text-sm leading-7 text-white/70">
                Desktop, tablet, and mobile — one calm system that adapts without losing its character. Explore the product
                page for screenshots, features, and setup guidance.
              </p>
              <Link to="/products/orbis" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-ivory">
                Open Orbis preview
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="rounded-[24px] border border-white/15 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-4">
                  <div className="rounded-xl bg-nibrio-ivory p-4">
                    <div className="h-6 w-24 rounded-full bg-nibrio-teal" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-xl bg-white p-2">
                          <div className="aspect-[4/3] rounded-lg bg-nibrio-teal/10" />
                          <div className="mt-2 h-2 w-3/4 rounded-full bg-black/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-2 hidden w-[42%] rounded-[18px] border border-white/15 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:block">
                  <div className="rounded-xl bg-nibrio-ivory p-3">
                    <div className="h-2 w-16 rounded-full bg-black/10" />
                    <div className="mt-3 aspect-[3/4] rounded-lg bg-white ring-1 ring-black/5" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* G — Docs & support */}
      <section className="bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-nibrio-teal md:text-3xl">Need a hand getting started?</h2>
            <p className="mt-2 max-w-[64ch] text-sm leading-6 text-nibrio-charcoal/60">
              Find Orbis setup instructions, explore theme features, troubleshoot common issues, or contact our support team.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Orbis documentation", desc: "Step-by-step setup guides and feature references.", to: "/docs/orbis" },
              { icon: Wrench, title: "Troubleshooting", desc: "Solutions to common problems and gotchas.", to: "/docs" },
              { icon: LifeBuoy, title: "Contact support", desc: "Get help from the Nibrio team.", to: "/support" },
            ].map((c) => (
              <Link key={c.title} to={c.to} className="group rounded-[20px] border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,46,50,0.08)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nibrio-ivory text-nibrio-teal ring-1 ring-black/5">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-base font-bold tracking-tight text-nibrio-teal group-hover:text-nibrio-teal-2">{c.title}</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.desc}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-nibrio-teal">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H — Closing CTA */}
      <section className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_70%_30%,rgba(216,196,154,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-16 text-center lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">Your next store starts here.</h2>
            <p className="mx-auto mt-3 max-w-[50ch] text-sm leading-6 text-white/70">
              Orbis is ready when you are — a calm, capable foundation for the store you actually want to run.
            </p>
            <Link to="/products/orbis" className="mt-8 inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-7 py-3.5 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-gold-2">
              Explore Orbis <ShieldCheck className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
