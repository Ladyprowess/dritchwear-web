import React from "react";
import clsx from "clsx";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-black/10 bg-white shadow-sm",
        className
      )}
      {...props}
    />
  );
}