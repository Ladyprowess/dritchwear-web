import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NotificationBar } from "@/components/NotificationBar";
import { ConditionalBackground } from "@/components/ConditionalBackground";
import { StickyAppBar } from "@/components/StickyAppBar";

export const metadata = {
  title: "Dritchwear - Custom Streetwear & Branded Merch | Made in Nigeria",
  description:
    "Premium custom streetwear, branded merchandise, and gift items for individuals, brands, and events. Wear it. Brand it. Gift it.",
  openGraph: {
    title: "Dritchwear - Custom Streetwear & Branded Merch",
    description:
      "Premium custom streetwear, branded merchandise, and gift items. Made in Nigeria.",
    siteName: "Dritchwear",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col overflow-x-hidden relative">
        {/* Google Ads tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17944092598"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17944092598');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '748350284817719');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=748350284817719&ev=PageView&noscript=1"
          />
        </noscript>

        <ConditionalBackground />
        <NotificationBar message="🚚 Free shipping for first-time users | No payment on delivery | All items are custom-made." />
        <Navbar />
        <main className="flex-1 w-full min-w-0 max-w-7xl mx-auto px-4 relative">
          {children}
        </main>
        <Footer />
        <StickyAppBar />
      </body>
    </html>
  );
}