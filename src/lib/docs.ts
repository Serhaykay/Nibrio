export type DocCategory = {
  id: string;
  label: string;
  description: string;
};

export type DocArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  body: string[]; // paragraphs / steps
  updatedAt: string;
  draft?: boolean;
};

export const categories: DocCategory[] = [
  { id: "getting-started", label: "Getting Started", description: "Install and set up Orbis." },
  { id: "customisation", label: "Theme Customisation", description: "Header, navigation, pages, and layout." },
  { id: "products-collections", label: "Products & Collections", description: "Cards, variants, media, and filtering." },
  { id: "features", label: "Features & Integrations", description: "Built-in features and app compatibility." },
  { id: "troubleshooting", label: "Troubleshooting", description: "Fix common issues quickly." },
  { id: "updates", label: "Updates & Maintenance", description: "Keep Orbis up to date safely." },
];

export const articles: DocArticle[] = [
  {
    slug: "before-installing-orbis",
    category: "getting-started",
    title: "Before installing Orbis",
    summary: "What to check before you add Orbis to your Shopify store.",
    updatedAt: "2026-09-18",
    body: [
      "Before installing Orbis, make sure your store meets the basic requirements so setup goes smoothly.",
      "Orbis supports Online Store 2.0. You will need a Shopify plan that allows adding themes and a store with Online Store access.",
      "We recommend duplicating your live theme first, so you can experiment safely without affecting customers.",
      "If you rely on apps that inject theme code, note their names — you may need to re-apply app embeds after switching themes.",
    ],
  },
  {
    slug: "installing-orbis",
    category: "getting-started",
    title: "Installing the Orbis theme",
    summary: "Add Orbis to your store and publish it safely.",
    updatedAt: "2026-10-02",
    body: [
      "Install Orbis from your purchase confirmation or the Shopify Theme Store listing — whichever method your purchase used.",
      "In Shopify admin, go to Online Store → Themes → Add theme. Upload the Orbis ZIP if you received a file, or add it from the Theme Store.",
      "Orbis will appear under Theme library as an unpublished theme. Click Customize to open the theme editor without publishing.",
      "When you are happy with your changes, use Publish to make Orbis your live storefront. Publish creates no downtime for customers.",
    ],
  },
  {
    slug: "publishing-safely",
    category: "getting-started",
    title: "Publishing a theme safely",
    summary: "How to go live without losing work.",
    updatedAt: "2026-09-26",
    body: [
      "Never customise your live theme directly if you can avoid it. Work on a duplicate or an unpublished copy instead.",
      "Use Theme library to keep a backup of your previous live theme before publishing Orbis.",
      "After publishing, check your homepage, a product page, and a collection page on both desktop and mobile.",
      "If something looks off, you can re-publish your previous theme instantly from Theme library.",
    ],
  },
  {
    slug: "theme-editor",
    category: "getting-started",
    title: "Understanding the Shopify theme editor",
    summary: "How Online Store 2.0 sections and blocks work in Orbis.",
    updatedAt: "2026-09-30",
    body: [
      "The theme editor lets you build pages by adding sections and blocks — no code required.",
      "Each Orbis template (Home, Product, Collection) exposes the sections available for that page. Add, reorder, and configure them in the left sidebar.",
      "Theme settings at the bottom of the sidebar control global choices like colours, typography, and layout width.",
      "Use the eye icon to hide a section without deleting it, and the device switcher at the top to preview mobile and desktop.",
    ],
  },
  {
    slug: "colours-fonts-layout",
    category: "getting-started",
    title: "Customising colours, fonts, and layout",
    summary: "Match Orbis to your brand in Theme settings.",
    updatedAt: "2026-10-08",
    body: [
      "Open Theme settings (bottom of the theme editor sidebar) to set colours, typography, and page width globally.",
      "Colours set here flow through sections automatically — change once, update everywhere.",
      "For typography, pick a heading and body pairing. Keep line length comfortable and headings clearly larger than body text.",
      "Layout width controls the maximum content width. Narrow feels editorial; wide suits large imagery.",
    ],
  },
  {
    slug: "header-navigation",
    category: "customisation",
    title: "Editing the header and navigation",
    summary: "Configure your header, menus, and announcement bar.",
    updatedAt: "2026-10-10",
    body: [
      "The header section controls your logo, navigation menu, and utility links (search, account, cart).",
      "Assign a Shopify menu under Header → Menu. Orbis renders it with accessible keyboard navigation and mobile drawer behaviour.",
      "Upload your logo in Theme settings → Logo, or leave it text-based. Keep the logo crisp — avoid stretching or low-resolution files.",
      "Enable the announcement bar section to show shipping, returns, or promotional messages site-wide.",
    ],
  },
  {
    slug: "product-pages",
    category: "customisation",
    title: "Customising product pages",
    summary: "Product media, information, and variant controls.",
    updatedAt: "2026-10-06",
    body: [
      "The Product template is built from sections: media gallery, product information, and optional supporting sections below.",
      "Product information blocks control title, price, description, variant picker, quantity, and buy buttons. Reorder or hide them per product.",
      "Variant selectors follow Shopify variant data — Orbis does not add its own inventory logic on top.",
      "Keep product media consistent in aspect ratio so grids and galleries stay aligned.",
    ],
  },
  {
    slug: "collection-pages",
    category: "customisation",
    title: "Building collection pages",
    summary: "Grids, product cards, and collection layout options.",
    updatedAt: "2026-09-22",
    body: [
      "Collection pages render the products assigned to a Shopify collection. Create and assign products in Products → Collections first.",
      "Adjust product count per row and card density in the collection template settings.",
      "Filters and sorting use Shopify's Storefront filtering where available for the collection. Availability depends on your Shopify plan and collection setup.",
      "Add supporting sections above or below the product grid for storytelling, FAQs, or featured content.",
    ],
  },
  {
    slug: "product-cards",
    category: "products-collections",
    title: "Product cards",
    summary: "How product cards behave across Orbis.",
    updatedAt: "2026-09-28",
    body: [
      "Product cards show image, title, price, and optional badges. They appear in collection grids, featured collections, and related products.",
      "Card image fit is controlled per section — contain preserves the full image, cover fills the card. Choose one and stay consistent.",
      "Badges like Sale or Sold out are automatic based on product and variant state.",
    ],
  },
  {
    slug: "installation-problems",
    category: "troubleshooting",
    title: "Theme installation problems",
    summary: "Orbis does not appear or will not upload.",
    updatedAt: "2026-10-01",
    body: [
      "If the ZIP will not upload, confirm you are uploading the theme ZIP itself, not a folder that contains the ZIP plus documentation.",
      "Large files can fail on slow connections — retry once before contacting support, and include the exact error message.",
      "If Orbis appears but looks broken, hard-refresh and check you are previewing the unpublished copy, not a stale live theme.",
    ],
  },
  {
    slug: "layout-issues",
    category: "troubleshooting",
    title: "Layout and styling issues",
    summary: "Fix spacing, overlap, and unexpected styling.",
    updatedAt: "2026-10-04",
    body: [
      "Unexpected spacing is usually a section padding or content-length issue. Check the section settings first.",
      "Custom CSS or app-injected styles can override theme styles. Temporarily disable custom code to isolate the cause.",
      "Clear your browser cache and test in an incognito window to rule out cached assets after an update.",
    ],
  },
  {
    slug: "mobile-display",
    category: "troubleshooting",
    title: "Common mobile display problems",
    summary: "What to check when mobile looks different from desktop.",
    updatedAt: "2026-10-02",
    body: [
      "Use the theme editor's device switcher to preview mobile, but also test on a real device — emulators miss touch behaviour.",
      "Long product titles and horizontal tables are the most common causes of horizontal scroll on mobile.",
      "Keep header navigation concise. Overly long menu labels collapse poorly on small screens.",
    ],
  },
  {
    slug: "updating-orbis",
    category: "updates",
    title: "Updating Orbis safely",
    summary: "Apply updates without losing customisations.",
    updatedAt: "2026-10-12",
    body: [
      "Before updating, duplicate your live theme so you have a rollback copy.",
      "Install the new Orbis version as an unpublished theme first. Re-apply settings and test before publishing.",
      "If you edited theme code directly, those edits do not transfer automatically — note them before updating and re-apply carefully.",
      "After publishing the update, spot-check key pages and any apps that embed in the theme.",
    ],
  },
];

export function searchArticles(q: string): DocArticle[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return articles.filter(
    (a) =>
      !a.draft &&
      (a.title.toLowerCase().includes(needle) ||
        a.summary.toLowerCase().includes(needle) ||
        a.body.join(" ").toLowerCase().includes(needle) ||
        a.category.toLowerCase().includes(needle)),
  );
}

export function articleBySlug(slug: string): DocArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
