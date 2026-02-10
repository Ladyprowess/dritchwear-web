import "./globals.css";
import Script from "next/script"; // 👈 ADD THIS
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NotificationBar } from "@/components/NotificationBar";
import { ConditionalBackground } from "@/components/ConditionalBackground";

export const metadata = {
  title: "DRITCHWEAR COLLECTIONS",
  description: "Wear it. Brand it. Gift it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
      </head>

      <body className="min-h-screen flex flex-col overflow-x-hidden relative">
        {/* Purple background on all pages EXCEPT homepage */}
        <ConditionalBackground />

        <Navbar />
        <NotificationBar message="🚚 Free shipping for first-time users | No payment on delivery | All items are custom-made." />

        <main className="flex-1 w-full min-w-0 max-w-7xl mx-auto px-4 relative">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
