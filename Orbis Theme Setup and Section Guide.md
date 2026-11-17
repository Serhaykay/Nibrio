# Orbis Theme: Setup and Section Guide

Oct 26, 2026 · @Usman

## Overview

Orbis is a premium Shopify Online Store 2.0 theme for eight niches: arts and crafts, baby and kids, health and beauty, home and decor, jewelry, outdoor and garden, pet supplies, and restaurants. This guide shows how to install it, set it up, and use each section.

- **Built for Online Store 2.0.** Every page is made of sections and blocks you add, reorder and style in the theme editor, with no code.
- **One color system.** Every section starts with a Color scheme setting, and text and button colors follow it. Individual elements can override it.
- **Images and video you can crop.** Every image or video has horizontal and vertical focal point settings, so the important part stays visible on any screen.
- **Languages and right-to-left.** Layout uses logical CSS, so Arabic, Hebrew, Persian and Urdu flip correctly. Translation files for more languages are planned.
- **Built-in speed options.** Lazy loading, link prefetch and off-screen rendering switches live in Theme settings.

**Requirements.** A Shopify store on any paid plan, and a modern browser for the editor. Automatic bundle discounts also need permission to create a custom app in your Shopify admin.

**Good to know.** Reviews need a reviews app that writes the standard `reviews.rating` and `reviews.rating_count` product metafields. Partial or deferred pre-order payment needs a selling-plan app.

## Install and first-time setup

Orbis is sold exclusively through the Shopify Theme Store. There is no zip file to download or upload.

1. Open the Orbis listing on the Shopify Theme Store and choose **Try theme**. This adds an unpublished trial copy to your store.
2. In Shopify admin open **Online Store > Themes** and press **Customize** on the Orbis trial copy. Work through the checklist below.
3. Preview on a phone and a laptop. When you are happy, buy the Orbis license in the Theme Store, then press **Publish**.

Your live store is not affected until you press Publish. Theme updates arrive through the Theme Store (see Updating the theme).

### Setup checklist

- [ ] **Theme settings > Colors.** Edit the color schemes (each has background, text, accent, button and button label colors). Every section picks one of these.
- [ ] **Theme settings > Typography.** Choose heading and body fonts and the heading scale.
- [ ] **Theme settings > Layout and Shape.** Set page width, spacing, corner radius and card ratio.
- [ ] **Header.** Upload your logo, choose a layout (inline, centered, split or drawer), choose the menu, and set the transparent header options if you want it over a hero.
- [ ] **Navigation.** In Shopify admin create the menus (Content > Menus) that the header and footer use.
- [ ] **Footer.** Add your logo, link lists, contact details and social links (social links are in Theme settings > Social media).
- [ ] **Home page.** Add and order sections (see the home page section below).
- [ ] **Products and collections.** Add products with images, options and the metafields you plan to use (reviews, pre-order, size guide).
- [ ] **Cart.** Set the free shipping threshold, suggestions and gift wrap in the Cart drawer section (Overlays group).
- [ ] **Checkout.** Checkout branding is set in Shopify's checkout settings, not in the theme.
- [ ] **Languages and currencies.** Enable them in Shopify admin Settings > Languages and Markets. The header and footer selectors appear automatically.
- [ ] **Legal pages.** Create privacy, shipping and returns policies in Settings > Policies. The footer lists them.

## Theme settings reference

Theme settings apply to the whole store. Open them from the theme editor with the paintbrush icon (Theme settings).

| Group | What you control |
| --- | --- |
| Colors | Color schemes. Each has background, surface, text, accent, button and button label colors. Sections pick a scheme by name. |
| Typography | Heading and body fonts, heading size scale, uppercase headings. |
| Layout | Page width and section spacing. |
| Shape | Corner radius of buttons, inputs and cards. |
| Product cards | Card style, text panel and panel color, image ratio and fit, swatch position (side or below), shape and size, quick action (view more or add to cart, text or icon), vendor, rating and badges (Sale, New for 14 days, custom). |
| Product information | Which option becomes a swatch, swatch source (color or variant image), pre-order switch, tag and label. |
| Breadcrumbs | Style (chevron, slash, arrow, dot, pills, bar, underline), size, alignment, home icon, colors. |
| Cart | Cart type (drawer or page) and the cart page options. The drawer has its own settings in the Cart drawer section. |
| Search and localization | Predictive search and popular search terms. |
| Social media | Links used by the footer and header icons. |
| Performance and custom code | Lazy loading, link prefetch, off-screen rendering, and a global Custom CSS box. |
| Favicon and animation | Favicon, scroll-reveal animations, and the option to respect the visitor's reduced-motion setting. |

### Color schemes

Every section has a **Color scheme** setting at the top. Create two or three schemes (for example light, tinted, dark) and reuse them. Text and button colors in a section follow its scheme. Some elements, such as a hero heading, also allow an optional color override.

### Swatches

Option values named like colors (Black, Navy, Rose and about 700 names in many languages) show as color circles automatically. To use your own colors or images, set the swatch source to **Variant image** or add custom values in the swatch map in Theme settings > Product information. A swatch can be a circle or a square.

## Header, menus and mega menu

The header lives in the Header group at the top of the editor, with the announcement bar above it.

**Header settings**

- **Layout:** inline, centered, split or drawer (menu in a side drawer).
- **Logo:** desktop logo, mobile logo, logo width, and where the logo sits on mobile (left or center). The logo can be centered on desktop with the menu on the left.
- **Menu opening:** open on hover, or open on click only. Hover uses hover-intent, so a menu opens only when the pointer actually moves to it.
- **Transparent header:** the header sits over the first section (hero, slideshow, video banner or progress tabs). Set separate text and icon colors and an overlay strength. You can upload a separate logo for the transparent state.
- **Color scheme, divider line, dimming the page when a menu is open.**

**Mega menu.** Add a **Mega menu** block to the header. Its settings decide which menu item it belongs to (by position, or by typing the item's title). Choose a layout: columns, thumbnails or sidebar. Tile images, promo tiles and text are all set inside the block, not as extra blocks.

**Collection menu.** Add a **Collection menu** block to show your collections as image tiles. It can be placed as the first menu item.

**Tips**

- Keep top-level items to six or fewer so the header stays on one line.
- Build menus in Content > Menus first. The mega menu reads the child links of the item it belongs to.
- If a menu opens by itself while you scroll, switch Menu opening to click only.

## Home page sections

Open the home page in the editor and use **Add section**. Drag to reorder. Every section has a color scheme, spacing, a **Custom class** and a **Custom CSS** field.

| Section | Use it for | Key settings |
| --- | --- | --- |
| Hero banner | Main banner with eyebrow, heading, text and buttons as blocks | Image and mobile image, focal point, overlay, parallax (slow or fixed picture), text box, countdown block |
| Slideshow | Several slides | Fade, slide or reveal transition, next-slide card, autoplay, per-slide image focal point, per-slide countdown |
| Video banner | Video with text | Shopify video, YouTube or Vimeo, direct link, separate mobile video, autoplay and pause options, countdown |
| Before and after | Image comparison slider | Two images, labels, starting position |
| Product hotspots | Pins on a photo | Click a dot to open the product in quick view |
| Content collage | Mixed grid | Image, collection, product, video and text blocks |
| Scrolling text | Marquee strip | Speed, direction, separators |
| Progress tabs banner | Rotating banner with tabs | Per-tab heading, image and image position |
| Sticky image showcase | Image stays while text scrolls | Image, blocks |
| Accordion showcase | Image with animated accordion | Items with text |
| Featured product | One product with its details | Blocks for the info column, including app blocks |
| Product tabs | Tabs of products | Each tab uses a collection, hand-picked products, or products by tag. Style, slider or grid, columns, colors |
| Specifications | Table from product metafields | Metafield-driven rows |
| Video scroller | Horizontal row of videos | Video blocks |
| Featured blog posts | Latest or hand-picked posts | Manual selection and a matching View all button |
| Collection list | Grid of collections | Collection card style, image shape |
| Product bundle | A set of products sold together | List or column layout, discount percent |
| Build a bundle | Customer picks items for a bundle | Collection, minimum items, discount percent |
| Form | Contact or custom forms | Field blocks (see Pages, blog and forms) |
| Breadcrumbs | Standalone breadcrumb row | Alignment, structured data |

### Pointers

- **Buttons** in banners can have their own button color and label color. Leave them empty to follow the color scheme.
- **Focal point.** Use the horizontal and vertical sliders on any image to choose which part stays visible when the image is cropped.
- **Countdown.** Choose Until a date (format 2026-12-31 23:59, with a time zone in hours from UTC) or Restarts for each visitor (an evergreen timer of 1 to 72 hours).
- **App blocks.** Where a section lists App blocks, you can place third-party app blocks inside it.

## Product page

Open any product in the editor. The **Product** section holds the gallery and a column of blocks you can reorder, add and remove.

### Blocks in the details column

Vendor, Title, Rating, Price, Text, Description, Variant picker, Quantity, Buy buttons, Stock status, SKU, Trust badges, Collapsible tab, Size guide, Countdown, Personalization, Sibling products, Share, and App blocks for third-party apps.

### Gallery

- **Layouts:** thumbnails below, thumbnails at the side, grid, stacked (large first image), or one column list. Mobile can be a carousel, grid or list.
- **Media width:** small, medium, large or wide (images on the left, details on the right), and media position start or end.
- **Image shape:** adapt to the image, square, portrait or landscape. Images fill the frame.
- **Zoom** opens a lightbox. **Sticky column** keeps either the images or the details in view while you scroll.
- **Show images for the chosen color.** Put the color name in the image's alt text or file name (for example `navy-front.jpg`). Choosing Navy then shows only the Navy pictures. Images matching no color show for every choice.

### Sticky add-to-cart bar

A small floating bar that appears once the main button scrolls out of view. Settings:

- Position: bottom center, start or end, and top or bottom edge.
- Shape: pill, rounded or square. Width and distance from the edge.
- Color scheme and optional button and label colors.
- Show or hide the image, title and price. Custom button label.
- Shadow, frosted glass look, and show on mobile.

### Pre-order

1. In Shopify admin, open the product and tick **Continue selling when out of stock**.
2. Mark the product: add the tag `preorder` (or set the product metafield `custom.preorder` to true).
3. Optional ship date: set the metafield `custom.ship_date` (a date, or short text such as mid December).
4. In **Theme settings > Product information**, turn on Pre-order and choose the label.

The Add to cart button then reads Pre-order, the ship date shows under it, and the order line carries a Ships note. The same label appears in the sticky bar and on cards. This sells the item now and charges in full at checkout. To charge part now and the rest later, use a selling-plan app.

### Other blocks

- **Countdown:** a sale timer on the product page (date or evergreen).
- **Personalization:** text fields, such as engraving, that are added to the order line.
- **Size guide:** link from an image, table, page or product metafield.
- **Reviews:** the Rating block reads `reviews.rating` and `reviews.rating_count`. Install a reviews app that writes them, or the block shows a placeholder.

## Collection page, filters and product cards

The collection template has an optional **Collection banner** (title, description, image, breadcrumb) above the **Collection** section that holds the toolbar, filters and product grid.

### Collection section settings

- **Filter position:** sidebar on the left, sidebar on the right, a bar above the products, or a slide-in drawer. On phones and tablets, filters always open in a drawer.
- **Columns** on desktop and mobile, products per page, and pagination (numbers or load more).
- **Toolbar:** product count, sort menu, filter button.
- **Breadcrumbs:** on or off (style is in Theme settings > Breadcrumbs).

Filters come from Shopify's Search and Discovery app: open it in your admin to choose which filters appear (availability, price, color, size, product type, and so on). Color filters show swatches using the same color names as product pages.

### Product cards

Card look is global and set in **Theme settings > Product cards**.

- **Styles:** simple, overlay (text over the image), and more designs including boutique and floating. A text panel option puts the text in a tinted box.
- **Image:** ratio, fit (cover or contain), padding, hover image.
- **Quick action:** View more (opens a quick view with variants and add to cart) or Add to cart, as text or an icon, on the image, beside the details, or below.
- **Swatches:** on the right of the name and price, or below. Clicking a swatch changes the card image. Shape (round or square), size, and how many show.
- **Badges:** Sale, New (for 14 days), a custom badge, up to three at once.
- **Rating:** stars and review count from the `reviews.rating` and `reviews.rating_count` metafields. Turn it on or off in Theme settings.
- **Collection cards** (used by Collection list and the collection menu) have their own styles: classic, simple, overlay, arch and label, with image shape and fit controls.

## Cart drawer, upsell and popup

Three page-wide overlays live in the **Overlays** group, shown at the bottom of the section list in the editor on every page: **Cart drawer**, **Cart upsell** and **Popup**.

### Cart drawer

It is used when **Theme settings > Cart > Cart type** is Drawer. Settings:

- Side it opens from (left or right), width, title, product image shape, and whether it opens when something is added.
- **Free shipping bar:** on or off and the threshold in your store currency. It converts for other currencies.
- **Suggestions:** on or off, heading, source (Shopify recommendations, products you choose, or a collection), how many to show, add-button label, show price and image.
- **Extras:** order note, and gift wrap. For gift wrap, create a product called Gift wrap, select it, and set its price (0 for free).
- **Footer:** checkout button label, View cart link, tax and shipping note.

A product can also carry its own suggestions: give it a list metafield `custom.cart_upsells` (products). Those show first when that product is in the cart.

The cart page uses the matching options in Theme settings > Cart.

### Cart upsell

This section styles the automatic suggestions Shopify recommends: how many to load, the add-button label, and whether price and image show. Hand-picked and collection suggestions use the Cart drawer settings.

### Popup

Turn on **Show the popup** and choose where it appears (every page, home, collection, product, blog, or everywhere except the cart). Options include text, image and position, a countdown, an email sign-up form with a discount code, a No thanks link, the trigger (time delay or scroll depth), how many days before it reopens, and which devices see it. **Always show in the theme editor** lets you design it without waiting for the trigger. Visitors are not affected.

## Bundles and discounts

A theme cannot create a Shopify discount on its own, because it has no access to your store's Admin API. Orbis gives you two bundle sections and three ways to make the discount real.

### The two bundle sections

| Section | How the customer uses it | Discount setting |
| --- | --- | --- |
| Product bundle | Sees a fixed set of products as a list (image, title, price, quantity, variants), then adds the whole set | Discount percent, optional discount code |
| Build a bundle | Picks items from a collection in a grid, a floating bar shows the total | Minimum items, discount percent, optional discount code |

Both add the items as one bundle: each cart line carries hidden properties (`_bundle`, `_bundle_pct`, `_bundle_min`) plus a visible Bundle name.

### Making the discount apply (choose one)

1. **Sync script (recommended, no app needed).** In `orbis-discounts/tools/`, run `sync-bundle-discounts.mjs`. It reads your live theme's bundle sections and creates one automatic discount per bundle in Shopify. Steps:
   1. In Shopify admin go to Settings > Apps and sales channels > Develop apps, create an app, give it the Admin API scopes `read_themes`, `read_products`, `read_discounts` and `write_discounts`, install it, and copy the token.
   2. Preview: `SHOPIFY_STORE=your-store.myshopify.com SHOPIFY_ADMIN_TOKEN=shpat_xxx node tools/sync-bundle-discounts.mjs`
   3. Create or update: add `--apply`. Add `--prune` to delete the discounts of bundles you removed.
   4. Run it again whenever you change a bundle.
2. **Discount code.** Create a code in Shopify Discounts and type it into the bundle's Discount code setting. The theme applies it after the bundle is added.
3. **Shopify Function.** The `orbis-discounts` folder also holds a discount Function that reads the hidden line properties. It must be deployed through a Shopify app with the Shopify CLI.

The sync script makes a normal Shopify discount (X% off these products when the cart holds at least N of them), so it shows in your Discounts list and also applies if a shopper adds the same products without using the bundle section.

## Pages, blog, forms, footer and breadcrumbs

### Pages

The **Page** section shows a header (plain, soft colored band, or image with the title over it) and the page content. Content layout is narrow, wide, or with a table of contents built from the page's H2 headings. App blocks can be added below the content.

To make a Contact page: in Online Store > Pages create a page, set its **Theme template** to **contact**, and open it in the editor. It comes with the Form section.

### Forms

The **Form** section lets you build your own form from field blocks: Text, Email, Phone, Date, Textarea, Select, Radio, Checkbox, Heading, and App blocks (for example the Shopify Forms app).

- Each field has a label, placeholder, required flag and width (full or half).
- A Text field can be sent as the customer's name, and a Textarea as the message body.
- Layout is centered or split with an image. Field style is outlined, filled or underline.
- Submissions go to your store's sender email (Settings > Notifications), and a customer record is created when an email is given. Shopify adds spam protection.
- Presets include Contact form and Wholesale application.

### Blog

The **Blog page** shows a header, optional tag filters (pills, underline or plain text), the newest article as a large feature, and a grid or list of cards. Card styles: image then text, text over the image, or minimal with a category line. You can show category, date, author, reading time and an excerpt. The **Article** page shows the post, author, date, tags and breadcrumbs.

### Footer

The **Footer** is in the Footer group. Settings: color scheme, layout (columns, split or centered), a newsletter band on top, and a giant faint wordmark. Add blocks for Brand (logo and text), Links (a menu), Text, Contact (address, email, phone, hours), Newsletter, and Image.

The bottom bar shows the copyright, policy links, **payment icons**, language and country selectors, and a Back to top link. Payment icons come from the payment methods enabled in Shopify (Settings > Payments), so they update by themselves. Use the checkboxes in the Footer settings to show or hide each part. Social icons use the links in Theme settings > Social media.

### Breadcrumbs

Breadcrumbs show on product, collection, blog and article pages, and include search engine data (BreadcrumbList). Choose the style, size, alignment and colors once in Theme settings > Breadcrumbs. On a page template, add the **Breadcrumbs** section or use the Page section's built-in breadcrumb.

## Speed, security, languages and right-to-left

### Speed

The options are in **Theme settings > Performance and custom code**. The defaults are the fastest safe choice.

| Option | What it does |
| --- | --- |
| Lazy load images | Images below the first screen load only when the visitor scrolls near them. The first image of each page always loads right away. |
| Prefetch pages on hover | Starts loading a page when a visitor points at its link. Skipped on slow connections and data saver. |
| Skip rendering of off-screen footer and recommendations | The browser draws them only when they come near the screen. |

Other built-in speed work: scripts are deferred, fonts are preloaded with swap, the first hero, slideshow and product image is marked high priority, and images use responsive sizes.

**Tips for a fast store.** Upload images no wider than 2400 px, keep the home page to the sections you need, use one or two fonts, and keep the number of installed apps small.

### Security

- Text typed into settings is escaped where it is shown in attributes, and rich text is sanitized by Shopify.
- External links open with `rel="noopener"`. Forms use Shopify's built-in form tags, which include spam protection.
- Custom CSS fields strip anything that could close the style tag. Custom class names accept only letters, numbers, hyphens and underscores.

### Languages and right-to-left

Add languages in Shopify admin (Settings > Languages), then translate the theme text in the editor (Language menu at the top) or with a translation app. The theme detects Arabic, Hebrew, Persian, Urdu and similar languages and flips the layout. Color swatches recognize color names in many languages. Theme text lives in `locales/en.default.json`.

### Custom CSS and custom classes

- **Theme-wide:** Theme settings > Performance and custom code > Custom CSS.
- **Per section:** every section ends with **Custom class** and **Custom CSS**. The class is added to the section's wrapper, so you can write `.my-class .button { border-radius: 0 }`. Custom CSS applies to that section only.

## Section-by-section settings

This chapter lists every section's settings in the order the theme editor shows them, with what each one does. In the editor, click a section in the left panel to see its settings; click a block under it to see the block's own settings. Every section has a **Color scheme** at the top, plus **Custom class** and **Custom CSS** at the bottom (see the Custom CSS section above).

How to read the lists: a **Choices** note lists the options of a dropdown, a range such as 0–100% shows the slider limits, and "Leave empty" means the color scheme decides until you pick your own.

## Home page and marketing sections

### Hero banner

A full-width banner with text over an image. Use it first on the home page.

*Section settings*

- **Color scheme** — Sets the default text and button colors. It never paints a background over your image. Override any color below or on each block.
- **Image** and **Mobile image** — The mobile image is optional and shows on screens narrower than 750px.
- **Parallax effect on the image** — Turn on, then choose the style: Fixed picture (the next section scrolls over it) or Moves slower than the page. Strength: Subtle / Medium / Strong.
- **Image position** — Horizontal and vertical focal-point sliders (0–100%) decide which part stays visible when the image is cropped. There is a separate pair for mobile.
- **Image overlay color** and **Image overlay** — 0% leaves the image untouched; raise it (up to 90%) to darken or tint the image behind the text.
- **Height** — Small / Medium / Large / Full screen.
- **Content position** — Top, Middle or Bottom, each at start, center or end.
- **Text alignment** — Start / Center / End.
- **Show content in a box**

*Blocks*

- **Eyebrow** (max 1): Text; Text color.
- **Heading** (max 1): Heading; Size (Medium / Large / Extra large); Heading color.
- **Text** (max 1): Text; Text color.
- **Buttons** (max 1): label, link, style (Solid / Outline), color and text color for the first and second button. Empty colors use the color scheme.
- **Countdown** (max 1): Off / Until a date / Restarts for each visitor; End date and time (format 2026-12-31 23:59); Time zone (hours from UTC); Length in hours (1–72); Text above the countdown; Style (Boxes / Frosted glass / Plain numbers); Size; When it ends (Hide the countdown / Keep showing zeros).

### Slideshow

Several slides in a row, each with its own image, text and buttons.

*Section settings*

- **Color scheme**
- **Height** — Small / Medium / Large / Full screen.
- **Parallax effect on the images** — Style and strength as in the Hero.
- **Change slides automatically** and **Seconds per slide** (3–12).
- **Transition** — Reveal from the middle / Fade / Slide.
- **Show a 'next slide' preview card**
- **Show the controls bar** and **Position indicator** (Number or Dots).
- **Accessible name** — Read aloud by screen readers.

*Blocks*

- **Slide**: Image; Image on phones (optional, for a differently cropped photo); Image position horizontal and vertical; Eyebrow; Heading and Heading size; Text; Content position; First and second button label, link and style.

### Video banner

A banner with a video background or a hosted video, with overlay text.

*Section settings*

- **Color scheme**
- **Video source** — Upload to Shopify / YouTube or Vimeo link / Direct file link (.mp4 / .webm). Fill in the matching field: Video file, Video link or Direct video link.
- **Mobile video (optional)** — A portrait or lighter file for phones. Shopify upload only.
- **Cover image** — Shown before the video plays.
- **How it plays** — Autoplay (muted, loops, plays when visible) or Play button (starts with sound).

*Size and layout*

- **Layout** — Full width / Inside the page width, rounded.
- **Size** — Custom height / Video shape 16:9 / Cinema 21:9 / Full screen. Height on desktop (16–56rem) and on mobile (14–48rem) apply to Custom height.
- **Video fit** — Fill (crops the edges) / Show everything. **Video position** horizontal and vertical set what stays visible when cropped.

*Playback*

- **Loop**, **Show pause and sound buttons**, **Pause when scrolled out of view**.
- **Autoplay on mobile** — Turn off to save mobile data: phones then show the cover image with a play button.
- **Respect 'reduce motion' device setting** — When on, visitors whose device asks for reduced motion see a play button instead of autoplay. Leave off if your own device has reduce motion enabled, otherwise the video will not autoplay for you.
- **Play button size** and **Pause and sound buttons position**.

*Content*

- Eyebrow, Heading, Heading size, Text, Content position, Content width (20–60rem), Animate the content in, and first and second button (label, link, style).

*Colors and overlay*

- Heading, Text, Button and Button text colors (empty uses the color scheme), Overlay color, Overlay (0–80%) and Overlay style (Even tint / Fade from the bottom).

*Countdown* — same options as the Hero countdown.

### Video scroller

A horizontal row of short vertical videos that visitors scroll through.

*Section settings*

- **Color scheme**, **Heading**, **Heading alignment**.
- **Video width** (12–26rem) and **Video shape** (Tall 9:16 / Portrait 4:5 / Square). **Video position** horizontal and vertical.
- **Space between videos**, **Show arrows**.
- **Play videos when they are on screen** — Videos start muted and pause when scrolled away.
- **When a product card is clicked** — Open quick view / Go to the product page.

*Blocks*

- **Video**: Video file; Cover image (optional); Name or handle; Show the verified tick; Product (optional, shows a small product card on the video).

### Announcement bar

The thin message bar above the header. Add one announcement block per message.

*Section settings*

- **Color scheme**
- **Style** — Slider (one message at a time) or Running text (continuous scroll).
- **Size** — Compact / Regular. **Uppercase text** is ignored for scripts without letter case.
- **Slider options** — Transition (Slide up / Fade), Change messages automatically, Change message every (3–10s).
- **Running text options** — Speed (20–140 px/s), Direction, Separator between messages (Dot / Sparkle / Slash / None), Pause on hover.
- **Show language and country selectors** — Desktop only. Choose which selectors appear in Theme settings > Search and localization.

*Blocks*

- **Announcement**: Icon (None / Delivery / Gift / Sparkle / Star / Heart / Returns / Shield); Text; Link; Link text (optional, for example "Shop now").

### Image with text

An image beside a block of text. Good for story and brand sections.

*Section settings*

- **Color scheme**, **Image** and **Image position** (focal point).
- **Layout** — Image first / Text first.
- **Image width** — Small / Medium / Large. **Image ratio** — Adapt to image / Square / Portrait / Landscape.
- **Text alignment** — Start / Center / End.

*Blocks*

- **Eyebrow** (max 1): Text. **Heading**: Heading and Size. **Text**: Text. **Button**: Label, Link, Style (Solid / Outline).

### Rich text

A centered text-only section for a heading, paragraph and button.

*Section settings*

- **Color scheme**, **Alignment** (Start / Center / End), **Content width** (Narrow / Medium / Wide).

*Blocks* — Eyebrow (max 1), Heading with Size, Text, and Button with Label, Link and Style.

### Multicolumn

Columns of icon or image plus text, for benefits and features.

*Section settings*

- **Color scheme**, **Heading**, **Columns on desktop** (2–5), **Alignment**, **Show columns as cards**.

*Blocks*

- **Column**: Image (replaces the icon when set); Icon (None / Delivery / Shield / Leaf / Heart / Gift / Star / Returns); Heading; Text; Link label; Link.

### Scrolling text

A marquee strip of repeating text.

*Section settings*

- **Color scheme**, **Speed** (1–10), **Direction**, **Text size** (16–140px), **Text style** (Heading font / Body font).
- **Between items** — Dot / Star / Slash / Dash / Nothing.
- **Outlined text**, **Pause on hover**, **Space above and below** (0–80px).

*Blocks*

- **Text**: Text; Small image (optional, shown before the text); Link.

### Content collage

A mosaic that mixes images, collections, products, videos and text.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Text**, **Heading alignment**.
- **Columns on desktop** (3–6), **Row height** (8–28rem), **Gap** (0–32px).

*Blocks* — each block has a **Size**: Small is one cell, Wide is two across, Tall is two down, Large is both.

- **Image**: Image; Picture position; Link; Caption heading, text and color.
- **Collection**: Collection; Picture position; Title override.
- **Product**: Product; optional Image; Picture position; When clicked (Open quick view / Go to the product page).
- **Video**: Video file (plays silently on a loop) or a YouTube / Vimeo link; Picture position; Video fit; Title; Text; Text color; Link.
- **Text**: Eyebrow; Heading; Text; Button label and link; its own Color scheme.

### Before and after

A draggable comparison of two images.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Text**, **Heading alignment**.
- **Before image** and **Before label**; **After image** (use a photo with the same framing) and **After label**.
- **Direction** — Left and right / Up and down. **Starting position** (10–90%).
- **Image shape** — Landscape 4:3 / Wide 16:9 / Square / Portrait. **Maximum width** (400–1400px).

### Accordion showcase

Expanding panels, each revealing an image and text.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Heading size**, **Item title size** (1–2.5rem).
- **Image position** — End / Start. **Image shape** — Square / Portrait / Landscape.
- **Open the next item automatically** and **Seconds per item** (3–15).
- **Product card on the image** — Pick a **Product** to show a small add-to-cart card over the image, and set its **Button label**.

*Blocks*

- **Item**: Title; Text; Image; Image position horizontal and vertical.

### Progress tabs banner

Tabs that auto-advance with a progress bar, each tab with its own image.

*Section settings*

- **Color scheme**, **Heading shown when a tab has none of its own**, **Heading size**.
- **Move to the next tab automatically**, **Seconds per tab** (3–15), **Pause while hovering**.
- **Height on desktop** (24–60rem) and **on mobile** (24–50rem).
- **Dark overlay** (0–80%) — A soft shade from the bottom so the text stays readable.
- **Heading color**, **Tab text color**, **Loading line color** — Leave empty for white.

*Blocks*

- **Tab**: Background image; Image position horizontal and vertical; Heading (large text that changes with the tab); Title; Text.

### Sticky image with products

A sticky image beside a scrolling list of products.

*Section settings*

- **Color scheme**, **Main image** (stays in place while the products scroll) and its **Image position**.
- **Image position** — Start / End. **Image width compared to the products** (1–4x). **Space above the sticky image** — use the height of your header (0–200px).
- **Text on the image** — Eyebrow, Heading, Heading size, Button label, Link, Text color (empty for white), Shade at the bottom (0–80%).
- **Product columns on desktop** — 1 or 2.

*Blocks*

- **Product**: Product.

### Testimonials

Customer quotes in a slider or grid.

*Section settings* — **Color scheme**, **Heading**, **Columns on desktop** (1–4).

*Blocks*

- **Testimonial**: Rating (0–5); Quote; Name; Subtitle (for example a city or a role); Photo.

### FAQ

Questions and answers in an accordion.

*Section settings* — **Color scheme**, **Heading**, **Open the first question**.

*Blocks*

- **Question**: Question; Answer.

### Menu

A restaurant-style menu with categories and dishes. Built for the restaurant niche.

*Section settings* — **Color scheme**, **Eyebrow**, **Heading**, **Button label**, **Button link** (online ordering, a reservation page or a collection).

*Blocks*

- **Category**: Title. Dishes listed after it belong to it.
- **Dish**: Name; Price; Description; Tags (for example Vegan, Spicy, Gluten free); Image.

### Newsletter

An email sign-up form with heading and text.

*Section settings* — **Color scheme**.

*Blocks* — **Heading** (max 1) and **Text** (max 1).

### Form

A form builder for contact, quote or wholesale forms. Submissions go to your store email and Customers list.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Text**, **Text alignment (side layout)**.
- **Layout** — Centered, text above the form / Split: text and image beside the form. **Form width** (420–900px) applies to the centered layout.
- **Field style** — Outlined / Filled / Underline. **Space between fields** (8–40px).
- **Image (split layout)** with a horizontal and vertical focal point.
- **Button label**, **Full width button**, **Message after sending** (empty uses the translated default), **Note above the button** (for example a link to your privacy policy).

*Blocks*

- **Text field**, **Email field** (max 1), **Phone field** (max 1), **Date field**, **Message box**, **Dropdown** (options one per line), **Choice buttons** (options one per line), **Checkbox**, **Group heading**. Fields have Label, Placeholder, Required and a Width of Full or Half; the text field and message box also have Send as (the sender's name or message, or a custom field named by the label).
- **App blocks** — Add a block from any installed app.

## Product and collection sections

### Featured collection

A grid or slider of products from one collection.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Heading alignment**.
- **Collection** — The collection to show. **Products to show** (2–16).
- **Layout** — Grid / Slider. **Columns on desktop** (2–6) and **on mobile** (1 or 2).
- **Show "View all" button** and **View all link position** (Below the products / Next to the heading).
- **Countdown timer** — None / Counts down to a date / Restarts for each visitor. Set **End date and time** (format 2026-12-31 23:59), **Time zone (hours from UTC)** (for example 1 for Lagos, 0 for London, -5 for New York) and, for the restarting timer, **Length (hours)**. It starts on a visitor's first visit.

### Featured product

One product shown in full with its own buy box.

*Section settings*

- **Color scheme**, **Product**, **Eyebrow**, **Heading**, **Heading alignment**.
- **Image position** (Start / End), **Image width** (Half / Wider / Narrower), **Image shape** (Portrait / Square / Landscape).
- **Description length (without blocks)** — 10–100 words.

*Blocks* — add and reorder these to build the buy box, and add an **App block** to place a third-party app (reviews, subscriptions, upsell) anywhere in it.

- **Vendor**, **Price**, **Variant picker**, **Quantity** (max 1 each).
- **Title**: Size; Link the title to the product page.
- **Rating**: Star size; Show the average; Show number of reviews.
- **Text**: free text.
- **Description**: Length (10–100 words).
- **Buy buttons**: Show dynamic checkout buttons.
- **View details link**: Label; Style (Link / Outlined button).

### Product tabs

Tabs that each show a different set of products, picked by collection, tag or by hand.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Subheading**, **Heading alignment**.
- **Tab style** — Underline / Filled pills / Outlined pills / Segmented bar / Plain text. Also **Tab alignment**, **Tab text size**, **Space between tabs** (4–48px).
- **Tab text color**, **Active tab text color**, **Active tab background / underline color** — Leave empty to follow the color scheme.
- **Layout** — Slider / Grid. **Products per tab** (2–24), **Columns on desktop** (2–6) and **on mobile**, **Space between products** (8–48px).
- **Show arrows**, **Show progress bar** (slider), **Show 'View all' link** with its label and style (Underlined link / Button), **Controls alignment**.

*Blocks*

- **Tab**: Tab name; **Show products from** — A collection / Products I pick / Products with tags.
  - A collection: choose **Collection**.
  - Products I pick: choose **Products**.
  - Products with tags: type **Tags** separated by commas (for example new, summer) and set **Match** to Any or All of the tags. Optionally pick a **Collection** to limit the search; leave it empty to search the whole store. Only the first 50 products of the collection (or store) are checked.
  - **Link** is optional; by default it goes to the collection.

### Recommended products

Related or complementary products that load automatically.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Heading alignment**.
- **Products shown** — Related (automatic) / Complementary (Search & Discovery app) / Products I pick / A collection. Fill in **Products** or **Collection** to match.
- **Let each product choose its own** — A product with the metafield custom.recommended\_products (type: list of products) shows those instead. Complementary products are set up in the Search & Discovery app.
- **Layout** — Grid / Slider. **Products to show** (2–12), **Columns on desktop** (2–5) and **on mobile**.

### Product hotspots

A lifestyle image with clickable dots that open a product.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**, **Text**, **Heading alignment**, **Image**.
- **When a product card is clicked** — Open the quick view window / Go to the product page.

*Blocks*

- **Hotspot**: Product; Horizontal and Vertical position (0–100%). Drag the sliders until the dot sits on the item in the photo.

### Collection list

A grid or slider of collection cards.

*Section settings*

- **Color scheme**, **Heading**, **Heading alignment**, **Columns on desktop** (2–5) and **on mobile**, **Show product count**.
- **Card style** — Classic (text under the image) / Simple (soft box) / Text over the image / Arch / Label (box on the image).
- **Image shape** — Square / Portrait / Tall portrait / Landscape / Wide / Photo's own shape. **Image fit** — Fill the box (cover) / Show the whole image (contain).
- **Space around the image** (0–40px), **Fixed image height** (0 uses the image shape; up to 600px), **Text backdrop** for text over the image (0–90%).

*Blocks*

- **Collection**: pick the collection.

### Featured blog posts

Your latest blog posts as cards.

*Section settings*

- **Color scheme**, **Eyebrow**, **Heading**.
- **Posts come from** — A blog (latest posts), then choose the **Blog**; or Posts I pick myself, then add **Post** blocks.
- **Show 'View all' button**, **'View all' link** (for picked posts only, for example your blog page) and **'View all' style**.
- **Posts to show** (2–6), **Columns on desktop** (2–4), **Card shape**, **Image position**.
- **Show the category (first tag)**, **Show the date**, **Shade behind the text** (0–80%), **Text color** (empty for white).

### Product bundle

A fixed bundle of products with a bundle discount.

*Section settings*

- **Color scheme**.
- **Image side** — Image, Image position (focal point), Image position Start / End, Image overlay (0–80%), Eyebrow, Heading, Text.
- **Layout** — List (one product per row) / Columns (side by side). **Row style** — Lines between rows / Bordered cards / Soft filled cards.
- **Image shape**, **Image fit**, **Image width (list layout)** (64–220px), **Product title size**, **Space between rows**, **Product title color**, **Price color**.
- **Show vendor**, **Show price**, **Show quantity stepper**, **Maximum quantity per product** (1–20).
- **Bundle discount** (0–60%) — The saving shown to customers. It becomes real when a matching discount exists in Shopify; see the Bundles and discounts chapter.
- **Discount code to apply (optional)** — Create the code in Shopify admin (for example 20% off, minimum quantity matching your bundle). It is applied automatically when the set is added, so the discount works without the Function.
- **Button label**, **Show the discount in the button**.
- **Countdown** — same options as the Hero.

*Blocks*

- **Product**: choose each product in the bundle.

### Build a bundle

Lets the customer build their own bundle from a collection.

*Section settings*

- **Color scheme**, **Heading**, **Text**, **Heading alignment**.
- **Collection** — Shoppers pick items from this collection. **Products to show** (3–24), **Columns on desktop** and **on mobile**, **Image shape**, **Image fit**.
- **Items needed for the discount** (2–10).
- **Bundle discount** (0–60%) — To really take it off at checkout, deploy the Orbis discount Function (orbis-discounts/README.md) or create a discount code in Shopify and enter it below.
- **Discount code to apply (optional)** — Applied automatically when the bundle is added.
- **Bundle name in the cart** — Shown on each cart line as 'Bundle: name'. Leave empty to use the heading.
- **Bar title**, **Button label**.

## Product page and collection page

### Product (main product page)

The product page. Section settings control the gallery and sticky bar; the buy box is built from blocks you can reorder.

*Section settings*

- **Color scheme**, **Show breadcrumbs** (style: Theme settings > Breadcrumbs).
- **Gallery** — Desktop layout (Carousel with thumbnails below or on the side / Grid of 2 equal columns / Grid with a large first image / Single column list), Mobile layout (Swipeable carousel / Grid / Single column list), Image ratio, Gallery width, Images position (Start / End), Open images in a zoom lightbox.
- **Sticky column (desktop)** — Keeps one side in view while the other scrolls. Use "Images stay in place" when the product details are long.
- **Sticky add-to-cart bar** — Turn on **Show a sticky add to cart bar** for a small floating bar that appears once the main button scrolls out of view. Then customize it: Position (bottom center, bottom end, bottom start), Edge (bottom or top of the screen), Shape (Pill / Rounded / Square), Maximum width (280–760px), Distance from the screen edge, Color scheme, Button label, Button color and text color, Shadow, Frosted glass look, and whether to show the image, title, price, quantity selector and the bar on mobile.
- **Update the address when a variant is chosen**.

*Blocks* (Add block, drag to reorder)

- **App blocks** — Add a block from any installed app.
- **Vendor**, **Title**, **Rating**, **Description**, **Quantity** (max 1 each).
- **Price** (max 1): Show the percentage saved; Show tax and shipping note.
- **Text**: free text.
- **Variant picker** (max 1): Style (Buttons / Dropdown; options with swatches always use swatches unless you pick Dropdown); Show swatches for color options; **Filter gallery by selected color** (shows only the images of the chosen color; an image belongs to a color when its alt text or file name contains the color name, for example navy-front.jpg); Swatch shape (Circle / Rounded square / Square); Swatch size (28–64px).
- **Buy buttons** (max 1): Show dynamic checkout buttons, which let customers pay with Shop Pay, Apple Pay, Google Pay and other wallets.
- **Stock status** (max 1): Low stock threshold (1–20). Shows how many are left at or below this number.
- **SKU** (max 1).
- **Trust badges**: up to four rows of an icon (None / Delivery / Returns / Shield / Secure / Leaf / Heart / Gift) and short text.
- **Collapsible tab**: Heading; Icon; Content; Content from a page (optional, shown after the content above). Add one block per tab.
- **Size guide** (max 1): Link text; Size chart image; Size guide page; Text; **Size chart table** (one row per line, values separated by commas, the first line is the header, for example Size,Chest,Waist); Metafield namespace and key to override the guide per product (create a product metafield of type page, file, rich text or text).
- **Product siblings** (max 1): Option name; Swatch shape and size. Links related products (for example the same item in another color) as swatches.
- **Share** (max 1): Label.
- **Countdown timer**: Heading; Counts down to a date / Restarts for each visitor; End date and time (format 2026-12-31 23:59); Time zone; Length; Size; Alignment; When the time is up (Hide the timer / Show zeros).
- **Personalization**: Heading; for each of two fields: Name (leave empty to hide the field), Hint, Maximum characters (5–200), Required, and several lines. The text is saved as a line property on the cart item.

### Specifications

A tabbed table of product specifications.

*Section settings*

- **Color scheme**, **Product** (leave empty on a product page to use that page's product; needed when you use the section on other pages), **Eyebrow**, **Heading**, **Heading size**, **Text**.

*Blocks*

- **Tab**: Tab name; Metafield namespace and key (for example specs\_overview). Use a multi-line text metafield with one row per line written as Label | Value, or a JSON metafield like \[{"label":"Materials","value":"Nylon"}\]. **Rows to show when there is no metafield** — one row per line: Label | Value.

### Product grid (collection page)

The collection page product grid, filters and sorting.

*Section settings*

- **Color scheme**, **Show breadcrumbs**.
- **Grid** — Columns on desktop (2–5) and on mobile, **Products per page** (8–48), **Pagination** (Page numbers / Load more button).
- **Show filters**, **Filter layout** — Sidebar on desktop / Top bar (horizontal) on desktop / Drawer on all screens.
- **Open filters by default on desktop** — Off: all groups start collapsed (active filters stay open). On: all groups start expanded. Applies to the sidebar and top bar; the drawer always starts closed.
- **Show sorting**, **Show product count**.
- Which filters appear (availability, price, color, size, tags) is managed in Shopify admin under Online Store > Navigation > Collection and search filters (Search & Discovery app).

### Collection banner

The title and image at the top of a collection page.

*Section settings* — **Color scheme**, **Show the collection image**, **Show the description**, **Show breadcrumb**, **Alignment** (Start / Center / End), **Height** (Small / Medium / Large).

### Collection list page

The page that lists all collections.

*Section settings* — **Color scheme**, **Columns on desktop** and **on mobile**, and the same card look settings as the Collection list section: Card style, Image shape, Image fit, Space around the image, Fixed image height, Text backdrop.

### Search page

The search results page. **Color scheme**, **Columns on desktop** (2–5) and **on mobile**.

### Predictive search

The search overlay that suggests products as people type. It has no settings of its own; style it from Theme settings.

## Cart, popups and global sections

### Cart drawer

The slide-out cart. Find it in the editor under the overlay group below the footer.

*Section settings*

- **Color scheme**.
- **Drawer** — Opens from (right or left; it flips automatically in right-to-left languages), Width (340–560px), Open the drawer when something is added, Title (empty for the translated 'Cart'), Show the item count next to the title, Product image shape, Header (With a line below / No line).
- **Free shipping bar** — Show free shipping progress bar and the **Free shipping threshold**, entered in your store's default currency. It is converted automatically for other currencies.
- **Suggestions** — Show product suggestions, Heading (empty for 'You may also like'), and **Suggest**: Shopify recommendations (automatic) / Products I choose / Products from a collection. A product can also list its own suggestions in the metafield custom.cart\_upsells (products); those show first. Also: Suggestions to show (1–4), Add button label, Show price, Show image.
- **Extras** — Enable order note; Offer gift wrap. For gift wrap, create a product called Gift wrap and select it as the **Gift wrap product**. Its price is the gift wrap price; set it to 0 for free gift wrap.
- **Footer** — Checkout button label (empty for 'Check out'), Show 'View cart' link, Show the tax and shipping note.

### Cart upsell

Product suggestions shown inside the cart drawer. **Recommendations to load** (1–12) — the drawer shows as many as its own 'Suggestions to show' allows. Also **Add button label**, **Show price** and **Show image**.

### Popup

A promotional or newsletter popup.

*Section settings*

- **Show the popup** (master switch) and **Always show in the theme editor** — lets you see and style it while editing; visitors are not affected.
- **Color scheme**.
- **Content** — Heading, Text, Text alignment, Image, Image position (Right / Left), Show the image on phones.
- **Countdown timer** — same options as the Hero countdown.
- **Sign-up form** — Show the email form (people who sign up are added to your customers with the tags newsletter and popup), Button label, Button link (used when the email form is off), Thank-you message, **Discount code** (optional; shown after signing up and added to the visitor's cart; create the same code in Discounts), Dismiss link text (for example No thanks).
- **When it appears** — After some seconds / After scrolling a percentage of the page / When the visitor reaches the footer / When the visitor is about to leave (desktop) / Only when a link or button opens it. To open it from your own button or menu link, add the attribute data-popup-open, or use a link to #popup. Then set Seconds before showing (0–60), Page scrolled (10–100%), **Show again after (days)** (0 shows it once per visit; visitors who sign up never see it again), **Pages** (All pages / All except the cart / Home page only / Collection pages / Product pages / Blog and articles) and **Devices** (Computers and phones / Computers only / Phones only).

### Cart page

The full cart page. **Color scheme**.

### Header

The header with logo, menu and icons. Mega menu blocks are added here.

*Section settings*

- **Color scheme**.
- **Logo** — Logo (if empty, your store name is shown), Logo for transparent header (optional light version), Logo width (50–300px).
- **Navigation** — Layout (Logo left, menu center / Logo center, menu below / Logo center, menu left / Menu in drawer on all screens), Logo position on mobile, **Open menus on** Hover or Click only (choose Click only if menus open when you do not expect them), Menu (pick your main menu), Dim the page while a menu is open.
- **Transparent header** — Off / Homepage only / All pages. The header floats over the first section, so it works best with a hero banner first. Also: Color wash behind the header (0–60%, keeps the menu readable on busy images), Menu text color and Icon color while transparent.
- **Behavior and appearance** — Sticky header (Disabled / Always visible / Show when scrolling up), Show divider line, Show search, Show account link, Vertical padding (0–32px).

*Blocks*

- **Mega menu**: Color scheme; **Menu item** — the title of a top-level menu item, for example Shop (for translated stores list every language separated by commas: Shop, Boutique, Tienda); or **Menu position** — works in every language: 1 is the first item, 2 the second; 0 uses the title instead. Menu layout: Columns of text links / Picture links in a grid / Side list, pictures on hover (pictures use the collection image of each menu item). Picture size and shape; Show the 'view all' link; Show the item's sub-links; Link columns (1–5); Featured area heading.
- **Collection menu** (max 3): Menu label; Label link (optional); Color scheme; Take tiles from a menu (optional; a collection link uses the collection's image) or pick tiles one by one with the Collection blocks beneath; Tiles per row (2–6); Tile shape; Image fit; Label overlay (0–90%); Show arrow on hover.

### Footer

The footer, built from blocks that you can arrange in columns.

*Section settings*

- **Color scheme**, **Layout** (Columns / Split / Centered), **Columns on desktop** (2–6; the brand and newsletter blocks take two columns in the Columns layout), **Dividers**, **Vertical space** (24–120px).
- **Newsletter band** — Show the newsletter band on top, Band style (Filled / Plain), Eyebrow, Heading, Text, Button label.
- **Brand** — **Giant background wordmark** (large faint text above the bottom bar, for example your shop name; leave empty to hide) and **Social icons** style (Outlined circles / Filled circles / Plain icons). Add the social links in Theme settings > Social media.
- **Bottom bar** — Copyright text ({year} and {shop} are filled in automatically), Show policy links, **Show payment icons**, Show language selector, Show country/region selector, Show 'Back to top'.

*Blocks*

- **Brand** (max 1): Logo; Logo width; Show shop name when there is no logo; Text; Show social icons.
- **Links**: Heading; Menu. Add one per link column.
- **Text**: Heading; Text.
- **Contact** (max 1): Heading; Address; Email; Phone; Opening hours; Show social icons.
- **Newsletter (in a column)** (max 1): Heading; Text; Button label.
- **Image**: Image; Image focal point; Image shape; Heading; Text; Link label; Link.

### Breadcrumbs

The trail of links such as Home / Collection / Product.

*Section settings* — **Color scheme**, **Alignment**, **Add search engine data (BreadcrumbList)** (turn it off if the page already shows another breadcrumb with data), **Space above** and **Space below** (0–60px). The look of the trail itself is in Theme settings > Breadcrumbs.

## Pages, blog and account

### Page

A standard page such as About or Contact. Add an app block to embed an app.

*Section settings*

- **Content color scheme**, **Content layout** (Narrow, easy to read / Wide / With a table of contents). The table of contents is built from the H2 headings in the page and shown when there are at least two.
- **Page header** — Header style (Plain / Soft colored band / Image with title over it), Header color scheme, Header alignment, Eyebrow, Subtitle, Show breadcrumbs, Header image with its focal point, Image header height (200–600px), Image overlay (0–80%).

### Blog page

The blog listing page.

*Section settings*

- **Color scheme**, **Show breadcrumbs**.
- **Header** — Eyebrow, Subtitle, Alignment, Show tag filters, Filter style (Pills / Underline / Plain text).
- **Featured article** — Show the newest article as a large feature (first page only, and not while a tag filter is active) and its image shape.
- **Articles** — Layout (Grid / List), Card style (Image then text / Text over the image / Minimal with category line), Image shape, Columns on desktop (2–4) and mobile, Articles per page (6–24), and toggles for category, date, author, reading time and excerpt (Excerpt length 10–50 words).

### Article page

A single blog post. **Color scheme**, Show breadcrumbs, Show author, Show tags, Show share button, Cover image width (Same as the text / Wide / Full screen width), Show reading time, Show reading progress bar, Show more articles.

### Other pages

- **Password page** — Color scheme, Heading, Text. Shown while the store is locked.
- **404 page, Login, Register, Account, Order, Addresses, Activate account, Reset password** — each has a **Color scheme**; the text comes from the translations (Customize > Default content, or the language editor).

## How to set up each section and its blocks

The previous chapter lists every setting. This chapter shows the order to work in. Each recipe assumes you are in Online Store > Themes > Customize.

### The basic routine for any section

1. Open the page you want to edit using the page picker at the top of the editor (Home page, Products, Collections, and so on).
2. Click **Add section** in the left panel and choose the section. Drag sections up or down to reorder them.
3. Click the section to open its settings. Start with **Color scheme**, then work from the top down.
4. If the section has blocks, click **Add block** under it, choose a block type, then click the block to edit its own settings. Drag blocks to reorder them. A block type marked max 1 can only be added once.
5. Check the preview in the phone view (the device icon at the top) before moving on.
6. Click **Save**. Nothing is live to customers until you save.

### Hero banner (home page)

1. Add **Hero banner** as the first section.
2. Upload the **Image** and a **Mobile image** if the photo crops badly on phones. Drag the image position sliders until the subject stays in view.
3. Raise **Image overlay** to 20–40% if the text is hard to read.
4. Add blocks in this order: **Eyebrow**, **Heading**, **Text**, **Buttons**. Add **Countdown** last if you run a sale.
5. In the **Buttons** block fill the first button's label and link. Leave the second empty if you only need one.
6. Set **Height** and **Content position**, then check the phone preview.

### Slideshow

1. Add **Slideshow**, then **Add block > Slide** for each slide.
2. Click each slide: upload its image (and phone image), set the position sliders, then fill the heading, text and button.
3. Back on the section, set **Transition**, **Change slides automatically** and the seconds per slide.

### Announcement bar and header

1. In the header group at the top of the editor, open **Announcement bar**. Add one **Announcement** block per message, with an optional icon and link.
2. Choose **Style**: Slider shows one message at a time; Running text scrolls continuously.
3. Open **Header**. Upload your **Logo**, choose the **Menu** and the **Layout**. Set **Transparent header** only if the first section on the page is a full-width image.
4. For a mega menu, click **Add block > Mega menu** and type the exact title of the top-level menu item (or its position number, which works in every language). Choose the menu layout, then save.

### Multicolumn and Image with text

1. Add **Multicolumn**, set the number of columns, then add one **Column** block per benefit with an icon (or image), heading and text.
2. Add **Image with text**, upload the image, choose which side it sits on, then add **Eyebrow**, **Heading**, **Text** and **Button** blocks.

### Featured collection

1. Add **Featured collection** and pick the **Collection**.
2. Choose **Grid** or **Slider**, the number of products and the columns.
3. Product card style (image shape, hover image, swatches, quick add, reviews) is set in Theme settings > Product cards, so every card in the store matches.

### Product tabs

1. Add **Product tabs**, then **Add block > Tab** for each tab.
2. Click a tab, type the **Tab name**, then choose **Show products from**: a collection, products you pick, or products with tags (type the tags separated by commas and choose Any or All).
3. Back on the section choose the **Tab style**, the layout and the number of products per tab.

### Featured product

1. Add **Featured product** and pick the **Product**.
2. Add blocks in the order customers should read them: **Title**, **Price**, **Variant picker**, **Quantity**, **Buy buttons**.
3. To place a third-party app (reviews, subscriptions), click **Add block > App block** and choose the app.

### Bundles

1. **Product bundle:** add the section, add one **Product** block per item, set the **Bundle discount**, then follow the Bundles and discounts chapter so the discount is created in Shopify.
2. **Build a bundle:** pick the **Collection**, set **Items needed for the discount** and the **Bundle discount**.

### Product page blocks

1. Open a product page in the editor (Templates > Products > Default product).
2. Under the **Product** section, add and reorder blocks: Title, Price, Variant picker, Quantity, Buy buttons, Stock status, Trust badges, Collapsible tabs, Size guide, Share.
3. For color swatches, use a variant option named **Color** and list custom shades in Theme settings > Product information > Custom values (one per line, for example Midnight green: #004953).
4. Turn on the **sticky add-to-cart bar** under the section's settings and adjust its position, shape and width.

### Testimonials, FAQ and forms

1. **Testimonials:** add one **Testimonial** block per customer with rating, quote, name and photo.
2. **FAQ:** add one **Question** block per question and answer.
3. **Form:** add the **Form** section, then add field blocks in the order they should appear (Text field, Email field, Message box, and so on). Set the button label and the message shown after sending.

### Footer

1. In the footer group, open **Footer** and choose the **Layout**.
2. Add blocks: **Brand** (logo and text), one **Links** block per link column (pick a menu), **Contact**, and **Newsletter** if you want a sign-up column.
3. Turn on **Show payment icons** and **Show policy links** in the bottom bar section settings.
4. Add your social links in Theme settings > Social media.

### Cart drawer and popup

1. In the overlay group below the footer, open **Cart drawer** and set the width, free shipping threshold and suggestions.
2. Open **Popup**, write the heading and text, choose when it appears, and set **Show the popup** on. Turn on **Always show in the theme editor** while styling it.

### Collection page

1. Open a collection (Templates > Collections > Default collection).
2. In **Product grid** choose the columns, products per page and the **Filter layout** (sidebar, top bar or drawer).
3. Choose which filters appear in Shopify admin under the Search & Discovery app.

## Getting Orbis

Orbis is sold exclusively through the Shopify Theme Store. There is no zip file, and no other way to install it.

- **Try first, pay when you publish.** Adding the trial from the Theme Store listing is free. You buy the license when you are ready to publish Orbis on your store.
- **One license per store.** Each store that publishes Orbis needs its own license.
- **Updates included.** New versions appear in Online Store > Themes. Add the update, review it, then publish (see Updating the theme).
- **Support.** Stuck on setup, swatches, bundles, or right-to-left? Contact us through the support link on the Theme Store listing or the Nibrio website.

Before you publish:

1. Work through the setup checklist above.
2. Preview on a phone and a laptop.
3. Confirm your checkout branding in Shopify's checkout settings.
4. Keep a published copy of your previous theme for a few days in case you want to switch back.

## Troubleshooting and FAQ

| Problem | Likely cause and fix |
| --- | --- |
| A section is missing from the editor | Make sure you are customizing the right theme copy (Online Store > Themes) and the right template in the page picker. A section you added can be re-added with Add section; if a built-in section is missing after a theme update, contact support. |
| Something looks broken after an update | Open your backup copy of the previous version (see Updating the theme) to confirm what changed, then contact support with your theme version and a description. |
| Text shows as `something.key` | A translation key is missing from `locales/en.default.json`, or the key was typed wrongly. |
| Swatches show no color | The option value is not a known color name. Use the swatch map in Theme settings, or set the swatch source to Variant image. |
| Pre-order button does not show | Check Continue selling when out of stock, the `preorder` tag or metafield, and Theme settings > Product information > Pre-order. |
| Bundle shows Sold out | One product in the bundle is out of stock, or a Product block has no product chosen. |
| Bundle discount is not applied at checkout | Run the sync script, or enter a discount code in the bundle settings. |
| Cart drawer does not open | Theme settings > Cart > Cart type must be Drawer. |
| Reviews show a placeholder | Install a reviews app that writes `reviews.rating` and `reviews.rating_count`. |
| Menu opens by itself | In the Header settings, set Menu opening to click only. |
| Videos do not autoplay | Browsers only autoplay muted video. Check the visitor's reduced-motion setting and the theme option to respect it. |
| Images load late | Turn off Lazy load images in Theme settings > Performance and custom code and compare. |

### Updating the theme

1. In Shopify admin open **Online Store > Themes**. When a new Orbis version is available, add it to your theme library. Your live theme keeps running untouched.
2. Open **Customize** on the updated copy and check your key pages against the live store.
3. When it looks right, press **Publish**. Keep the previous copy unpublished for a few days as a rollback.

Your content (products, collections, pages, blog posts, menus) is stored in Shopify, not in the theme. Section settings and blocks are stored in the theme's template files, so replacing a template file resets that page's layout.
