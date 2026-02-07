"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "./Card";

type Props = {
  id: string;
  title: string;
  message?: string;

  // Promo-style (optional)
  subtitle?: string;
  highlight?: string;
  bullets?: string[];

  ctaLabel?: string;
  ctaHref?: string;

  // NEW: how often to show again (default 1 hour)
  repeatEveryMs?: number;
};

export function AnnouncementModal({
  id,
  title,
  message,
  subtitle,
  highlight,
  bullets = [],
  ctaLabel = "Start your order now!",
  ctaHref = "/shop",

  // 1 hour by default. For 2 hours use: 2 * 60 * 60 * 1000
  repeatEveryMs = 60 * 60 * 1000,
}: Props) {
  const storageKey = `dritchwear_announcement_last_closed_${id}`;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lastClosedRaw = localStorage.getItem(storageKey);
    const lastClosed = lastClosedRaw ? Number(lastClosedRaw) : 0;

    const now = Date.now();
    const canShowAgain = !lastClosed || now - lastClosed >= repeatEveryMs;

    if (canShowAgain) setOpen(true);
  }, [storageKey, repeatEveryMs]);

  const close = () => {
    localStorage.setItem(storageKey, String(Date.now())); // store time closed
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4">
      <Card className="relative w-full max-w-xl rounded-2xl p-6 md:p-8">
        {/* Close */}
        <button
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-2 hover:bg-black/[0.05]"
          onClick={close}
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="text-center text-xl md:text-2xl font-extrabold text-[var(--purple)]">
          🎉 {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-center text-sm text-black/70">{subtitle}</p>
        )}

        {/* Highlight */}
        {highlight && (
          <p className="mt-4 text-center text-lg font-extrabold text-black">
            {highlight}
          </p>
        )}

        {/* Bullet points */}
        {bullets.length > 0 && (
          <div className="mt-5 space-y-3">
            {bullets.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-600">✅</span>
                <p className="text-sm text-black/80">{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* Message */}
        {message && (
          <p className="mt-5 text-center text-sm text-black/75">{message}</p>
        )}

        {/* Actions */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={ctaHref}
            onClick={close}
            className="btn btn-purple w-full sm:w-auto"
          >
            👉 {ctaLabel}
          </Link>

          <button
            type="button"
            className="btn w-full sm:w-auto border border-black/10"
            onClick={close}
          >
            Close
          </button>
        </div>
      </Card>
    </div>
  );
}
