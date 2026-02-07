"use client";

import { Card } from "@/components/Card";
import { Shield, Eye, Lock, Users } from "lucide-react";

function PageHeader({
  title,
  accent,
  subtitle,
}: {
  title: string;
  accent: string;
  subtitle: string;
}) {
  return (
    <div className="mt-6 flex flex-col items-center text-center gap-2">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
        <span className="text-[var(--brand-purple)]">{title}</span>{" "}
        <span className="text-[var(--brand-yellow)]">{accent}</span>
      </h1>

      <p className="max-w-3xl text-sm md:text-base leading-relaxed text-black/60">
        {subtitle}
      </p>

      <p className="text-xs text-black/50">Last updated: 7th February 2026</p>
    </div>
  );
}


function PrincipleCard({
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

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="text-lg md:text-xl font-extrabold text-black">
      <span className="text-[var(--brand-purple)]">{number}.</span>{" "}
      <span>{title}</span>
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="mt-3 grid gap-3 text-sm text-black/75">
      {items.map((t) => (
        <div key={t} className="flex items-start gap-3">
          <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-[var(--brand-purple)]" />
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function Spacer() {
  return <div className="my-10 border-t border-black/10" />;
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <PageHeader
        title="Privacy"
        accent="Policy"
        subtitle="We are committed to protecting your privacy and being transparent about how we handle your data."
      />

      <div className="mt-14 space-y-12">
        {/* PRINCIPLES GRID */}
        <section>
          <div className="grid gap-6 md:grid-cols-4">
            <PrincipleCard
              icon={<Shield className="h-6 w-6" />}
              title="Data Protection"
              text="We use industry-standard security measures to protect your personal information from unauthorised access."
            />
            <PrincipleCard
              icon={<Eye className="h-6 w-6" />}
              title="Transparency"
              text="We clearly explain what data we collect, why we collect it, and how we use it to improve your experience."
            />
            <PrincipleCard
              icon={<Lock className="h-6 w-6" />}
              title="Your Control"
              text="You have control over your data. You can access, update, or delete your information at any time."
            />
            <PrincipleCard
              icon={<Users className="h-6 w-6" />}
              title="No Selling"
              text="We never sell your personal information to third parties. Your data is used only to support your Dritchwear experience."
            />
          </div>
        </section>

        {/* ✅ ONE CLEAN POLICY CARD (no broken sections) */}
        <section>
          <Card className="p-7 md:p-10">
            {/* 1 */}
            <SectionTitle number="1" title="Introduction" />
            <div className="mt-3 grid gap-4 text-sm text-black/75 leading-relaxed">
              <p>
                Dritchwear (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website, use our mobile
                application, or make a purchase from us.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access our
                website or use our services.
              </p>
            </div>

            <Spacer />

            {/* 2 */}
            <SectionTitle number="2" title="Information We Collect" />
            <h3 className="mt-5 text-base font-extrabold text-black">
              Personal Information
            </h3>
            <BulletList
              items={[
                "Create an account on our website or mobile app",
                "Make a purchase or attempt to make a purchase",
                "Subscribe to our newsletter or marketing communications",
                "Contact us for customer support",
                "Participate in surveys, contests, or promotions",
                "Leave reviews or comments on our products",
              ]}
            />

            <h3 className="mt-8 text-base font-extrabold text-black">
              Automatically Collected Information
            </h3>
            <BulletList
              items={[
                "IP address and location data",
                "Browser type and version",
                "Device information (type, operating system, screen resolution)",
                "Pages visited and time spent on our site",
                "Referring website or app",
                "Search terms used to find our website",
              ]}
            />

            <Spacer />

            {/* 3 */}
            <SectionTitle number="3" title="How We Use Your Information" />
            <BulletList
              items={[
                "Processing and fulfilling your orders",
                "Providing customer support and responding to enquiries",
                "Personalising your shopping experience and product recommendations",
                "Sending you marketing communications (with your consent)",
                "Improving our website, mobile app, and services",
                "Analysing usage patterns and trends",
                "Preventing fraud and ensuring security",
                "Complying with legal obligations",
              ]}
            />

            <Spacer />

            {/* 4 */}
            <SectionTitle number="4" title="Information Sharing and Disclosure" />
            <div className="mt-3 grid gap-4 text-sm text-black/75 leading-relaxed">
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
            </div>

            <h3 className="mt-6 text-base font-extrabold text-black">
              Service Providers
            </h3>
            <BulletList
              items={[
                "Payment processors",
                "Shipping and logistics companies",
                "Email marketing platforms",
                "Analytics providers",
                "Customer support tools",
              ]}
            />

            <h3 className="mt-8 text-base font-extrabold text-black">
              Legal Requirements
            </h3>
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              We may disclose your information if required by law, court order,
              or government regulation, or if we believe disclosure is necessary
              to protect our rights, property, or safety, or that of others.
            </p>

            <Spacer />

            {/* 5 */}
            <SectionTitle number="5" title="Data Security" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              We implement appropriate technical and organisational security
              measures to protect your personal information against unauthorised
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <BulletList
              items={[
                "SSL encryption for data transmission",
                "Secure servers and databases",
                "Regular security audits and updates",
                "Access controls and authentication",
                "Employee training on data protection",
              ]}
            />
            <p className="mt-5 text-sm text-black/75 leading-relaxed">
              However, no method of transmission over the internet or electronic
              storage is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>

            <Spacer />

            {/* 6 */}
            <SectionTitle number="6" title="Your Rights and Choices" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <BulletList
              items={[
                "Access: Request a copy of the personal information we hold about you",
                "Correction: Request correction of inaccurate or incomplete information",
                "Deletion: Request deletion of your personal information",
                "Portability: Request transfer of your data to another service",
                "Opt-out: Unsubscribe from marketing communications",
                "Restriction: Request limitation of how we process your data",
              ]}
            />
            <p className="mt-5 text-sm text-black/75 leading-relaxed">
              To exercise these rights, please contact us at{" "}
              <span className="font-semibold">dritchwear@gmail.com</span> or
              through our mobile app.
            </p>

            <Spacer />

            {/* 7 */}
            <SectionTitle number="7" title="Cookies and Tracking Technologies" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyse website traffic, and personalise
              content. You can control cookie settings through your browser
              preferences.
            </p>
            <p className="mt-4 text-sm text-black/75 leading-relaxed">
              Our mobile app may also use analytics tools and advertising
              identifiers to improve functionality and provide personalised
              experiences.
            </p>

            <Spacer />

            {/* 8 */}
            <SectionTitle number="8" title="Children&apos;s Privacy" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from a child under 13, we will take steps to delete
              such information.
            </p>

            <Spacer />

            {/* 9 */}
            <SectionTitle number="9" title="International Data Transfers" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws and implement appropriate
              safeguards to protect your information.
            </p>

            <Spacer />

            {/* 10 */}
            <SectionTitle number="10" title="Changes to This Privacy Policy" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on our website and updating the &quot;Last updated&quot;
              date. Your continued use of our services after such changes
              constitutes acceptance of the updated policy.
            </p>

            <Spacer />

            {/* 11 */}
            <SectionTitle number="11" title="Contact Us" />
            <p className="mt-3 text-sm text-black/75 leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>

            <div className="mt-6 rounded-2xl bg-black/[0.03] p-6 text-sm text-black/80">
              <div className="grid gap-3">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  dritchwear@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> (+234) 911-016-3722
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Lagos, Nigeria
                </p>
                <p>
                  <span className="font-semibold">Data Protection Officer:</span>{" "}
                  dritchwear@gmail.com
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}