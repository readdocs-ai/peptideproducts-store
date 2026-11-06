import { auth } from "@/auth";
import { hasAccessDeclaration } from "./store";
export async function requireCustomerAccess(): Promise<Response | null> {
  const session = await auth();
  if (!session?.user?.id) return Response.json({ error: "Please sign in to continue." }, { status: 401, headers: { "Cache-Control": "no-store" } });
  if (!await hasAccessDeclaration(session.user.id)) return Response.json({ error: "Please confirm your age and research-use declaration." }, { status: 403, headers: { "Cache-Control": "no-store" } });
  return null;
}
