import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { getCustomPageData } from "@/lib/seo/custom-landing-pages-data";
import LandingPageLayout from "@/components/seo/LandingPageLayout";
import {
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  OILFIELD_H2S_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";
import { buildAbsoluteUrl } from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCustomPageData(slug);
  if (!page || page.category !== "solutions") return {};

  const canonicalPath = `/solutions/${page.slug}`;
  // Consolidate near-duplicate variants onto one authoritative page when set.
  const canonicalUrl = buildAbsoluteUrl(page.canonicalOverride ?? canonicalPath);

  return applyPageMetaOverride(canonicalPath, {
    title: page.title,
    description: page.description,
    keywords: mergeKeywordClusters(
      H2S_SCAVENGER_CORE,
      MEA_TRIAZINE_KEYWORDS,
      OILFIELD_H2S_KEYWORDS,
      page.keywords
    ),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: buildAbsoluteUrl(canonicalPath),
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  });
}

export default async function SolutionsPage({ params }: Props) {
  const { slug } = await params;
  const page = getCustomPageData(slug);
  if (!page || page.category !== "solutions") notFound();

  return <LandingPageLayout page={page} categoryPath="solutions" />;
}
