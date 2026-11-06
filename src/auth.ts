import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { customerAdapter } from "@/lib/customer-access/store";

export const { handlers, auth, signIn, signOut } = NextAuth(() => ({
  adapter: customerAdapter(),
  trustHost: true,
  session: { strategy: "database", maxAge: 30 * 24 * 60 * 60, updateAge: 24 * 60 * 60 },
  pages: { signIn: "/access", verifyRequest: "/access/check-email", error: "/access" },
  providers: [Resend({
    apiKey: process.env.RESEND_API_KEY,
    from: "Peptide Products <info@peptideproducts.co.uk>",
    maxAge: 10 * 60,
    async sendVerificationRequest({ identifier, url, provider }) {
      const safeUrl = url.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${provider.apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: provider.from, to: identifier, subject: "Your secure Peptide Products sign-in link",
          text: `Sign in to Peptide Products\n\nUse this link to create your account or sign in:\n${url}\n\nThis link works once and expires in 10 minutes. Access is for adults aged 18 or over, for research use only.\n\nIf you did not request this email, you can ignore it.\nPeptide Products\ninfo@peptideproducts.co.uk`,
          html: `<div style="background:#f4f7fb;padding:32px 16px;font-family:Arial,sans-serif;color:#0b1220"><div style="max-width:520px;margin:auto;background:white;border-radius:20px;padding:32px"><p style="color:#1d4ed8;font-weight:800">PEPTIDE PRODUCTS</p><h1 style="font-size:26px">Your secure sign-in link</h1><p>Use the button below to create your account or sign in.</p><p style="margin:32px 0"><a href="${safeUrl}" style="display:inline-block;background:#1d4ed8;color:white;padding:16px 24px;border-radius:12px;text-decoration:none;font-weight:bold">Sign in to your account</a></p><p>This link works once and expires in 10 minutes.</p><p style="font-size:13px;color:#5b6475">Access is for adults aged 18 or over, for research use only. If you did not request this email, you can ignore it.</p><hr style="border:0;border-top:1px solid #e2e8f0"><p style="font-size:13px">Peptide Products<br>info@peptideproducts.co.uk</p></div></div>`,
        }),
      });
      if (!res.ok) throw new Error("Unable to send sign-in email");
    },
  })],
  callbacks: {
    session({ session, user }) { session.user.id = user.id; return session; },
    redirect({ url, baseUrl }) {
      if (url.startsWith("/") && !url.startsWith("//")) return new URL(url, baseUrl).href;
      try { if (new URL(url).origin === new URL(baseUrl).origin) return url; } catch {}
      return `${baseUrl}/access/confirm`;
    },
  },
  logger: { error() { console.error("Customer authentication request failed"); }, warn(code) { console.warn("Customer authentication warning:", code); }, debug() {} },
}));
