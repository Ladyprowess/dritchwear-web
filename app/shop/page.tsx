"use client";

import { useMemo, useState } from "react";
import { AnnouncementModal } from "@/components/AnnouncementModal";
import { Card } from "@/components/Card";
import { featuredProducts } from "@/lib/products";

const APP_STORE_URL = "https://example.com/appstore";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.dritchwear.app";
const WHATSAPP_URL = "https://wa.me/2349110163722";

/* ✅ Correct icons */
function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        fill="currentColor"
        d="M16.2 2.6c-1 .1-2.1.7-2.8 1.6-.7.8-1.2 2-1 3.1 1.1.1 2.2-.6 2.9-1.4.7-.9 1.2-2 1-3.3z"
      />
      <path
        fill="currentColor"
        d="M20.6 17.2c-.4.9-.9 1.8-1.6 2.7-1 .9-1.9 1.3-2.5 1.3-.7 0-1.5-.3-2.5-.7-1-.4-1.7-.7-2.4-.7-.7 0-1.5.3-2.5.7-1 .4-1.8.7-2.5.7-.7 0-1.5-.4-2.5-1.3-1.2-1.1-2.2-2.8-2.9-4.9-.8-2.4-.9-4.6-.2-6.4.6-1.5 1.6-2.3 3-2.4.8 0 1.7.3 2.6.7.9.4 1.5.7 2 .7.4 0 1.1-.3 2.1-.7 1-.4 1.9-.7 2.7-.6 2 .2 3.4 1 4.2 2.4-1.8 1.1-2.7 2.7-2.6 4.7.1 1.6.8 3 2.1 3.9z"
      />
    </svg>
  );
}

/* ✅ Correct Google Play icon (triangle) */
function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      {/* left triangle */}
      <path fill="currentColor" d="M3.5 2.6v18.8c0 .5.6.9 1.1.6l10.6-9.4L4.6 2c-.5-.3-1.1.1-1.1.6z" />
      {/* top triangle */}
      <path fill="currentColor" d="M16.7 12.6l2.7-2.4c.6-.5.5-1.4-.2-1.8L7.6 2.1l9.1 10.5z" />
      {/* bottom triangle */}
      <path fill="currentColor" d="M16.7 11.4L7.6 21.9l11.6-6.3c.7-.4.8-1.3.2-1.8l-2.7-2.4z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        fill="currentColor"
        d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.74.46 3.42 1.34 4.9L2 22l5.3-1.39c1.42.77 3.03 1.18 4.74 1.18h.01c5.48 0 9.94-4.46 9.94-9.94C21.99 6.46 17.53 2 12.04 2zm5.8 14.45c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.12-1.84-.12-.43-.14-.98-.32-1.68-.62-2.95-1.27-4.87-4.19-5.02-4.38-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.02-2.46.27-.3.6-.38.8-.38h.58c.18 0 .42-.07.66.5.24.57.82 2 .9 2.14.08.14.13.32.02.51-.11.19-.17.32-.33.5-.16.19-.35.41-.49.55-.16.16-.33.34-.14.65.19.3.86 1.42 1.86 2.3 1.28 1.14 2.36 1.49 2.68 1.66.32.16.5.14.68-.08.19-.22.78-.9.99-1.22.21-.32.42-.27.7-.16.29.11 1.82.86 2.13 1.02.32.16.53.24.61.38.08.14.08.8-.16 1.48z"
      />
    </svg>
  );
}

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [storeModal, setStoreModal] = useState(false);
  const [productModal, setProductModal] = useState<any>(null);

  const products = useMemo(() => {
    return featuredProducts
      .filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 6);
  }, [search]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">


      {/* SHOP HEADER */}
      <div className="mt-6 flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
          Shop{" "}
          <span style={{ color: "var(--brand-yellow)" }}>Our Collection</span>
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-black/60">
          At Dritchwear, we create premium streetwear and branded items that let you
          express your identity.
        </p>

        {/* Search */}
        <div className="mt-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm"
          />
        </div>
      </div>

      {/* Products */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <button
            key={idx}
            onClick={() => setProductModal(product)}
            className="text-left rounded-3xl border border-black/10 bg-white overflow-hidden"
          >
            <img
              src={product.image ?? "/images/placeholder-product.png"}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-[var(--brand-purple)]">{product.name}</h3>
              <p className="mt-2 text-sm text-black/60">Tap to order</p>
            </div>
          </button>
        ))}
      </div>

      {/* View all */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setStoreModal(true)}
          className="rounded-2xl px-8 py-4 font-semibold"
          style={{ backgroundColor: "#5A2D82", color: "#FFFFFF" }}
        >
          View all products
        </button>
      </div>

      {/* PRODUCT MODAL */}
      {productModal && (
        <Modal onClose={() => setProductModal(null)}>
          <h3 className="text-xl font-extrabold text-[var(--brand-purple)]">Order this product</h3>

          <div className="mt-6 grid gap-3">
            <a
              href={APP_STORE_URL}
              className="rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "#5A2D82", color: "#FFFFFF" }}
            >
              <AppleIcon />
              Open on App Store
            </a>

            <a
              href={PLAY_STORE_URL}
              className="rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "#FDB813", color: "#FFFFFF" }}
            >
              <GooglePlayIcon />
              Open on Google Play
            </a>

            <a
              href={WHATSAPP_URL}
              className="rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#5A2D82",
                border: "1px solid rgba(0,0,0,0.15)",
              }}
            >
              <WhatsAppIcon />
              Contact us on WhatsApp
            </a>
          </div>
        </Modal>
      )}

      {/* STORE MODAL */}
      {storeModal && (
        <Modal onClose={() => setStoreModal(false)}>
          <h3 className="text-xl font-extrabold text-[var(--brand-purple)]">Full catalogue is in the app</h3>

          <div className="mt-6 grid gap-3">
            <a
              href={APP_STORE_URL}
              className="rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "#5A2D82", color: "#FFFFFF" }}
            >
              <AppleIcon />
              Download on App Store
            </a>

            <a
              href={PLAY_STORE_URL}
              className="rounded-xl px-6 py-4 text-center font-semibold inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "#FDB813", color: "#FFFFFF" }}
            >
              <GooglePlayIcon />
              Get it on Google Play
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* SIMPLE MODAL */
function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-sm font-bold"
          style={{ color: "#5A2D82" }}
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}