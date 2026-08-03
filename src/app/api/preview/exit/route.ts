import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Leaves draft mode and returns to the published version of the page.
 * Safe to call unauthenticated — it only ever removes the bypass cookie.
 */
export const dynamic = "force-dynamic";

export async function GET(request: Request): Promise<void> {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const draft = await draftMode();
  draft.disable();

  const isPlainSlug = slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
  redirect(isPlainSlug ? `/blog/${slug}` : "/blog");
}
