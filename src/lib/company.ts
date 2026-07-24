import { getPayload } from "./payload";

/**
 * Canonical brochure URL — hosted on Vercel Blob (fast, crawlable).
 * Title: "Vasudev Chemo Pharma — Chemical Manufacturer & Exporter — Product Catalogue 2025"
 * Update this constant if the file is ever re-uploaded to a new location.
 */
export const BROCHURE_URL =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev%20Chemo%20Pharma%20Brochure.pdf";

type PhoneNumber = {
  label: string;
  number: string;
};

export type CompanyInfoData = {
  companyName: string;
  primaryEmail: string;
  secondaryEmail: string;
  phoneNumbers: PhoneNumber[];
  address: string;
  mapUrl: string;
  brochureUrl: string;
  yearsOfExperience: number;
  foundingYear?: number;
  workingHours: {
    monToFri: string;
    saturday: string;
    sunday: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toCompanyInfo(doc: any): CompanyInfoData {
  const mappedPhoneNumbers = Array.isArray(doc?.phoneNumbers)
    ? doc.phoneNumbers
        .filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (phone: any) => phone?.number && typeof phone.number === "string"
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((phone: any) => ({
          label: phone.label || "Contact",
          number: phone.number,
        }))
    : [];

  const phoneNumbers = mappedPhoneNumbers.length > 0
    ? mappedPhoneNumbers
    : [{ label: "Export Sales / WhatsApp", number: "+91 9898837713" }];

  return {
    companyName: doc?.companyName || "Vasudev Chemo Pharma",
    primaryEmail: doc?.primaryEmail || "sales@vasudevchemopharma.com",
    secondaryEmail: doc?.secondaryEmail || "export@vasudevchemopharma.com",
    phoneNumbers,
    address: doc?.address || "Plot No. H-3062, GIDC Ankleshwar - 393002, Gujarat, India",
    mapUrl: doc?.mapUrl || "https://maps.google.com/?q=Plot+No.+H-3062,+GIDC+Ankleshwar+-+393002,+Gujarat,+India",
    brochureUrl: doc?.brochureUrl || BROCHURE_URL,
    yearsOfExperience:
      typeof doc?.yearsOfExperience === "number" && doc.yearsOfExperience > 0
        ? doc.yearsOfExperience
        : 8,
    foundingYear:
      typeof doc?.foundingYear === "number" && doc.foundingYear > 1900
        ? doc.foundingYear
        : 2018,
    workingHours: {
      monToFri: doc?.workingHours?.monToFri || "9:00 AM - 6:00 PM",
      saturday: doc?.workingHours?.saturday || "9:00 AM - 4:00 PM",
      sunday: doc?.workingHours?.sunday || "Closed",
    },
  };
}

import { cache } from "react";

/**
 * Short-lived cross-request cache TTL (ms). During SSG, Next.js renders many
 * pages concurrently and each one calls getCompanyInfo; React.cache() only
 * dedupes within a single request, so without a process-level cache the DB
 * pool is exhausted. A TTL cache keeps that protection while still allowing
 * CMS edits to appear without a restart. The afterChange hook on the
 * "company-info" global also clears this cache for near-instant updates.
 * Defaults to 60s; override with COMPANY_CACHE_TTL_MS.
 */
const COMPANY_CACHE_TTL_MS = (() => {
  const val = Number(process.env.COMPANY_CACHE_TTL_MS);
  return Number.isFinite(val) && val >= 0 ? val : 60_000;
})();

let _companyInfoCache: { data: CompanyInfoData; expiresAt: number } | null = null;
// In-flight request dedup: shared across concurrent renders in the same process.
let _companyInfoPromise: Promise<CompanyInfoData> | null = null;

/**
 * Clear the in-process company-info cache so the next read fetches fresh data
 * from the DB. Called by the CompanyInfo global's afterChange hook so CMS
 * edits take effect in real time within the same server process.
 */
export function clearCompanyInfoCache(): void {
  _companyInfoCache = null;
  _companyInfoPromise = null;
}

export const getCompanyInfo = cache(async function getCompanyInfo(): Promise<CompanyInfoData> {
  const now = Date.now();

  // Serve from the short-lived cache when still fresh.
  if (_companyInfoCache && _companyInfoCache.expiresAt > now) {
    return _companyInfoCache.data;
  }

  // Deduplicate concurrent fetches (e.g. during SSG) onto a single DB read.
  if (_companyInfoPromise) return _companyInfoPromise;

  _companyInfoPromise = (async () => {
    try {
      const payload = await getPayload();
      const data = await payload.findGlobal({ slug: "company-info" });
      const mapped = toCompanyInfo(data);
      _companyInfoCache = { data: mapped, expiresAt: Date.now() + COMPANY_CACHE_TTL_MS };
      return mapped;
    } catch (error) {
      // Most commonly this fires when the "company-info" global has never been
      // saved in the CMS: with the Postgres adapter, findGlobal on a global that
      // has no row throws instead of returning defaults. The fallback below
      // supplies correct company data, so the site keeps working. Log a concise,
      // non-alarming note (not a full error stack) and recover.
      const reason = error instanceof Error ? error.message : String(error);
      console.warn(
        `[getCompanyInfo] Using built-in fallback company info. Populate it once in the CMS admin under Settings → Company Information to manage it from the dashboard. Reason: ${reason}`
      );
      const mapped = toCompanyInfo(null);
      // Cache the fallback for the TTL too, so a missing/unsaved global doesn't
      // hammer the DB on every render.
      _companyInfoCache = { data: mapped, expiresAt: Date.now() + COMPANY_CACHE_TTL_MS };
      return mapped;
    } finally {
      // Release the in-flight dedup once resolved; the TTL cache now serves reads.
      _companyInfoPromise = null;
    }
  })();

  return _companyInfoPromise;
});
