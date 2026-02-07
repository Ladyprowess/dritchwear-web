"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--purple)] focus:ring-offset-2";

  const variants = {
    primary: "bg-[var(--purple)] text-white hover:opacity-95", // ✅ white text
    secondary:
      "bg-white text-[var(--black)] border border-black/15 hover:bg-black/[0.03]",
    ghost: "bg-transparent text-[var(--black)] hover:bg-black/[0.04]",
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
