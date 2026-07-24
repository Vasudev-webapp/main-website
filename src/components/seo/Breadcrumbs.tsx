import Link from "next/link";

const SITE_ORIGIN = "https://www.vasudevchemopharma.com";

export type BreadcrumbItem = {
  name: string;
  /** Absolute (https://www.vasudevchemopharma.com/…) or relative (/…) URL. */
  url: string;
};

/**
 * Convert an absolute site URL to a relative path so next/link performs a
 * client-side navigation. External URLs are returned unchanged.
 */
function toRelativeHref(url: string): string {
  try {
    const parsed = new URL(url);
    // Only rewrite URLs whose origin EXACTLY matches this site. Using origin
    // comparison (not startsWith) avoids rewriting lookalike domains such as
    // "https://www.vasudevchemopharma.com.evil.com/…" into a relative path.
    if (parsed.origin === SITE_ORIGIN) {
      const path = `${parsed.pathname}${parsed.search}${parsed.hash}`;
      return path === "" ? "/" : path;
    }
    return url;
  } catch {
    // Not an absolute URL (e.g. an already-relative "/product") — leave as-is.
    return url;
  }
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Extra classes for the <nav> wrapper (e.g. spacing). */
  className?: string;
};

/**
 * Visible, accessible breadcrumb trail. Pair with <BreadcrumbSchema> (JSON-LD)
 * using the SAME items so the rendered trail and structured data stay in sync.
 * The final item is rendered as the current page (not a link).
 */
export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast) {
            return (
              <li key={item.url} className="flex items-center gap-2">
                <span className="text-gray-400" aria-current="page">
                  {item.name}
                </span>
              </li>
            );
          }

          return (
            <li key={item.url} className="flex items-center gap-2">
              <Link
                href={toRelativeHref(item.url)}
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
              <span aria-hidden="true">/</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
