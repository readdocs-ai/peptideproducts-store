import { resend } from "@/lib/email";

export async function GET() {
  try {
    await resend.emails.send({
      from: "info@peptideproducts.co.uk",
      to: "info@peptideproducts.co.uk",
      subject: "PeptideProducts Email Test",
      html: "<strong>Your email system is working.</strong>",
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}