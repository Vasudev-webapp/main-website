type ProductMetaOverride = {
  title: string;
  description: string;
};

/**
 * Optimised meta titles and descriptions for all product pages.
 * These take precedence over CMS-stored metaTitle / metaDescription values
 * and the generic fallback template.
 */
export const PRODUCT_META_OVERRIDES: Record<string, ProductMetaOverride> = {
  // Highest-value product page. GSC (Jul 2026): query "mea triazine" sat at
  // position 4.2 with 89 impressions and 1 click (1.1% CTR, benchmark ~8.4%).
  // The old title carried no CAS number, which is the strongest relevance
  // signal for a bare chemical-name search. Kept to 55 chars so Google does
  // not truncate it.
  "mea-triazine-78-h2s-scavenger": {
    title: "MEA Triazine 78% (CAS 4719-04-4) H2S Scavenger Supplier",
    description:
      "MEA Triazine 78% (CAS 4719-04-4) H2S scavenger, direct from the ISO 9001:2015 India manufacturer. Oil, gas, wastewater & biogas. Drum, IBC & ISO-tank export. COA, SDS and sample in 24 hrs.",
  },
  "mma-triazine-40": {
    title: "MMA Triazine 40% Manufacturer | BTX-Free H2S Scavenger",
    description:
      "MMA Triazine 40% (mono methylamine triazine) BTX-free H2S scavenger for oil, gas, water treatment and paper mills. ISO 9001 India manufacturer. Request quote, COA and sample.",
  },
  "p-toluenesulfonic-acid": {
    title: "P-Toluenesulfonic Acid - Industrial Grade Supplier India",
    description:
      "P-Toluenesulfonic Acid (PTSA) - high-purity industrial grade from ISO 9001 Gujarat manufacturer. Bulk domestic & export supply. Request a quote today.",
  },
  "2-amino-5-methylthiazole": {
    title: "2-Amino-5-methylthiazole - Pharma & Industrial Grade",
    description:
      "2-Amino-5-methylthiazole - pharma & industrial grade from ISO 9001 Ankleshwar manufacturer. Export-ready bulk supply. Request COA & pricing today.",
  },
  "2-chloroethylamine-hydrochloride": {
    title: "2-Chloroethylamine Hydrochloride - Pharma Grade Supplier",
    description:
      "2-Chloroethylamine Hydrochloride - high-purity pharma & industrial grade from ISO 9001 Gujarat manufacturer. Export-ready supply. Request COA & quote.",
  },
  "bis-2-chloroethyl-amine-hydrochloride": {
    title: "Bis(2-chloroethyl)amine HCl - Manufacturer India",
    description:
      "Bis(2-chloroethyl)amine Hydrochloride - ISO 9001 Ankleshwar manufacturer. Bulk pharma-grade supply for domestic & export. Request COA & pricing today.",
  },
  "di-ethyl-amino-ethyl-chloride-hydrochloride": {
    title: "Di Ethyl Amino Ethyl Chloride HCl - Manufacturer India",
    description:
      "Di Ethyl Amino Ethyl Chloride HCl - pharma & industrial grade from ISO 9001 Gujarat manufacturer. Bulk export supply. Request COA & pricing today.",
  },
  "sodium-cumene-sulfonate-40": {
    title: "Sodium Cumene Sulfonate 40% Manufacturer in India | SCS 40 Liquid (CAS 28348-53-0)",
    description:
      "Sodium Cumene Sulfonate 40% (SCS 40, CAS 28348-53-0) liquid hydrotrope from ISO 9001:2015 Gujarat manufacturer. Coupling agent for liquid detergents, dish wash, agrochemicals & cleaners. Bulk drum, IBC & ISO-tank export. Request COA, SDS, sample & quote in 24 hrs.",
  },
  "sodium-cumene-sulfonate-90": {
    title: "Sodium Cumene Sulfonate 90% Manufacturer | SCS 90% Powder",
    description:
      "Sodium Cumene Sulfonate 90% powder (SCS 90%, CAS 28348-53-0) high-active hydrotrope from ISO 9001 India manufacturer. Bulk export supply, COA, SDS & samples.",
  },
  "sodium-xylene-sulfonate-90": {
    title: "Sodium Xylene Sulfonate 90% Manufacturer in India | SXS 90 Powder Exporter",
    description:
      "Sodium Xylene Sulfonate 90% powder (SXS 90, CAS 1300-72-7) high-active hydrotrope from ISO 9001:2015 manufacturer in Gujarat, India. Bulk export for detergent powders & industrial dry blends. Request COA & sample.",
  },
  "sodium-xylene-sulfonate-40": {
    title: "Sodium Xylene Sulfonate 40% Manufacturer in India | SXS 40 Liquid Exporter",
    description:
      "Sodium Xylene Sulfonate 40% (SXS 40, CAS 1300-72-7) liquid hydrotrope from ISO 9001:2015 manufacturer in Gujarat, India. Coupling agent & solubilizer for detergents, cleaners, and agrochemicals. Bulk export in drums & IBC. Request COA & free sample.",
  },
  "eddm-non-triazine-h2s-scavenger": {
    title: "EDDM (Ethylenedioxy)dimethanol CAS 3586-55-8 | Non-Triazine H2S Scavenger Manufacturer India",
    description:
      "Buy EDDM (Ethylenedioxy Dimethanol) CAS 3586-55-8 — Indian manufacturer. Non-triazine H2S scavenger & industrial biocide. 90-95% purity. Preventol EDDM alternative. ISO 9001. Global supply.",
  },
  "bit-20-benzisothiazolinone": {
    // CAS added: every competitor ranking for these terms (ChemicalBook,
    // Mubychem, Sigma, TCI) carries it, and chemical buyers scan for the CAS as
    // an identity check. There was room — the old title was 46 chars; this is
    // 60, still inside Google's display limit.
    title: "BIT 20% Benzisothiazolinone CAS 2634-33-5 | Manufacturer",
    description:
      "BIT 20% (1,2-Benzisothiazolin-3-one, CAS 2634-33-5) formaldehyde-free in-can preservative from ISO 9001 Gujarat manufacturer. For paints, adhesives, inks, metalworking fluids & detergents. Preventol/Nipacide BIT 20 alternative. Request COA, SDS & sample.",
  },
  "bronopol": {
    title: "Bronopol Manufacturer India | CAS 52-51-7",
    description:
      "Bronopol (2-Bromo-2-nitropropane-1,3-diol, CAS 52-51-7) broad-spectrum preservative from ISO 9001 Gujarat manufacturer. For cosmetics, water treatment, metalworking fluids & paper mills. Onyxide 500 alternative. Request COA, SDS & sample today.",
  },
};



