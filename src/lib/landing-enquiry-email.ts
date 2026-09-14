import nodemailer from "nodemailer";

export type LandingEnquiryData = {
  fullName: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
  source: string;
};

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

function buildEmailContent(data: LandingEnquiryData) {
  const sourceLabel =
    data.source === "popup"
      ? "Popup modal"
      : data.source === "inline"
        ? "Inline enquiry form"
        : data.source;

  const rows: [string, string][] = [
    ["Form source", sourceLabel],
    ["Full name", data.fullName],
    ["Company", data.company],
    ["Country", data.country],
    ["Email", data.email],
    ["Phone / WhatsApp", data.phone],
    ["Product", data.product],
    ["Quantity / MOQ", data.quantity || "—"],
    ["Message", data.message || "—"],
  ];

  const text = [
    "New Google Ads landing page enquiry",
    "===================================",
    "",
  ]
    .concat(rows.map(([label, value]) => `${label}: ${value}`))
    .join("\n");

  const html =
    "<h2>New Google Ads landing page enquiry</h2>" +
    '<table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
    rows
      .map(
        ([label, value]) =>
          `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`
      )
      .join("") +
    "</table>";

  return { text, html };
}

export function isLandingEnquirySmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_USER &&
      process.env.SMTP_APP_PASSWORD &&
      (process.env.LP_MAIL_TO || process.env.CONTACT_EMAIL_TO)
  );
}

export async function sendLandingEnquiryEmail(
  data: LandingEnquiryData
): Promise<void> {
  const transporter = createTransporter();
  if (!transporter) {
    throw new Error("SMTP is not configured");
  }

  const smtpUser = process.env.SMTP_USER!;
  const toEmail =
    process.env.LP_MAIL_TO ||
    process.env.CONTACT_EMAIL_TO ||
    "sales@vasudevchemopharma.com";
  const content = buildEmailContent(data);
  const subject = `Enquiry: ${data.product} — ${data.company} (${data.country})`;

  await transporter.sendMail({
    from: `"Vasudev Chemo Pharma Enquiries" <${smtpUser}>`,
    to: toEmail,
    replyTo: data.email,
    subject,
    text: content.text,
    html: content.html,
  });
}
