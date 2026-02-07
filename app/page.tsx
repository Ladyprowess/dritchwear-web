"use client";

import { useState } from "react";
import { AnnouncementModal } from "@/components/AnnouncementModal";
import { Card } from "@/components/Card";
import { ManualGoogleReviews } from "@/components/ManualGoogleReviews";




function SoftIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[var(--brand-purple)] opacity-60"
      aria-hidden="true"
    >
      <path
        d="M12 3l2.2 6.7L21 12l-6.8 2.3L12 21l-2.2-6.7L3 12l6.8-2.3L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}


export default function HomePage() {
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  return (
    <div>
      <AnnouncementModal
  id="promo_001"
  title="Special Offer Just for You!"
  subtitle="Planning a big order?"
  highlight="Spend ₦300,000 or more and enjoy:"
  bullets={[
    "Free delivery across Nigeria",
    "50% off international shipping",
    "Bonus branded gift pack added to your order",
  ]}
  message="Let’s bring your custom clothing and branded items to life; fast, clean, and stylish!"
  ctaLabel="Start your order now!"
  ctaHref="/shop"
/>


      

      {/* HERO (faint purple background) */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--soft-purple)] blur-3xl" />
        {/* subtle soft gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--brand-purple)]/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--yellow)]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/60">
              Premium custom streetwear & branded merch
            </p>

            <h1 className="mt-4 text-[42px] font-extrabold">
  <span>Wear it.</span>{" "}
  <span style={{ color: "#FDB813" }}>Brand it.</span>
  <br />
  <span>Gift it.</span>
</h1>


            <p className="mt-4 text-base md:text-lg text-black/65">
              Dritchwear helps individuals, brands, and organisations turn
              clothing into identity, visibility, and value.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
            <button
  type="button"
  onClick={() => setIsStoreModalOpen(true)}
  className="btn btn-purple"
>
  Shop on the App
</button>

<a
  href="/shop"
  className="rounded-xl border border-black/15 px-6 py-3 font-semibold text-black hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple)] focus:ring-offset-2"
>
  View Collection
</a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-black/60">
  <span
    aria-hidden
    className="inline-block h-[2px] w-8 bg-[#FDB813]"
  />
  <span>Custom · Bulk · Events · Merch</span>
</div>

          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/25 via-transparent to-transparent z-10" />
            <img
              src="/images/hero.png"
              alt="Dritchwear premium streetwear"
              className="rounded-3xl object-cover w-full h-[420px] md:h-[520px] border border-black/10"
            />

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-[var(--brand-purple)]/10 border border-black/10" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-2xl bg-[var(--yellow)]/20 border border-black/10" />
          </div>
        </div>

     {/* WHY CHOOSE DRITCHWEAR */}
<section className="mx-auto max-w-6xl px-6 py-20 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
  <span className="text-[var(--brand-purple)]">Why Choose</span>{" "}
  <span className="text-[#FDB813]">Dritchwear</span>
</h2>

  <p className="mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto">
    We're committed to delivering exceptional quality and service in every
    aspect of your shopping experience.
  </p>

  <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {/* ITEM */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10">
        {/* Star Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[var(--brand-purple)]"
        >
          <path
            d="M12 3l2.2 6.7L21 12l-6.8 2.3L12 21l-2.2-6.7L3 12l6.8-2.3L12 3z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h3 className="font-bold text-lg">Top Quality</h3>
      <p className="mt-2 text-sm text-black/60 max-w-xs">
        We use good fabrics and pay attention to every detail in every item.
      </p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10">
        {/* Truck Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[var(--brand-purple)]"
        >
          <path
            d="M3 7h11v8H3V7zm11 2h4l3 3v3h-7V9z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="font-bold text-lg">Fast Shipping</h3>
      <p className="mt-2 text-sm text-black/60 max-w-xs">
        We send out orders quickly, so you get your clothes on time.
      </p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10">
        {/* Shield Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[var(--brand-purple)]"
        >
          <path
            d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <h3 className="font-bold text-lg">Secure Shopping</h3>
      <p className="mt-2 text-sm text-black/60 max-w-xs">
        Your information is kept safe with strong security.
      </p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-purple)]/10">
        {/* Headset Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[var(--brand-purple)]"
        >
          <path
            d="M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-6h4M4 12v5a2 2 0 002 2h2v-6H4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h3 className="font-bold text-lg">24/7 Support</h3>
      <p className="mt-2 text-sm text-black/60 max-w-xs">
        Our team is always ready to help you, day or night.
      </p>
    </div>
  </div>
</section>


    {/* DARK BRAND SECTION */}
<section className="bg-[var(--black)] text-white py-20">
  <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
    <div>
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60">
        Built for modern streetwear
      </p>

      {/* Title = #FDB813 */}
      <h2
        className="mt-4 text-4xl font-extrabold leading-tight"
        style={{ color: "#FDB813" }}
      >
        Built for identity.
        <br />
        Designed for visibility.
      </h2>

      <p className="mt-5 text-white/70 max-w-lg">
        We don’t just print clothes. We help you show up with confidence —
        whether it’s your personal style, your brand, or your next big event.
      </p>

      <div className="mt-8 flex gap-3">
        {/* Button text = #5A2D82, hover text = black */}
        <button
  type="button"
  onClick={() => setIsStoreModalOpen(true)}
  className="rounded-xl bg-white px-6 py-3 font-semibold transition hover:bg-white/95 hover:text-black"
  style={{ color: "#5A2D82" }}
>
  Open the App
</button>


        <a
  href="/contact"
  className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10 hover:text-[#5A2D82]"
>
  Custom Orders
</a>

      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-2 gap-4">
      {/* 1 */}
      <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
        <div className="text-white/90">
          {/* Hoodie icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 8l5-4 5 4v3l-2 2v7H9v-7l-2-2V8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-3 font-bold !text-white">Custom Streetwear</h3>


        <p className="mt-2 text-sm text-white/65">
          Oversized fits. Clean cuts. Premium feel.
        </p>
      </div>

      {/* 2 */}
      <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
        <div className="text-white/90">
          {/* Tag icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 12l9 9 9-9-9-9H3v9z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="7" cy="7" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <h3 className="mt-3 font-bold !text-white">Branded Merch</h3>

        <p className="mt-2 text-sm text-white/65">
          Tote bags, caps, bottles, boxes.
        </p>
      </div>

      {/* 3 */}
      <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
        <div className="text-white/90">
          {/* Box icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 7l9-4 9 4-9 4-9-4z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M3 7v10l9 4 9-4V7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12 11v10"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <h3 className="mt-3 font-bold !text-white">Bulk Orders</h3>
        <p className="mt-2 text-sm text-white/65">
          For teams, events, campaigns and gifting.
        </p>
      </div>

      {/* 4 */}
      <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
  <div className="text-[#ffff">
    {/* Shield + check icon (Durability) */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
        </div>
        <h3 className="mt-3 font-bold !text-white">Durable Quality</h3>
        <p className="mt-2 text-sm text-white/65">
        Strong fabrics, solid stitching, and finishes built to last.
        </p>
      </div>
    </div>
  </div>
</section>


<ManualGoogleReviews />





      {/* WHY + APP PROMO */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-7">
        <h2 className="text-2xl font-extrabold tracking-tight">
  <span className="text-[#FDB813]">Our</span>{" "}
  <span className="text-[var(--brand-purple)]">Offering</span>
</h2>

<div className="mt-6 grid gap-4">
  {/* 1 */}
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9.5 12.5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div>
      <p className="font-semibold text-black">Quality that lasts</p>
      <p className="text-sm text-black/70">Strong fabrics, neat stitching, clean finishing.</p>
    </div>
  </div>

  {/* 2 */}
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12a8 8 0 0116 0v5a2 2 0 01-2 2h-2v-6h4M4 12v5a2 2 0 002 2h2v-6H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
    <div>
      <p className="font-semibold text-black">Good customer service</p>
      <p className="text-sm text-black/70">Clear communication and fast updates.</p>
    </div>
  </div>

  {/* 3 */}
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 21a8 8 0 0116 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
    <div>
      <p className="font-semibold text-black">Built for identity</p>
      <p className="text-sm text-black/70">Wear it your way. Show who you are.</p>
    </div>
  </div>

  {/* 4 */}
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 8l-9-4-9 4 9 4 9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M3 8v8l9 4 9-4V8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </div>
    <div>
      <p className="font-semibold text-black">Bulk orders</p>
      <p className="text-sm text-black/70">For teams, events, brands, and gifting.</p>
    </div>
  </div>

  {/* 5 */}
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7h16M4 12h10M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
    <div>
      <p className="font-semibold text-black">Custom orders</p>
      <p className="text-sm text-black/70">Tell us what you want; we bring it to life.</p>
    </div>
  </div>
</div>

{/* Item 6 */}
<div className="flex items-start gap-3">
  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
    {/* Resell icon */}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h10M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
  <div>
    <p className="font-semibold text-black">Buy & resell</p>
    <p className="text-sm text-black/70">
      Perfect for vendors who want to buy in bulk and resell.
    </p>
  </div>
</div>
    
</Card>


          <Card className="p-7">
          <h2 className="text-2xl font-extrabold tracking-tight">
  <span className="text-[var(--brand-purple)]">Order</span>{" "}
  <span className="text-[#FDB813]">via the App</span>
</h2>
            <p className="mt-2 text-sm text-black/70">
              Browse the full catalogue, place orders, and track progress inside
              the Dritchwear mobile app.
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-black/[0.02] overflow-hidden">
  <img
    src="/images/app-preview.jpeg"
    alt="Dritchwear app preview"
    className="h-52 w-full object-cover"
  />
</div>


<div className="mt-5 flex flex-col sm:flex-row gap-3">
  {/* App Store – purple bg, white text */}
  <a
  href="https://example.com/appstore"
  className="inline-flex items-center justify-center gap-2 rounded-xl
             bg-[var(--brand-purple)] px-6 py-3 font-semibold
             !text-white transition
             hover:bg-black hover:!text-white"
>
  {/* Apple icon */}
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z"/>
  </svg>
  App Store
</a>
  {/* Google Play – transparent bg, purple border */}
  <a
    href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--brand-purple)] px-6 py-3 font-semibold text-[var(--brand-purple)] hover:bg-[var(--brand-purple)]/5 transition"
  >
    {/* Google Play icon */}
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-[var(--brand-purple)]"
    >
      <path d="M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z"/>
      <path d="M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z"/>
      <path d="M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z"/>
      <path d="M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z"/>
    </svg>
    Google Play
  </a>
</div>
          </Card>
        </div>
      </section>
      {isStoreModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-extrabold text-[var(--brand-purple)]">
          Get the Dritchwear App
        </h3>
        <button
          onClick={() => setIsStoreModalOpen(false)}
          className="text-black/50 hover:text-black text-xl"
        >
          ×
        </button>
      </div>

      <p className="mt-2 text-sm text-black/70">
        Choose your platform to start shopping.
      </p>

      {/* Buttons — SAME STYLE AS “Order via the App” */}
      <div className="mt-6 flex flex-col gap-3">
        {/* App Store */}
        <a
          href="https://example.com/appstore"
          className="inline-flex items-center justify-center gap-2 rounded-xl
                     bg-[var(--brand-purple)] px-6 py-3 font-semibold
                     !text-white transition
                     hover:bg-black hover:!text-white"
        >
          {/* Apple icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16.365 1.43c0 1.14-.42 2.22-1.22 3.1-.82.9-2.17 1.6-3.29 1.5-.14-1.1.43-2.27 1.22-3.07.86-.88 2.32-1.55 3.29-1.53zM20.52 17.12c-.55 1.25-.8 1.8-1.5 2.9-.98 1.55-2.37 3.47-4.09 3.49-1.53.02-1.92-.99-3.99-.98-2.07.01-2.5 1-4.03.98-1.72-.02-3.03-1.77-4.01-3.32-2.24-3.54-2.47-7.69-1.09-9.82.98-1.52 2.52-2.41 3.95-2.41 1.56 0 2.54 1.01 3.83 1.01 1.25 0 2.02-1.02 3.82-1.02 1.27 0 2.62.69 3.6 1.88-3.17 1.74-2.66 6.26.71 7.31z" />
          </svg>
          App Store
        </a>

        {/* Google Play */}
        <a
          href="https://play.google.com/store/apps/details?id=com.dritchwear.app"
          className="inline-flex items-center justify-center gap-2 rounded-xl
                     border border-[var(--brand-purple)]
                     px-6 py-3 font-semibold
                     text-[var(--brand-purple)]
                     hover:bg-[var(--brand-purple)]/5 transition"
        >
          {/* Google Play icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 3.5v17c0 .6.7.9 1.2.6l10.4-8.5L5.2 2.9C4.7 2.6 4 2.9 4 3.5z"/>
            <path d="M16.6 12.6l2.7-2.2c.5-.4.5-1.1 0-1.5l-2.7-2.2-3.1 2.9 3.1 3z"/>
            <path d="M15.6 13.5L5.2 21.1c.4.3 1 .3 1.4 0l9-6.7z"/>
            <path d="M15.6 10.5l-9-6.7c-.4-.3-1-.3-1.4 0l10.4 7.6z"/>
          </svg>
          Google Play
        </a>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
