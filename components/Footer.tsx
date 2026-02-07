"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Twitter, Music2, Linkedin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-[var(--black)] text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* BRAND */}
        <div>
          <div className="text-lg font-extrabold tracking-tight">
            <span className="text-white">DRITCH</span>
            <span style={{ color: "var(--brand-yellow)" }}>WEAR</span>
          </div>

          <p className="mt-3 text-sm text-white/70 max-w-sm">
            Custom streetwear & branded merchandise; built for identity,
            visibility, and value.
          </p>

          {/* SOCIAL ICONS */}
<div className="mt-4 flex items-center gap-4 text-white/80">
  <a
    href="https://www.instagram.com/dritchwear"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="hover:text-[var(--brand-yellow)] transition"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.tiktok.com/@dritchwear"
    target="_blank"
    rel="noreferrer"
    aria-label="TikTok"
    className="hover:text-[var(--brand-yellow)] transition"
  >
    <Music2 size={20} />
  </a>

  <a
    href="https://twitter.com/dritchwear"
    target="_blank"
    rel="noreferrer"
    aria-label="X (Twitter)"
    className="hover:text-[var(--brand-yellow)] transition"
  >
    <Twitter size={20} />
  </a>

  <a
    href="https://www.linkedin.com/company/dritchwear"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="hover:text-[var(--brand-yellow)] transition"
  >
    <Linkedin size={20} />
  </a>
</div>

        </div>

        {/* SUPPORT */}
        <div className="text-sm">
          <p className="font-semibold text-white">Support</p>
          <div className="mt-3 grid gap-2 text-white/80">
            <Link className="hover:text-[var(--brand-yellow)]" href="/size-guide">
              Size Guide
            </Link>
            <Link className="hover:text-[var(--brand-yellow)]" href="/returns">
              Returns & Exchanges
            </Link>
            <Link
              className="hover:text-[var(--brand-yellow)]"
              href="/terms-of-service"
            >
              Terms & Conditions
            </Link>
            <Link
              className="hover:text-[var(--brand-yellow)]"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="text-sm">
          <p className="font-semibold text-white">Stay in the loop</p>
          <p className="mt-2 text-white/70">
            New drops, special offers, and updates; straight to your inbox.
          </p>

          {success ? (
            <p className="mt-4 text-sm" style={{ color: "var(--brand-yellow)" }}>
              You’re subscribed 🎉
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[16px] md:text-sm text-black outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl px-4 py-3 font-semibold text-white"
                style={{ backgroundColor: "var(--brand-purple)" }}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>

              {error && <p className="text-xs text-red-400">{error}</p>}
            </form>
          )}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/60">
          © {new Date().getFullYear()} Dritchwear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
