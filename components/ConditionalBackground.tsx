"use client";

import { usePathname } from "next/navigation";
import { PurpleBackground } from "@/components/PurpleBackground";

export function ConditionalBackground() {
  const pathname = usePathname();

  // Homepage → no background
  if (pathname === "/") return null;

  // All other pages → purple background
  return <PurpleBackground />;
}