type OrganizationSchemaProps = {
  name: string;
  url: string;
  logo: string;
  description: string;
  email?: string;
  telephone?: string;
  foundingDate?: string;
  sameAs?: string[];
};

export default function OrganizationSchema({
  name,
  url,
  logo,
  description,
  email,
  telephone,
  foundingDate,
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    description,
    foundingDate: foundingDate || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot No. H-3062, The Naklank Co Op HSG So Ltd, Rushi Chemical Road, Near Gada Circle, GIDC",
      addressLocality: "Ankleshwar",
      addressRegion: "Gujarat",
      postalCode: "393002",
      addressCountry: "IN",
    },
    ...((email || telephone) ? {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        ...(email ? { email } : {}),
        ...(telephone ? { telephone } : {}),
        areaServed: ["IN", "AE", "SA", "OM", "QA", "KW", "IQ", "EG", "BR", "US", "VN", "TH"],
        availableLanguage: ["English", "Hindi"],
      },
    } : {}),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ISO 9001:2015",
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
