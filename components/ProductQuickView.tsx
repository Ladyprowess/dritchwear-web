"use client";

import { Card } from "./Card";
import { Button } from "./Button";
import type { Product } from "@/lib/products";

export function ProductQuickView({
  product,
  onClose,
  onOpenApp,
}: {
  product: Product;
  onClose: () => void;
  onOpenApp: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 p-4 grid place-items-center">
      <Card className="w-full max-w-lg p-5 relative">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 rounded-lg p-2 hover:bg-black/[0.04]"
          onClick={onClose}
        >
          ✕
        </button>

        <p className="text-xs font-semibold text-[var(--purple)]">{product.category}</p>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight">{product.name}</h3>
        <div className="mt-2 h-[2px] w-12 bg-[var(--yellow)]" />
        <p className="mt-3 text-sm text-black/75">{product.short}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-semibold">{product.priceNote}</p>
          <Button onClick={onOpenApp}>View & Order on the App</Button>
        </div>

        <p className="mt-4 text-xs text-black/60">
          Full catalogue and ordering are available inside the Dritchwear mobile app.
        </p>
      </Card>
    </div>
  );
}