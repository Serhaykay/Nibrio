import { useParams, Link } from "react-router-dom";

export default function Legal() {
  const { page } = useParams();
  const isPrivacy = page === "privacy";

  return (
    <div className="mx-auto max-w-[800px] px-6 py-12 lg:px-8">
      <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-nibrio-teal/60">Legal</div>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-nibrio-teal">{isPrivacy ? "Privacy policy" : "Terms of service"}</h1>
      <p className="mt-2 text-sm leading-6 text-nibrio-charcoal/60">
        This is a starter template. Have it reviewed by qualified legal counsel before launch and replace bracketed placeholders.
      </p>

      <div className="prose prose-sm mt-8 max-w-none prose-p:leading-7 prose-p:text-nibrio-charcoal/70 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-nibrio-teal">
        {isPrivacy ? (
          <>
            <h2>Overview</h2>
            <p>Nibrio (“we”, “us”) provides Shopify themes and related software. This policy describes what we collect when you use nibrio.com, our documentation, and our support channels, and how we use it.</p>
            <h2>Information we collect</h2>
            <p>Contact details you provide via support requests, account or purchase information when you buy a product, and standard technical logs (IP address, browser, pages visited) for security and analytics.</p>
            <h2>How we use it</h2>
            <p>To provide and support our products, respond to requests, process purchases, improve our site, and comply with law. We do not sell your personal information.</p>
            <h2>Retention and rights</h2>
            <p>We keep support and purchase records for as long as needed to provide the service and meet legal obligations. You may request access, correction, or deletion where applicable law provides.</p>
            <h2>Contact</h2>
            <p>Questions about this policy: [privacy@nibrio.com]. Last updated: [DATE].</p>
          </>
        ) : (
          <>
            <h2>Agreement</h2>
            <p>By using nibrio.com or purchasing Orbis, you agree to these terms. If you do not agree, do not use the site or the product.</p>
            <h2>Products</h2>
            <p>Orbis is a Shopify theme provided under the licence terms shown at purchase. Product details, compatibility, and pricing are as displayed on the product page at the time of purchase.</p>
            <h2>Acceptable use</h2>
            <p>Do not misuse the site, attempt to interfere with its operation, or use our content in a way that infringes rights.</p>
            <h2>Disclaimer</h2>
            <p>Products and site content are provided “as is” to the extent permitted by law. Nothing here limits rights you have as a consumer that cannot be waived.</p>
            <h2>Contact</h2>
            <p>Questions about these terms: [legal@nibrio.com]. Last updated: [DATE].</p>
          </>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        <Link to="/legal/privacy" className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 ${isPrivacy ? "bg-nibrio-teal text-white ring-nibrio-teal" : "bg-white text-nibrio-teal ring-black/10"}`}>Privacy</Link>
        <Link to="/legal/terms" className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 ${!isPrivacy ? "bg-nibrio-teal text-white ring-nibrio-teal" : "bg-white text-nibrio-teal ring-black/10"}`}>Terms</Link>
      </div>
    </div>
  );
}
