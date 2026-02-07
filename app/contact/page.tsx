"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "", // ✅ inquiry type (NOT orderType)
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
    <span className="text-[var(--brand-purple)]">Contact</span>{" "}
    <span className="text-[#FDB813]">Us</span>
  </h1>

  <p className="mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto">
    Custom orders, bulk orders, partnerships; reach out and we’ll respond.
  </p>
</div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* LEFT — FORM */}
        <Card className="p-6">
          <h2 className="text-xl font-extrabold">Send a message</h2>

          {sent && (
            <p className="mt-3 text-sm font-semibold text-green-600">
              Message sent successfully. We’ll get back to you shortly.
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
            <input
              required
              className="rounded-xl border border-black/10 px-4 py-3 text-[16px] md:text-sm"
              placeholder="Full name"
              value={form.fullName}
              onChange={(e) =>
                setForm((p) => ({ ...p, fullName: e.target.value }))
              }
            />

            <input
              required
              type="email"
              className="rounded-xl border border-black/10 px-4 py-3 text-[16px] md:text-sm"
              placeholder="Email address"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
            />

            <input
              required
              className="rounded-xl border border-black/10 px-4 py-3 text-[16px] md:text-sm"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
            />

            {/* ✅ INQUIRY TYPE (THIS IS WHAT YOU ASKED FOR) */}
            <select
              required
              className="rounded-xl border border-black/10 px-4 py-3 text-[16px] md:text-sm"
              value={form.inquiryType}
              onChange={(e) =>
                setForm((p) => ({ ...p, inquiryType: e.target.value }))
              }
            >
              <option value="">What are you inquiring about?</option>
              <option value="Personal order">Personal order</option>
              <option value="Bulk production">Bulk production</option>
              <option value="Event / team order">Event / team order</option>
              <option value="Brand merch / uniforms">Brand merch / uniforms</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              required
              className="rounded-xl border border-black/10 px-4 py-3 text-sm min-h-[130px]"
              placeholder="Tell us what you need..."
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
            />
<Button
  type="submit"
  disabled={loading}
  className="btn btn-purple w-full"
>
  {loading ? "Sending..." : "Send message"}
</Button>

            <p className="text-xs text-black/60">
              For placing orders, the complete experience is inside the
              Dritchwear app.
            </p>
          </form>
        </Card>

        {/* RIGHT — 2-CARD BLOCKS ALL THROUGH */}
<div className="grid gap-4">
  {/* ROW 1: WhatsApp + Email */}
  <div className="grid gap-4 sm:grid-cols-2">
    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
        WhatsApp
      </p>
      <p className="mt-2 text-lg font-extrabold text-[var(--brand-purple)]">
        Chat with us
      </p>
      <p className="mt-2 text-sm text-black/70">
        For quick replies on orders, pricing, and delivery.
      </p>

      <a
        href="https://wa.me/2349110163722"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold"
        style={{ backgroundColor: "var(--brand-purple)", color: "#fff" }}
      >
        Open WhatsApp
      </a>
    </Card>

    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
        Email
      </p>
      <p className="mt-2 text-lg font-extrabold text-[var(--brand-purple)]">
        dritchwear@gmail.com
      </p>
      <p className="mt-2 text-sm text-black/70">
        Best for detailed requests and partnerships.
      </p>

      <a
        href="mailto:dritchwear@gmail.com"
        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 font-semibold bg-white"
        style={{
          border: "1px solid rgba(0,0,0,0.15)",
          color: "var(--brand-purple)",
        }}
      >
        Send an Email
      </a>
    </Card>
  </div>

  {/* ROW 2: Location + Social */}
  <div className="grid gap-4 sm:grid-cols-2">
    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
        Location
      </p>
      <p className="mt-2 text-lg font-extrabold text-[var(--brand-purple)]">
        Made in Nigeria
      </p>
      <p className="mt-2 text-sm text-black/70"> 
        Shop 101 tailoring line, tradefair complex Lagos.
      </p>
    </Card>

    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
        Social
      </p>

      <div className="mt-3 grid gap-2 text-sm text-black/75">
      <p>
  <span className="font-semibold">Instagram:</span>{" "}
  <a
    href="https://www.instagram.com/dritchwear"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--brand-purple)] hover:underline"
  >
    @dritchwear
  </a>
</p>

<p>
  <span className="font-semibold">X (Twitter):</span>{" "}
  <a
    href="https://x.com/dritchwear"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--brand-purple)] hover:underline"
  >
    @dritchwear
  </a>
</p>

<p>
  <span className="font-semibold">TikTok:</span>{" "}
  <a
    href="https://www.tiktok.com/@dritchwear"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--brand-purple)] hover:underline"
  >
    @dritchwear
  </a>
</p>

      </div>
    </Card>
  </div>

  {/* ROW 3: Heads up (kept) + Extra note (so it's still 2-card block) */}
  <div className="grid gap-4 sm:grid-cols-2">
    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
        Heads up
      </p>
      <p className="mt-2 text-lg font-extrabold text-[var(--brand-purple)]">
        Plan early for bulk orders
      </p>
      <p className="mt-2 text-sm text-black/70">
        Bulk and event orders are best handled early so we can plan production
        and delivery properly.
      </p>
    </Card>

    <Card className="p-6">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/50">
        App notice
      </p>
      <p className="mt-2 text-lg font-extrabold text-[var(--brand-purple)]">
        Order via the app
      </p>
      <p className="mt-2 text-sm text-black/70">
        Browse the full catalogue and place orders inside the Dritchwear mobile
        app.
      </p>
    </Card>
  </div>
</div>


      </div>
    </div>
  );
}