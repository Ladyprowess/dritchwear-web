"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "./Card";
import { Button } from "./Button";

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
}: Props) {
  const storageKey = `dritchwear_announcement_dismissed_${id}`;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed =
      typeof window !== "undefined" && localStorage.getItem(storageKey);
    if (!dismissed) setOpen(true);
  }, [storageKey]);

  const close = () => {
    localStorage.setItem(storageKey, "1");
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
          <p className="mt-2 text-center text-sm text-black/70">
            {subtitle}
          </p>
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
          <p className="mt-5 text-center text-sm text-black/75">
            {message}
          </p>
        )}

        {/* Actions */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={ctaHref} onClick={close} className="w-full sm:w-auto">
            <Button className="w-full">
              👉 {ctaLabel}
            </Button>
          </Link>

          <Button
            variant="secondary"
            onClick={close}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
}
