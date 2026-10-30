/** Central contact number used by all Peptide Products customer support links. */
export const SUPPORT_WHATSAPP_NUMBER = "447459676630";
export function supportWhatsAppHref(message: string): string {
  return `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
