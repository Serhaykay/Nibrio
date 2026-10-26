import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
};

function setMeta(selector: string, key: string, val: string) {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) return;
  el.setAttribute(key, val);
}

function ensureMetaByName(name: string): HTMLMetaElement {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  return el;
}

function ensureMetaByProperty(prop: string): HTMLMetaElement {
  let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", prop);
    document.head.appendChild(el);
  }
  return el;
}

export default function Seo({ title, description, canonical, ogImage, noIndex }: Props) {
  const canon = canonical ?? (typeof window !== "undefined" ? window.location.href : "https://nibrio.com/");

  useEffect(() => {
    document.title = title;

    const desc = ensureMetaByName("description");
    desc.content = description;

    ensureMetaByProperty("og:title").content = title;
    ensureMetaByProperty("og:description").content = description;
    ensureMetaByProperty("og:type").content = "website";
    ensureMetaByProperty("og:url").content = canon;
    if (ogImage) ensureMetaByProperty("og:image").content = ogImage;

    ensureMetaByName("twitter:card").content = "summary_large_image";
    ensureMetaByName("twitter:title").content = title;
    ensureMetaByName("twitter:description").content = description;

    if (noIndex) ensureMetaByName("robots").content = "noindex, nofollow";
    else {
      const r = document.querySelector('meta[name="robots"]');
      if (r) r.remove();
    }

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canon;

    const id = "nibrio-jsonld";
    let s = document.getElementById(id) as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement("script");
      s.id = id;
      s.type = "application/ld+json";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nibrio",
      url: "https://nibrio.com",
      logo: "https://nibrio.com/brand/nibrio-logo-dark.png",
      description,
    });
  }, [title, description, canon, ogImage, noIndex]);

  void setMeta;
  return null;
}
