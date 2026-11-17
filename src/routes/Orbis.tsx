import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";

const tabs = [
  { id: "home", label: "Home" },
  { id: "product", label: "Product" },
  { id: "collection", label: "Collection" },
] as const;

export default function Orbis() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("home");

  return (
    <div className="bg-white">
      <div className="bg-nibrio-teal">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/15">Available · Shopify Theme · OS 2.0</div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-[44px]">Orbis</h1>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">A calm foundation for the store you want to run.</p>
              <p className="mt-4 max-w-[52ch] text-sm leading-7 text-white/70">
                Orbis is a premium Shopify Online Store 2.0 theme for eight niches — arts and crafts, baby and kids,
                health and beauty, home and decor, jewelry, outdoor and garden, pet supplies, and restaurants. Every page
                is made of sections and blocks you add, reorder and style in the theme editor, with no code.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="rounded-full bg-nibrio-gold px-6 py-3 text-sm font-semibold text-nibrio-teal hover:bg-nibrio-gold-2"
                  title="Connect your Theme Store listing to enable purchase"
                >
                  Get Orbis — coming soon
                </a>
                <Link to="/docs/orbis" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Read the docs
                </Link>
              </div>
              <p className="mt-3 font-mono text-xs text-white/40">Pricing and purchase link appear here when the Theme Store listing is live.</p>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white p-3 md:p-4">
              <div className="flex gap-1.5 border-b border-black/5 bg-nibrio-ivory px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-black/15" />
                <span className="h-2 w-2 rounded-full bg-black/15" />
                <span className="h-2 w-2 rounded-full bg-black/15" />
              </div>
              <div className="rounded-xl bg-nibrio-ivory p-4">
                <div className="h-5 w-28 rounded-full bg-nibrio-teal" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg bg-white p-2">
                      <div className="aspect-[4/3] rounded-md bg-nibrio-teal/10" />
                      <div className="mt-2 h-2 w-3/4 rounded-full bg-black/10" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-center font-mono text-xs text-black/40">Representative preview</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-black/5 pb-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 ${tab === t.id ? "bg-nibrio-teal text-white ring-nibrio-teal" : "bg-white text-nibrio-teal ring-black/10 hover:bg-nibrio-ivory"}`}
            >
              {t.label}
            </button>
          ))}
          <Link to="/docs/orbis" className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-nibrio-teal hover:underline">
            Orbis docs <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[20px] border border-black/5 bg-nibrio-ivory p-6">
              <div className="font-display text-lg font-bold tracking-tight text-nibrio-teal">
                {tab === "home" ? "Home — editorial, not loud" : tab === "product" ? "Product — clear, composed" : "Collection — calm merchandising"}
              </div>
              <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">
                {tab === "home"
                  ? "A composed homepage with generous rhythm — hero, featured collections, and product grids that breathe."
                  : tab === "product"
                    ? "Media gallery, information, and variant controls arranged for clarity on desktop and thumb-reach on mobile."
                    : "Grids with considered card density, filters where Shopify supports them, and room for storytelling sections."}
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-black/5 bg-white p-4">
                <div className="h-24 rounded-lg bg-nibrio-teal/10" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 rounded-lg bg-nibrio-ivory ring-1 ring-black/5" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {[
              "40+ sections & blocks for home, product, collection, cart, blog and pages",
              "One color system: every section picks a scheme; text and buttons follow it",
              "Header with mega menu, slide-out cart, promo popup and full footer system",
              "Galleries, swatches, pre-order, bundles, filters and focal-point cropping",
              "RTL-ready layout, translation-ready text, and built-in speed options",
            ].map((t) => (
              <Reveal key={t}>
                <div className="flex gap-3 rounded-2xl border border-black/5 bg-white p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-nibrio-teal text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-6 text-nibrio-charcoal/70">{t}</span>
                </div>
              </Reveal>
            ))}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              We only describe what Orbis actually does. No invented presets, fake performance numbers, or testimonials.
              Final screenshots and any compatibility notes will be updated when verified assets are supplied.
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-black/5 pt-10 md:grid-cols-3">
          <div className="rounded-[20px] border border-black/5 bg-white p-6">
            <div className="font-display text-base font-bold tracking-tight text-nibrio-teal">Compatibility</div>
            <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">Shopify Online Store 2.0. Works on any paid Shopify plan; checkout branding stays in Shopify's checkout settings.</p>
            <Link to="/docs/orbis" className="mt-3 inline-flex text-sm font-semibold text-nibrio-teal">Requirements →</Link>
          </div>
          <div className="rounded-[20px] border border-black/5 bg-white p-6">
            <div className="font-display text-base font-bold tracking-tight text-nibrio-teal">Documentation</div>
            <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">Setup guides, customisation, and troubleshooting.</p>
            <Link to="/docs/orbis" className="mt-3 inline-flex text-sm font-semibold text-nibrio-teal">Open docs →</Link>
          </div>
          <div className="rounded-[20px] border border-black/5 bg-white p-6">
            <div className="font-display text-base font-bold tracking-tight text-nibrio-teal">Support</div>
            <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">Need help with Orbis? We are here.</p>
            <Link to="/support" className="mt-3 inline-flex text-sm font-semibold text-nibrio-teal">Contact support →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
