type DraftPreviewBannerProps = {
  slug: string;
};

/**
 * Makes it unmistakable that the page being viewed is an unpublished draft, so
 * a preview tab is never mistaken for the live article. Rendered only when
 * Next.js draft mode is active.
 */
export default function DraftPreviewBanner({ slug }: DraftPreviewBannerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-amber-500 text-amber-950 shadow-lg print:hidden"
    >
      <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-3 lg:px-10">
        <p className="text-sm font-medium">
          <span className="font-semibold">Draft preview</span> — this version is
          not published and is hidden from search engines.
        </p>
        <a
          href={`/api/preview/exit?slug=${encodeURIComponent(slug)}`}
          className="rounded-full bg-amber-950 px-4 py-1.5 text-xs font-semibold text-amber-50 transition-colors hover:bg-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-950 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
        >
          Exit preview
        </a>
      </div>
    </div>
  );
}
