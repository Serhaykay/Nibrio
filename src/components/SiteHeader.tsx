import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/products/orbis", label: "Orbis" },
  { to: "/docs", label: "Docs" },
  { to: "/support", label: "Support" },
  { to: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Floating pill on home until scrolled, then solid. Other pages always solid.
  const showSolid = !isHome || scrolled || open;
  const barVariant = showSolid
    ? "bg-white/95 backdrop-blur-xl border-black/5 shadow-[0_8px_32px_rgba(16,46,50,0.08)] text-nibrio-teal"
    : "bg-nibrio-teal/40 backdrop-blur-xl border-white/10 text-white";

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${barVariant}`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Nibrio home">
          <img
            src={showSolid ? "/brand/nibrio-logo-dark.png" : "/brand/nibrio-logo-light.png"}
            alt="Nibrio"
            className="h-7 w-auto object-contain transition"
            width={143}
            height={34}
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition ${
                  isActive
                    ? showSolid
                      ? "bg-nibrio-teal text-white"
                      : "bg-white text-nibrio-teal"
                    : showSolid
                      ? "text-nibrio-teal/70 hover:bg-nibrio-teal hover:text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/support"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${showSolid ? "text-nibrio-teal/60 hover:text-nibrio-teal" : "text-white/70 hover:text-white"}`}
          >
            Contact
          </Link>
          <Link
            to="/products/orbis"
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              showSolid ? "bg-nibrio-teal text-white hover:bg-nibrio-teal-2" : "bg-nibrio-gold text-nibrio-teal hover:bg-nibrio-gold-2"
            }`}
          >
            Explore Orbis <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden ${
            showSolid ? "border-black/10 text-nibrio-teal bg-white" : "border-white/20 text-white bg-white/10"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`grid overflow-hidden border-black/5 bg-white text-nibrio-teal transition-all lg:hidden ${open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="grid gap-2 px-6 py-6" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-nibrio-teal text-white" : "bg-nibrio-ivory text-nibrio-teal"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 grid gap-2">
              <Link to="/products/orbis" className="rounded-full bg-nibrio-teal px-5 py-3 text-center text-sm font-semibold text-white">
                Explore Orbis
              </Link>
              <Link to="/support" className="rounded-full border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold text-nibrio-teal">
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
