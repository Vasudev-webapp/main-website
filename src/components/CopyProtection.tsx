"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Routes where users are allowed to select and copy text (e.g. to copy the
 * address, email, or phone number). Copy protection is disabled on these
 * paths; the matching CSS override lives in globals.css under `.allow-copy`.
 */
const COPY_ALLOWED_PATHS = ["/contact"];

function isCopyAllowed(pathname: string | null): boolean {
  if (!pathname) return false;
  return COPY_ALLOWED_PATHS.some(
    (path) => pathname === path || pathname === `${path}/`
  );
}

export default function CopyProtection() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip protection entirely on opt-in copyable routes so users can copy
    // contact details. Re-runs on navigation because `pathname` is a dep.
    if (isCopyAllowed(pathname)) {
      return;
    }

    const block = (event: Event) => {
      event.preventDefault();
    };

    const blockCopyShortcut = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && (key === "c" || key === "x")) {
        event.preventDefault();
      }
    };

    document.addEventListener("copy", block, true);
    document.addEventListener("cut", block, true);
    document.addEventListener("contextmenu", block, true);
    document.addEventListener("selectstart", block, true);
    document.addEventListener("dragstart", block, true);
    document.addEventListener("keydown", blockCopyShortcut, true);

    return () => {
      document.removeEventListener("copy", block, true);
      document.removeEventListener("cut", block, true);
      document.removeEventListener("contextmenu", block, true);
      document.removeEventListener("selectstart", block, true);
      document.removeEventListener("dragstart", block, true);
      document.removeEventListener("keydown", blockCopyShortcut, true);
    };
  }, [pathname]);

  return null;
}
