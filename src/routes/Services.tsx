import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Layout, Bug, Settings, Search, Zap, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
  { icon: Palette, title: "Theme design", desc: "Bespoke Shopify themes — editorial, performant, and built to last. From concept to launch.", href: "/support" },
  { icon: Layout, title: "Landing pages", desc: "High-converting landing pages for launches, campaigns, and collections.", href: "/support" },
  { icon: Bug, title: "Bug fixes", desc: "Quick, careful fixes for broken layouts, checkout issues, and app conflicts.", href: "/support" },
  { icon: Settings, title: "Theme setup", desc: "Orbis and other themes configured correctly — colours, layout, sections, and content.", href: "/support" },
  { icon: Search, title: "SEO", desc: "Technical SEO, structured data, and crawl fixes that compound over time.", href: "/support" },
  { icon: Zap, title: "Page speed", desc: "Real speed gains — image, code, and app audits with measurable before/after.", href: "/support" },
  { icon: Code2, title: "Custom features", desc: "Variant logic, filtering, and storefront behaviour your theme doesn't have yet.", href: "/support" },
  { icon: Sparkles, title: "App development", desc: "Private Shopify apps and integrations tailored to your stack.", href: "/support" },
];

export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-nibrio-teal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(760px_480px_at_20%_15%,rgba(216,196,154,0.12),transparent_60%),radial-gradient(600px_400px_at_85%_80%,rgba(167,183,170,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-14 lg:px-8 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">Services</div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-[-0.02em] text-white md:text-[48px]">We build and fix what your store needs.</h1>
            <p className="mt-4 max-w-[60ch] text-sm leading-7 text-white/65">
              Nibrio is both a product company and a services studio. We ship Orbis and future themes — and we also do hands-on work for merchants who need it now: design, setup, speed, SEO, and custom engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/support" className="inline-flex items-center gap-2 rounded-full bg-nibrio-gold px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-gold-2">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/products/orbis" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Or explore Orbis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-nibrio-teal md:text-3xl">What we do</h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-6 text-nibrio-charcoal/55">Eight focused offerings. Fixed scope, clear comms, no surprises.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <Link
                to={s.href}
                className="group flex h-full flex-col rounded-[22px] border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,46,50,0.08)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nibrio-ivory text-nibrio-teal ring-1 ring-black/5 group-hover:bg-nibrio-teal group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="mt-4 font-display text-base font-bold tracking-tight text-nibrio-teal">{s.title}</span>
                <span className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{s.desc}</span>
                <span className="mt-4 inline-flex font-mono text-xs font-semibold tracking-wide text-nibrio-teal">Enquire →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 rounded-[24px] bg-nibrio-ivory p-6 md:p-8">
            <h3 className="font-display text-lg font-bold tracking-tight text-nibrio-teal">How it works</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { n: "01", t: "Tell us what you need", d: "Share your store URL, theme, and what you want done. We reply within a business day." },
                { n: "02", t: "Fixed quote", d: "Clear scope and price before we start. No hourly surprises." },
                { n: "03", t: "Ship and hand over", d: "We deliver, test on a duplicate theme, and hand over cleanly." },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-mono text-xs tracking-wide text-nibrio-gold">{s.n}</div>
                  <div className="mt-2 font-display text-sm font-bold tracking-tight text-nibrio-teal">{s.t}</div>
                  <p className="mt-1 text-sm leading-6 text-nibrio-charcoal/60">{s.d}</p>
                </div>
              ))}
            </div>
            <Link to="/support" className="mt-6 inline-flex rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white hover:bg-nibrio-teal-2">
              Contact us
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
