"use client";
import Link from "next/link";

export default function NotFound() {
  const deepLink = "dritchwear://home";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.dritchwear.app";

  return (
    <section className="w-full py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
        {/* Soft glow */}
        <div className="pointer-events-none absolute -top-28 -left-28 h-96 w-96 rounded-full bg-[#5A2D82]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#FDB813]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* 404 */}
          <div className="select-none text-7xl md:text-9xl font-extrabold tracking-tight">
            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.9)]">
              404
            </span>
          </div>

          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            Page not found
          </h1>

          <p className="mt-3 text-base md:text-lg text-white/75">
            This page may have been moved, renamed, or it never existed.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-[#5A2D82] text-white hover:brightness-110 transition"
            >
              Go to Home
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold bg-white/10 text-white border border-white/15 hover:bg-white/15 transition"
            >
              Shop outfits
            </Link>

            <a
              href={deepLink}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-white/25 text-white hover:bg-white/10 transition"
            >
              Open the app
            </a>
          </div>

          {/* Fallback */}
          <p className="mt-5 text-sm text-white/70">
            If the app does not open,{" "}
            <a
              href={playStoreUrl}
              className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
            >
              download on Google Play
            </a>
            .
          </p>

          {/* Helpful links */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm text-white/70">
            <Link href="/contact" className="hover:text-white transition">
              Contact support
            </Link>
            <Link href="/size-guide" className="hover:text-white transition">
              Size guide
            </Link>
            <Link href="/returns" className="hover:text-white transition">
              Returns
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}