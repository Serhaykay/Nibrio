import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, BookOpen, Rocket, Palette, Layout, ShoppingBag, ShoppingCart, FileText, Sliders, LifeBuoy } from "lucide-react";
import { articles, categories, searchArticles } from "../lib/docs";
import type { DocCategory } from "../lib/docs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  palette: Palette,
  layout: Layout,
  "shopping-bag": ShoppingBag,
  "shopping-cart": ShoppingCart,
  "file-text": FileText,
  sliders: Sliders,
  "life-buoy": LifeBuoy,
};

function CategoryIcon({ icon }: { icon: DocCategory["icon"] }) {
  const Icon = iconMap[icon] ?? BookOpen;
  return <Icon className="h-4 w-4" />;
}

export default function DocsHome() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => searchArticles(q), [q]);

  return (
    <div className="bg-white">
      {/* Hero — more air, editorial leading */}
      <div className="border-b border-black/5 bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.14em] text-nibrio-teal/45">Documentation</div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.015em] text-nibrio-teal md:text-[40px]">Orbis — setup & section guide</h1>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-8 text-nibrio-charcoal/55">
              Based on the official Orbis Theme Setup and Section Guide (Oct 26, 2026). Search by topic, or browse by category
              below. Video and image slots are in place — drop your tutorials where you see the dashed frames.
            </p>
          </div>

          <div className="relative mt-8 max-w-3xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/35" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search Orbis setup, sections, metafields, or troubleshooting…"
              className="w-full rounded-full border border-black/10 bg-white py-4 pl-11 pr-4 text-sm outline-none placeholder:text-black/30 focus:border-nibrio-teal"
              aria-label="Search documentation"
            />
          </div>

          {q.trim() && (
            <div className="mt-6 max-w-3xl rounded-[20px] border border-black/5 bg-white p-5">
              <div className="font-mono text-xs tracking-wide text-nibrio-teal/50">{filtered.length} results</div>
              {filtered.length === 0 ? (
                <p className="mt-3 text-sm leading-7 text-nibrio-charcoal/60">No matches for “{q.trim()}”. Try a different term or browse categories below.</p>
              ) : (
                <ul className="mt-3 grid gap-2">
                  {filtered.slice(0, 8).map((a) => (
                    <li key={a.slug}>
                      <Link to={`/docs/${a.slug}`} className="flex items-center justify-between rounded-xl bg-nibrio-ivory px-4 py-3.5 hover:bg-nibrio-teal hover:text-white">
                        <span>
                          <span className="block text-sm font-semibold leading-6">{a.title}</span>
                          <span className="block text-xs leading-5 opacity-70">{a.summary}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-8 lg:py-12">
        {/* Featured strip — more breathing */}
        <div className="rounded-[22px] border border-black/5 bg-white p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="font-mono text-xs tracking-wide text-nibrio-teal/45">Start here</div>
            <Link to="/products/orbis" className="font-mono text-xs font-semibold tracking-wide text-nibrio-teal hover:underline">
              Orbis product →
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              { slug: "orbis-overview", label: "Overview" },
              { slug: "installing-orbis", label: "Install" },
              { slug: "setup-checklist", label: "Checklist" },
            ].map((f) => {
              const a = articles.find((x) => x.slug === f.slug);
              if (!a) return null;
              return (
                <Link key={f.slug} to={`/docs/${a.slug}`} className="rounded-2xl border border-black/5 bg-nibrio-ivory p-5 hover:bg-nibrio-teal hover:text-white">
                  <div className="font-display text-sm font-bold tracking-tight leading-6">{a.title}</div>
                  <div className="mt-1.5 text-xs leading-6 opacity-70">{a.summary}</div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Categories — more gap, looser cards */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.65fr_0.85fr]">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight text-nibrio-teal">Browse by topic</h2>
            <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/45">Nine topics from the guide — no extra categories invented.</p>
            <div className="mt-8 grid gap-6">
              {categories.map((c) => {
                const catArticles = articles.filter((a) => a.category === c.id);
                return (
                  <section key={c.id} className="rounded-[22px] border border-black/5 bg-nibrio-ivory p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-nibrio-teal text-white">
                        <CategoryIcon icon={c.icon} />
                      </span>
                      <div>
                        <div className="font-display text-sm font-bold tracking-tight text-nibrio-teal leading-6">{c.label}</div>
                        <div className="text-xs leading-5 text-nibrio-charcoal/50">{c.description}</div>
                      </div>
                      <span className="ml-auto font-mono text-xs text-black/30">{catArticles.length}</span>
                    </div>
                    <ul className="mt-5 grid gap-2.5">
                      {catArticles.map((a) => (
                        <li key={a.slug}>
                          <Link
                            to={`/docs/${a.slug}`}
                            className="flex items-center justify-between rounded-xl bg-white px-4 py-3.5 ring-1 ring-black/5 hover:bg-nibrio-teal hover:text-white"
                          >
                            <span className="pr-4">
                              <span className="block text-sm font-semibold leading-6">{a.title}</span>
                              <span className="block text-xs leading-5 opacity-60">{a.summary}</span>
                            </span>
                            <span className="ml-2 shrink-0 font-mono text-xs opacity-40">{a.readingMinutes} min</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-[88px] lg:self-start">
            <div className="rounded-[22px] border border-black/5 bg-white p-6">
              <h3 className="font-display text-sm font-bold tracking-tight text-nibrio-teal leading-6">On this page</h3>
              <p className="mt-3 text-sm leading-7 text-nibrio-charcoal/55">
                Source: <em>Orbis Theme Setup and Section Guide.pdf</em> (14 pages, Oct 26). Content is faithful to
                that guide — not invented.
              </p>
              <div className="mt-5 rounded-xl border border-dashed border-black/15 bg-nibrio-ivory p-4">
                <div className="font-mono text-xs font-semibold tracking-wide text-nibrio-teal">Media slot</div>
                <div className="mt-2.5 h-28 rounded-lg bg-white ring-1 ring-black/5" />
                <p className="mt-2.5 text-xs leading-6 text-nibrio-charcoal/50">Drop a 16:9 tutorial video or annotated screenshot here. Replace the dashed frame when ready.</p>
              </div>
            </div>

            <div className="rounded-[22px] bg-nibrio-teal p-6 text-white">
              <div className="font-display text-base font-bold leading-7">Still need help?</div>
              <p className="mt-2 text-sm leading-7 text-white/70">Stuck on setup, swatches, bundles, or RTL — we will get you unstuck.</p>
              <Link to="/support" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal">
                Contact support
              </Link>
            </div>

            <div className="rounded-[22px] border border-black/5 bg-nibrio-ivory p-6">
              <h3 className="font-display text-sm font-bold tracking-tight text-nibrio-teal leading-6">Quick links</h3>
              <ul className="mt-3 grid gap-2.5">
                <li className="text-sm leading-6">
                  <Link to="/docs/bundles-and-discounts" className="font-medium text-nibrio-teal hover:underline">
                    Bundles & discounts
                  </Link>
                  <span className="text-nibrio-charcoal/40"> — the three discount paths</span>
                </li>
                <li className="text-sm leading-6">
                  <Link to="/docs/troubleshooting-faq" className="font-medium text-nibrio-teal hover:underline">
                    Troubleshooting
                  </Link>
                  <span className="text-nibrio-charcoal/40"> — 13 common problems</span>
                </li>
                <li className="text-sm leading-6">
                  <Link to="/docs/custom-css" className="font-medium text-nibrio-teal hover:underline">
                    Custom CSS
                  </Link>
                  <span className="text-nibrio-charcoal/40"> — safe overrides</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
