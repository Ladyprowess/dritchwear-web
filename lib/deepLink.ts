import { brand } from "./brand";

export function buildAppLink(path: string, params?: Record<string, string>) {
  const url = new URL(path, brand.app.scheme);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  return url.toString(); // e.g. dritchwear://auth/confirm?...
}

export function tryOpenApp(appUrl: string) {
  // best-effort deep link open
  window.location.href = appUrl;
}