"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "./Card";

type Props = {
  id: string;
  title: string;
  message?: string;
  messageContent?: ReactNode;

  // Promo-style (optional)
  subtitle?: string;
  highlight?: string;
  bullets?: string[];

  ctaLabel?: string;
  ctaHref?: string;

  // NEW: how often to show again (default 1 hour)
  repeatEveryMs?: number;

    // NEW: optional promo image + promo code
    imageSrc?: string;
    imageAlt?: string;
  
    promoCode?: string;
    promoCodeLabel?: string; // e.g. "Use promo code at checkout"

      // NEW: optional CTA click (use this when you want a modal instead of a link)
  onCtaClick?: () => void;

  
};

export function AnnouncementModal({
  id,
  title,
  message,
  messageContent,
  subtitle,
  highlight,
  bullets = [],
  ctaLabel = "Start your order now!",
  ctaHref = "/shop",

  imageSrc,
  imageAlt,

  promoCode,
  promoCodeLabel = "Use promo code at checkout",
  onCtaClick,

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
      <Card className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl p-5 md:p-8">
        {/* Close */}
        <button
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-2 hover:bg-black/[0.05]"
          onClick={close}
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="pr-10 text-center text-lg font-extrabold text-[var(--purple)] md:text-2xl">
          🎉 {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-center text-sm leading-5 text-black/70">
            {subtitle}
          </p>
        )}

                {/* Promo image (landscape) */}
                {imageSrc && (
          <div className="mt-3 md:mt-4">
            <img
              src={imageSrc}
              alt={imageAlt ?? "Promo image"}
              className="h-[150px] w-full rounded-2xl object-cover md:h-[200px]"
            />
          </div>
        )}


        {/* Highlight */}
        {highlight && (
          <p className="mt-4 text-center text-base font-extrabold text-black md:text-lg">
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
        {messageContent ? (
          <div className="mt-4 md:mt-5">{messageContent}</div>
        ) : message ? (
          <p className="mt-5 text-center text-sm text-black/75 whitespace-pre-line">
            {message}
          </p>
        ) : null}

                {/* Promo code (bold + centred) */}
                {promoCode && (
          <div className="mt-4 text-center md:mt-5">
            <p className="text-sm text-black/70">{promoCodeLabel}</p>

            <div className="mt-3 inline-flex items-center justify-center rounded-2xl border-2 border-dashed border-[var(--gold)] bg-[rgba(253,184,19,0.10)] px-8 py-3">
              <span className="text-xl md:text-2xl font-extrabold tracking-wider text-[var(--gold)]">
                {promoCode}
              </span>
            </div>
          </div>
        )}


        {/* Actions */}
        <div className="mt-5 flex flex-col justify-center gap-3 sm:mt-7 sm:flex-row">
        {onCtaClick ? (
  <button
    type="button"
    onClick={() => {
      close();
      onCtaClick();
    }}
    className="btn btn-purple w-full sm:w-auto"
  >
    👉 {ctaLabel}
  </button>
) : (
  <Link
    href={ctaHref}
    onClick={close}
    className="btn btn-purple w-full sm:w-auto"
  >
    👉 {ctaLabel}
  </Link>
)}


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
