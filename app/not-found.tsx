"use client";

import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [open, setOpen] = useState(false);

  // Put your real URLs here
  const appStoreUrl = "https://example.com/appstore";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.dritchwear.app";

  return (
    <section className="w-full py-14 md:py-20">
      <div
        className="relative overflow-hidden rounded-[28px] border p-8 md:p-12"
        style={{
          borderColor: "var(--border)",
          background: "rgba(255,255,255,0.78)", // glass white so it blends with purple bg
          backdropFilter: "blur(14px)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* subtle brand accents (not loud) */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(90,45,130,0.14)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(253,184,19,0.12)" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* 404 outline (purple stroke instead of white on dark) */}
          <div className="select-none text-7xl md:text-9xl font-extrabold tracking-tight">
            <span className="text-transparent [--stroke:var(--brand-purple)] [-webkit-text-stroke:2px_var(--stroke)]">
              404
            </span>
          </div>

          {/* your global headings are purple already; keep it */}
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">
            Page not found
          </h1>

          <p
            className="mt-3 text-base md:text-lg"
            style={{ color: "rgba(11,11,13,0.72)" }}
          >
            This page may have been moved, renamed, or it never existed.
          </p>

          {/* Actions: use your button system */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn btn-purple">
              Go to Home
            </Link>

            <Link href="/shop" className="btn btn-black">
              Shop outfits
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn"
              style={{
                border: "1px solid var(--border)",
                background: "rgba(11,11,13,0.04)",
                color: "var(--black)",
              }}
            >
              Open the app
            </button>
          </div>

          <p className="mt-5 text-sm" style={{ color: "rgba(11,11,13,0.65)" }}>
            Tip: If you came from any social platform, the link may have expired.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/contact" className="hover:opacity-90">
              Contact support
            </Link>
            <Link href="/size-guide" className="hover:opacity-90">
              Size guide
            </Link>
            <Link href="/returns" className="hover:opacity-90">
              Returns
            </Link>
            <Link href="/privacy-policy" className="hover:opacity-90">
              Privacy policy
            </Link>
            <Link href="/terms-of-service" className="hover:opacity-90">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* App modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Get the Dritchwear app"
        >
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close modal"
          />

          {/* modal card */}
          <div
            className="relative w-full max-w-md rounded-3xl border p-6"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(14px)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>
                  Get the Dritchwear app
                </h2>
                <p className="mt-1 text-sm" style={{ color: "rgba(11,11,13,0.65)" }}>
                  Choose your store to continue.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2"
                style={{
                  background: "rgba(11,11,13,0.05)",
                  border: "1px solid var(--border)",
                }}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              <a
                href={appStoreUrl}
                className="btn"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(11,11,13,0.04)",
                  color: "var(--black)",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <AppleIcon />
                <span className="font-semibold">Download on App Store</span>
              </a>

              <a
                href={playStoreUrl}
                className="btn"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(11,11,13,0.04)",
                  color: "var(--black)",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <PlayIcon />
                <span className="font-semibold">Get it on Google Play</span>
              </a>
            </div>

            <p className="mt-4 text-xs" style={{ color: "rgba(11,11,13,0.6)" }}>
              Your main catalogue is in the app. The website is for browsing and quick info.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

/* Simple inline icons (no library needed) */
function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.7 13.7c0-2 1.6-3 1.7-3.1c-1-1.4-2.5-1.6-3-1.6c-1.3-.1-2.5.8-3.1.8c-.6 0-1.6-.8-2.7-.8c-1.4 0-2.8.8-3.5 2.1c-1.5 2.6-.4 6.4 1.1 8.5c.7 1 1.6 2.1 2.8 2.1c1.1 0 1.5-.7 2.9-.7c1.4 0 1.7.7 3 .7c1.2 0 2-.9 2.7-1.9c.8-1.2 1.2-2.3 1.2-2.4c0 0-2.3-.9-2.3-3.8ZM14.9 6.9c.6-.8 1-1.8.9-2.9c-.9.1-2 .6-2.6 1.4c-.6.7-1.1 1.8-.9 2.9c1 .1 2-.5 2.6-1.4Z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 2.7c-.4.2-.6.6-.6 1.2v16.2c0 .6.2 1 .6 1.2l10-9.3l-10-9.3Zm11.3 10.3l2.7-2.5c.4-.4.8-.5 1.2-.3l1.9 1.1c.9.5.9 1.7 0 2.2l-1.9 1.1c-.4.2-.8.1-1.2-.3L14.9 13Zm-1.1 1l-10 9.3c.4.2.9.2 1.5-.2l11.2-6.5l-2.7-2.6ZM3.8 1.6l10 9.3l2.7-2.6L5.3 1.8c-.6-.4-1.1-.4-1.5-.2Z"
      />
    </svg>
  );
}