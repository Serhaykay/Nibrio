import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/products", label: "Products" },
  { to: "/products/orbis", label: "Orbis" },
  { to: "/docs", label: "Docs" },
  { to: "/support", label: "Support" },
  { to: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/80 ${
        isHome ? "border-white/10 bg-nibrio-teal text-white" : "border-black/5 bg-white/80 text-nibrio-teal"
      }`}
    >
      <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Nibrio home">
          <img
            src={isHome ? "/brand/nibrio-logo-light.png" : "/brand/nibrio-logo-dark.png"}
            alt="Nibrio"
            className="h-7 w-auto object-contain"
            width={143}
            height={34}
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition ${
                  isActive
                    ? isHome
                      ? "bg-white text-nibrio-teal"
                      : "bg-nibrio-teal text-white"
                    : isHome
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-nibrio-teal/70 hover:bg-nibrio-teal hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/products/orbis"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              isHome
                ? "bg-nibrio-gold text-nibrio-teal hover:bg-nibrio-gold-2"
                : "bg-nibrio-teal text-white hover:bg-nibrio-teal-2"
            }`}
          >
            Explore Orbis
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            isHome ? "border-white/20 text-white" : "border-black/10 text-nibrio-teal"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-6 md:hidden">
          <nav className="grid gap-2" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium ${isActive ? "bg-nibrio-teal text-white" : "bg-nibrio-ivory text-nibrio-teal"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/products/orbis"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-nibrio-teal px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Explore Orbis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
