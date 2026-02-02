import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const store = await cookies();
  const auth = store.get("auth");

  if (!auth) redirect("/login");

  redirect("dashboard");
}
