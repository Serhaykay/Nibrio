import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-nibrio-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src="/brand/nibrio-logo-dark.png" alt="Nibrio" className="h-7 w-auto" width={143} height={34} />
            <p className="mt-3 max-w-[28ch] text-sm leading-6 text-nibrio-charcoal/70">
              Commerce, thoughtfully built. Premium Shopify themes and practical tools for ambitious stores.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-nibrio-teal">Product</div>
            <ul className="mt-4 grid gap-2 text-sm">
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/products/orbis">Orbis</Link></li>
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/products">All products</Link></li>
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/docs">Documentation</Link></li>
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/support">Support</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-nibrio-teal">Company</div>
            <ul className="mt-4 grid gap-2 text-sm">
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/about">About</Link></li>
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/legal/privacy">Privacy</Link></li>
              <li><Link className="text-nibrio-charcoal/70 hover:text-nibrio-teal" to="/legal/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-nibrio-teal">Get updates</div>
            <p className="mt-4 text-sm leading-6 text-nibrio-charcoal/60">
              Product news and Orbis updates. No spam. Unsubscribe anytime.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget as HTMLFormElement);
                const email = String(fd.get("email") || "").trim();
                if (!email) return;
                alert(`Thanks — ${email} added to the waitlist. Connect an email provider to make this live.`);
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label className="sr-only" htmlFor="footer-email">Email</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="you@store.com"
                className="w-full rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-black/30 focus:border-nibrio-teal"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-nibrio-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-nibrio-teal-2"
              >
                Join
              </button>
            </form>
            <p className="mt-2 text-xs text-black/40">Connect your email provider to enable delivery.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-black/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Nibrio. All rights reserved.</span>
          <span className="font-mono">Commerce, thoughtfully built.</span>
        </div>
      </div>
    </footer>
  );
}
