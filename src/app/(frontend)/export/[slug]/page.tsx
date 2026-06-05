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
  if (!page || page.category !== "export") return {};

  const canonicalPath = `/export/${page.slug}`;

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
      canonical: buildAbsoluteUrl(canonicalPath),
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

export default async function ExportPage({ params }: Props) {
  const { slug } = await params;
  const page = getCustomPageData(slug);
  if (!page || page.category !== "export") notFound();

  return <LandingPageLayout page={page} categoryPath="export" />;
}
