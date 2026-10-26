import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import { articles, categories, searchArticles } from "../lib/docs";

export default function DocsHome() {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchArticles(q), [q]);

  return (
    <div className="bg-white">
      <div className="bg-nibrio-ivory">
        <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-nibrio-teal/60">Documentation</div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-nibrio-teal md:text-4xl">How can we help?</h1>
            <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">Search Orbis setup guides, features, and troubleshooting — or browse by topic.</p>
          </div>

          <div className="relative mt-6 max-w-3xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search Orbis setup guides, features, and troubleshooting…"
              className="w-full rounded-full border border-black/10 bg-white py-3.5 pl-11 pr-4 text-sm outline-none placeholder:text-black/30 focus:border-nibrio-teal"
              aria-label="Search documentation"
            />
          </div>

          {q.trim() && (
            <div className="mt-6 max-w-3xl rounded-[20px] border border-black/5 bg-white p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-nibrio-teal/60">{results.length} results</div>
              {results.length === 0 ? (
                <p className="mt-2 text-sm text-nibrio-charcoal/60">No matches for “{q.trim()}”. Try a different term or browse categories below.</p>
              ) : (
                <ul className="mt-3 grid gap-2">
                  {results.slice(0, 8).map((a) => (
                    <li key={a.slug}>
                      <Link to={`/docs/${a.slug}`} className="flex items-center justify-between rounded-xl bg-nibrio-ivory px-4 py-3 hover:bg-nibrio-teal hover:text-white">
                        <span>
                          <span className="block text-sm font-semibold">{a.title}</span>
                          <span className="block text-xs opacity-70">{a.summary}</span>
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

      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="font-display text-lg font-bold tracking-tight text-nibrio-teal">Popular guides</h2>
            <ul className="mt-4 grid gap-3">
              {articles.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link to={`/docs/${a.slug}`} className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-4 hover:border-nibrio-teal/20 hover:bg-nibrio-ivory">
                    <span>
                      <span className="block text-sm font-semibold text-nibrio-teal">{a.title}</span>
                      <span className="block text-xs leading-5 text-nibrio-charcoal/60">{a.summary}</span>
                    </span>
                    <span className="ml-4 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nibrio-teal text-white">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[20px] border border-black/5 bg-nibrio-ivory p-6">
              <h3 className="font-display text-base font-bold tracking-tight text-nibrio-teal">Browse by topic</h3>
              <ul className="mt-4 grid gap-2">
                {categories.map((c) => (
                  <li key={c.id} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-black/5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-nibrio-teal text-white">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-nibrio-teal">{c.label}</span>
                      <span className="block text-xs text-nibrio-charcoal/60">{c.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] bg-nibrio-teal p-6 text-white">
              <div className="font-display text-base font-bold">Still need help?</div>
              <p className="mt-2 text-sm leading-6 text-white/70">Our support team can help with Orbis setup, customisation, and troubleshooting.</p>
              <Link to="/support" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal">Contact support</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
