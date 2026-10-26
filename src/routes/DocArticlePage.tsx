import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { articleBySlug, articles, categories } from "../lib/docs";

export default function DocArticlePage() {
  const { slug } = useParams();
  const article = slug ? articleBySlug(slug) : undefined;
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  if (!article) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <h1 className="font-display text-2xl font-bold tracking-tight text-nibrio-teal">Article not found</h1>
        <p className="mt-2 text-sm text-nibrio-charcoal/60">Try the documentation home or search.</p>
        <Link to="/docs" className="mt-6 inline-flex rounded-full bg-nibrio-teal px-5 py-2.5 text-sm font-semibold text-white">Back to docs</Link>
      </div>
    );
  }

  const idx = articles.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;
  const related = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-8 py-8 lg:grid-cols-[280px_1fr] lg:py-10">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[80px] lg:h-[calc(100vh-96px)] lg:overflow-auto">
            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              className="w-full rounded-full border border-black/10 bg-white px-4 py-2.5 text-left text-sm font-semibold text-nibrio-teal lg:hidden"
            >
              {mobileNavOpen ? "Hide topics" : "Browse topics"}
            </button>
            <div className={`${mobileNavOpen ? "block" : "hidden"} mt-4 lg:mt-0 lg:block`}>
              <nav aria-label="Documentation">
                {categories.map((c) => {
                  const catArticles = articles.filter((a) => a.category === c.id);
                  return (
                    <div key={c.id} className="mb-6">
                      <div className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-nibrio-teal/60">{c.label}</div>
                      <ul className="mt-2 grid gap-1">
                        {catArticles.map((a) => (
                          <li key={a.slug}>
                            <Link
                              to={`/docs/${a.slug}`}
                              className={`block rounded-xl px-3 py-2 text-sm ${a.slug === article.slug ? "bg-nibrio-teal text-white" : "text-nibrio-charcoal/70 hover:bg-nibrio-ivory hover:text-nibrio-teal"}`}
                            >
                              {a.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="min-w-0">
            <nav className="flex flex-wrap gap-1 text-xs text-nibrio-charcoal/50" aria-label="Breadcrumb">
              <Link to="/docs" className="hover:text-nibrio-teal">Docs</Link>
              <span>›</span>
              <span className="text-nibrio-teal">{categories.find((c) => c.id === article.category)?.label}</span>
              <span>›</span>
              <span className="text-nibrio-teal">{article.title}</span>
            </nav>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-nibrio-teal md:text-4xl">{article.title}</h1>
            <p className="mt-3 max-w-[68ch] text-sm leading-6 text-nibrio-charcoal/60">{article.summary}</p>
            <p className="mt-3 font-mono text-xs text-black/40">Last updated: {article.updatedAt}</p>

            <div className="mt-6 rounded-[18px] border border-black/5 bg-nibrio-ivory p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-nibrio-teal/60">On this page</div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-nibrio-charcoal/70">
                {article.body.map((_, i) => (
                  <li key={i}>Step {i + 1}</li>
                ))}
              </ol>
            </div>

            <div className="prose prose-sm mt-8 max-w-none prose-p:leading-7 prose-p:text-nibrio-charcoal/70">
              {article.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {related.length > 0 && (
              <div className="mt-10 rounded-[20px] border border-black/5 bg-white p-6">
                <div className="font-display text-base font-bold tracking-tight text-nibrio-teal">Related articles</div>
                <ul className="mt-3 grid gap-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to={`/docs/${r.slug}`} className="text-sm font-medium text-nibrio-teal hover:underline">
                        {r.title}
                      </Link>
                      <span className="text-sm text-nibrio-charcoal/50"> — {r.summary}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3 border-t border-black/5 pt-6">
              {prev && (
                <Link to={`/docs/${prev.slug}`} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-nibrio-teal hover:bg-nibrio-ivory">
                  ← {prev.title}
                </Link>
              )}
              {next && (
                <Link to={`/docs/${next.slug}`} className="ml-auto rounded-full bg-nibrio-teal px-4 py-2 text-sm font-medium text-white hover:bg-nibrio-teal-2">
                  {next.title} →
                </Link>
              )}
            </div>

            <div className="mt-8 rounded-[20px] border border-black/5 bg-nibrio-ivory p-6">
              <div className="text-sm font-semibold text-nibrio-teal">Was this helpful?</div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setHelpful("yes")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 ${helpful === "yes" ? "bg-nibrio-teal text-white ring-nibrio-teal" : "bg-white text-nibrio-teal ring-black/10"}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setHelpful("no")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 ${helpful === "no" ? "bg-nibrio-teal text-white ring-nibrio-teal" : "bg-white text-nibrio-teal ring-black/10"}`}
                >
                  No
                </button>
              </div>
              {helpful && <p className="mt-2 text-sm text-nibrio-charcoal/60">Thanks for the feedback.</p>}
            </div>

            <div className="mt-6 rounded-[20px] bg-nibrio-teal p-6 text-white">
              <div className="font-display text-base font-bold">Still need help?</div>
              <p className="mt-2 text-sm leading-6 text-white/70">Contact support and we will get back to you.</p>
              <Link to="/support" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal">Contact support</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
