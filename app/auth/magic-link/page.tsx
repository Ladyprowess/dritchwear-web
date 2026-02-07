"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { brand } from "@/lib/brand";
import { buildAppLink, tryOpenApp } from "@/lib/deepLink";

type Status = "loading" | "success";

export default function MagicLinkPage() {
  const [status, setStatus] = useState<Status>("loading");

  const appUrl = useMemo(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const search = typeof window !== "undefined" ? window.location.search : "";
    return buildAppLink("auth/magic-link", { source: "web", hash, search });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStatus("success"), 800);
    const t2 = setTimeout(() => tryOpenApp(appUrl), 1100);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [appUrl]);

  return (
    <div className="min-h-[70vh] grid place-items-center px-4 py-10">
      <Card className="w-full max-w-md p-6 text-center">
        <p className="text-xs font-semibold text-[var(--purple)]">DRITCHWEAR</p>

        {status === "loading" ? (
          <>
            <h1 className="mt-2 text-xl font-extrabold">Signing you in…</h1>
            <div className="mt-5 mx-auto h-8 w-8 rounded-full border-2 border-black/20 border-t-[var(--purple)] animate-spin" />
          </>
        ) : (
          <>
            <h1 className="mt-2 text-xl font-extrabold">Signed in successfully. Opening the app…</h1>
            <div className="mt-3 h-[2px] w-12 bg-[var(--yellow)] mx-auto" />

            <div className="mt-6 grid gap-3">
              <Button onClick={() => tryOpenApp(appUrl)}>Open Dritchwear App</Button>
              <button
                className="text-sm font-semibold text-[var(--purple)] hover:underline"
                onClick={() => tryOpenApp(appUrl)}
              >
                If nothing happens, tap to open the app again
              </button>

              <div className="mt-2 grid gap-2">
                <a className="rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold hover:bg-black/[0.02]" href={brand.app.appStoreUrl}>
                  Download on App Store
                </a>
                <a className="rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold hover:bg-black/[0.02]" href={brand.app.playStoreUrl}>
                  Get it on Google Play
                </a>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}