"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { FormStatus } from "@/components/FormStatus";

export default function Wholesale() {
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; message?: string }>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [products, setProducts] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, country, products, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      setStatus({ type: "ok" });
      setName("");
      setEmail("");
      setCompany("");
      setCountry("United Kingdom");
      setProducts("");
      setMessage("");
    } catch (err: any) {
      setStatus({ type: "err", message: err?.message || "Failed to send" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="max-w-3xl rounded-xl2 border border-line bg-white p-8 shadow-soft">
            <div className="inline-flex items-center rounded-full bg-panel px-3 py-1 text-xs font-semibold text-muted border border-line">
              Wholesale enquiries welcome
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Wholesale Enquiry</h1>
            <p className="mt-2 text-sm text-muted">
              Tell us what you need (quantities, countries, documentation requirements). We’ll reply by email.
            </p>

            <form onSubmit={submit} className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-extrabold">Name</label>
                  <input
                    className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-extrabold">Email</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-extrabold">Company</label>
                  <input
                    className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="text-sm font-extrabold">Country</label>
                  <input
                    className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-extrabold">Products of interest</label>
                <input
                  className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                  placeholder="e.g., Glutathione, PDRN, Hyaluronic Acid…"
                />
              </div>

              <div>
                <label className="text-sm font-extrabold">Message</label>
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={"rounded-xl2 px-6 py-3 text-sm font-extrabold text-white shadow-soft " + (loading ? "bg-accent/70" : "bg-accent hover:bg-accent/90")}
              >
                {loading ? "Sending…" : "Send wholesale enquiry"}
              </button>

              <FormStatus status={status} />
            </form>

            <div className="mt-8 text-xs text-muted">
              For urgent enquiries, you can also call: <span className="font-semibold text-ink">07429098887</span>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
