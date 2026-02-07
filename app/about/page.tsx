// app/about/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";

const APP_STORE_URL = "https://example.com/appstore";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.dritchwear.app";

function IconMedal() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a7 7 0 100 14 7 7 0 000-14z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 14l-1 8 5-3 5 3-1-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4c-7 0-14 4-14 12 0 2.5 1.2 4 3 4 8 0 12-7 11-16z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 16c3-1 7-4 10-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 21c1.5-4 14.5-4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 8a3 3 0 100 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.2 2.6c-1 .1-2.1.7-2.8 1.6-.7.8-1.2 2-1 3.1 1.1.1 2.2-.6 2.9-1.4.7-.9 1.2-2 1-3.3z"
        fill="currentColor"
      />
      <path
        d="M20.6 17.2c-.4.9-.9 1.8-1.6 2.7-1 .9-1.9 1.3-2.5 1.3-.7 0-1.5-.3-2.5-.7-1-.4-1.7-.7-2.4-.7-.7 0-1.5.3-2.5.7-1 .4-1.8.7-2.5.7-.7 0-1.5-.4-2.5-1.3-1.2-1.1-2.2-2.8-2.9-4.9-.8-2.4-.9-4.6-.2-6.4.6-1.5 1.6-2.3 3-2.4.8 0 1.7.3 2.6.7.9.4 1.5.7 2 .7.4 0 1.1-.3 2.1-.7 1-.4 1.9-.7 2.7-.6 2 .2 3.4 1 4.2 2.4-1.8 1.1-2.7 2.7-2.6 4.7.1 1.6.8 3 2.1 3.9z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 512 512"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M325.3 234.3L104.6 13.6c-6.3-6.3-16.6-1.8-16.6 7.1v470.6c0 8.9 10.3 13.4 16.6 7.1l220.7-220.7c4.4-4.4 4.4-11.6 0-16z"/>
      <path d="M361.2 270.1l-40.6-40.6c-4.4-4.4-11.6-4.4-16 0l-40.6 40.6c-4.4 4.4-4.4 11.6 0 16l40.6 40.6c4.4 4.4 11.6 4.4 16 0l40.6-40.6c4.4-4.4 4.4-11.6 0-16z"/>
      <path d="M412.1 256l-46.7-46.7c-4.4-4.4-11.6-4.4-16 0l-46.7 46.7c-4.4 4.4-4.4 11.6 0 16l46.7 46.7c4.4 4.4 11.6 4.4 16 0l46.7-46.7c4.4-4.4 4.4-11.6 0-16z"/>
    </svg>
  );
}

/* SIMPLE MODAL */
function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-sm font-bold"
          style={{ color: "var(--brand-purple)" }}
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [storeModal, setStoreModal] = useState(false);

  return (
    <div className="w-full">


     {/* ABOUT HERO — centred layout (like your screenshot) */}
<section className="w-full">
  <div className="mx-auto max-w-6xl px-6 pt-10 pb-12 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black">
      About{" "}
      <span style={{ color: "var(--brand-yellow)" }}>Dritchwear</span>
    </h1>

    <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-black/55 leading-relaxed">
  We create premium streetwear and branded items that help you show up with
  confidence; for your personal style, your brand, or your next big event.
</p>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
      {/* opens your app-store modal */}
      <button
        onClick={() => setStoreModal(true)}
        className="rounded-full px-8 py-4 font-semibold"
        style={{ backgroundColor: "var(--brand-purple)", color: "#fff" }}
      >
        Shop Our Collection
      </button>

      <a
        href="/contact"
        className="rounded-full px-8 py-4 font-semibold bg-white"
        style={{
          border: "1px solid rgba(0,0,0,0.15)",
          color: "var(--brand-purple)",
        }}
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

      {/* OUR STORY */}
      <section className="w-full py-14">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-black">Our Story</h2>

            <div className="mt-5 grid gap-4 text-black/75">
              <p>
                Dritchwear started with one simple idea:{" "}
                <span className="font-semibold">to help people wear their brand with pride.</span>
              </p>

              <p>
                We saw how hard it was for individuals, event organisers, and business owners to get
                quality streetwear and branded items made the way they wanted. So, we decided to make it easy.
              </p>

              <p>
                We began sewing t-shirts, hoodies, joggers, and more; custom-made and carefully crafted.
              </p>

              <p>
                We now also offer <span className="font-semibold">gift items</span> like tote bags, mugs, flasks,
                and notebooks, perfect for branding, events, or personal use.
              </p>

              <p>Today, Dritchwear is your go-to brand for quality, style, and custom wear.</p>
            </div>
          </div>

          <Card className="p-0 overflow-hidden">
  <img
    src="/images/about-image.png"
    alt="Dritchwear custom streetwear"
    className="h-[340px] w-full object-cover object-[50%_35%]"
  />
</Card>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              Our Values
            </h2>
            <p className="mt-3 text-black/60 max-w-2xl mx-auto">
              These are the things that guide everything we do at Dritchwear:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
                <IconMedal />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-black">Top Quality</h3>
              <p className="mt-3 text-sm text-black/60">
                We use good fabrics and durable merch and pay attention to every detail, so each piece lasts long.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
                <IconLeaf />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-black">Eco-friendly Fashion</h3>
              <p className="mt-3 text-sm text-black/60">
                We care about the planet. We use materials and methods that are better for the environment.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
                <IconUsers />
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-black">Customer First</h3>
              <p className="mt-3 text-sm text-black/60">
                We listen to our customers, take feedback seriously, and always try to do better.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* STORE MODAL (app links) */}
      {storeModal && (
        <Modal onClose={() => setStoreModal(false)}>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
            Full catalogue is in the app
          </p>

          <h3 className="mt-2 text-2xl font-extrabold" style={{ color: "var(--brand-purple)" }}>
            Download the Dritchwear App
          </h3>

          <p className="mt-3 text-sm text-black/65">
            To view all products and place an order, use the mobile app.
          </p>

          <div className="mt-6 grid gap-3">
            {/* Purple => white text */}
            <a
              href={APP_STORE_URL}
              className="rounded-2xl px-6 py-4 font-semibold text-center inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "var(--brand-purple)", color: "#fff" }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <AppleIcon />
              </span>
              Download on App Store
            </a>

            {/* Gold => white text */}
            <a
  href={PLAY_STORE_URL}
  className="rounded-2xl px-6 py-4 font-semibold inline-flex items-center justify-center gap-2"
  style={{ backgroundColor: "var(--brand-yellow)", color: "#fff" }}
>
  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
    <PlayStoreIcon />
  </span>
  Get it on Google Play
</a>
          </div>
        </Modal>
      )}
    </div>
  );
}