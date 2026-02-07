"use client";

import { useState } from "react";

export function NotificationBar({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="sticky top-0 z-40 w-full border-b border-black/10 bg-[var(--brand-purple)]/5 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-4 py-3">
        {/* close */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-[var(--brand-purple)]"
        >
          ✕
        </button>

        {/* moving text */}
        <div className="overflow-hidden pr-10">
          <div className="flex w-max animate-marquee gap-12">
            <span className="text-sm md:text-base font-semibold text-[var(--brand-purple)] whitespace-nowrap">
              {message}
            </span>

            {/* duplicate for smooth loop */}
            <span className="text-sm md:text-base font-semibold text-[var(--brand-purple)] whitespace-nowrap">
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}