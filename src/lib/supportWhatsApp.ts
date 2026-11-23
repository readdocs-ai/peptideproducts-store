/** Central contact number used by all Peptide Products customer support links. */
export const SUPPORT_WHATSAPP_NUMBER = "447459676630";
export function supportWhatsAppHref(message: string): string {
  return `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderRequestWhatsAppHref(orderId: string): string {
  return supportWhatsAppHref(
    `Hi Peptide Products, I submitted order request ${orderId}. Could you confirm stock availability and let me know the payment options?`,
  );
}

export const ORDER_REQUEST_NEXT_STEP =
  "Message us on WhatsApp with your order reference so we can confirm stock availability and discuss payment options.";
