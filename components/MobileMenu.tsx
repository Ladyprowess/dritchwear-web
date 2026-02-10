"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/2349110163722?text=" +
  encodeURIComponent("Hi Dritchwear! I want to place an order. Please share how to proceed.");

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // ✅ NEW: Coming soon modal for App Store
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  // ✅ NEW: Handle App Store click
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false); // close the menu drawer
    setComingSoonOpen(true); // open coming soon modal
  };

  // Lock body scroll when menu is open (NO sideways scroll)
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setComingSoonOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 hover:bg-black/[0.03] transition"
        aria-label="Open menu"
      >
        {/* Simple hamburger icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100]">
          {/* Dark overlay behind the white menu */}
          <button
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu overlay"
          />

          {/* SOLID WHITE panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl border-l border-black/10">
            {/* Header */}
            <div className="h-16 px-5 flex items-center justify-between border-b border-black/10">
              <p className="text-lg font-extrabold tracking-tight">Menu</p>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-black/[0.04] transition"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="px-5 py-6">
              {/* Main links */}
              <div className="grid gap-1 text-base font-semibold">
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 hover:bg-black/[0.03] transition"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 hover:bg-black/[0.03] transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 hover:bg-black/[0.03] transition"
                >
                  Contact
                </Link>
              </div>

              <div className="my-6 h-px bg-black/10" />

              {/* Support */}
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
                Support
              </p>

              <div className="mt-3 grid gap-1">
                <Link
                  href="/size-guide"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold text-[var(--purple)] bg-[var(--purple)]/10 hover:bg-[var(--purple)]/15 transition"
                >
                  Size Guide
                </Link>

                <Link
                  href="/returns"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold hover:bg-black/[0.03] transition"
                >
                  Returns & Exchanges
                </Link>

                <Link
                  href="/terms-of-service"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold hover:bg-black/[0.03] transition"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/privacy-policy"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold hover:bg-black/[0.03] transition"
                >
                  Privacy Policy
                </Link>
              </div>

              {/* Only App Store + Google Play */}
              <div className="mt-8 grid gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
                  className="btn btn-black w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play
                </a>

                {/* ✅ App Store now opens Coming Soon */}
                <a
                  href="https://example.com/app-store"
                  onClick={handleAppStoreClick}
                  className="btn btn-black w-full"
                >
                  App Store
                </a>
              </div>

              <p className="mt-4 text-xs text-black/50">
                Full catalogue is available in the mobile app.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Coming Soon Modal */}
      {comingSoonOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setComingSoonOpen(false)}
            aria-label="Close coming soon overlay"
          />
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-xl border border-black/10">
            <button
              onClick={() => setComingSoonOpen(false)}
              className="absolute right-4 top-4 text-sm font-bold"
              style={{ color: "#5A2D82" }}
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-xl font-extrabold text-[var(--brand-purple)]">
              App Store; Coming Soon
            </h3>
            <p className="mt-2 text-sm text-black/70">
              The iOS app is launching soon. For now, you can place your order on WhatsApp.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-purple w-full"
              >
                Order on WhatsApp
              </a>

              <button
                type="button"
                onClick={() => setComingSoonOpen(false)}
                className="rounded-xl border border-black/15 px-6 py-3 font-semibold text-black hover:bg-black/[0.03]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
