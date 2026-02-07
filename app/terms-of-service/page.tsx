// app/terms/page.tsx
"use client";

import { Card } from "@/components/Card";
import {
  FileText,
  Scale,
  BadgeCheck,
  AlertTriangle,
} from "lucide-react";

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
    <div className="mt-6 flex flex-col items-center text-center gap-3">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
        <span className="text-[var(--brand-purple)]">{title}</span>{" "}
        <span className="text-[var(--brand-yellow)]">{accent}</span>
      </h1>

      {/* reduced subtitle size */}
      <p className="max-w-3xl text-sm md:text-base leading-relaxed text-black/60">
        {subtitle}
      </p>

      <p className="text-xs text-black/50">Last updated: 7th February 2026</p>
    </div>
  );
}

function OverviewCard({
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
    <h2 className="text-xl md:text-2xl font-extrabold text-black">
      <span className="text-[var(--brand-purple)]">{number}.</span>{" "}
      <span>{title}</span>
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-3 text-sm text-black/75">
      {items.map((t) => (
        <div key={t} className="flex items-start gap-3">
          <span className="mt-[7px] inline-block h-2 w-2 rounded-full bg-[var(--brand-purple)]" />
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="my-10 border-t border-black/10" />;
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <PageHeader
        title="Terms"
        accent="of Service"
        subtitle="These terms explain how you can use Dritchwear services and what to expect when you place an order."
      />

      <div className="mt-14 space-y-16 md:space-y-20">
        {/* OVERVIEW CARDS (same style as Privacy Principles grid) */}
        <section>
          <div className="grid gap-6 md:grid-cols-4">
            <OverviewCard
              icon={<FileText className="h-6 w-6" />}
              title="Agreement"
              text="By using our services, you agree to these terms and conditions."
            />
            <OverviewCard
              icon={<Scale className="h-6 w-6" />}
              title="Fair Use"
              text="Use our services responsibly and follow applicable laws and rules."
            />
            <OverviewCard
              icon={<BadgeCheck className="h-6 w-6" />}
              title="Your Rights"
              text="You keep ownership of your content and have rights over your account data."
            />
            <OverviewCard
              icon={<AlertTriangle className="h-6 w-6" />}
              title="Limitations"
              text="Our liability is limited and certain warranties are disclaimed as stated below."
            />
          </div>
        </section>

        {/* MAIN TERMS CONTENT — ONE CONTINUOUS CARD (no broken sections) */}
        <section>
          <Card className="p-7 md:p-10">
            {/* 1 */}
            <SectionTitle number="1" title="Acceptance of Terms" />
            <div className="mt-4 grid gap-4 text-sm text-black/75 leading-relaxed">
              <p>
                Welcome to Dritchwear. These Terms of Service (&quot;Terms&quot;)
                govern your use of our website, mobile application, and services
                (collectively, the &quot;Services&quot;) operated by Dritchwear
                (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these
                Terms. If you disagree with any part of these Terms, then you may
                not access our Services.
              </p>
              <p>
                We reserve the right to update these Terms at any time. Your
                continued use of our Services after any changes constitutes
                acceptance of the new Terms.
              </p>
            </div>

            <Divider />

            {/* 2 */}
            <SectionTitle number="2" title="Use of Services" />

            <h3 className="mt-5 text-base font-extrabold text-black">Eligibility</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              You must be at least 18 years old to use our Services. If you are under
              18, you may use our Services only with the involvement and consent of
              a parent or guardian.
            </p>

            <h3 className="mt-6 text-base font-extrabold text-black">Account Registration</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              To access certain features of our Services, you may be required to create
              an account. You agree to:
            </p>
            <BulletList
              items={[
                "Provide accurate, current, and complete information",
                "Maintain and update your account information",
                "Keep your password secure and confidential",
                "Accept responsibility for all activities under your account",
                "Notify us immediately of any unauthorised use",
              ]}
            />

            <h3 className="mt-6 text-base font-extrabold text-black">Prohibited Uses</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">You may not use our Services:</p>
            <BulletList
              items={[
                "For any unlawful purpose or to solicit others to perform unlawful acts",
                "To violate any applicable laws or regulations",
                "To infringe upon or violate our intellectual property rights or those of others",
                "To harass, abuse, insult, harm, defame, slander, intimidate, or discriminate",
                "To submit false or misleading information",
                "To upload or transmit viruses or any type of malicious code",
                "To spam, phish, crawl, scrape, or attempt to access systems without authorisation",
                "For any obscene or immoral purpose",
                "To interfere with or circumvent the security features of our Services",
              ]}
            />

            <Divider />

            {/* 3 */}
            <SectionTitle number="3" title="Products and Orders" />

            <h3 className="mt-5 text-base font-extrabold text-black">Product Information</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              We strive to provide accurate product descriptions, images, and pricing.
              However, we do not warrant that product descriptions or other content is
              accurate, complete, reliable, current, or error-free.
            </p>

            <h3 className="mt-6 text-base font-extrabold text-black">Pricing and Payment</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              All prices are subject to change without notice. We reserve the right to
              modify or discontinue products at any time. Payment must be received by
              us before your order is processed.
            </p>

            <h3 className="mt-6 text-base font-extrabold text-black">Order Acceptance</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              We reserve the right to refuse or cancel any order for any reason, including
              product availability, errors in product or pricing information, or suspected
              fraudulent activity.
            </p>

            <Divider />

            {/* 4 */}
            <SectionTitle number="4" title="Shipping and Returns" />

            <div className="mt-4 rounded-2xl border border-black/10 overflow-hidden">
              <div className="px-5 md:px-6 py-2">
                <div className="py-4">
                  <p className="font-semibold text-black">Return Policy</p>
                  <p className="mt-1 text-sm text-black/70 leading-relaxed">
                    Items must be returned within 2 days of receiving your order. Items are no longer eligible
                    for return after this period. To return an item, you must contact us first through our
                    contact form or mobile app to initiate the return process.
                  </p>
                </div>

                <div className="border-t border-black/10" />

                <div className="py-4">
                  <p className="font-semibold text-black">Return Shipping</p>
                  <p className="mt-1 text-sm text-black/70 leading-relaxed">
                    Customers are responsible for covering the cost of return shipping to our Nigeria location.
                    We recommend using a trackable shipping method for returns.
                  </p>
                </div>

                <div className="border-t border-black/10" />

                <div className="py-4">
                  <p className="font-semibold text-black">Shipping Times</p>
                  <p className="mt-1 text-sm text-black/70 leading-relaxed">
                    Standard shipping takes 3–5 business days within Nigeria. Express shipping (1–2 business days)
                    and overnight shipping are also available. International shipping typically takes 7–14 business days.
                  </p>
                </div>

                <div className="border-t border-black/10" />

                <div className="py-4">
                  <p className="font-semibold text-black">Delays</p>
                  <p className="mt-1 text-sm text-black/70 leading-relaxed">
                    We are not responsible for delays or damages caused by shipping carriers, customs, or other factors
                    beyond our control.
                  </p>
                </div>
              </div>
            </div>

            <Divider />

            {/* 5 */}
            <SectionTitle number="5" title="Intellectual Property Rights" />

            <h3 className="mt-5 text-base font-extrabold text-black">Our Content</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              The Services and their original content, features, and functionality are and will remain the exclusive
              property of Dritchwear and its licensors. The Services are protected by copyright, trademark, and other laws.
            </p>

            <h3 className="mt-6 text-base font-extrabold text-black">Your Content</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              You retain ownership of any content you submit to our Services. However, by submitting content, you grant
              us a worldwide, non-exclusive, royalty-free licence to use, reproduce, modify, and display such content in
              connection with our Services.
            </p>

            <h3 className="mt-6 text-base font-extrabold text-black">Trademark Information</h3>
            <p className="mt-2 text-sm text-black/75 leading-relaxed">
              &quot;Dritchwear&quot; and our logo are trademarks of Dritchwear. You may not use our trademarks without
              our prior written consent.
            </p>

            <Divider />

            {/* 6 */}
            <SectionTitle number="6" title="User Content and Conduct" />
            <div className="mt-4 grid gap-4 text-sm text-black/75 leading-relaxed">
              <p>
                Our Services may allow you to post, link, store, share, and otherwise make available certain information,
                text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that
                you post to the Services, including its legality, reliability, and appropriateness.
              </p>
              <p>By posting Content to the Services, you represent and warrant that:</p>
            </div>
            <BulletList
              items={[
                "The Content is yours or you have the right to use it",
                "The Content does not infringe any third-party rights",
                "The Content complies with these Terms and applicable laws",
              ]}
            />

            <Divider />

            {/* 7 */}
            <SectionTitle number="7" title="Privacy" />
            <p className="mt-4 text-sm text-black/75 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
              Services, to understand our practices.
            </p>

            <Divider />

            {/* 8 */}
            <SectionTitle number="8" title="Disclaimers" />
            <p className="mt-4 text-sm text-black/75 leading-relaxed">
              The information on our Services is provided on an &quot;as is&quot; basis. To the fullest extent permitted
              by law, we exclude:
            </p>
            <BulletList
              items={[
                "All conditions, warranties, and other terms which might otherwise be implied by statute, common law, or the law of equity",
                "Any liability for any direct, indirect, or consequential loss or damage incurred by any user in connection with our Services",
              ]}
            />
            <p className="mt-4 text-sm text-black/75 leading-relaxed">
              This does not affect our liability for death or personal injury arising from our negligence, nor our
              liability for fraudulent misrepresentation, nor any other liability which cannot be excluded or limited
              under applicable law.
            </p>

            <Divider />

            {/* 9 */}
            <SectionTitle number="9" title="Limitation of Liability" />
            <div className="mt-4 grid gap-4 text-sm text-black/75 leading-relaxed">
              <p>
                In no event shall Dritchwear, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of
                profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
              </p>
              <p>
                Our total liability to you for all claims arising from or relating to the Services shall not exceed the
                amount you paid to us for the Services in the twelve (12) months preceding the claim.
              </p>
            </div>

            <Divider />

            {/* 10 */}
            <SectionTitle number="10" title="Governing Law" />
            <p className="mt-4 text-sm text-black/75 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of Nigeria, without regard to its conflict of
              law provisions. Our failure to enforce any right or provision of these Terms will not be considered a
              waiver of those rights.
            </p>

            <Divider />

            {/* 11 */}
            <SectionTitle number="11" title="Contact Information" />
            <p className="mt-4 text-sm text-black/75 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
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
                  <span className="font-semibold">Legal Department:</span>{" "}
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