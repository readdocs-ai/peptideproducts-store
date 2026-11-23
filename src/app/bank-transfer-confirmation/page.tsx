import { redirect } from "next/navigation";

export default function BankTransferConfirmation() {
  redirect("/order-status");
}
