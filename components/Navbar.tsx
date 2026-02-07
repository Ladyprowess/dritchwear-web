import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-[60] border-b border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png" 
            alt="Dritchwear"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav ONLY */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link href="/shop" className="hover:text-[var(--purple)] transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-[var(--purple)] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[var(--purple)] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger ONLY */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
