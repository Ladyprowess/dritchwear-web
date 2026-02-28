"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  Ruler,
  UserRound,
  Users,
  Shirt,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/2349110163722?text=" +
  encodeURIComponent("Hi Dritchwear! I need help with sizing. Please assist.");
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dritchwear.app";

/* ✅ FIX: Added 3XL and 4XL sizes */
const rows = [
  { size: "S", chest: "92–96", length: "68", waist: "72–76", hip: "90–94" },
  { size: "M", chest: "97–102", length: "70", waist: "77–82", hip: "95–100" },
  { size: "L", chest: "103–108", length: "72", waist: "83–88", hip: "101–106" },
  { size: "XL", chest: "109–114", length: "74", waist: "89–94", hip: "107–112" },
  { size: "XXL", chest: "115–120", length: "76", waist: "95–100", hip: "113–118" },
  { size: "3XL", chest: "121–126", length: "78", waist: "101–106", hip: "119–124" },
  { size: "4XL", chest: "127–132", length: "80", waist: "107–112", hip: "125–130" },
];

function SectionHeader({
  title,
  accent,
  subtitle,
}: {
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight">
        <span className="text-[var(--brand-purple)]">{title}</span>
        {accent ? (
          <>
            {" "}
            <span className="text-[var(--brand-yellow)]">{accent}</span>
          </>
        ) : null}
      </h2>

      {subtitle ? <p className="mt-2 text-sm text-black/70">{subtitle}</p> : null}
    </div>
  );
}

function Table() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-black/10">
      <table className="w-full text-sm">
        <thead className="bg-black/[0.02]">
          <tr className="text-left">
            <th className="p-3 font-extrabold text-[var(--brand-purple)]">Size</th>
            <th className="p-3 font-semibold">Chest (cm)</th>
            <th className="p-3 font-semibold">Length (cm)</th>
            <th className="p-3 font-semibold">Waist (cm)</th>
            <th className="p-3 font-semibold">Hip (cm)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.size} className="border-t border-black/10">
              <td className="p-3 font-semibold">{r.size}</td>
              <td className="p-3">{r.chest}</td>
              <td className="p-3">{r.length}</td>
              <td className="p-3">{r.waist}</td>
              <td className="p-3">{r.hip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MeasureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="p-7 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--soft-purple)]">
        <div className="text-[var(--brand-purple)]">{icon}</div>
      </div>
      <h3 className="mt-5 text-lg font-extrabold text-black">{title}</h3>
      <p className="mt-2 text-sm text-black/70">{text}</p>
    </Card>
  );
}

function FitCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <Card className="p-7">
      <h3 className="text-lg font-extrabold text-black">{title}</h3>
      <p className="mt-2 text-sm text-black/70">{desc}</p>

      <div className="mt-5 grid gap-3 text-sm text-black/75">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-3">
            <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-[var(--brand-purple)]" />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.74.46 3.42 1.34 4.9L2 22l5.3-1.39c1.42.77 3.03 1.18 4.74 1.18h.01c5.48 0 9.94-4.46 9.94-9.94C21.99 6.46 17.53 2 12.04 2zm5.8 14.45c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.12-1.84-.12-.43-.14-.98-.32-1.68-.62-2.95-1.27-4.87-4.19-5.02-4.38-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.02-2.46.27-.3.6-.38.8-.38h.58c.18 0 .42-.07.66.5.24.57.82 2 .9 2.14.08.14.13.32.02.51-.11.19-.17.32-.33.5-.16.19-.35.41-.49.55-.16.16-.33.34-.14.65.19.3.86 1.42 1.86 2.3 1.28 1.14 2.36 1.49 2.68 1.66.32.16.5.14.68-.08.19-.22.78-.9.99-1.22.21-.32.42-.27.7-.16.29.11 1.82.86 2.13 1.02.32.16.53.24.61.38.08.14.08.8-.16 1.48z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 3.5v17c0 1 1.1 1.6 2 .9l10-8.5-10-8.5c-.9-.7-2-.1-2 .9z" fill="currentColor" opacity="0.9" />
      <path d="M16 12l3.7-3.1c.8-.7.6-2-.4-2.4L14 4.6l2 7.4z" fill="currentColor" />
      <path d="M14 19.4l5.3-1.9c1-.4 1.2-1.7.4-2.4L16 12l-2 7.4z" fill="currentColor" />
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
      <button className="absolute inset-0 bg-black/60" onClick={onClose} aria-label="Close overlay" />
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

export default function SizeGuidePage() {
  const [storeModal, setStoreModal] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      {/* PAGE HEADER */}
      <div className="mt-6 flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-[var(--brand-purple)]">Size</span>{" "}
          <span className="text-[var(--brand-yellow)]">Guide</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl leading-relaxed text-black/60">
          Use this guide to pick the best size before placing your order.
        </p>
      </div>

      {/* MAIN STACK */}
      <div className="mt-14 space-y-16 md:space-y-20">
        {/* HOW TO MEASURE */}
        <section>
          <SectionHeader
            title="How To Measure"
            subtitle="Follow these simple steps to get accurate measurements for the perfect fit."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <MeasureCard
              icon={<Ruler className="h-6 w-6" />}
              title="Use a Measuring Tape"
              text="Use a flexible measuring tape for the most accurate measurements. If you don't have one, use a string and measure it against a ruler."
            />
            <MeasureCard
              icon={<UserRound className="h-6 w-6" />}
              title="Wear Fitted Clothing"
              text="Take measurements over fitted clothing or undergarments for the most accurate results. Avoid bulky clothing."
            />
            <MeasureCard
              icon={<Users className="h-6 w-6" />}
              title="Get Help"
              text="Ask someone to help you measure for the most accurate results, especially for back measurements."
            />
          </div>
        </section>

        <div className="border-t border-black/10" />

        {/* SIZE TABLES */}
        <section>
          <SectionHeader
            title="Size Tables"
            subtitle="Check your category below, then pick your size from the table."
          />

          <div className="mt-10 grid gap-6">
            <Card className="p-7">
              <div className="flex items-center gap-2">
                <Shirt className="h-5 w-5 text-[var(--brand-purple)]" />
                <h3 className="text-xl font-extrabold text-black">Tops</h3>
              </div>

              <p className="mt-2 text-sm text-black/70">
                T-shirts, sweatshirts, jackets, polos, hoodies, shirts, and more.
              </p>
              <div className="mt-4 h-[2px] w-12 bg-[var(--brand-yellow)]" />
              <div className="mt-5">
                <Table />
              </div>
            </Card>

            <Card className="p-7">
              <div className="flex items-center gap-2">
                <Shirt className="h-5 w-5 text-[var(--brand-purple)]" />
                <h3 className="text-xl font-extrabold text-black">Bottoms</h3>
              </div>

              <p className="mt-2 text-sm text-black/70">Joggers, shorts, trousers.</p>
              <div className="mt-4 h-[2px] w-12 bg-[var(--brand-yellow)]" />
              <div className="mt-5">
                <Table />
              </div>
            </Card>
          </div>
        </section>

        <div className="border-t border-black/10" />

        {/* FIT GUIDE */}
        <section>
          <SectionHeader
            title="Fit Guide"
            subtitle="Understanding our different fits to help you choose the perfect style."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FitCard
              title="Slim Fit"
              desc="A tailored, close-to-body fit that follows your natural silhouette."
              bullets={[
                "Fitted through chest and waist",
                "Tapered sleeves",
                "Contemporary styling",
                "Best for athletic builds",
              ]}
            />
            <FitCard
              title="Regular Fit"
              desc="Our classic fit with comfortable room through the chest and waist."
              bullets={[
                "Comfortable through chest",
                "Relaxed but not loose",
                "Classic styling",
                "Suitable for all body types",
              ]}
            />
            <FitCard
              title="Relaxed Fit"
              desc="A loose, comfortable fit with extra room throughout."
              bullets={[
                "Generous through chest and waist",
                "Comfortable for layering",
                "Casual styling",
                "Great for comfort-focused wear",
              ]}
            />
          </div>
        </section>

        <div className="border-t border-black/10" />

        {/* SIZING TIPS */}
        <section>
          <SectionHeader
            title="Sizing Tips"
            subtitle="Expert advice to help you find your perfect fit every time."
          />

          <Card className="mx-auto mt-10 max-w-5xl p-7 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-extrabold text-black">General Tips</h3>
                <div className="mt-5 grid gap-4 text-sm text-black/75">
                  {[
                    "When in doubt, size up for a more comfortable fit",
                    "Consider the fabric – stretchy materials may fit differently",
                    "Check the product description for specific fit notes",
                    "Measure your favourite fitting garment for comparison",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-[var(--brand-purple)]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-black">Still Unsure?</h3>
                <p className="mt-2 text-sm text-black/70">
                  Contact us with your measurements and we'll recommend the best size.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    className="btn btn-purple"
                    onClick={() => {
                      if (typeof window !== "undefined") window.location.href = "/contact";
                    }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>

                  <Button
                    className="btn btn-black"
                    onClick={() => setStoreModal(true)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Live Chat in App
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* EXTRA NOTES */}
        <section>
          <Card className="p-7">
            <h3 className="text-xl font-extrabold text-black">Extra Notes</h3>
            <div className="mt-4 h-[2px] w-12 bg-[var(--brand-yellow)]" />

            <div className="mt-5 grid gap-3 text-sm text-black/75">
              <p>• Streetwear fits may feel relaxed or oversized.</p>
              <p>• For custom or bulk orders, sizing can be adjusted.</p>
              <p>• Need help choosing a size? Contact support or use live chat in the app.</p>
            </div>
          </Card>
        </section>
      </div>

      {/* ✅ FIX: App modal - iOS → WhatsApp */}
      {storeModal && (
        <Modal onClose={() => setStoreModal(false)}>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
            Live chat is inside the app
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-[var(--brand-purple)]">
            Download the Dritchwear App
          </h3>

          <p className="mt-3 text-sm text-black/65">
            To use live chat and place orders, open Dritchwear on your mobile device.
          </p>

          <div className="mt-6 grid gap-3">
            {/* iOS → WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-6 py-4 font-semibold text-center inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "var(--brand-purple)", color: "#fff" }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <WhatsAppIcon />
              </span>
              iOS - Order on WhatsApp
            </a>

            {/* Google Play */}
            <a
              href={PLAY_STORE_URL}
              className="rounded-2xl px-6 py-4 font-semibold text-center inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: "var(--brand-yellow)", color: "#fff" }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <GooglePlayIcon />
              </span>
              Get it on Google Play
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}