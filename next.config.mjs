import { withPayload } from "@payloadcms/next/withPayload";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "atjtpw4vvodv5rtp.public.blob.vercel-storage.com",
      },
    ],
  },
  turbopack: {},
  // Skip type-checking during build (run tsc separately in CI)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  staticPageGenerationTimeout: 1000,
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=900, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // Browser (max-age) + CDN (s-maxage) caching so Lighthouse "efficient
            // cache lifetimes" is satisfied. s-maxage alone is not counted by the browser.
            value: 'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Static assets served directly from /public (favicon, og images, icons, fonts, etc.).
        // Regex source is supported by Next's path matcher; browser max-age satisfies
        // Lighthouse "efficient cache lifetimes".
        source: '/(.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/about',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/contact',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=1800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/blog',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/case-study',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/service',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/legal/privacy-policy',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/product/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Content-Language',
            value: 'en',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ─── Legacy asset / old-slug 301s with a genuine replacement ───
      {
        // Old static datasheet asset path → live technical datasheet resource.
        source: '/static/media/VCP-003-TDS.pdf',
        destination: '/resources/mea-triazine-technical-datasheet',
        permanent: true,
      },
      {
        // Truncated legacy blog slug → its live successor article.
        source: '/blog/mea-triazine-a-hydrogen-sulfide-scavenger-for-natu',
        destination: '/blog/what-is-mea-triazine-best-h2s-scavenger-oil-gas',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/',
        permanent: true,
      },
      {
        source: '/insights/chemistry-behind-mea-triazine',
        destination: '/',
        permanent: true,
      },
      {
        source: '/aboutus',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/products/mea-triazine-78',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/product/mea-triazine-78',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/product/mea-triazine-78-scavenger',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/product/active-pharmaceutical-ingredients',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/service/chemical-manufacturing-services',
        destination: '/service/chemical-manufacturing',
        permanent: true,
      },
      {
        source: '/service/custom-chemical-formulation',
        destination: '/service/custom-formulation',
        permanent: true,
      },
      {
        source: '/service/chemical-supply-chain-management',
        destination: '/service/global-logistics-shipping',
        permanent: true,
      },
      {
        source: '/service/advanced-control-systems',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/service/process-optimization',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/legal-pages/privacy-policy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      // ─── 404 fixes: old site paths ─────────────────────────
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ourservices',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/ourservices/',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/MEA-Triazine',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/p-toluenesulfonic-acid',
        destination: '/product/p-toluenesulfonic-acid',
        permanent: true,
      },
      // ─── 404 fixes: insights (old blog) ────────────────────
      {
        source: '/insights/:slug*',
        destination: '/blog',
        permanent: true,
      },
      // ─── 404 fixes: removed/non-existent products ──────────
      // NOTE: albendazole, ketoconazole, pregabalin, copper-sulphate and
      // manganese-sulphate are permanently discontinued with no equivalent
      // product. They are served as 410 Gone from middleware.ts (see GONE_PATHS)
      // instead of soft-301 to /product, so search engines drop them cleanly.
      // ─── 404 fixes: non-existent compare pages ─────────────
      {
        source: '/compare/mea-triazine-vs-yogi-intermediates',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-jay-dinesh-chemicals',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-tacelene-chem',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-venus-ethoxyethers',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-kwantum-india',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-geocon-products-india',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-k2p-chemicals',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-nipacide-bk',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-imperial-oilfield-chemicals',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-melzer-chemicals',
        destination: '/compare',
        permanent: true,
      },
      {
        source: '/compare/mea-triazine-vs-esteem-industries',
        destination: '/compare',
        permanent: true,
      },
      // ─── 404 fixes: non-existent resource/application/case-study/blog pages
      {
        source: '/resources/biocide-h2s-scavenger-dual-function',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/applications/drilling-fluids-biocide',
        destination: '/applications',
        permanent: true,
      },
      // NOTE: the three old manufacturing-template case studies
      // (precision-cnc-milling…, automated-assembly-line…, lightweight-castings…)
      // and the template blog post ai-iot-breakthroughs… have no equivalent
      // content and are served as 410 Gone from middleware.ts (see GONE_PATHS).
      // ─── 404 fixes: supply page with invalid country ───────
      {
        source: '/supply/mea-triazine-78/india',
        destination: '/supply/mea-triazine-78',
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(withPayload(nextConfig));
