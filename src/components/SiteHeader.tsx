import { useState, useEffect } from "react";
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

  useEffect(() => setOpen(false), [pathname]);

  // Always white header — logo (dark) and nav always visible. Home hero is deep teal but header stays white.
  const showTransparent = isHome && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        showTransparent
          ? "border-white/10 bg-nibrio-teal text-white"
          : "border-black/5 bg-white text-nibrio-teal shadow-[0_2px_24px_rgba(16,46,50,0.06)]"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Nibrio home">
          <img
            src={showTransparent ? "/brand/nibrio-logo-light.png" : "/brand/nibrio-logo-dark.png"}
            alt="Nibrio"
            className="h-[30px] w-auto object-contain"
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
                    ? showTransparent
                      ? "bg-white text-nibrio-teal"
                      : "bg-nibrio-teal text-white"
                    : showTransparent
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-nibrio-charcoal/65 hover:bg-nibrio-teal hover:text-white"
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
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${showTransparent ? "text-white/70 hover:text-white" : "text-nibrio-charcoal/55 hover:text-nibrio-teal"}`}
          >
            Contact
          </Link>
          <Link
            to="/products/orbis"
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              showTransparent ? "bg-nibrio-gold text-nibrio-teal hover:bg-nibrio-gold-2" : "bg-nibrio-teal text-white hover:bg-nibrio-teal-2"
            }`}
          >
            Explore Orbis <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden ${
            showTransparent ? "border-white/20 bg-white/10 text-white" : "border-black/10 bg-white text-nibrio-teal"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`grid overflow-hidden bg-white text-nibrio-teal transition-all lg:hidden ${open ? "grid-rows-[1fr] border-t border-black/5" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0 overflow-hidden">
          <nav className="grid gap-2 px-6 py-6" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium ${isActive ? "bg-nibrio-teal text-white" : "bg-nibrio-ivory text-nibrio-teal"}`
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
