import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Enables Next.js draft mode for an authenticated CMS user, then redirects to
 * the real article URL so an unpublished draft renders exactly as it will once
 * published.
 *
 * Security: access is granted purely by the caller's Payload session cookie —
 * there is no shared secret in the URL, so a leaked preview link is useless to
 * anyone who is not already logged into the CMS. Draft mode sets the
 * `__prerender_bypass` cookie, which is what lets this one request skip the ISR
 * cache while public traffic keeps getting static HTML.
 */
export const dynamic = "force-dynamic";

function deny(status: number, message: string): NextResponse {
  return NextResponse.json(
    { error: message },
    {
      status,
      // Preview endpoints must never be indexed or cached.
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return deny(400, "A 'slug' query parameter is required.");
  }

  // Reject anything that is not a plain slug so this cannot be used as an
  // open redirect into an arbitrary path or external host.
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return deny(400, "Invalid slug.");
  }

  let user: unknown = null;
  try {
    const payload = await getPayload({ config });
    const auth = await payload.auth({
      headers: request.headers,
    });
    user = auth.user;
  } catch (error) {
    console.error("preview: failed to verify the CMS session", error);
    return deny(500, "Could not verify the preview session.");
  }

  if (!user) {
    return deny(401, "Log in to the CMS to preview drafts.");
  }

  const draft = await draftMode();
  draft.enable();

  redirect(`/blog/${slug}`);
}
