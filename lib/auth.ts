import { cookies } from "next/headers";

export type AuthUser = {
  userId: string;
  role: "user";
};

export async function getAuth(): Promise<AuthUser | null> {
  const store = await cookies();
  const cookie = store.get("auth");

  if (!cookie) return null;

  try {
    return JSON.parse(cookie.value);
  } catch {
    return null;
  }
}
