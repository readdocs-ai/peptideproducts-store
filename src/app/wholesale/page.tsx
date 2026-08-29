"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { FormStatus } from "@/components/FormStatus";

const WHATSAPP_NUMBER = "447429098887";

const countries = [
  "United Kingdom",
  "Switzerland",
  "Saudi Arabia",
  "United Arab Emirates",
  "Malaysia",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "Ireland",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Austria",
  "Portugal",
  "Other",
] as const;

const enquiryTypes = [
  "Repeat order enquiry",
  "Bulk order enquiry",
  "International order enquiry",
  "Product availability enquiry",
  "Documentation enquiry",
  "General wholesale enquiry",
] as const;

function getWhatsAppHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Peptide Products, I would like to discuss a wholesale or international order enquiry."
  )}`;
}

export default function Wholesale() {
  const [status, setStatus] = useState<{
    type: "idle" | "ok" | "err";
    message?: string;
  }>({ type: "idle" });

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [enquiryType, setEnquiryType] = useState("General wholesale enquiry");
  const [products, setProducts] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          country,
          enquiryType,
          products,
          quantity,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      setStatus({ type: "ok" });
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setCountry("United Kingdom");
      setEnquiryType("General wholesale enquiry");
      setProducts("");
      setQuantity("");
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

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-6xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
                <div>
                  <div className="eyebrow">Wholesale enquiries</div>

                  <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                    Wholesale, repeat order, and international supply enquiries.
                  </h1>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                    Use this page for larger quantity enquiries, repeat order
                    requests, international order questions, documentation
                    requirements, or product availability checks before ordering.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="trust-pill">UK-based supplier</span>
                    <span className="trust-pill">International enquiries welcome</span>
                    <span className="trust-pill">Documentation support</span>
                    <span className="trust-pill">WhatsApp support</span>
                    <span className="trust-pill">Research use only</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                    >
                      Message on WhatsApp
                    </a>

                    <Link
                      href="/international-orders"
                      className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      International orders
                    </Link>

                    <Link
                      href="/shop"
                      className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Browse products
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-5">
                  <h2 className="text-lg font-extrabold text-emerald-950">
                    Best for enquiries such as:
                  </h2>

                  <div className="mt-4 grid gap-3 text-sm text-emerald-800">
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      Repeat or larger quantity orders
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      International delivery questions
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      Product availability before checkout
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      Documentation or quality information requests
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-6">
                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="soft-label">International buyers</div>

                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                    Enquiries from overseas customers are welcome.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    If you are based outside the UK and want to ask about product
                    availability, payment options, delivery estimates, or
                    documentation before ordering, send the details through the
                    form and we will review your enquiry.
                  </p>

                  <div className="mt-5 grid gap-3 text-sm text-muted">
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Selected international delivery is available.
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      International shipping is currently £25.00 at checkout.
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Delivery times are estimates and customs may affect timing.
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Customers are responsible for local import requirements.
                    </div>
                  </div>

                  <Link
                    href="/international-orders"
                    className="mt-5 inline-flex rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Read international order information
                  </Link>
                </div>

                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="soft-label">Before sending</div>

                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                    Helpful details to include
                  </h2>

                  <div className="mt-5 grid gap-3 text-sm text-muted">
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Product names or product category
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Approximate quantity or repeat order frequency
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Destination country
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Documentation requirements, if any
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                      Preferred payment method, if relevant
                    </div>
                  </div>
                </div>

                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="soft-label">Research-use-only notice</div>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    All products are supplied strictly for laboratory research,
                    analytical, and scientific research use only. They are not for
                    human consumption, medical use, veterinary use, clinical use,
                    diagnostic use, or treatment purposes.
                  </p>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
                <div className="inline-flex items-center rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold text-muted">
                  Wholesale enquiries welcome
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">
                  Send a wholesale enquiry
                </h2>

                <p className="mt-2 text-sm leading-7 text-muted">
                  Tell us what you need, including quantities, country,
                  documentation requirements, and any preferred payment method.
                  We will reply by email.
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
                      <label className="text-sm font-extrabold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-extrabold">Company</label>
                      <input
                        className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-extrabold">Country</label>
                      <select
                        className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {countries.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-extrabold">
                        Enquiry type
                      </label>
                      <select
                        className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                      >
                        {enquiryTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-extrabold">
                      Products of interest
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                      value={products}
                      onChange={(e) => setProducts(e.target.value)}
                      placeholder="e.g. Retatrutide, Tirzepatide, NAD, GHK-CU"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-extrabold">
                      Approximate quantity
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 5 units, 10 units, repeat monthly order"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-extrabold">Message</label>
                    <textarea
                      className="mt-2 min-h-[150px] w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you need, your destination country, and any documentation or payment questions."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={
                      "rounded-xl2 px-6 py-3 text-sm font-extrabold text-white shadow-soft " +
                      (loading
                        ? "bg-accent/70"
                        : "bg-accent hover:bg-accent/90")
                    }
                  >
                    {loading ? "Sending…" : "Send wholesale enquiry"}
                  </button>

                  <FormStatus status={status} />
                </form>

                <div className="mt-6 rounded-xl2 border border-line bg-panel p-4 text-xs leading-6 text-muted">
                  For urgent enquiries, you can also call{" "}
                  <span className="font-semibold text-ink">07429098887</span>{" "}
                  or message us on WhatsApp.
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}