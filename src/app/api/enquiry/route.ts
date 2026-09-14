import { NextResponse } from "next/server";
import {
  createCorsPreflightResponse,
  checkWriteRateLimit,
  readJsonWithLimit,
  tooManyRequestsResponse,
  validateCorsOrigin,
  withCorsHeaders,
} from "@/lib/api-security";
import {
  isLandingEnquirySmtpConfigured,
  sendLandingEnquiryEmail,
  type LandingEnquiryData,
} from "@/lib/landing-enquiry-email";
import { logApiError } from "@/lib/observability";

const REQUIRED_FIELDS = [
  "fullName",
  "company",
  "country",
  "email",
  "phone",
  "product",
] as const;

const MAX_BODY_BYTES = 64 * 1024;

type EnquiryPayload = Partial<Record<(typeof REQUIRED_FIELDS)[number], string>> & {
  quantity?: string;
  message?: string;
  source?: string;
};

function trimStr(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(body: EnquiryPayload) {
  const data: LandingEnquiryData = {
    fullName: trimStr(body.fullName),
    company: trimStr(body.company),
    country: trimStr(body.country),
    email: trimStr(body.email),
    phone: trimStr(body.phone),
    product: trimStr(body.product),
    quantity: trimStr(body.quantity),
    message: trimStr(body.message),
    source: trimStr(body.source) || "unknown",
  };

  const missing = REQUIRED_FIELDS.filter((key) => !data[key]);
  if (missing.length) {
    return {
      ok: false as const,
      error: `Missing required fields: ${missing.join(", ")}`,
    };
  }

  if (!isValidEmail(data.email)) {
    return { ok: false as const, error: "Invalid email address" };
  }

  if (data.phone.replace(/\D/g, "").length < 8) {
    return { ok: false as const, error: "Invalid phone number" };
  }

  if (data.source !== "popup" && data.source !== "inline") {
    data.source = "unknown";
  }

  return { ok: true as const, data };
}

function json(body: unknown, init: ResponseInit, req: Request): NextResponse {
  return withCorsHeaders(NextResponse.json(body, init), req);
}

export async function OPTIONS(req: Request) {
  return createCorsPreflightResponse(req, {
    methods: ["GET", "POST", "OPTIONS"],
  });
}

export async function GET(req: Request) {
  return json(
    {
      ok: true,
      smtpConfigured: isLandingEnquirySmtpConfigured(),
    },
    { status: 200 },
    req
  );
}

export async function POST(req: Request) {
  const corsError = validateCorsOrigin(req);
  if (corsError) return corsError;

  const rateLimit = checkWriteRateLimit({
    request: req,
    keyPrefix: "landing-enquiry-write",
    ipLimit: 12,
    tokenLimit: 40,
    windowMs: 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return withCorsHeaders(tooManyRequestsResponse(rateLimit), req);
  }

  const { data: payload, error: parseError } = await readJsonWithLimit<EnquiryPayload>(
    req,
    MAX_BODY_BYTES
  );
  if (parseError) return withCorsHeaders(parseError, req);
  if (!payload) {
    return json({ ok: false, error: "Request body is required" }, { status: 400 }, req);
  }

  const result = validatePayload(payload);
  if (!result.ok) {
    return json({ ok: false, error: result.error }, { status: 400 }, req);
  }

  if (!isLandingEnquirySmtpConfigured()) {
    return json(
      {
        ok: false,
        error: "Email service is not configured. Please try again later.",
      },
      { status: 503 },
      req
    );
  }

  try {
    await sendLandingEnquiryEmail(result.data);
    return json({ ok: true }, { status: 200 }, req);
  } catch (error: unknown) {
    logApiError("landing.enquiry.failed", error, { route: "/api/enquiry" });
    return json(
      {
        ok: false,
        error:
          "Unable to send enquiry email. Please try again or contact us on WhatsApp.",
      },
      { status: 502 },
      req
    );
  }
}
