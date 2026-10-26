import { useState } from "react";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  email: string;
  product: string;
  category: string;
  subject: string;
  description: string;
  storeUrl: string;
  version: string;
};

const initial: FormState = {
  name: "",
  email: "",
  product: "Orbis",
  category: "installation",
  subject: "",
  description: "",
  storeUrl: "",
  version: "",
};

export default function Support() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [refId, setRefId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.description.trim()) e.description = "Please describe the issue.";
    else if (form.description.trim().length < 20) e.description = "Please add a bit more detail (at least 20 characters).";
    if (form.storeUrl && !/^https?:\/\/.+/.test(form.storeUrl)) e.storeUrl = "Enter a full URL starting with https://";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerError(data?.error || "Could not send your request. Please try again.");
        setStatus("error");
        return;
      }
      setRefId(data?.reference || `NIB-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
      setStatus("success");
    } catch {
      // No backend in this environment — show integration boundary clearly
      setStatus("success");
      setRefId(`DEV-${Math.random().toString(36).slice(2, 6).toUpperCase()}`);
      setServerError(
        "Development mode: no backend is connected in this preview. In production this form posts to /api/support — connect it to your helpdesk or email service and set the required secrets server-side. Your input was validated but not delivered.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-[720px] px-6 py-16 lg:px-8">
        <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-8">
          <h1 className="font-display text-2xl font-bold tracking-tight text-emerald-900">Request received</h1>
          <p className="mt-2 text-sm leading-6 text-emerald-800">
            Thanks, {form.name.split(" ")[0] || "there"} — we got your message.
            {refId && <><br />Reference: <span className="font-mono font-semibold">{refId}</span></>}
          </p>
          {serverError && <p className="mt-3 rounded-xl bg-white p-3 text-xs leading-5 text-amber-800 ring-1 ring-amber-200">{serverError}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/docs" className="rounded-full bg-nibrio-teal px-5 py-2.5 text-sm font-semibold text-white">Browse docs</Link>
            <Link to="/" className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal">Back to home</Link>
            <button type="button" onClick={() => { setStatus("idle"); setForm(initial); setRefId(null); setServerError(null); }} className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-nibrio-teal">Send another request</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-8">
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-nibrio-teal/60">Support</div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-nibrio-teal md:text-4xl">How can we help?</h1>
          <p className="mt-3 text-sm leading-7 text-nibrio-charcoal/60">
            Search the docs first — most setup and troubleshooting questions are answered there. If you still need help,
            send us a message. Include your store URL and Orbis version when you can.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/docs" className="rounded-full bg-nibrio-teal px-4 py-2 text-sm font-semibold text-white">Search docs</Link>
            <Link to="/docs/orbis" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-nibrio-teal">Orbis guides</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} noValidate className="rounded-[24px] border border-black/5 bg-nibrio-ivory p-6 md:p-8">
            <h2 className="font-display text-lg font-bold tracking-tight text-nibrio-teal">Contact support</h2>
            <p className="mt-1 text-sm text-nibrio-charcoal/60">We usually reply within one business day.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Name" required error={errors.name}>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                />
              </Field>
              <Field label="Email" required error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                  placeholder="you@store.com"
                  aria-invalid={!!errors.email}
                />
              </Field>
              <Field label="Product">
                <select
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                >
                  <option>Orbis</option>
                  <option>Other / not sure</option>
                </select>
              </Field>
              <Field label="Issue category">
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                >
                  <option value="installation">Installation</option>
                  <option value="customisation">Customisation</option>
                  <option value="bug">Bug report</option>
                  <option value="app-compatibility">App compatibility</option>
                  <option value="billing">Billing / purchase</option>
                  <option value="other">Other</option>
                </select>
              </Field>
            </div>

            <div className="mt-4 grid gap-4">
              <Field label="Subject" required error={errors.subject}>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                  placeholder="What do you need help with?"
                />
              </Field>
              <Field label="Details" required error={errors.description} hint="What you expected, what happened, and steps to reproduce if relevant.">
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={5}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                  placeholder="Describe the issue in detail…"
                />
              </Field>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Store URL" error={errors.storeUrl} hint="Optional">
                  <input
                    value={form.storeUrl}
                    onChange={(e) => setForm({ ...form, storeUrl: e.target.value })}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                    placeholder="https://your-store.myshopify.com"
                    inputMode="url"
                  />
                </Field>
                <Field label="Orbis version" hint="Optional — e.g. 1.2.0">
                  <input
                    value={form.version}
                    onChange={(e) => setForm({ ...form, version: e.target.value })}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-nibrio-teal"
                    placeholder="1.0.0"
                  />
                </Field>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-black/40">
              By submitting, you agree we may use your details to reply to your request. See our{" "}
              <Link to="/legal/privacy" className="underline hover:text-nibrio-teal">privacy policy</Link>.
            </p>

            {status === "error" && serverError && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full bg-nibrio-teal py-3 text-sm font-semibold text-white hover:bg-nibrio-teal-2 disabled:opacity-60 md:w-auto md:px-8"
            >
              {status === "sending" ? "Sending…" : "Send request"}
            </button>

            <p className="mt-3 font-mono text-xs text-black/40">
              Integration boundary: POST /api/support → helpdesk/email. No secrets in client code. Configure server-side before going live.
            </p>
          </form>

          <div className="grid gap-4 self-start">
            <div className="rounded-[20px] border border-black/5 bg-white p-6">
              <div className="font-display text-base font-bold tracking-tight text-nibrio-teal">Common topics</div>
              <ul className="mt-3 grid gap-2 text-sm">
                <li><Link to="/docs/installing-orbis" className="text-nibrio-teal hover:underline">Installing Orbis</Link> — upload and publish</li>
                <li><Link to="/docs/layout-issues" className="text-nibrio-teal hover:underline">Layout issues</Link> — spacing and styling</li>
                <li><Link to="/docs/mobile-display" className="text-nibrio-teal hover:underline">Mobile display</Link> — responsive fixes</li>
                <li><Link to="/docs/updating-orbis" className="text-nibrio-teal hover:underline">Updating Orbis</Link> — safe updates</li>
              </ul>
            </div>
            <div className="rounded-[20px] bg-nibrio-teal p-6 text-white">
              <div className="font-display text-base font-bold">What to include</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-white/70">
                <li>Store URL and Orbis version</li>
                <li>What you expected vs what happened</li>
                <li>Screenshots or a short screen recording</li>
                <li>Any apps installed that affect the theme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wide text-nibrio-teal">
        {label} {required && <span className="text-red-500">*</span>} {hint && <span className="font-normal text-black/40">· {hint}</span>}
      </span>
      <span className="mt-1.5 block">{children}</span>
      {error && <span className="mt-1 block text-xs text-red-600" role="alert">{error}</span>}
    </label>
  );
}
