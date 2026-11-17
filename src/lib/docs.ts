/* ── Orbis Theme: Setup and Section Guide — 2026-10-26 · @Usman ──
   Source: Orbis Theme Setup and Section Guide.pdf (14 pages)
   All claims below are from that guide. Slots for screenshots / videos are marked
   as { type: "media", kind: "image"|"video" } so the Nibrio team can drop assets later. */

export type DocCategory = {
  id: string;
  label: string;
  description: string;
  icon: "rocket" | "palette" | "layout" | "shopping-bag" | "shopping-cart" | "file-text" | "sliders" | "life-buoy" | "book-open" | "wrench" | "store";
};

export type Callout = { kind: "tip" | "warning" | "info"; text: string };
export type DocBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; callout: Callout }
  | { type: "media"; kind: "image" | "video"; caption: string; aspect?: string };

export type DocArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  blocks: DocBlock[];
  updatedAt: string;
  readingMinutes: number;
  draft?: boolean;
};

/* ── Categories mirror the PDF's structure ── */
export const categories: DocCategory[] = [
  { id: "getting-started", label: "Getting started", description: "Install, requirements, and first-time setup.", icon: "rocket" },
  { id: "theme-settings", label: "Theme settings", description: "Colors, typography, layout, shape, and swatches.", icon: "palette" },
  { id: "header-navigation", label: "Header & navigation", description: "Header layouts, menus, and mega menus.", icon: "layout" },
  { id: "home-sections", label: "Home sections", description: "Every home-page section and its settings.", icon: "layout" },
  { id: "product-collection", label: "Product & collection", description: "Gallery, cards, filters, sticky bar, and pre-order.", icon: "shopping-bag" },
  { id: "cart-bundles", label: "Cart, bundles & checkout", description: "Drawer, upsell, popup, and bundle discounts.", icon: "shopping-cart" },
  { id: "pages-blog", label: "Pages, blog & footer", description: "Pages, forms, blog, footer, and breadcrumbs.", icon: "file-text" },
  { id: "custom-performance", label: "Custom & performance", description: "Speed, languages, RTL, and custom CSS.", icon: "sliders" },
  { id: "troubleshooting", label: "Troubleshooting", description: "Fix common issues and keep Orbis updated.", icon: "life-buoy" },
  { id: "section-reference", label: "Section reference", description: "Every section and every setting, as the theme editor shows them.", icon: "book-open" },
  { id: "how-to", label: "How to", description: "Step-by-step recipes for building each section.", icon: "wrench" },
  { id: "selling-orbis", label: "Getting Orbis", description: "Theme Store purchase, licenses, and updates.", icon: "store" },
];

/* ── Articles ── */
export const articles: DocArticle[] = [
  // ── Getting started ──
  {
    slug: "orbis-overview",
    category: "getting-started",
    title: "Orbis overview",
    summary: "What Orbis is, the eight niches it supports, and how the theme is structured.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "Orbis is a premium Shopify Online Store 2.0 theme for eight niches: arts and crafts, baby and kids, health and beauty, home and decor, jewelry, outdoor and garden, pet supplies, and restaurants." },
      { type: "paragraph", text: "Every page is made of sections and blocks you add, reorder and style in the theme editor — no code. One color system controls the whole store: every section starts with a Color scheme setting, and text and button colors follow it. Individual elements can override it." },
      { type: "bullets", items: [
        "Images and video have horizontal and vertical focal point settings, so the important part stays visible on any screen.",
        "Layout uses logical CSS, so Arabic, Hebrew, Persian and Urdu flip correctly. More translations are planned.",
        "Speed options — lazy loading, link prefetch and off-screen rendering — live in Theme settings.",
        "Reviews need an app that writes reviews.rating and reviews.rating_count metafields. Deferred pre-order payment needs a selling-plan app.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Requirements: a Shopify store on any paid plan, a modern browser for the editor, and permission to create a custom app if you use automatic bundle discounts." } },
      { type: "media", kind: "image", caption: "Orbis on desktop, tablet and mobile — one calm system across breakpoints. Replace with real screenshots.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "installing-orbis",
    category: "getting-started",
    title: "Installing Orbis & first-time setup",
  summary: "Get Orbis from the Theme Store, set it up safely, then publish — your live store is never at risk.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
  { type: "paragraph", text: "Orbis is sold exclusively through the Shopify Theme Store — there is no zip file to download or upload. Add the trial, set it up, preview on phone and laptop, then buy the license and publish. Your live store is not affected until you press Publish." },
      { type: "steps", items: [
  "Open the Orbis listing on the Shopify Theme Store and choose Try theme — this adds an unpublished trial copy to your store.",
  "Open Customize on the trial copy and work through the setup checklist (see next article).",
  "Preview on a phone and a laptop. When you are happy, buy the Orbis license, then press Publish.",
      ]},
  { type: "media", kind: "video", caption: "Video: adding the trial from the Theme Store and opening Customize (30–45 s). Drop your screen recording here.", aspect: "16 / 9" },
  { type: "callout", callout: { kind: "tip", text: "Theme updates arrive through the Theme Store — add the new version from Online Store → Themes and republish (see Updating Orbis). Your products, collections, pages and menus live in Shopify, not in the theme." } },
    ],
  },
  {
    slug: "setup-checklist",
    category: "getting-started",
    title: "Setup checklist",
    summary: "The 12 steps to go from a fresh install to a launch-ready store.",
    updatedAt: "2026-10-26",
    readingMinutes: 6,
    blocks: [
      { type: "paragraph", text: "Open Theme settings with the paintbrush icon, then work top-to-bottom. This is the fastest path to launch." },
      { type: "steps", items: [
        "Theme settings → Colors: edit your color schemes (background, text, accent, button and button label per scheme).",
        "Theme settings → Typography: choose heading and body fonts and the heading scale.",
        "Theme settings → Layout and Shape: set page width, spacing, corner radius and card ratio.",
        "Header: upload your logo, choose a layout (inline, centered, split or drawer), pick the menu, and set transparent header if needed.",
        "Navigation: in Shopify admin create the menus (Content → Menus) that the header and footer use.",
        "Footer: add logo, link lists, contact details and social links (social links live in Theme settings → Social media).",
        "Home page: add and order sections (see Home sections).",
        "Products and collections: add images, options and the metafields you plan to use (reviews, pre-order, size guide).",
        "Cart: set the free-shipping threshold, suggestions and gift wrap in the Cart drawer section (Overlays group).",
        "Checkout: branding is set in Shopify checkout settings, not in the theme — confirm it there.",
        "Languages and currencies: enable in Shopify admin → Languages and Markets; selectors appear automatically.",
        "Legal pages: create privacy, shipping and returns policies in Settings → Policies — the footer lists them.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Checkout branding is set in Shopify's checkout settings, not in the theme." } },
      { type: "media", kind: "image", caption: "Annotated screenshot: Theme settings sidebar with the paintbrush icon and the 12 checklist items.", aspect: "16 / 10" },
    ],
  },

  // ── Theme settings ──
  {
    slug: "color-schemes",
    category: "theme-settings",
    title: "Color schemes & swatches",
    summary: "How the single color system works, and how color swatches map from option values.",
    updatedAt: "2026-10-26",
    readingMinutes: 5,
    blocks: [
      { type: "paragraph", text: "Every section has a Color scheme setting at the top. Create two or three schemes (for example light, tinted, dark) and reuse them across sections. Text and button colors in a section follow its scheme; some elements, such as a hero heading, also allow an optional color override." },
      { type: "heading", text: "What a scheme controls", level: 3 },
      { type: "table", headers: ["Setting", "What you control"], rows: [
        ["Colors", "Background, surface, text, accent, button and button label per scheme. Sections pick a scheme by name."],
        ["Typography", "Heading and body fonts, heading size scale, uppercase headings."],
        ["Layout", "Page width and section spacing."],
        ["Shape", "Corner radius of buttons, inputs and cards."],
      ]},
      { type: "heading", text: "Swatches", level: 3 },
      { type: "paragraph", text: "Option values named like colors (Black, Navy, Rose and about 700 names in many languages) show as color circles automatically. To use your own colors or images, set the swatch source to Variant image or add custom values in the swatch map in Theme settings → Product information. A swatch can be a circle or a square." },
      { type: "media", kind: "image", caption: "Screenshot: color scheme picker on a section, plus the swatch map in Theme settings.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "typography-layout-shape",
    category: "theme-settings",
    title: "Typography, layout & shape",
    summary: "Fonts, page width, section spacing, and corner radius — set once, used everywhere.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "These three groups in Theme settings control the store's typographic and spatial system." },
      { type: "bullets", items: [
        "Typography: choose heading and body fonts and the heading scale. Keep headings clearly larger than body and line length comfortable.",
        "Layout: set page width and section spacing. Narrow feels editorial; wide suits large imagery.",
        "Shape: set the corner radius that applies to buttons, inputs and cards for a consistent feel.",
      ]},
      { type: "media", kind: "image", caption: "Before / after: heading scale and page width on the same home layout.", aspect: "16 / 9" },
    ],
  },

  // ── Header & navigation ──
  {
    slug: "header-navigation",
    category: "header-navigation",
    title: "Header, menus & mega menu",
    summary: "Logo, four layouts, transparent header, and the two menu blocks that power navigation.",
    updatedAt: "2026-10-26",
    readingMinutes: 7,
    blocks: [
      { type: "paragraph", text: "The header lives in the Header group at the top of the editor, with the announcement bar above it." },
      { type: "heading", text: "Header settings", level: 3 },
      { type: "bullets", items: [
        "Layout: inline, centered, split or drawer (menu in a side drawer).",
        "Logo: desktop logo, mobile logo, logo width, and where the logo sits on mobile (left or center). The logo can be centered on desktop with the menu on the left.",
        "Menu opening: open on hover, or open on click only. Hover uses hover-intent so a menu opens only when the pointer actually moves to it.",
        "Transparent header: sits over the first section (hero, slideshow, video banner or progress tabs). Set separate text and icon colors and an overlay strength. You can upload a separate logo for the transparent state.",
        "Color scheme, divider line, and dimming the page when a menu is open.",
      ]},
      { type: "heading", text: "Mega menu & collection menu", level: 3 },
      { type: "bullets", items: [
        "Mega menu: add a Mega menu block to the header. It attaches to a menu item by position or by typing the item's title. Layouts: columns, thumbnails or sidebar. Tile images, promo tiles and text are all set inside the block.",
        "Collection menu: shows collections as image tiles. It can be placed as the first menu item.",
      ]},
      { type: "callout", callout: { kind: "tip", text: "Keep top-level items to six or fewer so the header stays on one line. Build menus in Content → Menus first — the mega menu reads the child links of the item it belongs to. If a menu opens while you scroll, switch Menu opening to click only." } },
      { type: "media", kind: "video", caption: "Video: hover vs click opening, transparent header over a hero, and mega menu layouts (columns / thumbnails / sidebar).", aspect: "16 / 9" },
    ],
  },

  // ── Home sections ──
  {
    slug: "home-sections-overview",
    category: "home-sections",
    title: "Home sections at a glance",
    summary: "All home-page sections, what each is for, and the key setting per section.",
    updatedAt: "2026-10-26",
    readingMinutes: 8,
    blocks: [
      { type: "paragraph", text: "Open the home page in the editor and use Add section. Drag to reorder. Every section has a color scheme, spacing, a Custom class and a Custom CSS field." },
      { type: "table", headers: ["Section", "Use it for", "Key settings"], rows: [
        ["Hero banner", "Main banner with eyebrow, heading, text and buttons as blocks", "Image and mobile image, focal point, overlay, parallax (slow or fixed), text box, countdown"],
        ["Slideshow", "Several slides", "Fade / slide / reveal, next-slide card, autoplay, per-slide focal point and countdown"],
        ["Video banner", "Video with text", "Shopify video, YouTube or Vimeo, direct link, mobile video, autoplay and pause, countdown"],
        ["Before and after", "Image comparison slider", "Two images, labels, starting position"],
        ["Product hotspots", "Pins on a photo", "Click a dot to open quick view"],
        ["Content collage", "Mixed grid", "Image, collection, product, video and text blocks"],
        ["Scrolling text", "Marquee strip", "Speed, direction, separators"],
        ["Progress tabs banner", "Rotating banner with tabs", "Per-tab heading, image and image position"],
        ["Sticky image showcase", "Image stays while text scrolls", "Image + blocks"],
        ["Accordion showcase", "Image with animated accordion", "Items with text"],
        ["Featured product", "One product with details", "Blocks for the info column, including app blocks"],
        ["Product tabs", "Tabs of products", "Each tab uses a collection / hand-picked / by tag; style, slider or grid, columns, colors"],
        ["Specifications", "Table from metafields", "Metafield-driven rows"],
        ["Video scroller", "Horizontal row of videos", "Video blocks"],
        ["Featured blog posts", "Latest or hand-picked posts", "Manual selection and a matching View all button"],
        ["Collection list", "Grid of collections", "Collection card style, image shape"],
        ["Product bundle", "Set sold together", "List or column layout, discount percent"],
        ["Build a bundle", "Customer picks items", "Collection, minimum items, discount percent"],
      ]},
      { type: "callout", callout: { kind: "tip", text: "Buttons in banners can have their own button and label colors — leave them empty to follow the color scheme. Use focal-point sliders on any image to keep the important part visible when cropped." } },
      { type: "media", kind: "image", caption: "Gallery: hero, slideshow, video banner, hotspots, collage, and product bundle — one card per section.", aspect: "16 / 10" },
    ],
  },
  {
    slug: "countdown-and-focal-point",
    category: "home-sections",
    title: "Countdowns, focal points & app blocks",
    summary: "Small settings that appear in many sections — how they actually work.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "heading", text: "Countdown", level: 3 },
      { type: "paragraph", text: "Choose Until a date (format 2026-12-31 23:59, with a time zone in hours from UTC) or Restarts for each visitor (an evergreen timer of 1 to 72 hours)." },
      { type: "heading", text: "Focal point", level: 3 },
      { type: "paragraph", text: "Use the horizontal and vertical sliders on any image to choose which part stays visible when the image is cropped. This drives how hero, slideshow and banner images behave on mobile." },
      { type: "heading", text: "App blocks", level: 3 },
      { type: "paragraph", text: "Where a section lists App blocks you can place third-party app blocks inside it." },
      { type: "media", kind: "video", caption: "Video: setting a countdown date vs evergreen, and dragging focal points on desktop and mobile.", aspect: "16 / 9" },
    ],
  },

  // ── Product & collection ──
  {
    slug: "product-page",
    category: "product-collection",
    title: "Product page & gallery",
    summary: "Blocks, gallery layouts, and the media logic that powers color-filtered images.",
    updatedAt: "2026-10-26",
    readingMinutes: 7,
    blocks: [
      { type: "paragraph", text: "Open any product in the editor. The Product section holds the gallery and a column of blocks you can reorder, add and remove." },
      { type: "heading", text: "Blocks in the details column", level: 3 },
      { type: "bullets", items: [
        "Vendor, Title, Rating, Price, Text, Description, Variant picker, Quantity, Buy buttons, Stock status, SKU, Trust badges, Collapsible tab, Size guide, Countdown, Personalization, Sibling products, Share, and App blocks.",
      ]},
      { type: "heading", text: "Gallery", level: 3 },
      { type: "bullets", items: [
        "Layouts: thumbnails below, thumbnails at the side, grid, stacked (large first image), or one column list. Mobile can be carousel, grid or list.",
        "Media width: small / medium / large / wide, and media position start or end.",
        "Image shape: adapt, square, portrait or landscape — images fill the frame.",
        "Zoom opens a lightbox. Sticky column keeps images or details in view while you scroll.",
        "Show images for the chosen color: put the color name in the image's alt text or file name (for example navy-front.jpg). Choosing Navy then shows only Navy pictures; unmatched images show for every choice.",
      ]},
      { type: "media", kind: "image", caption: "Gallery: five layouts side by side, plus the color-filtered image behaviour.", aspect: "16 / 9" },
      { type: "table", headers: ["Section", "Use it for", "Key settings"], rows: [
        ["Form", "Contact or custom forms", "Field blocks (see Pages, blog and forms)"],
        ["Breadcrumbs", "Standalone breadcrumb row", "Alignment and structured data"],
      ]},
    ],
  },
  {
    slug: "sticky-bar-preorder",
    category: "product-collection",
    title: "Sticky bar, pre-order & other product blocks",
    summary: "The floating add-to-cart bar, pre-order setup, countdowns, personalization and reviews.",
    updatedAt: "2026-10-26",
    readingMinutes: 6,
    blocks: [
      { type: "heading", text: "Sticky add-to-cart bar", level: 3 },
      { type: "bullets", items: [
        "Appears once the main button scrolls out of view.",
        "Position: bottom center, start or end, and top or bottom edge. Shape: pill, rounded or square. Width and distance from the edge.",
        "Color scheme and optional button / label colors. Show or hide image, title and price. Custom button label. Shadow, frosted glass look, and show on mobile.",
      ]},
      { type: "heading", text: "Pre-order", level: 3 },
      { type: "steps", items: [
        "In Shopify admin, open the product and tick Continue selling when out of stock.",
        "Mark the product: add tag preorder (or set metafield custom.preorder to true).",
        "Optional ship date: set metafield custom.ship_date (a date, or short text such as mid December).",
        "In Theme settings → Product information, turn on Pre-order and choose the label. Add to cart reads Pre-order, the ship date shows under it, and the order line carries a Ships note (also in the sticky bar and on cards).",
      ]},
      { type: "callout", callout: { kind: "warning", text: "This sells the item now and charges in full at checkout. To charge part now and the rest later, use a selling-plan app." } },
      { type: "heading", text: "Other product blocks", level: 3 },
      { type: "bullets", items: [
        "Countdown: sale timer (date or evergreen).",
        "Personalization: text fields (for example engraving) added to the order line.",
        "Size guide: from an image, table, page or metafield.",
        "Rating: reads reviews.rating and reviews.rating_count — install a reviews app that writes them or the block shows a placeholder.",
      ]},
      { type: "media", kind: "video", caption: "Video: sticky bar appearing on scroll, and enabling pre-order end-to-end (tag → metafield → label).", aspect: "16 / 9" },
    ],
  },
  {
    slug: "collection-filters-cards",
    category: "product-collection",
    title: "Collection, filters & product cards",
    summary: "Collection banner, filter positions, and the global card system (including swatches and badges).",
    updatedAt: "2026-10-26",
    readingMinutes: 7,
    blocks: [
      { type: "paragraph", text: "The collection template has an optional Collection banner (title, description, image, breadcrumb) above the Collection section that holds the toolbar, filters and product grid." },
      { type: "heading", text: "Collection section settings", level: 3 },
      { type: "bullets", items: [
        "Filter position: sidebar left, sidebar right, bar above products, or slide-in drawer. On phones and tablets, filters always open in a drawer.",
        "Columns on desktop and mobile, products per page, and pagination (numbers or load more). Toolbar: count, sort, filter button. Breadcrumbs on or off (style is in Theme settings → Breadcrumbs).",
        "Filters come from Shopify's Search and Discovery app — choose which filters appear there (availability, price, color, size, product type …). Color filters show swatches using the same color names as product pages.",
      ]},
      { type: "heading", text: "Product cards", level: 3 },
      { type: "paragraph", text: "Card look is global — set in Theme settings → Product cards." },
      { type: "bullets", items: [
        "Styles: simple, overlay (text over image), boutique, floating, and more. A text panel option puts the text in a tinted box.",
        "Image: ratio, fit (cover or contain), padding, hover image.",
        "Quick action: View more (quick view) or Add to cart, as text or icon, on image / beside details / below.",
        "Swatches: on the right of name and price, or below. Clicking a swatch changes the card image. Shape (round or square), size, and how many show.",
        "Badges: Sale, New (for 14 days), custom — up to three at once. Rating: stars and count from reviews.rating / reviews.rating_count.",
      ]},
      { type: "paragraph", text: "Collection cards (used by Collection list and collection menus) have their own styles: classic, simple, overlay, arch and label, with image shape and fit." },
      { type: "media", kind: "image", caption: "Card matrix: the six card styles, swatch positions, and badge placements.", aspect: "16 / 10" },
    ],
  },

  // ── Cart, bundles & checkout ──
  {
    slug: "cart-drawer-upsell-popup",
    category: "cart-bundles",
    title: "Cart drawer, upsell & popup",
    summary: "Three page-wide overlays in the Overlays group — how each is configured.",
    updatedAt: "2026-10-26",
    readingMinutes: 6,
    blocks: [
      { type: "paragraph", text: "Three overlays live in the Overlays group at the bottom of the section list in the editor on every page: Cart drawer, Cart upsell and Popup." },
      { type: "heading", text: "Cart drawer", level: 3 },
      { type: "bullets", items: [
        "Used when Theme settings → Cart → Cart type is Drawer. Side (left or right), width, title, product image shape, and whether it opens when something is added.",
        "Free shipping bar: on/off and the threshold in store currency (converts for other currencies).",
        "Suggestions: heading, source (Shopify recommendations / hand-picked / a collection), how many to show, add-button label, show price and image. A product can carry its own suggestions via metafield custom.cart_upsells (products).",
        "Extras: order note and gift wrap — create a product called Gift wrap, select it, and set its price (0 for free). Footer: checkout label, View cart link, tax and shipping note. The cart page mirrors these in Theme settings → Cart.",
      ]},
      { type: "heading", text: "Cart upsell", level: 3 },
      { type: "paragraph", text: "Styles the automatic suggestions Shopify recommends: how many to load, the add-button label, and whether price and image show. Hand-picked and collection suggestions use the Cart drawer's settings." },
      { type: "heading", text: "Popup", level: 3 },
      { type: "bullets", items: [
        "Choose where it appears (every page, home, collection, product, blog, or everywhere except cart). Options: text, image and position, countdown, email sign-up with discount code, No thanks link.",
        "Trigger: time delay or scroll depth. Cooldown in days before it reopens. Device filter. Always show in the editor lets you design it without waiting.",
      ]},
      { type: "media", kind: "video", caption: "Video: opening the drawer, the free-shipping threshold filling, and the popup trigger and cooldown.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "bundles-and-discounts",
    category: "cart-bundles",
    title: "Bundles & how the discount becomes real",
    summary: "The two bundle sections, the three discount paths, and the sync script recommended by the theme.",
    updatedAt: "2026-10-26",
    readingMinutes: 8,
    blocks: [
      { type: "paragraph", text: "A theme cannot create a Shopify discount on its own (no Admin API access). Orbis gives you two bundle sections and three ways to make the discount real. Both sections add the items as one bundle: each cart line carries hidden properties (_bundle, _bundle_pct, _bundle_min) plus a visible Bundle name." },
      { type: "table", headers: ["Section", "How the customer uses it", "Discount setting"], rows: [
        ["Product bundle", "Sees a fixed set as a list (image, title, price, quantity, variants), then adds the whole set", "Discount percent, optional discount code"],
        ["Build a bundle", "Picks items from a collection in a grid; a floating bar shows the total", "Minimum items, discount percent, optional discount code"],
      ]},
      { type: "heading", text: "Make the discount apply — choose one", level: 3 },
      { type: "bullets", items: [
        "Sync script (recommended, no app needed): in orbis-discounts/tools/ run sync-bundle-discounts.mjs. It reads your live theme's bundle sections and creates one automatic discount per bundle. Needs a custom app with Admin API scopes read_themes, read_products, read_discounts, write_discounts. Preview with SHOPIFY_STORE=… SHOPIFY_ADMIN_TOKEN=… node tools/sync-bundle-discounts.mjs — add --apply to create/update and --prune to delete discounts of removed bundles. Run again whenever you change a bundle.",
        "Discount code: create a code in Shopify Discounts and type it into the bundle's Discount code setting — the theme applies it after the bundle is added.",
        "Shopify Function: the orbis-discounts folder also holds a discount Function that reads the hidden line properties. It must be deployed through a Shopify app with the Shopify CLI.",
      ]},
      { type: "callout", callout: { kind: "info", text: "The sync script makes a normal Shopify discount (X% off these products when the cart holds at least N of them), so it shows in your Discounts list and also applies if a shopper adds the same products without using the bundle section." } },
      { type: "media", kind: "image", caption: "Diagram: the two bundle flows and where the discount is created (Admin API vs code vs Function).", aspect: "16 / 9" },
    ],
  },

  // ── Pages, blog, footer ──
  {
    slug: "pages-blog-footer",
    category: "pages-blog",
    title: "Pages, blog, forms & footer",
    summary: "Page templates, the form builder, blog cards, and everything in the footer.",
    updatedAt: "2026-10-26",
    readingMinutes: 6,
    blocks: [
      { type: "heading", text: "Pages", level: 3 },
      { type: "paragraph", text: "The Page section shows a header (plain, soft colored band, or image with the title over it) and the page content. Content layout is narrow, wide, or with a table of contents built from the page's H2 headings. App blocks can be added below the content." },
      { type: "heading", text: "Forms", level: 3 },
      { type: "bullets", items: [
        "Build a form from field blocks: Text, Email, Phone, Date, Textarea, Select, Radio, Checkbox, Heading, and App blocks (for example Shopify Forms). Each field has label, placeholder, required flag and width (full or half). A Text field can be sent as the customer's name and a Textarea as the message body.",
        "Layout is centered or split with an image. Field style is outlined, filled or underline. Submissions go to your sender email (Settings → Notifications) and a customer record is created when an email is given. Shopify adds spam protection. Presets include Contact form and Wholesale application.",
        "To make a Contact page: in Online Store → Pages create a page, set its Theme template to contact, and open it in the editor — it comes with the Form section.",
      ]},
      { type: "heading", text: "Blog", level: 3 },
      { type: "bullets", items: [
        "The Blog page shows a header, optional tag filters (pills / underline / plain text), the newest article as a large feature, and a grid or list of cards. Card styles: image then text, text over image, or minimal with a category line. You can show category, date, author, reading time and an excerpt.",
        "The Article page shows the post, author, date, tags and breadcrumbs.",
      ]},
      { type: "heading", text: "Footer", level: 3 },
      { type: "bullets", items: [
        "In the Footer group. Settings: color scheme, layout (columns / split / centered), a newsletter band on top, and a giant faint wordmark. Blocks: Brand (logo and text), Links (a menu), Text, Contact (address, email, phone, hours), Newsletter, and Image.",
        "Bottom bar: copyright, policy links, payment icons (from Shopify → Payments, auto-updating), language and country selectors, and a Back to top link. Social icons use the links in Theme settings → Social media.",
      ]},
      { type: "heading", text: "Breadcrumbs", level: 3 },
      { type: "paragraph", text: "Show on product, collection, blog and article pages, and include search engine data (BreadcrumbList). Choose style (chevron, slash, arrow, dot, pills, bar, underline), size, alignment and colors once in Theme settings → Breadcrumbs. On a page template, add the Breadcrumbs section or use the Page section's built-in breadcrumb." },
      { type: "media", kind: "image", caption: "Annotated layouts: page header variants, form builder, blog card styles, and footer blocks.", aspect: "16 / 10" },
    ],
  },

  // ── Custom & performance ──
  {
    slug: "speed-security-languages",
    category: "custom-performance",
    title: "Speed, security, languages & RTL",
    summary: "What the theme does for performance, how it stays safe, and how right-to-left flipping works.",
    updatedAt: "2026-10-26",
    readingMinutes: 5,
    blocks: [
      { type: "heading", text: "Speed", level: 3 },
      { type: "paragraph", text: "Options live in Theme settings → Performance and custom code. The defaults are the fastest safe choice." },
      { type: "table", headers: ["Option", "What it does"], rows: [
        ["Lazy load images", "Images below the first screen load only when near the viewport. The first image of each page always loads right away."],
        ["Prefetch pages on hover", "Starts loading a page when a visitor points at its link. Skipped on slow connections and data saver."],
        ["Skip rendering of off-screen footer and recommendations", "The browser draws them only when they come near the viewport."],
      ]},
      { type: "bullets", items: [
        "Other built-in work: deferred scripts, preloaded fonts with swap, the first hero / slideshow / product image marked high priority, and responsive image sizes.",
        "Tips: upload images no wider than 2400 px, keep the home page to the sections you need, use one or two fonts, and keep installed apps small.",
      ]},
      { type: "heading", text: "Security", level: 3 },
      { type: "bullets", items: [
        "Text typed into settings is escaped where shown in attributes; rich text is sanitized by Shopify.",
        "External links open with rel=\"noopener\". Forms use Shopify's built-in form tags with spam protection.",
        "Custom CSS fields strip anything that could close the style tag. Custom class names accept only letters, numbers, hyphens and underscores.",
      ]},
      { type: "heading", text: "Languages and RTL", level: 3 },
      { type: "paragraph", text: "Add languages in Shopify admin (Settings → Languages), then translate theme text in the editor (Language menu) or with a translation app. The theme detects Arabic, Hebrew, Persian, Urdu and similar languages and flips the layout. Color swatches recognize names in many languages. Theme text lives in locales/en.default.json." },
      { type: "media", kind: "image", caption: "Speed toggle panel, plus an Arabic storefront showing the flipped layout.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "custom-css",
    category: "custom-performance",
    title: "Custom CSS & custom classes",
    summary: "Where to add overrides — and how scoping keeps them safe.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "Theme-wide: Theme settings → Performance and custom code → Custom CSS. Per section: every section ends with Custom class and Custom CSS. The class is added to the section's wrapper, so you can write .my-class .button { border-radius: 0 }. Custom CSS applies to that section only." },
      { type: "callout", callout: { kind: "warning", text: "Prefer Custom class for overrides — it survives theme updates better than editing section files. Keep selectors narrow." } },
      { type: "media", kind: "image", caption: "Example: a section's Custom class and Custom CSS fields with a small override.", aspect: "16 / 8" },
    ],
  },

  // ── Troubleshooting & Updates ──
  {
    slug: "troubleshooting-faq",
    category: "troubleshooting",
    title: "Troubleshooting & FAQ",
    summary: "The 13 most common problems, likely cause, and the fix.",
    updatedAt: "2026-10-26",
    readingMinutes: 6,
    blocks: [
      { type: "table", headers: ["Problem", "Likely cause and fix"], rows: [
  ["A section is missing from the editor","Make sure you are customizing the right theme copy (Online Store → Themes) and the right template in the page picker. Re-add it with Add section; if a built-in section is still missing after a theme update, contact support."],
  ["Something looks broken after an update","Open your backup copy of the previous version (see Updating Orbis) to confirm what changed, then contact support with your theme version and a description."],
  ["A section or snippet is \"not found\"", "Re-add the latest Orbis version from Online Store → Themes (see Updating Orbis). If it persists on the fresh copy, contact support."],
        ["Text shows as something.key", "Translation key missing from locales/en.default.json, or typed wrongly."],
        ["Swatches show no color", "Option value is not a known color name. Use the swatch map or set swatch source to Variant image."],
        ["Pre-order button does not show", "Check Continue selling when out of stock, the preorder tag or metafield, and Theme settings → Product information → Pre-order."],
        ["Bundle shows Sold out", "A product in the bundle is out of stock, or a Product block has no product chosen."],
        ["Bundle discount not applied at checkout", "Run the sync script, or enter a discount code in the bundle settings."],
        ["Cart drawer does not open", "Theme settings → Cart → Cart type must be Drawer."],
        ["Reviews show a placeholder", "Install a reviews app that writes reviews.rating and reviews.rating_count."],
        ["Menu opens by itself", "In Header settings, set Menu opening to click only."],
        ["Videos do not autoplay", "Browsers only autoplay muted video. Check reduced-motion and the theme's respect setting."],
        ["Images load late", "Turn off Lazy load images in Theme settings → Performance and custom code and compare."],
      ]},
  { type: "media", kind: "image", caption: "Diagnostic: comparing the broken page against your backup theme copy.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "updating-orbis",
    category: "troubleshooting",
    title: "Updating Orbis",
  summary: "New versions arrive in your theme library — review, then publish.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
  "In Online Store → Themes, add the new Orbis version to your theme library when it appears. Your live theme keeps running untouched.",
  "Open Customize on the updated copy and check your key pages against the live store.",
  "When it looks right, press Publish. Keep the previous copy unpublished for a few days as a rollback.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Your content (products, collections, pages, blog posts, menus) is stored in Shopify, not in the theme. Section settings and blocks are stored in the template files, so replacing a template file resets that page's layout." } },
    ],
  },

  // ── Section reference: home & marketing ──
  {
    slug: "ref-hero-banner",
    category: "section-reference",
    title: "Section reference: Hero banner",
    summary: "The full-width banner with text over an image — every setting and every block.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "A full-width banner with text over an image. Use it first on the home page." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme — sets the default text and button colors. It never paints a background over your image. Override any color below or on each block.",
        "Image and Mobile image — the mobile image is optional and shows on screens narrower than 750px.",
        "Parallax effect on the image — turn on, then choose the style: Fixed picture (the next section scrolls over it) or Moves slower than the page. Strength: Subtle / Medium / Strong.",
        "Image position — horizontal and vertical focal-point sliders (0–100%) decide which part stays visible when the image is cropped. There is a separate pair for mobile.",
        "Image overlay color and Image overlay — 0% leaves the image untouched; raise it (up to 90%) to darken or tint the image behind the text.",
        "Height — Small / Medium / Large / Full screen.",
        "Content position — Top, Middle or Bottom, each at start, center or end.",
        "Text alignment — Start / Center / End.",
        "Show content in a box.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Eyebrow (max 1): text; text color.",
        "Heading (max 1): heading; size (Medium / Large / Extra large); heading color.",
        "Text (max 1): text; text color.",
        "Buttons (max 1): label, link, style (Solid / Outline), color and text color for the first and second button. Empty colors use the color scheme.",
        "Countdown (max 1): Off / Until a date / Restarts for each visitor; end date and time (format 2026-12-31 23:59); time zone (hours from UTC); length in hours (1–72); text above the countdown; style (Boxes / Frosted glass / Plain numbers); size; when it ends (Hide the countdown / Keep showing zeros).",
      ]},
      { type: "callout", callout: { kind: "tip", text: "If the text is hard to read over your photo, raise Image overlay to 20–40%. Dragging the focal-point sliders is what keeps a face or product in frame on phones." } },
      { type: "media", kind: "video", caption: "Video: adding the Hero banner, setting the focal point, and the countdown styles.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "ref-slideshow",
    category: "section-reference",
    title: "Section reference: Slideshow",
    summary: "Several slides with their own image, text and buttons — settings and the Slide block.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "Several slides in a row, each with its own image, text and buttons." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
        "Height — Small / Medium / Large / Full screen.",
        "Parallax effect on the images — style and strength as in the Hero banner.",
        "Change slides automatically and Seconds per slide (3–12).",
        "Transition — Reveal from the middle / Fade / Slide.",
        "Show a 'next slide' preview card.",
        "Show the controls bar and Position indicator (Number or Dots).",
        "Accessible name — read aloud by screen readers.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Slide: image; image on phones (optional, for a differently cropped photo); image position horizontal and vertical; eyebrow; heading and heading size; text; content position; first and second button label, link and style.",
      ]},
      { type: "media", kind: "image", caption: "Three slides side by side: reveal, fade and slide transitions.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "ref-video-banner",
    category: "section-reference",
    title: "Section reference: Video banner",
    summary: "A banner with a video background or hosted video, with overlay text — all four setting groups.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "A banner with a video background or a hosted video, with overlay text." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
        "Video source — Upload to Shopify / YouTube or Vimeo link / Direct file link (.mp4 / .webm). Fill in the matching field: Video file, Video link or Direct video link.",
        "Mobile video (optional) — a portrait or lighter file for phones. Shopify upload only.",
        "Cover image — shown before the video plays.",
        "How it plays — Autoplay (muted, loops, plays when visible) or Play button (starts with sound).",
      ]},
      { type: "heading", text: "Size and layout", level: 3 },
      { type: "bullets", items: [
        "Layout — Full width / Inside the page width, rounded.",
        "Size — Custom height / Video shape 16:9 / Cinema 21:9 / Full screen. Height on desktop (16–56rem) and on mobile (14–48rem) apply to Custom height.",
        "Video fit — Fill (crops the edges) / Show everything. Video position horizontal and vertical set what stays visible when cropped.",
      ]},
      { type: "heading", text: "Playback", level: 3 },
      { type: "bullets", items: [
        "Loop, Show pause and sound buttons, Pause when scrolled out of view.",
        "Autoplay on mobile — turn off to save mobile data: phones then show the cover image with a play button.",
        "Respect 'reduce motion' device setting — when on, visitors whose device asks for reduced motion see a play button instead of autoplay. Leave off if your own device has reduce motion enabled, otherwise the video will not autoplay for you.",
        "Play button size and Pause and sound buttons position.",
      ]},
      { type: "heading", text: "Content, colors and countdown", level: 3 },
      { type: "bullets", items: [
        "Content: eyebrow, heading, heading size, text, content position, content width (20–60rem), animate the content in, and first and second button (label, link, style).",
        "Colors and overlay: heading, text, button and button text colors (empty uses the color scheme), overlay color, overlay (0–80%) and overlay style (Even tint / Fade from the bottom).",
        "Countdown — same options as the Hero countdown.",
      ]},
      { type: "callout", callout: { kind: "warning", text: "Browsers only autoplay muted video. If your phone has Reduce Motion turned on, check the 'Respect reduce motion' setting before assuming autoplay is broken." } },
    ],
  },
  {
    slug: "ref-video-scroller",
    category: "section-reference",
    title: "Section reference: Video scroller",
    summary: "A horizontal row of short vertical videos that visitors scroll through.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A horizontal row of short vertical videos that visitors scroll through." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, Heading, Heading alignment.",
        "Video width (12–26rem) and Video shape (Tall 9:16 / Portrait 4:5 / Square). Video position horizontal and vertical.",
        "Space between videos, Show arrows.",
        "Play videos when they are on screen — videos start muted and pause when scrolled away.",
        "When a product card is clicked — Open quick view / Go to the product page.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Video: video file; cover image (optional); name or handle; show the verified tick; product (optional, shows a small product card on the video).",
      ]},
    ],
  },
  {
    slug: "ref-announcement-bar",
    category: "section-reference",
    title: "Section reference: Announcement bar",
    summary: "The thin message bar above the header — slider or running text, and the announcement block.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "The thin message bar above the header. Add one announcement block per message." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
        "Style — Slider (one message at a time) or Running text (continuous scroll).",
        "Size — Compact / Regular. Uppercase text is ignored for scripts without letter case.",
        "Slider options — transition (Slide up / Fade), change messages automatically, change message every (3–10s).",
        "Running text options — speed (20–140 px/s), direction, separator between messages (Dot / Sparkle / Slash / None), pause on hover.",
        "Show language and country selectors — desktop only. Choose which selectors appear in Theme settings → Search and localization.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Announcement: icon (None / Delivery / Gift / Sparkle / Star / Heart / Returns / Shield); text; link; link text (optional, for example \"Shop now\").",
      ]},
      { type: "media", kind: "image", caption: "Screenshot: announcement bar set to Slider, with the icon set and link text filled.", aspect: "16 / 6" },
    ],
  },
  {
    slug: "ref-image-with-text",
    category: "section-reference",
    title: "Section reference: Image with text",
    summary: "An image beside a block of text — good for story and brand sections.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "An image beside a block of text. Good for story and brand sections." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, image and image position (focal point).",
        "Layout — Image first / Text first.",
        "Image width — Small / Medium / Large. Image ratio — Adapt to image / Square / Portrait / Landscape.",
        "Text alignment — Start / Center / End.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Eyebrow (max 1): text. Heading: heading and size. Text: text. Button: label, link, style (Solid / Outline).",
      ]},
    ],
  },
  {
    slug: "ref-rich-text",
    category: "section-reference",
    title: "Section reference: Rich text",
    summary: "A centered text-only section for a heading, paragraph and button.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "A centered text-only section for a heading, paragraph and button." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, alignment (Start / Center / End), content width (Narrow / Medium / Wide).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Eyebrow (max 1), Heading with size, Text, and Button with label, link and style.",
      ]},
    ],
  },
  {
    slug: "ref-multicolumn",
    category: "section-reference",
    title: "Section reference: Multicolumn",
    summary: "Columns of icon or image plus text, for benefits and features.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "Columns of icon or image plus text, for benefits and features." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, heading, columns on desktop (2–5), alignment, show columns as cards.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Column: image (replaces the icon when set); icon (None / Delivery / Shield / Leaf / Heart / Gift / Star / Returns); heading; text; link label; link.",
      ]},
    ],
  },
  {
    slug: "ref-scrolling-text",
    category: "section-reference",
    title: "Section reference: Scrolling text",
    summary: "A marquee strip of repeating text.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A marquee strip of repeating text." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, speed (1–10), direction, text size (16–140px), text style (Heading font / Body font).",
        "Between items — Dot / Star / Slash / Dash / Nothing.",
        "Outlined text, pause on hover, space above and below (0–80px).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Text: text; small image (optional, shown before the text); link.",
      ]},
    ],
  },
  {
    slug: "ref-content-collage",
    category: "section-reference",
    title: "Section reference: Content collage",
    summary: "A mosaic that mixes images, collections, products, videos and text — with four block sizes.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "A mosaic that mixes images, collections, products, videos and text." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, text, heading alignment.",
        "Columns on desktop (3–6), row height (8–28rem), gap (0–32px).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "paragraph", text: "Each block has a Size: Small is one cell, Wide is two across, Tall is two down, Large is both." },
      { type: "bullets", items: [
        "Image: image; picture position; link; caption heading, text and color.",
        "Collection: collection; picture position; title override.",
        "Product: product; optional image; picture position; when clicked (Open quick view / Go to the product page).",
        "Video: video file (plays silently on a loop) or a YouTube / Vimeo link; picture position; video fit; title; text; text color; link.",
        "Text: eyebrow; heading; text; button label and link; its own color scheme.",
      ]},
    ],
  },
  {
    slug: "ref-before-and-after",
    category: "section-reference",
    title: "Section reference: Before and after",
    summary: "A draggable comparison of two images.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A draggable comparison of two images." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, text, heading alignment.",
        "Before image and before label; after image (use a photo with the same framing) and after label.",
        "Direction — Left and right / Up and down. Starting position (10–90%).",
        "Image shape — Landscape 4:3 / Wide 16:9 / Square / Portrait. Maximum width (400–1400px).",
      ]},
      { type: "callout", callout: { kind: "tip", text: "Use two photos with matching framing, or the slider will look like a jump rather than a reveal." } },
    ],
  },
  {
    slug: "ref-accordion-showcase",
    category: "section-reference",
    title: "Section reference: Accordion showcase",
    summary: "Expanding panels, each revealing an image and text.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "Expanding panels, each revealing an image and text." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, heading size, item title size (1–2.5rem).",
        "Image position — End / Start. Image shape — Square / Portrait / Landscape.",
        "Open the next item automatically and seconds per item (3–15).",
        "Product card on the image — pick a Product to show a small add-to-cart card over the image, and set its button label.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Item: title; text; image; image position horizontal and vertical.",
      ]},
    ],
  },
  {
    slug: "ref-progress-tabs-banner",
    category: "section-reference",
    title: "Section reference: Progress tabs banner",
    summary: "Tabs that auto-advance with a progress bar, each tab with its own image.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "Tabs that auto-advance with a progress bar, each tab with its own image." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, heading shown when a tab has none of its own, heading size.",
        "Move to the next tab automatically, seconds per tab (3–15), pause while hovering.",
        "Height on desktop (24–60rem) and on mobile (24–50rem).",
        "Dark overlay (0–80%) — a soft shade from the bottom so the text stays readable.",
        "Heading color, tab text color, loading line color — leave empty for white.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Tab: background image; image position horizontal and vertical; heading (large text that changes with the tab); title; text.",
      ]},
    ],
  },
  {
    slug: "ref-sticky-image-with-products",
    category: "section-reference",
    title: "Section reference: Sticky image with products",
    summary: "A sticky image beside a scrolling list of products.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A sticky image beside a scrolling list of products." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, main image (stays in place while the products scroll) and its image position.",
        "Image position — Start / End. Image width compared to the products (1–4x). Space above the sticky image — use the height of your header (0–200px).",
        "Text on the image — eyebrow, heading, heading size, button label, link, text color (empty for white), shade at the bottom (0–80%).",
        "Product columns on desktop — 1 or 2.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Product: product.",
      ]},
      { type: "callout", callout: { kind: "tip", text: "Set 'Space above the sticky image' to your header height, or the image starts underneath the header when it sticks." } },
    ],
  },
  {
    slug: "ref-testimonials",
    category: "section-reference",
    title: "Section reference: Testimonials",
    summary: "Customer quotes in a slider or grid.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "Customer quotes in a slider or grid." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, heading, columns on desktop (1–4).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Testimonial: rating (0–5); quote; name; subtitle (for example a city or a role); photo.",
      ]},
    ],
  },
  {
    slug: "ref-faq",
    category: "section-reference",
    title: "Section reference: FAQ",
    summary: "Questions and answers in an accordion.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "Questions and answers in an accordion." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, heading, open the first question.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Question: question; answer.",
      ]},
    ],
  },
  {
    slug: "ref-menu-section",
    category: "section-reference",
    title: "Section reference: Menu",
    summary: "A restaurant-style menu with categories and dishes, built for the restaurant niche.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A restaurant-style menu with categories and dishes. Built for the restaurant niche." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, button label, button link (online ordering, a reservation page or a collection).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Category: title. Dishes listed after it belong to it.",
        "Dish: name; price; description; tags (for example Vegan, Spicy, Gluten free); image.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Dish order follows block order — a Dish block belongs to the Category block above it." } },
    ],
  },
  {
    slug: "ref-newsletter",
    category: "section-reference",
    title: "Section reference: Newsletter",
    summary: "An email sign-up form with heading and text.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "An email sign-up form with heading and text." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Heading (max 1) and Text (max 1).",
      ]},
    ],
  },
  {
    slug: "ref-form",
    category: "section-reference",
    title: "Section reference: Form",
    summary: "The form builder for contact, quote and wholesale forms — layout, field styles and field blocks.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "A form builder for contact, quote or wholesale forms. Submissions go to your store email and Customers list." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, text, text alignment (side layout).",
        "Layout — Centered, text above the form / Split: text and image beside the form. Form width (420–900px) applies to the centered layout.",
        "Field style — Outlined / Filled / Underline. Space between fields (8–40px).",
        "Image (split layout) with a horizontal and vertical focal point.",
        "Button label, full width button, message after sending (empty uses the translated default), note above the button (for example a link to your privacy policy).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Text field, Email field (max 1), Phone field (max 1), Date field, Message box, Dropdown (options one per line), Choice buttons (options one per line), Checkbox, Group heading.",
        "Fields have label, placeholder, required and a width of Full or Half. The text field and message box also have Send as — the sender's name or message, or a custom field named by the label.",
        "App blocks — add a block from any installed app.",
      ]},
      { type: "media", kind: "image", caption: "Both layouts side by side: centered and split, with the three field styles.", aspect: "16 / 9" },
    ],
  },

  // ── Section reference: product & collection ──
  {
    slug: "ref-featured-collection",
    category: "section-reference",
    title: "Section reference: Featured collection",
    summary: "A grid or slider of products from one collection, with an optional countdown.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "A grid or slider of products from one collection." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, heading alignment.",
        "Collection — the collection to show. Products to show (2–16).",
        "Layout — Grid / Slider. Columns on desktop (2–6) and on mobile (1 or 2).",
        "Show \"View all\" button and View all link position (Below the products / Next to the heading).",
        "Countdown timer — None / Counts down to a date / Restarts for each visitor. Set end date and time (format 2026-12-31 23:59), time zone (hours from UTC — for example 1 for Lagos, 0 for London, -5 for New York) and, for the restarting timer, length (hours). It starts on a visitor's first visit.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Product card style — image shape, hover image, swatches, quick add and reviews — is set globally in Theme settings → Product cards, not per section." } },
    ],
  },
  {
    slug: "ref-featured-product",
    category: "section-reference",
    title: "Section reference: Featured product",
    summary: "One product shown in full with its own buy box, built from reorderable blocks.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "One product shown in full with its own buy box." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, product, eyebrow, heading, heading alignment.",
        "Image position (Start / End), image width (Half / Wider / Narrower), image shape (Portrait / Square / Landscape).",
        "Description length (without blocks) — 10–100 words.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "paragraph", text: "Add and reorder these to build the buy box, and add an App block to place a third-party app (reviews, subscriptions, upsell) anywhere in it." },
      { type: "bullets", items: [
        "Vendor, Price, Variant picker, Quantity (max 1 each).",
        "Title: size; link the title to the product page.",
        "Rating: star size; show the average; show number of reviews.",
        "Text: free text.",
        "Description: length (10–100 words).",
        "Buy buttons: show dynamic checkout buttons.",
        "View details link: label; style (Link / Outlined button).",
      ]},
    ],
  },
  {
    slug: "ref-product-tabs",
    category: "section-reference",
    title: "Section reference: Product tabs",
    summary: "Tabs that each show a different set of products — by collection, tag or hand-picked.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "Tabs that each show a different set of products, picked by collection, tag or by hand." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, subheading, heading alignment.",
        "Tab style — Underline / Filled pills / Outlined pills / Segmented bar / Plain text. Also tab alignment, tab text size, space between tabs (4–48px).",
        "Tab text color, active tab text color, active tab background / underline color — leave empty to follow the color scheme.",
        "Layout — Slider / Grid. Products per tab (2–24), columns on desktop (2–6) and on mobile, space between products (8–48px).",
        "Show arrows, show progress bar (slider), show 'View all' link with its label and style (Underlined link / Button), controls alignment.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Tab: tab name; Show products from — A collection / Products I pick / Products with tags.",
        "A collection: choose the Collection.",
        "Products I pick: choose the Products.",
        "Products with tags: type Tags separated by commas (for example new, summer) and set Match to Any or All of the tags. Optionally pick a Collection to limit the search; leave it empty to search the whole store. Only the first 50 products of the collection (or store) are checked.",
        "Link is optional; by default it goes to the collection.",
      ]},
      { type: "callout", callout: { kind: "info", text: "The 50-product limit applies to tag matching. If your store is larger, pick by collection or hand-pick instead." } },
    ],
  },
  {
    slug: "ref-recommended-products",
    category: "section-reference",
    title: "Section reference: Recommended products",
    summary: "Related or complementary products that load automatically, with a per-product metafield override.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "Related or complementary products that load automatically." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, heading alignment.",
        "Products shown — Related (automatic) / Complementary (Search & Discovery app) / Products I pick / A collection. Fill in Products or Collection to match.",
        "Let each product choose its own — a product with the metafield custom.recommended_products (type: list of products) shows those instead. Complementary products are set up in the Search & Discovery app.",
        "Layout — Grid / Slider. Products to show (2–12), columns on desktop (2–5) and on mobile.",
      ]},
    ],
  },
  {
    slug: "ref-product-hotspots",
    category: "section-reference",
    title: "Section reference: Product hotspots",
    summary: "A lifestyle image with clickable dots that open a product.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A lifestyle image with clickable dots that open a product." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading, text, heading alignment, image.",
        "When a product card is clicked — Open the quick view window / Go to the product page.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Hotspot: product; horizontal and vertical position (0–100%). Drag the sliders until the dot sits on the item in the photo.",
      ]},
    ],
  },
  {
    slug: "ref-collection-list",
    category: "section-reference",
    title: "Section reference: Collection list",
    summary: "A grid or slider of collection cards, with five card styles and six image shapes.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "A grid or slider of collection cards." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, heading, heading alignment, columns on desktop (2–5) and on mobile, show product count.",
        "Card style — Classic (text under the image) / Simple (soft box) / Text over the image / Arch / Label (box on the image).",
        "Image shape — Square / Portrait / Tall portrait / Landscape / Wide / Photo's own shape. Image fit — Fill the box (cover) / Show the whole image (contain).",
        "Space around the image (0–40px), fixed image height (0 uses the image shape; up to 600px), text backdrop for text over the image (0–90%).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Collection: pick the collection.",
      ]},
    ],
  },
  {
    slug: "ref-featured-blog-posts",
    category: "section-reference",
    title: "Section reference: Featured blog posts",
    summary: "Your latest blog posts as cards, or a hand-picked selection.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "Your latest blog posts as cards." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, eyebrow, heading.",
        "Posts come from — A blog (latest posts), then choose the Blog; or Posts I pick myself, then add Post blocks.",
        "Show 'View all' button, 'View all' link (for picked posts only, for example your blog page) and 'View all' style.",
        "Posts to show (2–6), columns on desktop (2–4), card shape, image position.",
        "Show the category (first tag), show the date, shade behind the text (0–80%), text color (empty for white).",
      ]},
    ],
  },
  {
    slug: "ref-product-bundle",
    category: "section-reference",
    title: "Section reference: Product bundle",
    summary: "A fixed bundle of products with a bundle discount — the section half of the bundles chapter.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "A fixed bundle of products with a bundle discount." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
        "Image side — image, image position (focal point), image position Start / End, image overlay (0–80%), eyebrow, heading, text.",
        "Layout — List (one product per row) / Columns (side by side). Row style — Lines between rows / Bordered cards / Soft filled cards.",
        "Image shape, image fit, image width (list layout) (64–220px), product title size, space between rows, product title color, price color.",
        "Show vendor, show price, show quantity stepper, maximum quantity per product (1–20).",
        "Bundle discount (0–60%) — the saving shown to customers. It becomes real when a matching discount exists in Shopify; see the Bundles and discounts article.",
        "Discount code to apply (optional) — create the code in Shopify admin (for example 20% off, minimum quantity matching your bundle). It is applied automatically when the set is added, so the discount works without the Function.",
        "Button label, show the discount in the button.",
        "Countdown — same options as the Hero.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Product: choose each product in the bundle.",
      ]},
      { type: "callout", callout: { kind: "warning", text: "The Bundle discount percentage is only a display value until a matching discount exists in Shopify. See Bundles & how the discount becomes real." } },
    ],
  },
  {
    slug: "ref-build-a-bundle",
    category: "section-reference",
    title: "Section reference: Build a bundle",
    summary: "Lets the customer build their own bundle from a collection, with a floating total bar.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "Lets the customer build their own bundle from a collection." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, heading, text, heading alignment.",
        "Collection — shoppers pick items from this collection. Products to show (3–24), columns on desktop and on mobile, image shape, image fit.",
        "Items needed for the discount (2–10).",
        "Bundle discount (0–60%) — to really take it off at checkout, deploy the Orbis discount Function (orbis-discounts/README.md) or create a discount code in Shopify and enter it below.",
        "Discount code to apply (optional) — applied automatically when the bundle is added.",
        "Bundle name in the cart — shown on each cart line as 'Bundle: name'. Leave empty to use the heading.",
        "Bar title, button label.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Both bundle sections write hidden properties (_bundle, _bundle_pct, _bundle_min) to each cart line plus a visible Bundle name." } },
    ],
  },
  {
    slug: "ref-product-page",
    category: "section-reference",
    title: "Section reference: Product (main product page)",
    summary: "The product page section — gallery, sticky column, sticky bar, and all nineteen block types.",
    updatedAt: "2026-10-26",
    readingMinutes: 7,
    blocks: [
      { type: "paragraph", text: "The product page. Section settings control the gallery and sticky bar; the buy box is built from blocks you can reorder." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, show breadcrumbs (style: Theme settings → Breadcrumbs).",
        "Gallery — desktop layout (Carousel with thumbnails below or on the side / Grid of 2 equal columns / Grid with a large first image / Single column list), mobile layout (Swipeable carousel / Grid / Single column list), image ratio, gallery width, images position (Start / End), open images in a zoom lightbox.",
        "Sticky column (desktop) — keeps one side in view while the other scrolls. Use \"Images stay in place\" when the product details are long.",
        "Sticky add-to-cart bar — turn on Show a sticky add to cart bar for a small floating bar that appears once the main button scrolls out of view. Then customize it: position (bottom center, bottom end, bottom start), edge (bottom or top of the screen), shape (Pill / Rounded / Square), maximum width (280–760px), distance from the screen edge, color scheme, button label, button color and text color, shadow, frosted glass look, and whether to show the image, title, price, quantity selector and the bar on mobile.",
        "Update the address when a variant is chosen.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "paragraph", text: "Add block, then drag to reorder." },
      { type: "bullets", items: [
        "App blocks — add a block from any installed app.",
        "Vendor, Title, Rating, Description, Quantity (max 1 each).",
        "Price (max 1): show the percentage saved; show tax and shipping note.",
        "Text: free text.",
        "Variant picker (max 1): style (Buttons / Dropdown — options with swatches always use swatches unless you pick Dropdown); show swatches for color options; Filter gallery by selected color (shows only the images of the chosen color — an image belongs to a color when its alt text or file name contains the color name, for example navy-front.jpg); swatch shape (Circle / Rounded square / Square); swatch size (28–64px).",
        "Buy buttons (max 1): show dynamic checkout buttons, which let customers pay with Shop Pay, Apple Pay, Google Pay and other wallets.",
        "Stock status (max 1): low stock threshold (1–20) — shows how many are left at or below this number.",
        "SKU (max 1).",
        "Trust badges: up to four rows of an icon (None / Delivery / Returns / Shield / Secure / Leaf / Heart / Gift) and short text.",
        "Collapsible tab: heading; icon; content; content from a page (optional, shown after the content above). Add one block per tab.",
        "Size guide (max 1): link text; size chart image; size guide page; text; size chart table (one row per line, values separated by commas, the first line is the header, for example Size,Chest,Waist); metafield namespace and key to override the guide per product (create a product metafield of type page, file, rich text or text).",
        "Product siblings (max 1): option name; swatch shape and size. Links related products (for example the same item in another color) as swatches.",
        "Share (max 1): label.",
        "Countdown timer: heading; counts down to a date / restarts for each visitor; end date and time (format 2026-12-31 23:59); time zone; length; size; alignment; when the time is up (Hide the timer / Show zeros).",
        "Personalization: heading; for each of two fields — name (leave empty to hide the field), hint, maximum characters (5–200), required, and several lines. The text is saved as a line property on the cart item.",
      ]},
      { type: "media", kind: "image", caption: "The five gallery layouts side by side, plus the sticky bar in its three shapes.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "ref-specifications",
    category: "section-reference",
    title: "Section reference: Specifications",
    summary: "A tabbed table of product specifications, driven by a metafield.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A tabbed table of product specifications." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, product (leave empty on a product page to use that page's product; needed when you use the section on other pages), eyebrow, heading, heading size, text.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Tab: tab name; metafield namespace and key (for example specs_overview). Use a multi-line text metafield with one row per line written as Label | Value, or a JSON metafield like [{\"label\":\"Materials\",\"value\":\"Nylon\"}]. Rows to show when there is no metafield — one row per line: Label | Value.",
      ]},
      { type: "callout", callout: { kind: "tip", text: "The Label | Value format is the simplest — one row per line, pipe between them. JSON is available if your data already comes from an app." } },
    ],
  },
  {
    slug: "ref-product-grid",
    category: "section-reference",
    title: "Section reference: Product grid (collection page)",
    summary: "The collection page grid, filters and sorting.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "paragraph", text: "The collection page product grid, filters and sorting." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, show breadcrumbs.",
        "Grid — columns on desktop (2–5) and on mobile, products per page (8–48), pagination (Page numbers / Load more button).",
        "Show filters, filter layout — Sidebar on desktop / Top bar (horizontal) on desktop / Drawer on all screens.",
        "Open filters by default on desktop — off: all groups start collapsed (active filters stay open); on: all groups start expanded. Applies to the sidebar and top bar; the drawer always starts closed.",
        "Show sorting, show product count.",
        "Which filters appear (availability, price, color, size, tags) is managed in Shopify admin under Online Store → Navigation → Collection and search filters (Search & Discovery app).",
      ]},
    ],
  },
  {
    slug: "ref-collection-banner",
    category: "section-reference",
    title: "Section reference: Collection banner",
    summary: "The title and image at the top of a collection page.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "The title and image at the top of a collection page." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, show the collection image, show the description, show breadcrumb, alignment (Start / Center / End), height (Small / Medium / Large).",
      ]},
    ],
  },
  {
    slug: "ref-collection-list-page",
    category: "section-reference",
    title: "Section reference: Collection list page",
    summary: "The page that lists all collections, with the same card look as the Collection list section.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "The page that lists all collections." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, columns on desktop and on mobile, and the same card look settings as the Collection list section: card style, image shape, image fit, space around the image, fixed image height, text backdrop.",
      ]},
    ],
  },
  {
    slug: "ref-search",
    category: "section-reference",
    title: "Section reference: Search & predictive search",
    summary: "The search results page, and the overlay that suggests products as people type.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "heading", text: "Search page", level: 3 },
      { type: "paragraph", text: "The search results page. Color scheme, columns on desktop (2–5) and on mobile." },
      { type: "heading", text: "Predictive search", level: 3 },
      { type: "paragraph", text: "The search overlay that suggests products as people type. It has no settings of its own — style it from Theme settings." },
    ],
  },

  // ── Section reference: cart & global ──
  {
    slug: "ref-cart-drawer",
    category: "section-reference",
    title: "Section reference: Cart drawer",
    summary: "The slide-out cart — drawer sizing, free shipping bar, suggestions, extras and footer.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "The slide-out cart. Find it in the editor under the overlay group below the footer." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
        "Drawer — opens from (right or left; it flips automatically in right-to-left languages), width (340–560px), open the drawer when something is added, title (empty for the translated 'Cart'), show the item count next to the title, product image shape, header (With a line below / No line).",
        "Free shipping bar — show the progress bar and the free shipping threshold, entered in your store's default currency. It is converted automatically for other currencies.",
        "Suggestions — show product suggestions, heading (empty for 'You may also like'), and Suggest: Shopify recommendations (automatic) / Products I choose / Products from a collection. A product can also list its own suggestions in the metafield custom.cart_upsells (products); those show first. Also: suggestions to show (1–4), add button label, show price, show image.",
        "Extras — enable order note; offer gift wrap. For gift wrap, create a product called Gift wrap and select it as the gift wrap product. Its price is the gift wrap price; set it to 0 for free gift wrap.",
        "Footer — checkout button label (empty for 'Check out'), show 'View cart' link, show the tax and shipping note.",
      ]},
      { type: "callout", callout: { kind: "warning", text: "The drawer only opens if Theme settings → Cart → Cart type is set to Drawer." } },
    ],
  },
  {
    slug: "ref-cart-upsell",
    category: "section-reference",
    title: "Section reference: Cart upsell",
    summary: "Product suggestions shown inside the cart drawer.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "Product suggestions shown inside the cart drawer." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Recommendations to load (1–12) — the drawer shows as many as its own 'Suggestions to show' allows.",
        "Add button label, show price, show image.",
      ]},
    ],
  },
  {
    slug: "ref-popup",
    category: "section-reference",
    title: "Section reference: Popup",
    summary: "A promotional or newsletter popup — content, countdown, sign-up, triggers and targeting.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "A promotional or newsletter popup." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Show the popup (master switch) and Always show in the theme editor — lets you see and style it while editing; visitors are not affected.",
        "Color scheme.",
        "Content — heading, text, text alignment, image, image position (Right / Left), show the image on phones.",
        "Countdown timer — same options as the Hero countdown.",
        "Sign-up form — show the email form (people who sign up are added to your customers with the tags newsletter and popup), button label, button link (used when the email form is off), thank-you message, discount code (optional; shown after signing up and added to the visitor's cart — create the same code in Discounts), dismiss link text (for example No thanks).",
        "When it appears — After some seconds / After scrolling a percentage of the page / When the visitor reaches the footer / When the visitor is about to leave (desktop) / Only when a link or button opens it. To open it from your own button or menu link, add the attribute data-popup-open, or use a link to #popup. Then set seconds before showing (0–60), page scrolled (10–100%), show again after (days) (0 shows it once per visit; visitors who sign up never see it again), pages (All pages / All except the cart / Home page only / Collection pages / Product pages / Blog and articles) and devices (Computers and phones / Computers only / Phones only).",
      ]},
      { type: "callout", callout: { kind: "tip", text: "Turn on 'Always show in the theme editor' while you style it. The trigger and cooldown do not apply to you, and visitors are unaffected." } },
    ],
  },
  {
    slug: "ref-cart-page",
    category: "section-reference",
    title: "Section reference: Cart page",
    summary: "The full cart page.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "The full cart page. Its settings mirror those in Theme settings → Cart." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
      ]},
    ],
  },
  {
    slug: "ref-header",
    category: "section-reference",
    title: "Section reference: Header",
    summary: "Logo, navigation, transparent header and behavior — plus the mega menu and collection menu blocks.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "The header with logo, menu and icons. Mega menu blocks are added here." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme.",
        "Logo — logo (if empty, your store name is shown), logo for transparent header (optional light version), logo width (50–300px).",
        "Navigation — layout (Logo left, menu center / Logo center, menu below / Logo center, menu left / Menu in drawer on all screens), logo position on mobile, Open menus on Hover or Click only (choose Click only if menus open when you do not expect them), menu (pick your main menu), dim the page while a menu is open.",
        "Transparent header — Off / Homepage only / All pages. The header floats over the first section, so it works best with a hero banner first. Also: color wash behind the header (0–60%, keeps the menu readable on busy images), menu text color and icon color while transparent.",
        "Behavior and appearance — sticky header (Disabled / Always visible / Show when scrolling up), show divider line, show search, show account link, vertical padding (0–32px).",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Mega menu: color scheme; Menu item — the title of a top-level menu item, for example Shop (for translated stores list every language separated by commas: Shop, Boutique, Tienda); or Menu position — works in every language: 1 is the first item, 2 the second; 0 uses the title instead. Menu layout: Columns of text links / Picture links in a grid / Side list, pictures on hover (pictures use the collection image of each menu item). Picture size and shape; show the 'view all' link; show the item's sub-links; link columns (1–5); featured area heading.",
        "Collection menu (max 3): menu label; label link (optional); color scheme; take tiles from a menu (optional — a collection link uses the collection's image) or pick tiles one by one with the Collection blocks beneath; tiles per row (2–6); tile shape; image fit; label overlay (0–90%); show arrow on hover.",
      ]},
    ],
  },
  {
    slug: "ref-footer",
    category: "section-reference",
    title: "Section reference: Footer",
    summary: "Layout, newsletter band, brand wordmark, bottom bar and all six footer blocks.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "The footer, built from blocks that you can arrange in columns." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, layout (Columns / Split / Centered), columns on desktop (2–6; the brand and newsletter blocks take two columns in the Columns layout), dividers, vertical space (24–120px).",
        "Newsletter band — show the newsletter band on top, band style (Filled / Plain), eyebrow, heading, text, button label.",
        "Brand — giant background wordmark (large faint text above the bottom bar, for example your shop name; leave empty to hide) and social icons style (Outlined circles / Filled circles / Plain icons). Add the social links in Theme settings → Social media.",
        "Bottom bar — copyright text ({year} and {shop} are filled in automatically), show policy links, show payment icons, show language selector, show country/region selector, show 'Back to top'.",
      ]},
      { type: "heading", text: "Blocks", level: 3 },
      { type: "bullets", items: [
        "Brand (max 1): logo; logo width; show shop name when there is no logo; text; show social icons.",
        "Links: heading; menu. Add one per link column.",
        "Text: heading; text.",
        "Contact (max 1): heading; address; email; phone; opening hours; show social icons.",
        "Newsletter (in a column) (max 1): heading; text; button label.",
        "Image: image; image focal point; image shape; heading; text; link label; link.",
      ]},
    ],
  },
  {
    slug: "ref-breadcrumbs",
    category: "section-reference",
    title: "Section reference: Breadcrumbs",
    summary: "The trail of links such as Home / Collection / Product.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "The trail of links such as Home / Collection / Product." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, alignment, add search engine data (BreadcrumbList) — turn it off if the page already shows another breadcrumb with data, space above and space below (0–60px).",
        "The look of the trail itself is in Theme settings → Breadcrumbs.",
      ]},
    ],
  },

  // ── Section reference: pages & account ──
  {
    slug: "ref-page",
    category: "section-reference",
    title: "Section reference: Page",
    summary: "A standard page such as About or Contact — content layout and header styles.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "A standard page such as About or Contact. Add an app block to embed an app." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Content color scheme, content layout (Narrow, easy to read / Wide / With a table of contents). The table of contents is built from the H2 headings in the page and shown when there are at least two.",
        "Page header — header style (Plain / Soft colored band / Image with title over it), header color scheme, header alignment, eyebrow, subtitle, show breadcrumbs, header image with its focal point, image header height (200–600px), image overlay (0–80%).",
      ]},
    ],
  },
  {
    slug: "ref-blog-page",
    category: "section-reference",
    title: "Section reference: Blog page",
    summary: "The blog listing page — tag filters, featured article and article cards.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "The blog listing page." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, show breadcrumbs.",
        "Header — eyebrow, subtitle, alignment, show tag filters, filter style (Pills / Underline / Plain text).",
        "Featured article — show the newest article as a large feature (first page only, and not while a tag filter is active) and its image shape.",
        "Articles — layout (Grid / List), card style (Image then text / Text over the image / Minimal with category line), image shape, columns on desktop (2–4) and mobile, articles per page (6–24), and toggles for category, date, author, reading time and excerpt (excerpt length 10–50 words).",
      ]},
    ],
  },
  {
    slug: "ref-article-page",
    category: "section-reference",
    title: "Section reference: Article page",
    summary: "A single blog post and its display options.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "paragraph", text: "A single blog post." },
      { type: "heading", text: "Section settings", level: 3 },
      { type: "bullets", items: [
        "Color scheme, show breadcrumbs, show author, show tags, show share button, cover image width (Same as the text / Wide / Full screen width), show reading time, show reading progress bar, show more articles.",
      ]},
    ],
  },
  {
    slug: "ref-other-pages",
    category: "section-reference",
    title: "Section reference: Password, 404 & account pages",
    summary: "The remaining page templates and where their text comes from.",
    updatedAt: "2026-10-26",
    readingMinutes: 1,
    blocks: [
      { type: "heading", text: "Password page", level: 3 },
      { type: "paragraph", text: "Color scheme, heading, text. Shown while the store is locked." },
      { type: "heading", text: "Other pages", level: 3 },
      { type: "paragraph", text: "404 page, Login, Register, Account, Order, Addresses, Activate account and Reset password each have a color scheme; the text comes from the translations (Customize → Default content, or the language editor)." },
    ],
  },

  // ── How to ──
  {
    slug: "how-to-basic-routine",
    category: "how-to",
    title: "The basic routine for any section",
    summary: "The six steps that work the same way for every section in the theme editor.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "paragraph", text: "Every section is built the same way. Learn this once and the rest of the recipes read as variations." },
      { type: "steps", items: [
        "Open the page you want to edit using the page picker at the top of the editor (Home page, Products, Collections, and so on).",
        "Click Add section in the left panel and choose the section. Drag sections up or down to reorder them.",
        "Click the section to open its settings. Start with Color scheme, then work from the top down.",
        "If the section has blocks, click Add block under it, choose a block type, then click the block to edit its own settings. Drag blocks to reorder them. A block type marked max 1 can only be added once.",
        "Check the preview in the phone view (the device icon at the top) before moving on.",
        "Click Save. Nothing is live to customers until you save.",
      ]},
      { type: "callout", callout: { kind: "tip", text: "Always check the phone preview before saving. Most layout problems merchants report are horizontal on desktop and squeeze badly at 390px." } },
    ],
  },
  {
    slug: "how-to-hero-banner",
    category: "how-to",
    title: "How to build a Hero banner",
    summary: "Add the first section on your home page and get the image, overlay and buttons right.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "steps", items: [
        "Add Hero banner as the first section.",
        "Upload the Image and a Mobile image if the photo crops badly on phones. Drag the image position sliders until the subject stays in view.",
        "Raise Image overlay to 20–40% if the text is hard to read.",
        "Add blocks in this order: Eyebrow, Heading, Text, Buttons. Add Countdown last if you run a sale.",
        "In the Buttons block fill the first button's label and link. Leave the second empty if you only need one.",
        "Set Height and Content position, then check the phone preview.",
      ]},
      { type: "media", kind: "video", caption: "Video: full hero build, from upload to phone preview (60 s).", aspect: "16 / 9" },
    ],
  },
  {
    slug: "how-to-slideshow",
    category: "how-to",
    title: "How to build a Slideshow",
    summary: "Add slides, set each one up, then choose the transition and timing.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Add Slideshow, then Add block → Slide for each slide.",
        "Click each slide: upload its image (and phone image), set the position sliders, then fill the heading, text and button.",
        "Back on the section, set Transition, Change slides automatically and the seconds per slide.",
      ]},
    ],
  },
  {
    slug: "how-to-announcement-header",
    category: "how-to",
    title: "How to set up the announcement bar & header",
    summary: "Messages above the header, then the logo, menu, layout and mega menu.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "steps", items: [
        "In the header group at the top of the editor, open Announcement bar. Add one Announcement block per message, with an optional icon and link.",
        "Choose Style: Slider shows one message at a time; Running text scrolls continuously.",
        "Open Header. Upload your Logo, choose the Menu and the Layout. Set Transparent header only if the first section on the page is a full-width image.",
        "For a mega menu, click Add block → Mega menu and type the exact title of the top-level menu item (or its position number, which works in every language). Choose the menu layout, then save.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Menu position (1, 2, 3…) is the reliable way to attach a mega menu on translated stores — the title changes per language, the position does not." } },
    ],
  },
  {
    slug: "how-to-multicolumn-image-text",
    category: "how-to",
    title: "How to build benefits and story sections",
    summary: "Multicolumn for benefits, Image with text for brand story.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Add Multicolumn, set the number of columns, then add one Column block per benefit with an icon (or image), heading and text.",
        "Add Image with text, upload the image, choose which side it sits on, then add Eyebrow, Heading, Text and Button blocks.",
      ]},
    ],
  },
  {
    slug: "how-to-featured-collection",
    category: "how-to",
    title: "How to add a Featured collection",
    summary: "Pick a collection, choose grid or slider, and let card styling stay global.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Add Featured collection and pick the Collection.",
        "Choose Grid or Slider, the number of products and the columns.",
        "Product card style (image shape, hover image, swatches, quick add, reviews) is set in Theme settings → Product cards, so every card in the store matches.",
      ]},
    ],
  },
  {
    slug: "how-to-product-tabs",
    category: "how-to",
    title: "How to add Product tabs",
    summary: "One block per tab, each pulling products from a collection, a hand-picked list, or tags.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Add Product tabs, then Add block → Tab for each tab.",
        "Click a tab, type the Tab name, then choose Show products from: a collection, products you pick, or products with tags (type the tags separated by commas and choose Any or All).",
        "Back on the section choose the Tab style, the layout and the number of products per tab.",
      ]},
    ],
  },
  {
    slug: "how-to-featured-product",
    category: "how-to",
    title: "How to add a Featured product",
    summary: "A single product buy box you build from blocks, with room for app blocks.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Add Featured product and pick the Product.",
        "Add blocks in the order customers should read them: Title, Price, Variant picker, Quantity, Buy buttons.",
        "To place a third-party app (reviews, subscriptions), click Add block → App block and choose the app.",
      ]},
    ],
  },
  {
    slug: "how-to-bundles",
    category: "how-to",
    title: "How to set up a bundle",
    summary: "Build either bundle section, then make the discount real.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Product bundle: add the section, add one Product block per item, set the Bundle discount, then follow the Bundles and discounts article so the discount is created in Shopify.",
        "Build a bundle: pick the Collection, set Items needed for the discount and the Bundle discount.",
      ]},
      { type: "callout", callout: { kind: "warning", text: "\"Make the discount real\" is the step people skip. Setting the percentage in the section only changes what shoppers see." } },
    ],
  },
  {
    slug: "how-to-product-page-blocks",
    category: "how-to",
    title: "How to build the product page",
    summary: "Reorder the buy box, set up color swatches, and turn on the sticky bar.",
    updatedAt: "2026-10-26",
    readingMinutes: 3,
    blocks: [
      { type: "steps", items: [
        "Open a product page in the editor (Templates → Products → Default product).",
        "Under the Product section, add and reorder blocks: Title, Price, Variant picker, Quantity, Buy buttons, Stock status, Trust badges, Collapsible tabs, Size guide, Share.",
        "For color swatches, use a variant option named Color and list custom shades in Theme settings → Product information → Custom values (one per line, for example Midnight green: #004953).",
        "Turn on the sticky add-to-cart bar under the section's settings and adjust its position, shape and width.",
      ]},
      { type: "media", kind: "video", caption: "Video: reordering product blocks, then adding a custom swatch and turning on the sticky bar.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "how-to-testimonials-faq-forms",
    category: "how-to",
    title: "How to add testimonials, FAQ and forms",
    summary: "Three block-driven sections built the same way — one block per item.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Testimonials: add one Testimonial block per customer with rating, quote, name and photo.",
        "FAQ: add one Question block per question and answer.",
        "Form: add the Form section, then add field blocks in the order they should appear (Text field, Email field, Message box, and so on). Set the button label and the message shown after sending.",
      ]},
    ],
  },
  {
    slug: "how-to-footer",
    category: "how-to",
    title: "How to build the Footer",
    summary: "Layout, link columns, contact, newsletter and the bottom bar.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "In the footer group, open Footer and choose the Layout.",
        "Add blocks: Brand (logo and text), one Links block per link column (pick a menu), Contact, and Newsletter if you want a sign-up column.",
        "Turn on Show payment icons and Show policy links in the bottom bar section settings.",
        "Add your social links in Theme settings → Social media.",
      ]},
    ],
  },
  {
    slug: "how-to-cart-drawer-popup",
    category: "how-to",
    title: "How to set up the cart drawer & popup",
    summary: "The two overlays most stores turn on first.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "In the overlay group below the footer, open Cart drawer and set the width, free shipping threshold and suggestions.",
        "Open Popup, write the heading and text, choose when it appears, and set Show the popup on. Turn on Always show in the theme editor while styling it.",
      ]},
    ],
  },
  {
    slug: "how-to-collection-page",
    category: "how-to",
    title: "How to set up the collection page",
    summary: "Columns, pagination, filter layout, and where the filters themselves come from.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Open a collection (Templates → Collections → Default collection).",
        "In Product grid choose the columns, products per page and the Filter layout (sidebar, top bar or drawer).",
        "Choose which filters appear in Shopify admin under the Search & Discovery app.",
      ]},
    ],
  },

// ── Getting Orbis ──
  {
  slug: "getting-orbis",
    category: "selling-orbis",
  title: "Getting Orbis",
  summary: "Sold exclusively through the Shopify Theme Store — try free, buy when you publish.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
  { type: "paragraph", text: "Orbis is sold exclusively through the Shopify Theme Store. There is no zip file, and no other way to install it." },
  { type: "heading", text: "How it works", level: 3 },
  { type: "bullets", items: [
  "Try first, pay when you publish — adding the trial from the Theme Store listing is free. You buy the license when you are ready to publish Orbis on your store.",
  "One license per store — each store that publishes Orbis needs its own license.",
  "Updates included — new versions appear in Online Store → Themes. Add the update, review it, then publish (see Updating Orbis).",
  "Support — stuck on setup, swatches, bundles, or right-to-left? Contact us through the support link on the Theme Store listing or the Nibrio website.",
  ]},
  { type: "heading", text: "Before you publish", level: 3 },
  { type: "steps", items: [
  "Work through the setup checklist.",
  "Preview on a phone and a laptop.",
  "Confirm your checkout branding in Shopify checkout settings.",
  "Keep a published copy of your previous theme for a few days in case you want to switch back.",
  ]},
    ],
  },
];

export function searchArticles(q: string): DocArticle[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return articles.filter((a) => {
    if (a.draft) return false;
    const hay = [a.title, a.summary, a.blocks.map(b => {
      if (b.type === "paragraph" || b.type === "heading") return b.text;
      if (b.type === "bullets" || b.type === "steps") return b.items.join(" ");
      if (b.type === "table") return b.headers.join(" ") + " " + b.rows.flat().join(" ");
      if (b.type === "callout") return b.callout.text;
      return b.caption;
    }).join(" "), a.category].join(" ").toLowerCase();
    return hay.includes(needle);
  });
}

export function articleBySlug(slug: string): DocArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
