import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-nibrio-teal/60">Products</div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-nibrio-teal md:text-4xl">Built for real stores.</h1>
            <p className="mt-3 text-sm leading-7 text-nibrio-charcoal/60">
              One available product today, with more on the way. We label everything honestly — available means available.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[24px] border border-black/5 bg-nibrio-ivory">
              <div className="p-6 md:p-8">
                <span className="inline-flex rounded-full bg-nibrio-teal px-3 py-1 text-xs font-bold tracking-wide text-white">Available</span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-nibrio-teal">Orbis — Shopify theme</h2>
                <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">
                  A refined Online Store 2.0 theme for modern commerce. Thoughtful defaults, flexible sections, and a calm
                  editorial system that keeps your products front and centre.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
                  <span className="rounded-full bg-white px-3 py-2 text-center font-medium text-nibrio-teal ring-1 ring-black/5">Online Store 2.0</span>
                  <span className="rounded-full bg-white px-3 py-2 text-center font-medium text-nibrio-teal ring-1 ring-black/5">OS 2.0 sections</span>
                </div>
                <Link to="/products/orbis" className="mt-6 inline-flex rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white hover:bg-nibrio-teal-2">
                  Explore Orbis
                </Link>
              </div>
              <div className="border-t border-black/5 bg-white p-4">
                <div className="rounded-xl bg-nibrio-ivory p-4">
                  <div className="h-3 w-20 rounded-full bg-black/10" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-lg bg-white p-2 ring-1 ring-black/5">
                        <div className="aspect-square rounded-md bg-nibrio-teal/10" />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-center font-mono text-xs text-black/40">Representative Orbis preview</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {[
              { k: "Planned", t: "Future themes", d: "More themes are planned. We will share details only when they are ready to ship." },
              { k: "Coming later", t: "Extensions & apps", d: "Practical integrations and tools that extend Shopify without adding sprawl." },
              { k: "In development", t: "Nibrio Labs", d: "Early explorations and experiments. Not products yet — but where new ideas start." },
            ].map((c) => (
              <Reveal key={c.t}>
                <div className="rounded-[20px] border border-black/5 bg-white p-6">
                  <span className="inline-flex rounded-full border border-black/10 bg-nibrio-ivory px-2.5 py-1 text-xs font-semibold text-nibrio-charcoal/60">{c.k}</span>
                  <div className="mt-3 font-display text-base font-bold tracking-tight text-nibrio-teal">{c.t}</div>
                  <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
