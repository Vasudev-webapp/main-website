"use client";

import { useEffect } from "react";

export default function LandingYearScript() {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }, []);

  return null;
}
