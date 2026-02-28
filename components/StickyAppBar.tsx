"use client";

import { useState } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dritchwear.app";
const WHATSAPP_URL =
  "https://wa.me/2349110163722?text=" +
  encodeURIComponent("Hi Dritchwear! I want to place an order. Please share how to proceed.");

export function StickyAppBar() {
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[70] md:hidden border-t border-black/10 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 px-4 py-3">
          {/* App icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-purple)]">
            <span className="text-sm font-extrabold text-white">D</span>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-extrabold tracking-tight truncate">
              <span className="text-[var(--brand-purple)]">DRITCH</span>
              <span className="text-[var(--brand-yellow)]">WEAR</span>
              <span className="text-black"> App</span>
            </p>
            <p className="text-xs text-black/50">Order in 2 taps</p>
          </div>

          {/* CTA - opens modal */}
          <button
            onClick={() => setModalOpen(true)}
            className="btn shrink-0 rounded-xl bg-[var(--brand-purple)] px-4 py-2.5 text-xs font-bold text-white"
          >
            Get App
          </button>

          {/* Dismiss */}
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 p-1 text-black/30 hover:text-black/60"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Modal - slides up from bottom on mobile */}
      {modalOpen && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 px-4 pb-4">
          <button
            className="absolute inset-0"
            onClick={() => setModalOpen(false)}
            aria-label="Close overlay"
          />

          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 text-sm font-bold text-[var(--brand-purple)]"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-lg font-extrabold text-[var(--brand-purple)]">
              Get the Dritchwear App
            </h3>
            <p className="mt-2 text-sm text-black/70">
              Choose your platform to start shopping.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {/* iOS → WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setModalOpen(false)}
                className="btn btn-purple w-full gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z" />
                </svg>
                iOS - Order on WhatsApp
              </a>

              {/* Google Play */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setModalOpen(false)}
                className="btn btn-yellow w-full gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z" />
                  <path d="M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z" />
                  <path d="M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z" />
                  <path d="M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}