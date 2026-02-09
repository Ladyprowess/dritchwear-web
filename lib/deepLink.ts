// ✅ deepLink.ts
import { brand } from "./brand";

export function buildAppLink(path: string, params?: Record<string, string>) {
  const url = new URL(path, brand.app.scheme);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  return url.toString();
}

// ✅ Supabase confirmation deep link (raw hash + search)
export function buildSupabaseAuthCallbackLink() {
  const hash = typeof window !== "undefined" ? window.location.hash || "" : "";
  const search =
    typeof window !== "undefined" ? window.location.search || "" : "";

  return `${brand.app.scheme}auth/callback${hash}${search}`;
}

export function tryOpenApp(appUrl: string) {
  window.location.href = appUrl;
}