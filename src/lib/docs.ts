/* ── Orbis Theme: Setup and Section Guide — 2026-10-26 · @Usman ──
   Source: Orbis Theme Setup and Section Guide.pdf (14 pages)
   All claims below are from that guide. Slots for screenshots / videos are marked
   as { type: "media", kind: "image"|"video" } so the Nibrio team can drop assets later. */

export type DocCategory = {
  id: string;
  label: string;
  description: string;
  icon: "rocket" | "palette" | "layout" | "shopping-bag" | "shopping-cart" | "file-text" | "sliders" | "life-buoy";
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
    summary: "Upload as an unpublished theme, set it up safely, then publish — your live store is never at risk.",
    updatedAt: "2026-10-26",
    readingMinutes: 4,
    blocks: [
      { type: "paragraph", text: "Always upload Orbis as a new, unpublished copy. Set it up there, preview on phone and laptop, then publish. Your live store is not affected until you press Publish." },
      { type: "steps", items: [
        "In Shopify admin open Online Store → Themes → Add theme → Upload zip file, and choose the Orbis zip.",
        "Open Customize on the new theme and work through the setup checklist (see next article).",
        "Preview on a phone and a laptop, then press Publish.",
      ]},
      { type: "media", kind: "video", caption: "Video: uploading the zip and opening Customize (30–45 s). Drop your screen recording here.", aspect: "16 / 9" },
      { type: "callout", callout: { kind: "tip", text: "For later updates, upload the update zip as another theme copy, or use shopify theme push to send only changed files. Never delete the files your store already uses." } },
    ],
  },
  {
    slug: "setup-checklist",
    category: "getting-started",
    title: "Setup checklist",
    summary: "The 11 steps to go from a fresh install to a launch-ready store.",
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
        "Languages and currencies: enable in Shopify admin → Languages and Markets; selectors appear automatically.",
        "Legal pages: create privacy, shipping and returns policies in Settings → Policies — the footer lists them.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Checkout branding is set in Shopify's checkout settings, not in the theme." } },
      { type: "media", kind: "image", caption: "Annotated screenshot: Theme settings sidebar with the paintbrush icon and the 11 checklist items.", aspect: "16 / 10" },
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
        ["A section disappears from the editor", "Syntax error in that section's file. Run shopify theme check or shopify theme dev and read the error for that file."],
        ["Upload is rejected with an error", "Read the file name in the message. Fix that file, or upload the previous version of it."],
        ["A section or snippet is \"not found\"", "A file was removed or renamed. Restore it from the original download."],
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
      { type: "media", kind: "image", caption: "Diagnostic: running theme check and reading the section error it reports.", aspect: "16 / 9" },
    ],
  },
  {
    slug: "updating-orbis",
    category: "troubleshooting",
    title: "Updating Orbis",
    summary: "Duplicate first, then upload or push — your content stays in Shopify.",
    updatedAt: "2026-10-26",
    readingMinutes: 2,
    blocks: [
      { type: "steps", items: [
        "Duplicate your live theme first (Actions → Duplicate) as a backup.",
        "Upload the update as a new theme, or push only the changed files with the Shopify CLI.",
        "Compare in the editor, then publish.",
      ]},
      { type: "callout", callout: { kind: "info", text: "Your content (products, collections, pages, blog posts, menus) is stored in Shopify, not in the theme. Section settings and blocks are stored in the template files, so replacing a template file resets that page's layout." } },
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
