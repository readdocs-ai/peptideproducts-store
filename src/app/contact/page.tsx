"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { FormStatus } from "@/components/FormStatus";

export default function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; message?: string }>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      setStatus({ type: "ok" });
      setName("");
      setEmail("");
      setSubject("General enquiry");
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
            <h1 className="text-3xl font-extrabold tracking-tight">Contact us</h1>
            <p className="mt-2 text-sm text-muted">
              Email is delivered to <span className="font-semibold text-ink">info@peptideproducts.co.uk</span>.
              Wholesale enquiries should use the Wholesale page for faster handling.
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

              <div>
                <label className="text-sm font-extrabold">Subject</label>
                <select
                  className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option>General enquiry</option>
                  <option>Order question</option>
                  <option>Shipping question</option>
                  <option>Documentation (COA/SDS)</option>
                </select>
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
                {loading ? "Sending…" : "Send message"}
              </button>

              <FormStatus status={status} />
            </form>

            <div className="mt-8 text-xs text-muted">
              Mobile: <span className="font-semibold text-ink">07429098887</span>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
