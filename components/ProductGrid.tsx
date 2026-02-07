"use client";

import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { ProductQuickView } from "./ProductQuickView";
import type { Product } from "@/lib/products";

export function ProductGrid({
  products,
  onOpenApp,
}: {
  products: Product[];
  onOpenApp: () => void;
}) {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Card key={p.id} className="p-4 hover:shadow-md transition">
            <div className="h-28 rounded-xl bg-black/[0.03] border border-black/10" />
            <p className="mt-3 text-xs font-semibold text-[var(--purple)]">{p.category}</p>
            <h4 className="mt-1 font-extrabold tracking-tight">{p.name}</h4>
            <p className="mt-1 text-sm text-black/70">{p.priceNote}</p>

            <div className="mt-4 flex gap-2">
              <Button onClick={() => setActive(p)} className="w-full">Quick View</Button>
              <Button variant="secondary" onClick={onOpenApp} className="w-full">
                App
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {active && (
        <ProductQuickView
          product={active}
          onClose={() => setActive(null)}
          onOpenApp={onOpenApp}
        />
      )}
    </>
  );
}