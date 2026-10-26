import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, LifeBuoy, Wrench, Sparkles, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import Reveal from "../components/Reveal";
import HeroArt from "../components/HeroArt";

export default function Home() {
  return (
    <div>
      {/* HERO — deep field, type-led, washes only in hero */}
      <section className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(820px_520px_at_18%_12%,rgba(216,196,154,0.13),transparent_62%),radial-gradient(640px_420px_at_88%_78%,rgba(167,183,170,0.11),transparent_62%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        </div>

        <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20 lg:px-8 lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-medium tracking-wide text-white/75 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-nibrio-gold" />
              A better foundation for commerce
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-[36px] font-bold leading-[0.92] tracking-[-0.02em] text-white md:text-[54px] lg:text-[58px]"
            >
              Beautifully built
              <br />
              <span className="font-mono text-nibrio-gold">for the way</span> you sell.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-5 max-w-[48ch] text-[15px] leading-7 text-white/65"
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
                className="inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-6 py-3 text-sm font-semibold tracking-tight text-nibrio-teal transition hover:bg-nibrio-gold-2"
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
              transition={{ delay: 0.42 }}
              className="mt-4 font-mono text-xs tracking-wide text-white/45"
            >
              Designed for merchants. Built with care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8 }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </section>

      {/* INTRO — ivory, left-aligned, calm */}
      <section className="paper bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="font-mono text-xs tracking-wide text-nibrio-teal/55">Not an agency</div>
              <div className="rule-gold mt-3 max-w-[200px]" />
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-[-0.015em] text-nibrio-teal md:text-4xl">
                Good commerce starts with good foundations.
              </h2>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-nibrio-charcoal/65">
                Nibrio is a product company. We design and build focused, high-quality software — thoughtful themes,
                practical tools, and integrations — that help merchants create better stores without wrestling their
                stack. Orbis is our first theme. More considered products will follow.
              </p>
            </div>
          </Reveal>

          {/* 3 features — distinct shapes, not identical cards */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="rounded-[24px] border border-black/5 bg-white p-7">
                <div className="h-1 w-8 rounded-full bg-nibrio-gold" />
                <div className="mt-4 font-display text-lg font-bold tracking-tight text-nibrio-teal">Design with intent</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">
                  Editorial spacing, calm hierarchy, and tasteful defaults — so your products stay the hero.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[24px] border border-black/5 bg-nibrio-teal p-7 text-white">
                <div className="h-1 w-8 rounded-full bg-nibrio-gold" />
                <div className="mt-4 font-display text-lg font-bold tracking-tight">Useful by default</div>
                <p className="mt-2 text-sm leading-6 text-white/65">Built-in sections and sensible settings that solve real merchandising problems.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[24px] border border-nibrio-stone bg-nibrio-ivory p-7">
                <div className="h-1 w-8 rounded-full bg-nibrio-teal" />
                <div className="mt-4 font-display text-lg font-bold tracking-tight text-nibrio-teal">Care in the details</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">
                  Fast, accessible, and maintainable — engineered to stay pleasant as your store grows.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ORBIS — white, asymmetric */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-nibrio-teal px-3 py-1.5 text-xs font-semibold tracking-wide text-white">
                <Sparkles className="h-3.5 w-3.5 text-nibrio-gold" /> Featured product
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.015em] text-nibrio-teal md:text-4xl">Orbis</h2>
              <p className="mt-2 font-mono text-xs tracking-wide text-nibrio-teal/50">
                Available Shopify theme · Online Store 2.0
              </p>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-7 text-nibrio-charcoal/65">
                A refined, flexible theme for modern commerce — clean product storytelling, composed collection layouts, and
                calm, confident typography. Built for real stores, not just demos.
              </p>
              <ul className="mt-6 grid gap-2.5 text-sm leading-6 text-nibrio-charcoal/65">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-nibrio-gold" />
                  Sections and blocks for the Home, Product, and Collection templates
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-nibrio-gold" />
                  Global colours, typography, and layout in Theme settings
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-nibrio-gold" />
                  Product media, variant selectors, and collection filtering via Shopify
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/products/orbis"
                  className="rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white hover:bg-nibrio-teal-2"
                >
                  Explore Orbis
                </Link>
                <Link
                  to="/docs/orbis"
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-ivory"
                >
                  Orbis docs
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[28px] border border-black/5 bg-nibrio-ivory p-4 md:p-5">
                <div className="overflow-hidden rounded-2xl border border-black/5 bg-white">
                  <div className="flex items-center gap-1.5 border-b border-black/5 bg-nibrio-ivory px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    <span className="ml-3 hidden font-mono text-xs text-black/35 md:inline">orbis — home</span>
                  </div>
                  <div className="grid gap-4 p-4 md:grid-cols-[1.25fr_0.75fr] md:p-5">
                    <div className="rounded-xl bg-nibrio-teal p-5 text-white">
                      <div className="font-display text-base font-bold leading-tight tracking-tight">New season, considered.</div>
                      <p className="mt-2 text-xs leading-5 text-white/60">A calm editorial hero for your latest collection.</p>
                      <span className="mt-4 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-nibrio-teal">
                        Shop collection
                      </span>
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
                <p className="mt-3 text-center font-mono text-xs text-black/35">
                  Representative preview. Final screenshots replace placeholders when supplied.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — ivory, varied cards */}
      <section className="bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">How we build</h2>
            <p className="mt-2 max-w-[56ch] text-sm leading-6 text-nibrio-charcoal/55">Four principles that shape every Nibrio product.</p>
            <div className="rule-gold mt-4 max-w-[120px]" />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { icon: Sparkles, title: "Thoughtful design", text: " Calm hierarchy, generous whitespace, and typography that lets products breathe." },
              { icon: Wrench, title: "Useful built-ins", text: "Sensible sections and settings that solve real jobs — without app sprawl." },
              { icon: Zap, title: "Performance-minded", text: "Lean, accessible, and fast by default. No autoplay, no bloat, no layout jank." },
              { icon: HeartHandshake, title: "Merchant-friendly", text: "Clear docs, honest guidance, and help that actually helps." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div
                  className={`rounded-[22px] border p-6 transition hover:-translate-y-1 ${
                    i === 1
                      ? "border-nibrio-teal bg-nibrio-teal text-white hover:shadow-[0_16px_40px_rgba(16,46,50,0.18)]"
                      : "border-black/5 bg-white hover:shadow-[0_16px_40px_rgba(16,46,50,0.07)]"
                  }`}
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${i === 1 ? "bg-white text-nibrio-teal" : "bg-nibrio-ivory text-nibrio-teal ring-1 ring-black/5"}`}>
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className={`mt-4 font-display text-base font-bold tracking-tight ${i === 1 ? "text-white" : "text-nibrio-teal"}`}>{c.title}</div>
                  <p className={`mt-2 text-sm leading-6 ${i === 1 ? "text-white/65" : "text-nibrio-charcoal/60"}`}>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM — white, one teal hero + three quiet */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">Product ecosystem</h2>
            <p className="mt-2 max-w-[60ch] text-sm leading-6 text-nibrio-charcoal/55">
              Orbis is available today. Everything else is in progress — clearly labelled, no fake launches.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-[22px] border border-nibrio-teal/15 bg-nibrio-teal p-6 text-white">
              <span className="inline-flex rounded-full bg-nibrio-gold px-2.5 py-1 font-mono text-xs font-bold tracking-wide text-nibrio-teal">Available</span>
              <div className="mt-3 font-display text-lg font-bold tracking-tight">Orbis</div>
              <p className="mt-2 text-sm leading-6 text-white/65">Shopify theme — Online Store 2.0. Our current flagship.</p>
              <Link to="/products/orbis" className="mt-4 inline-flex text-sm font-semibold text-nibrio-gold underline decoration-nibrio-gold/30 underline-offset-4 hover:text-white">
                Explore Orbis
              </Link>
            </div>
            {[
              { label: "Planned", title: "Future themes", text: "Additional themes are on the roadmap. Details when they are real." },
              { label: "Coming later", title: "Extensions & apps", text: "Practical tools and integrations to extend your store — when ready." },
              { label: "In development", title: "Nibrio Labs", text: "Experimental work and early explorations. Not yet products." },
            ].map((c) => (
              <div key={c.title} className="rounded-[22px] border border-black/5 bg-nibrio-ivory p-6">
                <span className="inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 font-mono text-xs font-semibold text-nibrio-charcoal/55">{c.label}</span>
                <div className="mt-3 font-display text-base font-bold tracking-tight text-nibrio-teal">{c.title}</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEME PREVIEW — teal band, asymmetric overlapping frames */}
      <section className="overflow-hidden bg-nibrio-teal">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-[-0.015em] text-white md:text-4xl">See Orbis in context</h2>
              <p className="mt-3 max-w-[50ch] text-sm leading-7 text-white/60">
                Desktop, tablet, and mobile — one calm system that adapts without losing its character. Explore the
                product page for screenshots, features, and setup guidance.
              </p>
              <Link
                to="/products/orbis"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-ivory"
              >
                Open Orbis preview
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative">
                <div className="rounded-[24px] border border-white/15 bg-white p-3 shadow-[0_32px_80px_rgba(0,0,0,0.38)] md:p-4">
                  <div className="rounded-xl bg-nibrio-ivory p-4">
                    <div className="h-5 w-24 rounded-full bg-nibrio-teal" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-xl bg-white p-2 ring-1 ring-black/5">
                          <div className="aspect-[4/3] rounded-lg bg-nibrio-teal/10" />
                          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-black/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-2 hidden w-[42%] rounded-[18px] border border-white/15 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.32)] md:block">
                  <div className="rounded-xl bg-nibrio-ivory p-3">
                    <div className="h-1.5 w-16 rounded-full bg-black/10" />
                    <div className="mt-3 aspect-[3/4] rounded-lg bg-white ring-1 ring-black/5" />
                    <div className="mt-2 h-1.5 w-2/3 rounded-full bg-black/8" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HELP — ivory, paper texture */}
      <section className="paper bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">Need a hand getting started?</h2>
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
              <Link
                key={c.title}
                to={c.to}
                className="group rounded-[22px] border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,46,50,0.08)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nibrio-ivory text-nibrio-teal ring-1 ring-black/5">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 font-display text-base font-bold tracking-tight text-nibrio-teal group-hover:text-nibrio-teal-2">{c.title}</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.desc}</p>
                <span className="mt-4 inline-flex font-mono text-xs font-semibold tracking-wide text-nibrio-teal">Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING — teal, restrained */}
      <section className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_70%_30%,rgba(216,196,154,0.12),transparent_62%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-16 text-center lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[-0.015em] text-white md:text-4xl">Your next store starts here.</h2>
            <p className="mx-auto mt-3 max-w-[50ch] text-sm leading-6 text-white/60">
              Orbis is ready when you are — a calm, capable foundation for the store you actually want to run.
            </p>
            <Link
              to="/products/orbis"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-7 py-3.5 text-sm font-semibold tracking-tight text-nibrio-teal hover:bg-nibrio-gold-2"
            >
              Explore Orbis <ShieldCheck className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
