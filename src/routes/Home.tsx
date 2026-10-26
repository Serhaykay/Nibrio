import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, lazy, useRef } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Bug,
  Code2,
  Layout,
  LifeBuoy,
  Palette,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  HeartHandshake,
} from "lucide-react";
import Reveal from "../components/Reveal";

const Scene3D = lazy(() => import("../components/Scene3D"));

const services = [
  { icon: Palette, label: "Theme design", href: "/services" },
  { icon: Layout, label: "Landing pages", href: "/services" },
  { icon: Bug, label: "Bug fixes", href: "/services" },
  { icon: Settings, label: "Theme setup", href: "/services" },
  { icon: Search, label: "SEO", href: "/services" },
  { icon: Zap, label: "Page speed", href: "/services" },
  { icon: Code2, label: "Custom features", href: "/services" },
  { icon: Boxes, label: "App dev", href: "/services" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div>
      {/* HERO — midnight field, pointer + scroll parallax, 3D */}
      <section ref={heroRef} className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(820px_520px_at_18%_12%,rgba(216,196,154,0.13),transparent_62%),radial-gradient(640px_420px_at_88%_78%,rgba(167,183,170,0.11),transparent_62%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        </div>

        <motion.div style={{ opacity: heroFade }} className="relative mx-auto grid max-w-[1280px] gap-8 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16 lg:px-8 lg:py-20">
          <motion.div style={{ y: heroParallax }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-medium tracking-wide text-white/75 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-nibrio-gold" />
              Commerce, thoughtfully built
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[34px] font-bold leading-[0.92] tracking-[-0.02em] text-white md:text-[52px] lg:text-[58px]"
            >
              Beautifully built
              <br />
              <span className="font-mono text-nibrio-gold">for the way</span> you sell.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-4 max-w-[48ch] text-[15px] leading-7 text-white/65"
            >
              Premium Shopify themes, hands-on storefront services, and practical commerce tools — from bug fixes and
              speed to bespoke themes and app development.
            </motion.p>

            {/* service chips — visible proof this isn't just a theme shop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-5 flex flex-wrap gap-1.5"
            >
              {services.map((s) => (
                <Link
                  key={s.label}
                  to={s.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur hover:bg-white/10 hover:text-white"
                >
                  <s.icon className="h-3 w-3" />
                  {s.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/products/orbis"
                className="inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-6 py-3 text-sm font-semibold tracking-tight text-nibrio-teal transition hover:bg-nibrio-gold-2"
              >
                Explore Orbis <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                View services
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-3 font-mono text-xs tracking-wide text-white/45"
            >
              Orbis available now · Services open for new projects
            </motion.p>
          </motion.div>

          {/* 3D — desktop, with CSS fallback on reduced-motion / mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden md:block"
          >
            <Suspense
              fallback={
                <div className="h-[420px] rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="h-full rounded-2xl bg-nibrio-ivory/90 p-5">
                    <div className="h-3 w-20 rounded-full bg-black/10" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-xl bg-white p-2 ring-1 ring-black/5">
                          <div className="aspect-[4/3] rounded-lg bg-nibrio-teal/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            >
              <Scene3D />
            </Suspense>
            {/* ambient ring */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] border border-white/10" />
          </motion.div>

          {/* mobile fallback */}
          <div className="rounded-[28px] border border-white/15 bg-white p-3 shadow-[0_24px_64px_rgba(0,0,0,0.3)] md:hidden">
            <div className="rounded-xl bg-nibrio-ivory p-4">
              <div className="h-4 w-20 rounded-full bg-nibrio-teal" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg bg-white p-2 ring-1 ring-black/5">
                    <div className="aspect-[4/3] rounded-md bg-nibrio-teal/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="font-mono text-[11px] tracking-[0.14em] text-white/30">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-8 w-px bg-white/20"
          />
        </motion.div>
      </section>

      {/* INTRO — company, not just Orbis */}
      <section className="paper bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="font-mono text-xs tracking-wide text-nibrio-teal/55">A product company and a studio</div>
              <div className="rule-gold mt-3 max-w-[200px]" />
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-[-0.015em] text-nibrio-teal md:text-4xl">
                Good commerce starts with good foundations.
              </h2>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-nibrio-charcoal/65">
                Nibrio ships premium Shopify themes — <strong className="font-semibold text-nibrio-teal">Orbis</strong> today, more on the way —
                and we work directly with merchants on theme design, storefront fixes, and performance. Products where it makes
                sense; hands-on help where you need it now.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="rounded-[24px] border border-black/5 bg-white p-7">
                <div className="h-1 w-8 rounded-full bg-nibrio-gold" />
                <div className="mt-4 font-display text-lg font-bold tracking-tight text-nibrio-teal">Design with intent</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">Editorial spacing, calm hierarchy, and tasteful defaults — so your products stay the hero.</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[24px] border border-black/5 bg-nibrio-teal p-7 text-white">
                <div className="h-1 w-8 rounded-full bg-nibrio-gold" />
                <div className="mt-4 font-display text-lg font-bold tracking-tight">Build for real stores</div>
                <p className="mt-2 text-sm leading-6 text-white/65">Themes, landing pages, speed, SEO, and custom features that ship in real shops.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[24px] border border-nibrio-stone bg-nibrio-ivory p-7">
                <div className="h-1 w-8 rounded-full bg-nibrio-teal" />
                <div className="mt-4 font-display text-lg font-bold tracking-tight text-nibrio-teal">Care in the details</div>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">Fast, accessible, maintainable — pleasant to run and to keep improving.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP — makes the company scope obvious, not an afterthought */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">Services</h2>
              <p className="mt-2 max-w-[62ch] text-sm leading-6 text-nibrio-charcoal/55">
                Hands-on work alongside our products. Fixed scope, clear comms, tested on a duplicate theme before it goes live.
              </p>
            </Reveal>
            <Link to="/services" className="hidden rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-ivory md:inline-flex">
              All services
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Palette, t: "Theme design", d: "Bespoke themes that feel like your brand." },
              { icon: Layout, t: "Landing pages", d: "Launch and campaign pages that convert." },
              { icon: Wrench, t: "Bug fixes", d: "Fast, careful fixes for real stores." },
              { icon: Settings, t: "Theme setup", d: "Orbis and others set up properly." },
              { icon: Search, t: "SEO", d: "Structured data and crawl health." },
              { icon: Zap, t: "Page speed", d: "Measured gains, not hand-waving." },
              { icon: Code2, t: "Custom features", d: "Logic your theme doesn't have yet." },
              { icon: Boxes, t: "App development", d: "Private apps for your stack." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.03}>
                <Link
                  to="/services"
                  className="group flex items-start gap-3 rounded-[18px] border border-black/5 bg-nibrio-ivory p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_32px_rgba(16,46,50,0.07)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-nibrio-teal ring-1 ring-black/5 group-hover:bg-nibrio-teal group-hover:text-white">
                    <c.icon className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold tracking-tight text-nibrio-teal">{c.t}</span>
                    <span className="block text-xs leading-5 text-nibrio-charcoal/60">{c.d}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex justify-center md:hidden">
            <Link to="/services" className="rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white">View all services</Link>
          </div>
        </div>
      </section>

      {/* ORBIS — white, asymmetric, parallax preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-nibrio-teal px-3 py-1.5 text-xs font-semibold tracking-wide text-white">
                <Sparkles className="h-3.5 w-3.5 text-nibrio-gold" /> Featured product
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.015em] text-nibrio-teal md:text-4xl">Orbis</h2>
              <p className="mt-2 font-mono text-xs tracking-wide text-nibrio-teal/50">Available Shopify theme · Online Store 2.0</p>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-7 text-nibrio-charcoal/65">
                Our current flagship — a refined, flexible theme for modern commerce. Clean storytelling, composed collections, and calm typography. Built for real stores, not just demos.
              </p>
              <ul className="mt-6 grid gap-2.5 text-sm leading-6 text-nibrio-charcoal/65">
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-nibrio-gold" />
                  Sections and blocks for Home, Product, and Collection
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-nibrio-gold" />
                  Global colours, typography, and layout in Theme settings
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-nibrio-gold" />
                  Product media, variants, and filtering via Shopify
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products/orbis" className="rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white hover:bg-nibrio-teal-2">
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
                <p className="mt-3 text-center font-mono text-xs text-black/35">Representative preview. Final screenshots replace placeholders when supplied.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">How we build</h2>
            <p className="mt-2 max-w-[56ch] text-sm leading-6 text-nibrio-charcoal/55">Four principles that shape every product and every project.</p>
            <div className="rule-gold mt-4 max-w-[120px]" />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { icon: Sparkles, title: "Thoughtful design", text: " Calm hierarchy, generous whitespace, and typography that lets products breathe." },
              { icon: Wrench, title: "Useful built-ins", text: "Sensible sections and settings that solve real jobs — without app sprawl." },
              { icon: Zap, title: "Performance-minded", text: "Lean, accessible, and fast by default. No autoplay, no bloat, no layout jank." },
              { icon: HeartHandshake, title: "Merchant-friendly", text: "Clear docs, honest guidance, and help that actually helps." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
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

      {/* THEME PREVIEW — teal band */}
      <section className="overflow-hidden bg-nibrio-teal">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-[-0.015em] text-white md:text-4xl">See Orbis in context</h2>
              <p className="mt-3 max-w-[50ch] text-sm leading-7 text-white/60">
                Desktop, tablet, and mobile — one calm system that adapts without losing its character. Explore the product page for screenshots and setup.
              </p>
              <Link to="/products/orbis" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-ivory">
                Open Orbis preview
              </Link>
              <Link to="/services" className="ml-3 inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Need it customized?
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
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="paper bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">Need a hand getting started?</h2>
            <p className="mt-2 max-w-[64ch] text-sm leading-6 text-nibrio-charcoal/60">
              Setup guides, troubleshooting, or a direct line to the team — pick the right door.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Orbis documentation", desc: "Step-by-step setup and feature references.", to: "/docs/orbis" },
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

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_70%_30%,rgba(216,196,154,0.12),transparent_62%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-16 text-center lg:px-8 lg:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-[-0.015em] text-white md:text-4xl">Your next store starts here.</h2>
            <p className="mx-auto mt-3 max-w-[50ch] text-sm leading-6 text-white/60">Orbis today, more themes ahead — and hands-on help whenever you need it.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/products/orbis" className="inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-7 py-3.5 text-sm font-semibold tracking-tight text-nibrio-teal hover:bg-nibrio-gold-2">
                Explore Orbis <ShieldCheck className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                View services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
