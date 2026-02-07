"use client";

import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";

type Props = {
  id: string; // changes per promo
  title: string;
  message: string;
};

export function AnnouncementModal({ id, title, message }: Props) {
  const storageKey = `dritchwear_announcement_dismissed_${id}`;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(storageKey);
    if (!dismissed) setOpen(true);
  }, [storageKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-end md:place-items-center bg-black/30 p-4">
      <Card className="w-full md:max-w-lg p-5 relative">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 rounded-lg p-2 hover:bg-black/[0.04]"
          onClick={() => {
            localStorage.setItem(storageKey, "1");
            setOpen(false);
          }}
        >
          ✕
        </button>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--yellow)]" />
          <h3 className="text-base font-extrabold text-[var(--purple)]">{title}</h3>
        </div>

        <p className="mt-2 text-sm text-black/80">{message}</p>

        <div className="mt-4 flex gap-3">
          <Button
            onClick={() => {
              localStorage.setItem(storageKey, "1");
              setOpen(false);
            }}
          >
            Got it
          </Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
}