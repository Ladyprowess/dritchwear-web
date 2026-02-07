"use client";

import { Card } from "@/components/Card";
import {
  Clock3,
  Package,
  MessageSquare,
  BadgeCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

/* =========================
   HEADERS
   ========================= */
function PageTitle({
  title,
  accent,
  subtitle,
}: {
  title: string;
  accent?: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {/* ONLY ONE H1 ON THE PAGE */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
        {title}{" "}
        {accent ? (
          <span className="text-[var(--brand-yellow)]">{accent}</span>
        ) : null}
      </h1>

      <p className="mt-5 text-lg md:text-2xl leading-relaxed text-black/60">
        {subtitle}
      </p>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {/* reduced size (was text-5xl/md:text-6xl) */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
        {title}
      </h2>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-black/60">
        {subtitle}
      </p>
    </div>
  );
}

/* =========================
   CARDS
   ========================= */
function PolicyCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="p-8 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--soft-purple)]">
        <div className="text-[var(--brand-purple)]">{icon}</div>
      </div>

      {/* reduced size (was text-2xl) */}
      <h3 className="mt-6 text-lg md:text-xl font-extrabold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm md:text-base leading-relaxed text-black/70">
        {text}
      </p>
    </Card>
  );
}

function StepItem({
  step,
  title,
  text,
}: {
  step: number;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-purple)] text-white text-3xl font-extrabold shadow-sm">
        {step}
      </div>

      {/* reduced size (was text-3xl) */}
      <h3 className="mt-6 text-xl md:text-2xl font-extrabold text-black">
        {title}
      </h3>

      <p className="mx-auto mt-4 max-w-sm text-sm md:text-base leading-relaxed text-black/70">
        {text}
      </p>
    </div>
  );
}

function ConditionsCard({
  tone,
  title,
  items,
}: {
  tone: "good" | "bad";
  title: string;
  items: string[];
}) {
  const icon =
    tone === "good" ? (
      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
    ) : (
      <AlertCircle className="h-8 w-8 text-red-500" />
    );

  const dot = tone === "good" ? "bg-emerald-500" : "bg-red-500";

  return (
    <Card className="p-9 md:p-10">
      <div className="flex items-center gap-3">
        {icon}

        {/* reduced size (was text-3xl) */}
        <h3 className="text-xl md:text-2xl font-extrabold text-black">
          {title}
        </h3>
      </div>

      <div className="mt-8 grid gap-5 text-sm md:text-base text-black/75">
        {items.map((t) => (
          <div key={t} className="flex items-start gap-4">
            <span className={`mt-[8px] h-3 w-3 rounded-full ${dot}`} />
            <p className="leading-relaxed">{t}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TimelineItem({
  badge,
  title,
  text,
}: {
  badge: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--soft-purple)] text-[var(--brand-purple)] font-extrabold">
        {badge}
      </div>
      <div>
        <p className="text-base md:text-lg font-extrabold text-black">{title}</p>
        <p className="mt-1 text-sm md:text-base text-black/70">{text}</p>
      </div>
    </div>
  );
}

function NoteCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="p-6 md:p-7">
      <p className="text-base md:text-lg font-extrabold text-black">{title}</p>
      <p className="mt-2 text-sm md:text-base leading-relaxed text-black/70">
        {text}
      </p>
    </Card>
  );
}

function NigeriaOpsCard({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <Card className="mx-auto max-w-5xl p-8 md:p-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          {/* reduced size (was text-3xl) */}
          <h3 className="text-xl md:text-2xl font-extrabold text-black">
            {leftTitle}
          </h3>

          <div className="mt-7 grid gap-4 text-sm md:text-base text-black/75">
            {leftItems.map((t) => (
              <div key={t} className="flex items-start gap-4">
                <span className="mt-[8px] h-2.5 w-2.5 rounded-full bg-[var(--brand-purple)]" />
                <p className="leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* reduced size (was text-3xl) */}
          <h3 className="text-xl md:text-2xl font-extrabold text-black">
            {rightTitle}
          </h3>

          <div className="mt-7 grid gap-4 text-sm md:text-base text-black/75">
            {rightItems.map((t) => (
              <div key={t} className="flex items-start gap-4">
                <span className="mt-[8px] h-2.5 w-2.5 rounded-full bg-[var(--brand-purple)]" />
                <p className="leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-black/10 pt-8 text-center">
        <p className="text-sm md:text-base text-black/70">
          Need help with your return? Our customer service team is here
          to assist.
        </p>
      </div>
    </Card>
  );
}

/* =========================
   PAGE
   ========================= */
export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="space-y-16 md:space-y-24">
        {/* TOP TITLE (ONLY H1) */}
        <section>
          <PageTitle
            title="Returns &"
            accent="Exchanges"
            subtitle="Simple, honest, and clear; here’s how returns and exchanges work at Dritchwear."
          />
        </section>

        {/* OUR RETURN POLICY */}
        <section>
          <SectionHeader
            title="Our Return Policy"
            subtitle="Simple return process within 2 days of receiving your order."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PolicyCard
              icon={<Clock3 className="h-7 w-7" />}
              title="2-Day Window"
              text="You must send the item back within 2 days of receiving it. As long as you’ve dropped off or arranged pickup within this window, your return is valid."
            />
            <PolicyCard
              icon={<Package className="h-7 w-7" />}
              title="Customer Pays Shipping"
              text="Customers are responsible for return shipping costs. We recommend using a trackable shipping method."
            />
            <PolicyCard
              icon={<MessageSquare className="h-7 w-7" />}
              title="Contact Us First"
              text="To return an item, send us a message through our contact form or mobile app to initiate the return process."
            />
            <PolicyCard
              icon={<BadgeCheck className="h-7 w-7" />}
              title="Quality Guarantee"
              text="If there’s a quality issue with your item, we’ll replace it or provide a full refund within the return window."
            />
          </div>
        </section>

        {/* HOW TO RETURN ITEMS */}
        <section>
          <SectionHeader
            title="How to Return Items"
            subtitle="Follow these simple steps to return or exchange your Dritchwear items."
          />

          <div className="mt-16 grid gap-14 md:grid-cols-3">
            <StepItem
              step={1}
              title="Contact Us"
              text="Send us a message through our contact form or mobile app within 2 days of receiving your order. Include your order number and reason for return."
            />
            <StepItem
              step={2}
              title="Package Items"
              text="Pack items in original packaging with tags attached. Include the return authorisation number we provide and your order details."
            />
            <StepItem
              step={3}
              title="Ship & Track"
              text="Ship your package to our Nigeria address using a trackable method. You’ll cover the shipping cost for returns."
            />
          </div>
        </section>

        {/* RETURN CONDITIONS */}
        <section>
          <SectionHeader
            title="Return Conditions"
            subtitle="To ensure a smooth return process, please review these requirements."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ConditionsCard
              tone="good"
              title="Eligible for Return"
              items={[
                "Items in original condition with tags attached",
                "Unworn, unwashed, and undamaged items",
                "Items returned within 2 days of delivery",
                "Items in original packaging when possible",
                "Return authorisation obtained from customer service",
              ]}
            />

            <ConditionsCard
              tone="bad"
              title="Not Eligible for Return"
              items={[
                "Items returned after 2 days of delivery",
                "Personalised or customised items",
                "Undergarments and swimwear (for hygiene reasons)",
                "Items damaged by normal wear and tear",
                "Items without return authorisation",
              ]}
            />
          </div>
        </section>

        {/* REFUND INFORMATION */}
        <section>
          <SectionHeader
            title="Refund Information"
            subtitle="Understanding how and when you’ll receive your refund."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT: Refund Timeline (CENTERED) */}
            <div className="flex flex-col justify-center">
              {/* reduced size (was text-3xl/md:text-4xl) */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-black">
                Refund Timeline
              </h3>

              <div className="mt-10 grid gap-8">
                <TimelineItem
                  badge="1–2"
                  title="Business Days"
                  text="Processing time once we receive your return in Nigeria"
                />
                <TimelineItem
                  badge="3–5"
                  title="Business Days"
                  text="Refund appears in your original payment method"
                />
                <TimelineItem
                  badge="24h"
                  title="Store Credit"
                  text="Instant store credit option available"
                />
              </div>
            </div>

            {/* RIGHT: Important Notes */}
            <Card className="p-9 md:p-10">
              {/* reduced size (was text-3xl/md:text-4xl) */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-black">
                Important Notes
              </h3>

              <div className="mt-10 grid gap-7">
                <NoteCard
                  title="Return Shipping"
                  text="Customers cover the cost of return shipping to our Nigeria location. We recommend using a trackable service."
                />
                <NoteCard
                  title="2-Day Limit"
                  text="Items are no longer eligible for return after 2 days of receiving your order. Contact us immediately if you need to return."
                />
                <NoteCard
                  title="Contact Required"
                  text="All returns must be initiated by contacting our customer service team first for authorisation."
                />
              </div>
            </Card>
          </div>
        </section>

        {/* NIGERIA OPERATIONS */}
        <section>
          <SectionHeader
            title="Our Operations"
            subtitle="Information about our operations and shipping."
          />

          <div className="mt-14">
            <NigeriaOpsCard
              leftTitle="Shipping Information"
              leftItems={[
                "Standard shipping: 3–5 business days within Nigeria",
                "Express shipping: 1–2 business days available",
                "Overnight shipping option available",
                "International shipping: 7–14 business days",
              ]}
              rightTitle="Return Process"
              rightItems={[
                "Contact us within 2 days of delivery",
                "Customer pays return shipping to Nigeria",
                "Use trackable shipping method",
                "Refund processed after we receive items",
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
