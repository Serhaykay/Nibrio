import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Orbis from "./routes/Orbis";
import Services from "./routes/Services";
import DocsHome from "./routes/DocsHome";
import DocArticlePage from "./routes/DocArticlePage";
import Support from "./routes/Support";
import About from "./routes/About";
import Legal from "./routes/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-20 text-center lg:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight text-nibrio-teal">Page not found</h1>
      <p className="mt-2 text-sm text-nibrio-charcoal/60">The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 inline-flex rounded-full bg-nibrio-teal px-6 py-3 text-sm font-semibold text-white">Go home</a>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/orbis" element={<Orbis />} />
          <Route path="/services" element={<Services />} />
          <Route path="/docs" element={<DocsHome />} />
          <Route path="/docs/orbis" element={<DocsHome />} />
          <Route path="/docs/:slug" element={<DocArticlePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal/:page" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
