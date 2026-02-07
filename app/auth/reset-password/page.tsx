"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { brand } from "@/lib/brand";
import { buildAppLink, tryOpenApp } from "@/lib/deepLink";
import { supabase } from "@/lib/supabaseClient";

type Status = "ready" | "saving" | "success" | "error";

export default function ResetPasswordPage() {
  const [status, setStatus] = useState<Status>("ready");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const appUrl = useMemo(() => buildAppLink("auth/reset-password", { source: "web" }), []);

  useEffect(() => {
    // If Supabase token is in the hash, Supabase JS can usually pick it up.
    // This page stays calm even if token is missing; user can still open the app.
  }, []);

  async function handleUpdate() {
    setError("");

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setStatus("saving");
    const { error: updateErr } = await supabase.auth.updateUser({ password });

    if (updateErr) {
      setStatus("error");
      setError(updateErr.message || "Could not update password.");
      return;
    }

    setStatus("success");
  }

  return (
    <div className="min-h-[70vh] grid place-items-center px-4 py-10">
      <Card className="w-full max-w-md p-6">
      <p className="text-xs font-semibold text-[var(--brand-purple)] text-center">
  DRITCHWEAR
</p>

<div className="mt-3 h-[2px] w-12 bg-[var(--brand-yellow)] mx-auto" />
        <h1 className="mt-2 text-xl font-extrabold text-center">Reset your password</h1>
        <div className="mt-3 h-[2px] w-12 bg-[var(--yellow)] mx-auto" />

        {status !== "success" ? (
          <div className="mt-6 grid gap-3">
            <input
              className="rounded-xl border border-black/10 px-4 py-3 text-sm"
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="rounded-xl border border-black/10 px-4 py-3 text-sm"
              type="password"
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            {error ? (
              <div className="rounded-xl border border-black/10 bg-black/[0.02] p-3 text-sm text-black/80">
             <span className="font-semibold text-[var(--purple)]">Note: </span>
                {error}
              </div>
            ) : null}

<button
  onClick={handleUpdate}
  disabled={status === "saving"}
  className="w-full rounded-xl px-4 py-3 text-sm font-bold text-white"
  style={{
    backgroundColor: "var(--brand-purple)",
    opacity: status === "saving" ? 0.6 : 1,
  }}
>
  {status === "saving" ? "Updating…" : "Update password"}
</button>

            <div className="mt-2 text-center">
              <button
                className="text-sm font-semibold text-[var(--purple)] hover:underline"
                onClick={() => tryOpenApp(appUrl)}
              >
                Open Dritchwear App instead
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center grid gap-3">
            <p className="text-sm text-black/75">
              Password updated. Open the app to continue.
            </p>
            <button
  onClick={() => tryOpenApp(appUrl)}
  className="w-full rounded-xl px-4 py-3 text-sm font-bold text-white"
  style={{ backgroundColor: "var(--brand-purple)" }}
>
  Open Dritchwear App
</button>
            <p className="text-xs text-black/60">Don’t have the app? Download it below.</p>

            <div className="grid gap-2">
              <a className="rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold hover:bg-black/[0.02]" href={brand.app.appStoreUrl}>
                Download on App Store
              </a>
              <a className="rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold hover:bg-black/[0.02]" href={brand.app.playStoreUrl}>
                Get it on Google Play
              </a>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}