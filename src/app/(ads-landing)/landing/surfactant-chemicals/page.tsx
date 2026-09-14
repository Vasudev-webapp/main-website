import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import LandingYearScript from "./LandingYearScript";

export const metadata: Metadata = {
  title: "Vasudev Chemo Pharma | Factory Pricing & Export",
  description:
    "Factory-direct MEA Triazine 78% H2S scavenger from Vasudev Chemo Pharma, Ankleshwar Gujarat. ISO 9001:2015. Export to 31+ countries. Request a quote.",
  themeColor: "#3C2A98",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

function getLandingBodyHtml(): string {
  return readFileSync(
    join(process.cwd(), "src/landing/surfactant-chemicals-body.html"),
    "utf8"
  );
}

export default function SurfactantChemicalsLandingPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getLandingBodyHtml() }} />
      <LandingYearScript />
    </>
  );
}
