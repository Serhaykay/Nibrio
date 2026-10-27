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
        <Link to="/docs" className="mt-6 inline-flex rounded-full bg-nibrio-teal px-5 py-2.5 text-sm font-semibold text-white">
          Back to docs
        </Link>
      </div>
    );
  }

  const idx = articles.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;
  const related = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);
  const cat = categories.find((c) => c.id === article.category);
  const toc = article.blocks.map((b, i) => (b.type === "heading" ? { i, text: b.text } : null)).filter(Boolean) as { i: number; text: string }[];

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
                      <div className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-nibrio-teal/55">{c.label}</div>
                      <ul className="mt-2 grid gap-1">
                        {catArticles.map((a) => (
                          <li key={a.slug}>
                            <Link
                              to={`/docs/${a.slug}`}
                              className={`block rounded-xl px-3 py-2 text-sm leading-5 ${a.slug === article.slug ? "bg-nibrio-teal text-white" : "text-nibrio-charcoal/65 hover:bg-nibrio-ivory hover:text-nibrio-teal"}`}
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
            <nav className="flex flex-wrap items-center gap-1.5 text-xs text-nibrio-charcoal/45" aria-label="Breadcrumb">
              <Link to="/docs" className="hover:text-nibrio-teal">
                Docs
              </Link>
              <span>›</span>
              <Link to="/docs" className="hover:text-nibrio-teal">
                {cat?.label}
              </Link>
              <span>›</span>
              <span className="text-nibrio-teal">{article.title}</span>
            </nav>

            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.015em] text-nibrio-teal md:text-4xl">{article.title}</h1>
            <p className="mt-3 max-w-[68ch] text-sm leading-7 text-nibrio-charcoal/60">{article.summary}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs text-black/35">
              <span>{article.readingMinutes} min</span>
              <span>·</span>
              <span>Updated {article.updatedAt}</span>
              <span>·</span>
              <span className="rounded-full bg-nibrio-ivory px-2.5 py-1 text-nibrio-teal">Orbis guide</span>
            </div>

            {toc.length > 0 && (
              <div className="mt-6 rounded-[18px] border border-black/5 bg-nibrio-ivory p-4">
                <div className="font-mono text-xs font-semibold tracking-wide text-nibrio-teal/55">On this page</div>
                <ol className="mt-2 grid gap-1">
                  {toc.map((t) => (
                    <li key={t.i}>
                      <a href={`#h-${t.i}`} className="text-sm text-nibrio-teal hover:underline">
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div className="prose prose-sm mt-8 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-nibrio-teal prose-p:leading-7 prose-p:text-nibrio-charcoal/70 prose-li:text-nibrio-charcoal/70 prose-a:text-nibrio-teal prose-strong:text-nibrio-teal prose-table:text-sm">
              {article.blocks.map((b, i) => {
                if (b.type === "paragraph") return <p key={i}>{b.text}</p>;
                if (b.type === "heading")
                  return b.level === 2 ? (
                    <h2 key={i} id={`h-${i}`} className="scroll-mt-24">
                      {b.text}
                    </h2>
                  ) : (
                    <h3 key={i} id={`h-${i}`} className="scroll-mt-24">
                      {b.text}
                    </h3>
                  );
                if (b.type === "bullets")
                  return (
                    <ul key={i} className="list-disc pl-5">
                      {b.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                if (b.type === "steps")
                  return (
                    <ol key={i} className="list-decimal pl-5">
                      {b.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ol>
                  );
                if (b.type === "table")
                  return (
                    <div key={i} className="not-prose overflow-x-auto rounded-2xl border border-black/5">
                      <table className="w-full min-w-[520px] border-collapse text-sm">
                        <thead className="bg-nibrio-ivory text-left">
                          <tr>
                            {b.headers.map((h) => (
                              <th key={h} className="px-4 py-3 font-semibold text-nibrio-teal">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {b.rows.map((r, ri) => (
                            <tr key={ri} className="border-t border-black/5">
                              {r.map((cell, ci) => (
                                <td key={ci} className="px-4 py-3 align-top leading-6 text-nibrio-charcoal/70">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                if (b.type === "callout") {
                  const tone =
                    b.callout.kind === "warning"
                      ? "border-amber-200 bg-amber-50 text-amber-900"
                      : b.callout.kind === "tip"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-nibrio-teal/15 bg-nibrio-teal/[0.04] text-nibrio-teal";
                  const label = b.callout.kind === "warning" ? "Heads up" : b.callout.kind === "tip" ? "Tip" : "Note";
                  return (
                    <div key={i} className={`not-prose rounded-2xl border p-4 text-sm leading-6 ${tone}`}>
                      <span className="font-semibold">{label} · </span>
                      {b.callout.text}
                    </div>
                  );
                }
                if (b.type === "media") {
                  const isVideo = b.kind === "video";
                  return (
                    <div key={i} className="not-prose">
                      <div
                        className="rounded-2xl border border-dashed border-black/15 bg-nibrio-ivory p-3"
                        style={{ aspectRatio: b.aspect ?? "16 / 9" } as React.CSSProperties}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white ring-1 ring-black/5">
                          <span className="rounded-full bg-nibrio-teal px-3 py-1 text-xs font-semibold text-white">{isVideo ? "▶ Video" : "▣ Image"}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-center font-mono text-xs leading-5 text-black/40">{b.caption}</p>
                    </div>
                  );
                }
                return null;
              })}
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
                      <span className="text-sm text-nibrio-charcoal/40"> — {r.summary}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3 border-t border-black/5 pt-6">
              {prev && (
                <Link
                  to={`/docs/${prev.slug}`}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-nibrio-teal hover:bg-nibrio-ivory"
                >
                  ← {prev.title}
                </Link>
              )}
              {next && (
                <Link
                  to={`/docs/${next.slug}`}
                  className="ml-auto rounded-full bg-nibrio-teal px-4 py-2 text-sm font-medium text-white hover:bg-nibrio-teal-2"
                >
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
              <Link to="/support" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal">
                Contact support
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
