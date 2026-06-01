import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  buildCountryPagePath,
  FEATURED_COUNTRY_SLUGS,
} from "@/lib/seo/seo-route-helpers";
import { COUNTRY_PAGES_DATA } from "@/lib/seo/country-pages-data";
import {
  OILFIELD_H2S_KEYWORDS,
  WATER_SOLUBLE_SCAVENGER_KEYWORDS,
  TRIAZINE_BIOCIDE_KEYWORDS,
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  BKC_CORE_KEYWORDS,
  BKC_50_KEYWORDS,
  BKC_80_KEYWORDS,
  BKC_APPLICATIONS_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const INDUSTRY_CLUSTER_MAP: Record<string, readonly string[][]> = {
  "oil-gas-h2s-scavenger": [OILFIELD_H2S_KEYWORDS, H2S_SCAVENGER_CORE, MEA_TRIAZINE_KEYWORDS],
  "water-treatment": [WATER_SOLUBLE_SCAVENGER_KEYWORDS, TRIAZINE_BIOCIDE_KEYWORDS, H2S_SCAVENGER_CORE],
  "metal-working-fluids": [TRIAZINE_BIOCIDE_KEYWORDS],
  "petrochemical": [OILFIELD_H2S_KEYWORDS, H2S_SCAVENGER_CORE, MEA_TRIAZINE_KEYWORDS],
  "refining": [OILFIELD_H2S_KEYWORDS, H2S_SCAVENGER_CORE, MEA_TRIAZINE_KEYWORDS],
  "biogas": [H2S_SCAVENGER_CORE, MEA_TRIAZINE_KEYWORDS],
  "paper-mill": [TRIAZINE_BIOCIDE_KEYWORDS],
  "healthcare-sanitation": [BKC_CORE_KEYWORDS, BKC_50_KEYWORDS, BKC_APPLICATIONS_KEYWORDS],
  "pool-water-treatment": [BKC_CORE_KEYWORDS, BKC_50_KEYWORDS, BKC_80_KEYWORDS, BKC_APPLICATIONS_KEYWORDS],
  "personal-care-cosmetics": [BKC_CORE_KEYWORDS, BKC_50_KEYWORDS, BKC_APPLICATIONS_KEYWORDS],
};

/* ── Industry data ────────────────────────────────────────────── */

type IndustryPage = {
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  image: string;
  sections: {
    heading: string;
    body: string;
  }[];
  specs?: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  servedIndustries: string[];
  faqs: { question: string; answer: string }[];
};

const industryData: Record<string, IndustryPage> = {
  "oil-gas-h2s-scavenger": {
    title: "MEA Triazine H2S Scavenger for Oil & Gas",
    h1: "MEA Triazine H2S Scavenger for Oil & Gas — Manufacturer Direct from India",
    description:
      "Vasudev Chemo Pharma manufactures MEA Triazine 78% H2S scavenger for oil & gas. Direct supply from India with ISO 9001:2015 certification. Request a free sample.",
    keywords: [
      "H2S Scavenger oil gas",
      "MEA Triazine upstream oil gas",
      "hydrogen sulfide removal natural gas",
      "H2S scavenger manufacturer India",
      "MEA Triazine 78 oil and gas",
      "MEA Triazine 78% supplier for upstream oil and gas",
      "buy H2S scavenger for sour gas wells",
      "oilfield H2S scavenger chemical manufacturer India",
      "MEA Triazine supplier for wellhead injection",
      "MEA Triazine supplier for gas gathering systems",
      "natural gas sweetening chemical supplier",
      "pipeline H2S removal chemical manufacturer",
      "bulk MEA Triazine for offshore platforms",
      "H2S scavenger quote for oil and gas operations",
      "how to remove H2S from crude oil and natural gas",
      "best triazine scavenger for sour gas treatment",
      "manufacturer direct MEA Triazine for midstream pipelines",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The H2S Problem in Oil & Gas",
        body: `Hydrogen sulfide (H2S) is one of the most dangerous gases encountered in oil and gas operations. Even at low concentrations, H2S is acutely toxic — the OSHA permissible exposure limit (PEL) is just 20 ppm, and concentrations above 100 ppm are immediately life-threatening. Beyond personnel safety, H2S causes severe corrosion in pipelines, wellhead equipment, and processing facilities, leading to costly unplanned shutdowns and regulatory penalties.

In upstream production, H2S occurs naturally in sour crude oil and natural gas reservoirs. Midstream and downstream operations face H2S in gas processing, refining, and pipeline transport. Left untreated, H2S corrodes carbon steel infrastructure, contaminates products, and creates compliance failures with API and NACE standards. The cost of inaction — equipment replacement, safety incidents, and environmental fines — far exceeds the cost of effective chemical scavenging.`,
      },
      {
        heading: "How MEA Triazine 78% Solves It",
        body: `MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine) reacts irreversibly with H2S to form dithiazine, a water-soluble and non-toxic by-product. This reaction is fast, efficient, and works across a wide range of temperatures and pressures encountered in oil and gas operations.

At 78% active concentration, our MEA Triazine delivers maximum scavenging capacity per litre, reducing your chemical consumption and logistics costs. It is effective across upstream wellhead injection, midstream gas sweetening, and downstream refinery off-gas treatment. The product is water-soluble, biodegradable, and does not introduce new environmental hazards into your operations.

MEA Triazine is the industry-standard liquid H2S scavenger for good reason: it is cost-effective, easy to inject via chemical dosing pumps, and does not require special handling equipment beyond standard chemical safety protocols.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "MOQ (Domestic)", value: "220 Kg" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "Direct from manufacturer — no middlemen",
      "Near Kandla, Mundra, Hazira ports — fast export",
      "COA, TDS, MSDS available on every order",
      "Free samples available for qualification testing",
      "Technical support for dosage optimisation",
    ],
    servedIndustries: [
      "Natural gas pipelines",
      "Offshore oil platforms",
      "Gas processing plants",
      "Petroleum refineries",
    ],
    faqs: [
      {
        question: "What concentration of MEA Triazine do you supply for oil and gas?",
        answer:
          "We supply MEA Triazine at 78% active concentration, which is the industry standard for oil and gas H2S scavenging. This high concentration maximises scavenging efficiency per litre and reduces overall chemical consumption.",
      },
      {
        question: "Can MEA Triazine be used in sour gas pipelines?",
        answer:
          "Yes. MEA Triazine 78% is widely used for continuous injection into sour gas pipelines to remove H2S. It is effective across typical pipeline operating temperatures and pressures, and the dithiazine by-product remains in the liquid phase.",
      },
      {
        question: "What is the typical dosage of MEA Triazine for H2S removal?",
        answer:
          "Dosage depends on the H2S concentration and flow rate. As a rule of thumb, approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S removed. Our technical team can help you calculate the optimal dosage for your specific application.",
      },
      {
        question: "Do you provide free samples for testing?",
        answer:
          "Yes. We provide free samples of MEA Triazine 78% for laboratory and field qualification testing. Contact us with your requirements and we will arrange sample shipment.",
      },
      {
        question: "What export documentation do you provide?",
        answer:
          "Every shipment includes a Certificate of Analysis (COA), Technical Data Sheet (TDS), and Material Safety Data Sheet (MSDS). We also handle all export compliance documentation including customs paperwork, phytosanitary certificates, and dangerous goods declarations as required.",
      },
    ],
  },

  "water-treatment": {
    title: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    h1: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    description:
      "MMA Triazine 40% H2S scavenger for water and wastewater treatment. Safe for municipal systems. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "MMA Triazine water treatment",
      "H2S scavenger wastewater",
      "triazine for sewage treatment",
      "hydrogen sulfide removal wastewater",
      "MMA Triazine 40 manufacturer",
      "MMA Triazine 40% supplier for wastewater treatment",
      "buy H2S scavenger for sewage collection systems",
      "wastewater odor control chemical manufacturer India",
      "hydrogen sulfide control chemical for lift stations",
      "MMA Triazine supplier for municipal wastewater plants",
      "industrial effluent H2S treatment chemical supplier",
      "bulk wastewater H2S scavenger supplier",
      "safe triazine chemical for sewer odor control",
      "how to remove dissolved H2S in wastewater",
      "best H2S scavenger for sewage treatment plants",
      "MMA Triazine 40% quote for water treatment",
      "manufacturer direct triazine for headworks dosing",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S in Water Treatment Systems",
        body: `Hydrogen sulfide is a common problem in wastewater collection systems, treatment plants, and industrial water circuits. It forms when sulphate-reducing bacteria thrive in anaerobic conditions — inside sewer lines, lift stations, digesters, and stagnant holding tanks. The result is foul odour complaints, concrete and metal corrosion, and health risks for maintenance workers.

Municipal authorities and industrial operators face increasing pressure to control H2S emissions at the source. Chemical scavenging with triazine-based products offers an effective, easy-to-deploy solution that works in both batch treatment and continuous dosing scenarios.`,
      },
      {
        heading: "MMA Triazine 40% for Wastewater",
        body: `MMA Triazine (mono-methylamine triazine) at 40% active concentration is specifically formulated for water and wastewater applications. It reacts with dissolved H2S to form a stable, water-soluble by-product that does not re-release hydrogen sulfide.

MMA Triazine 40% is safe for use in municipal wastewater systems and does not introduce harmful residues. Typical dosage ranges from 10–20 ppm depending on H2S levels and system pH. The product can be injected at lift stations, headworks, or directly into collection lines using standard chemical dosing equipment.

Compared to iron-based and oxidiser alternatives, MMA Triazine offers consistent performance across varying pH and temperature conditions, with lower equipment maintenance requirements.`,
      },
    ],
    specs: [
      { label: "Product", value: "MMA Triazine 40%" },
      { label: "Active content", value: "40% (w/w)" },
      { label: "Appearance", value: "Clear liquid" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "MOQ (Domestic)", value: "220 Kg" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "Safe for municipal wastewater systems",
      "Direct from manufacturer — competitive pricing",
      "COA, TDS, MSDS with every shipment",
      "Free samples for pilot testing",
      "Technical dosage guidance available",
    ],
    servedIndustries: [
      "Municipal wastewater treatment plants",
      "Industrial effluent treatment",
      "Sewage collection systems",
      "Water recycling facilities",
    ],
    faqs: [
      {
        question: "Is MMA Triazine safe for municipal wastewater systems?",
        answer:
          "Yes. MMA Triazine 40% is widely used in municipal wastewater treatment. The reaction by-products are water-soluble and non-toxic, and the product does not introduce harmful residues into treated water.",
      },
      {
        question: "What dosage of MMA Triazine is needed for wastewater?",
        answer:
          "Typical dosage ranges from 10–20 ppm based on H2S concentration and system conditions. Our technical team can help you optimise dosage based on your specific water chemistry and treatment targets.",
      },
      {
        question: "Can MMA Triazine be used alongside other treatment chemicals?",
        answer:
          "MMA Triazine is compatible with most common wastewater treatment chemicals. However, we recommend consulting our technical team before combining with strong oxidisers or highly acidic chemicals to ensure optimal performance.",
      },
    ],
  },

  "metal-working-fluids": {
    title: "Triazine Biocide for Metal Working Fluids",
    h1: "Triazine Biocide for Metal Working Fluids — MMA & MEA Triazine Supplier",
    description:
      "Triazine biocide for metalworking fluid preservation. Formaldehyde-releasing biocide effective against bacteria, fungi, and algae. Manufactured in India.",
    keywords: [
      "Triazine biocide cutting fluid",
      "metalworking fluid preservative",
      "formaldehyde releasing biocide India",
      "Grotan BK equivalent India",
      "triazine biocide manufacturer",
      "triazine biocide supplier for metalworking fluids",
      "buy cutting fluid biocide from manufacturer",
      "coolant preservative chemical supplier India",
      "formaldehyde releaser biocide for coolant sump life",
      "metalworking fluid bacteria control chemical supplier",
      "broad spectrum biocide for water miscible cutting fluids",
      "bulk triazine biocide for coolant formulators",
      "Grotan BK alternative manufacturer India",
      "how to control bacteria in metalworking fluids",
      "best biocide for cutting oil preservation",
      "triazine preservative quote for metalworking fluids",
      "supplier for machining coolant antimicrobial additive",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/metal-working-fluids.svg",
    sections: [
      {
        heading: "Microbial Contamination in Cutting Fluids",
        body: `Metalworking fluids (MWFs) provide an ideal environment for microbial growth. Water-miscible cutting fluids, grinding fluids, and coolants contain organic nutrients and operate at warm temperatures — conditions that promote rapid proliferation of bacteria, fungi, and algae. Uncontrolled microbial contamination leads to foul odours, reduced fluid performance, shortened sump life, skin irritation for operators, and increased disposal costs.

Regular biocide treatment is essential to maintain fluid quality, extend sump life, and protect worker health. Triazine-based biocides offer a proven, cost-effective solution used across the metalworking industry globally.`,
      },
      {
        heading: "How Triazine Acts as a Biocide Preservative",
        body: `Triazine biocides work through a formaldehyde-releasing mechanism. In the aqueous environment of metalworking fluids, triazine slowly hydrolyses to release formaldehyde at controlled, low concentrations. This sustained release provides broad-spectrum antimicrobial activity against bacteria, fungi, and algae without the handling risks associated with free formaldehyde.

Our triazine biocides are functionally equivalent to Grotan BK and other established formaldehyde-releasing preservatives. They are compatible with most water-miscible metalworking fluid formulations and can be used both as an initial charge biocide and for ongoing maintenance dosing.

Recommended dosage is typically 0.1–0.3% by volume for initial charge, with maintenance additions of 0.05–0.1% as needed based on microbiological monitoring. The product is easy to handle, mixes readily with metalworking fluids, and does not adversely affect fluid performance or surface finish quality.`,
      },
    ],
    specs: [
      { label: "Products available", value: "MMA Triazine 40%, MEA Triazine 78%" },
      { label: "Function", value: "Formaldehyde-releasing biocide" },
      { label: "Application", value: "Metalworking fluids, cutting oils, coolants" },
      { label: "Typical dosage", value: "0.1–0.3% (initial), 0.05–0.1% (maintenance)" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Grotan BK equivalent — proven performance",
      "Broad-spectrum: bacteria, fungi, and algae",
      "Controlled formaldehyde release — safer handling",
      "Compatible with most MWF formulations",
      "Competitive pricing — direct from Indian manufacturer",
      "COA, TDS, MSDS documentation included",
    ],
    servedIndustries: [
      "Automotive machining plants",
      "Aerospace component manufacturing",
      "General metalworking and fabrication",
      "Cutting fluid and coolant formulators",
    ],
    faqs: [
      {
        question: "Is your triazine biocide equivalent to Grotan BK?",
        answer:
          "Yes. Our triazine biocides are functionally equivalent to Grotan BK and other hexahydro-1,3,5-triazine based preservatives. They provide the same formaldehyde-releasing antimicrobial mechanism and are compatible with standard metalworking fluid formulations.",
      },
      {
        question: "What dosage is recommended for cutting fluids?",
        answer:
          "For initial charge, we recommend 0.1–0.3% by volume. Maintenance dosing of 0.05–0.1% should be applied based on regular microbiological monitoring (dip slides or plate counts). Our technical team can help you establish a monitoring and dosing programme.",
      },
      {
        question: "Is triazine biocide safe for operators?",
        answer:
          "Triazine biocides release formaldehyde at controlled, low concentrations — well below levels that would cause workplace exposure concerns when used at recommended dosages. Standard chemical handling precautions (gloves, eye protection) should be observed when adding the concentrate.",
      },
    ],
  },

  "petrochemical": {
    title: "MEA Triazine H2S Scavenger for Petrochemical Plants",
    h1: "MEA Triazine H2S Scavenger for Petrochemical Operations — Direct from Manufacturer",
    description:
      "MEA Triazine 78% H2S scavenger for petrochemical plants. Protects crackers, reformers, and downstream units from sulfide corrosion. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "MEA Triazine petrochemical",
      "H2S scavenger petrochemical plant",
      "hydrogen sulfide removal petrochemical",
      "triazine for naphtha cracker",
      "petrochemical corrosion inhibitor H2S",
      "H2S scavenger manufacturer India",
      "MEA Triazine supplier for petrochemical plants",
      "buy H2S scavenger for steam cracker operations",
      "petrochemical amine overhead H2S treatment chemical",
      "sour water stripper H2S scavenger supplier",
      "flare gas H2S removal chemical manufacturer",
      "bulk MEA Triazine for petrochemical complexes",
      "how to control H2S in petrochemical units",
      "best H2S scavenger for reformers and crackers",
      "MEA Triazine quote for petrochemical operators",
      "petrochemical sulfur control chemical supplier India",
      "manufacturer direct MEA Triazine for amine system polishing",
      "H2S removal chemical for downstream petrochemical processing",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S Challenges in Petrochemical Operations",
        body: `Petrochemical complexes process hydrocarbon feedstocks that frequently contain hydrogen sulfide and other sulfur compounds. Steam crackers, catalytic reformers, hydrotreaters, and amine regeneration units all generate or encounter H2S at concentrations that threaten equipment integrity and product quality. Sulfide stress cracking in heat exchangers, fouling of catalyst beds, and off-spec product contamination are common consequences of inadequate H2S management.

The scale of petrochemical operations amplifies the cost of corrosion-related failures. A single unplanned shutdown of a cracker or reformer can cost millions in lost production. Regulatory compliance under OSHA, EPA, and local environmental agencies requires continuous monitoring and control of sulfur emissions from process vents, flare systems, and wastewater streams.`,
      },
      {
        heading: "MEA Triazine 78% in Petrochemical Applications",
        body: `MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine) is deployed across multiple points in petrochemical facilities for H2S control. It is injected into process streams, amine system overheads, sour water strippers, and flare gas headers to reduce H2S concentrations below safety and compliance thresholds.

At 78% active concentration, MEA Triazine delivers high scavenging capacity with minimal dilution of process streams. The irreversible reaction with H2S produces water-soluble dithiazine — a stable, non-toxic by-product that does not re-release hydrogen sulfide under process conditions. This makes MEA Triazine suitable for both continuous injection and batch treatment scenarios common in petrochemical plants.

Unlike regenerable amine systems that require dedicated stripping columns and reboilers, MEA Triazine is a simple liquid injection that can be deployed at any point in the process where H2S control is needed — including locations where installing a full amine unit is impractical or uneconomical.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Application points", value: "Amine overheads, sour water strippers, flare headers" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "High 78% concentration — maximum scavenging per litre",
      "Direct from manufacturer — competitive bulk pricing",
      "Effective across cracker, reformer, and amine system applications",
      "COA, TDS, MSDS documentation with every shipment",
      "Technical support for process-specific dosing optimisation",
    ],
    servedIndustries: [
      "Steam cracker complexes",
      "Catalytic reforming units",
      "Amine regeneration systems",
      "Sulfur recovery units",
    ],
    faqs: [
      {
        question: "Where is MEA Triazine injected in a petrochemical plant?",
        answer:
          "MEA Triazine 78% is typically injected at amine system overheads, sour water stripper outlets, flare gas headers, and any process stream where H2S concentrations exceed safety or specification limits. The exact injection points depend on your facility configuration — our technical team can help you identify optimal locations.",
      },
      {
        question: "Can MEA Triazine replace amine systems in petrochemical operations?",
        answer:
          "MEA Triazine is used as a complement to amine systems — not a replacement for large-scale amine treating. It is ideal for polishing residual H2S after amine treatment, treating low-volume streams where a full amine unit is uneconomical, and providing backup scavenging during amine system upsets or turnarounds.",
      },
      {
        question: "What is the scavenging capacity of MEA Triazine 78% in petrochemical service?",
        answer:
          "Approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S removed. Actual consumption depends on H2S concentration, contact time, temperature, and injection method. Our team provides dosing calculations for your specific process conditions.",
      },
      {
        question: "Do you supply MEA Triazine in bulk for petrochemical complexes?",
        answer:
          "Yes. We supply MEA Triazine 78% in 220 L drums, 1000 L IBCs, and bulk tanker quantities. For large petrochemical complexes with continuous consumption, we offer scheduled bulk supply arrangements with competitive pricing.",
      },
    ],
  },

  "refining": {
    title: "H2S Scavenger for Refinery Operations — MEA Triazine 78%",
    h1: "H2S Scavenger for Refinery Operations — MEA Triazine 78% Manufacturer",
    description:
      "MEA Triazine 78% H2S scavenger for petroleum refineries. Crude unit overheads, FCC off-gas, and tank vapour treatment. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "H2S scavenger refinery",
      "MEA Triazine refinery operations",
      "hydrogen sulfide removal refinery",
      "crude unit overhead H2S",
      "FCC off-gas H2S scavenger",
      "refinery corrosion control H2S",
      "MEA Triazine supplier for refinery overhead systems",
      "buy H2S scavenger for crude distillation unit overhead",
      "refinery FCC off gas treatment chemical supplier",
      "tank vapor H2S control chemical manufacturer",
      "refinery sour water H2S scavenger supplier",
      "bulk MEA Triazine for petroleum refineries",
      "how to reduce H2S corrosion in refinery units",
      "best refinery H2S scavenger for sour crude processing",
      "MEA Triazine quote for refinery operations",
      "manufacturer direct H2S scavenger for FCC and CDU",
      "refinery fuel gas H2S treatment chemical supplier",
      "petroleum refinery triazine manufacturer India",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S Corrosion Risks in Refineries",
        body: `Petroleum refineries process crude oil containing varying levels of sulfur compounds that decompose into hydrogen sulfide during thermal and catalytic processing. The crude distillation unit (CDU) overhead system, fluid catalytic cracker (FCC) off-gas, hydrocracker effluent, and coker unit are all significant H2S generation points. Storage tanks receiving sour intermediates also accumulate H2S in the vapour space.

H2S-induced corrosion in refinery equipment is a leading cause of unplanned shutdowns and safety incidents. Overhead condenser systems are particularly vulnerable — wet H2S combined with chlorides creates aggressive corrosion environments that can perforate heat exchanger tubes and overhead piping within months. API 571 classifies wet H2S damage as one of the most common damage mechanisms in refining service. Beyond equipment integrity, refineries must comply with SOx emission limits and sulfur content specifications in finished products.`,
      },
      {
        heading: "MEA Triazine 78% for Refinery H2S Control",
        body: `MEA Triazine is applied in refineries as a targeted H2S scavenging agent at process points where amine treatment alone is insufficient or impractical. Common refinery applications include:

Crude unit overhead systems: MEA Triazine injection into the overhead accumulator or reflux drum controls H2S that contributes to overhead corrosion. This complements neutralising amines and filming inhibitors in a comprehensive overhead corrosion management programme.

FCC off-gas treatment: The FCC wet gas compressor discharge and downstream absorber overhead contain H2S that must be removed before the gas enters the fuel gas system or sulfur recovery unit. MEA Triazine provides fast-acting scavenging at these critical points.

Tank vapour treatment: Crude and intermediate storage tanks accumulate H2S in the vapour space. MEA Triazine-based scrubbing systems or direct vapour-space injection reduce H2S to safe levels for tank maintenance and reduce emissions from tank vents.

The 78% active concentration provides maximum chemical efficiency, reducing the volume of scavenger required per unit of H2S removed — an important consideration in refineries where chemical storage and handling space is often constrained.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Refinery applications", value: "CDU overheads, FCC off-gas, tank vapour, sour water" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "78% concentration — high efficiency in constrained spaces",
      "Effective at CDU overheads, FCC off-gas, and tank vapour service",
      "Direct from manufacturer — no middlemen, competitive pricing",
      "COA, TDS, MSDS included with every shipment",
      "Technical support for refinery-specific dosing programmes",
    ],
    servedIndustries: [
      "Crude oil refineries",
      "FCC and hydrocracking units",
      "Petroleum storage terminals",
      "Refinery wastewater treatment",
    ],
    faqs: [
      {
        question: "How is MEA Triazine used in refinery overhead systems?",
        answer:
          "MEA Triazine 78% is injected into the crude unit overhead system — typically at the overhead accumulator or reflux drum — to scavenge H2S before it can cause corrosion in condenser tubes and piping. It works alongside neutralising amines and filming corrosion inhibitors as part of a comprehensive overhead treatment programme.",
      },
      {
        question: "Can MEA Triazine treat FCC off-gas?",
        answer:
          "Yes. MEA Triazine is commonly injected into FCC wet gas compressor discharge and absorber overhead streams to remove H2S before the gas enters the refinery fuel gas system or sulfur recovery unit. Dosing is adjusted based on FCC feed sulfur content and operating severity.",
      },
      {
        question: "Is MEA Triazine compatible with other refinery chemical treatments?",
        answer:
          "MEA Triazine 78% is compatible with neutralising amines (MDEA, morpholine), filming inhibitors, and demulsifiers commonly used in refinery operations. Our technical team can review your existing chemical programme to ensure compatibility.",
      },
      {
        question: "What quantity of MEA Triazine does a typical refinery consume?",
        answer:
          "Consumption depends on crude sulfur content, throughput, and the number of injection points. A mid-size refinery processing sour crude may consume 5–20 MT per month of MEA Triazine 78%. We offer bulk supply arrangements with scheduled deliveries for continuous operations.",
      },
    ],
  },

  "biogas": {
    title: "MEA Triazine H2S Scavenger for Biogas Purification",
    h1: "MEA Triazine H2S Scavenger for Biogas & Biomethane Purification",
    description:
      "MEA Triazine 78% removes H2S from biogas, landfill gas, and anaerobic digester output. Protects engines, turbines, and upgrading equipment. Supplied by Vasudev Chemo Pharma, India.",
    keywords: [
      "H2S scavenger biogas",
      "MEA Triazine biogas purification",
      "hydrogen sulfide removal biogas",
      "biogas H2S removal chemical",
      "landfill gas H2S treatment",
      "biomethane H2S scavenger",
      "anaerobic digester H2S",
      "MEA Triazine supplier for biogas plants",
      "buy H2S scavenger for biomethane upgrading",
      "landfill gas H2S scavenger manufacturer India",
      "chemical supplier for anaerobic digester gas treatment",
      "bulk biogas H2S removal chemical supplier",
      "RNG upgrading H2S polishing chemical manufacturer",
      "how to remove H2S from biogas before engine use",
      "best H2S scavenger for landfill gas and biogas",
      "MEA Triazine quote for biogas purification",
      "pipeline spec biomethane H2S treatment chemical",
      "manufacturer direct MEA Triazine for rural biogas plants",
      "digester gas sulfur removal chemical supplier",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The H2S Problem in Biogas",
        body: `Biogas produced from anaerobic digestion of organic waste, wastewater sludge, agricultural residues, and landfill decomposition typically contains hydrogen sulfide at concentrations ranging from 100 to over 10,000 ppm. This H2S originates from the bacterial reduction of sulfate and the decomposition of sulfur-containing proteins in the feedstock.

Untreated H2S in biogas causes rapid corrosion of engines, turbines, piping, and biogas upgrading equipment. It also poses a direct safety hazard to plant operators and produces sulfur dioxide (SO2) emissions when combusted — a regulated air pollutant. For biogas upgrading to biomethane or renewable natural gas (RNG), pipeline injection specifications typically require H2S below 4 ppm, demanding effective and reliable removal technology.`,
      },
      {
        heading: "MEA Triazine for Biogas H2S Removal",
        body: `MEA Triazine 78% is an effective liquid H2S scavenger for biogas applications. It is injected into the biogas stream — typically in a packed scrubbing column or inline injection system — where it reacts irreversibly with H2S to form dithiazine, a water-soluble and non-toxic by-product.

For smaller biogas plants (agricultural digesters, small landfills), MEA Triazine offers a simple, low-capital solution: a chemical dosing pump and a contact vessel are the only equipment required. For larger operations, MEA Triazine can be used as a polishing step after biological desulfurisation or iron-based removal to achieve the stringent H2S limits required for biomethane upgrading and grid injection.

The 78% active concentration minimises chemical consumption and reduces the frequency of chemical deliveries — an important consideration for biogas plants in rural or remote locations. The spent solution is non-hazardous and can typically be disposed of through the existing wastewater management system at the biogas facility.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "H2S removal capacity", value: "~4.5 L per kg H2S removed" },
      { label: "Biogas applications", value: "Digesters, landfill gas, biomethane upgrading" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Simple deployment — dosing pump + contact vessel only",
      "78% concentration — fewer deliveries to remote biogas sites",
      "Non-hazardous spent solution — easy disposal",
      "Effective from 100 ppm to 10,000+ ppm H2S",
      "Suitable for biomethane upgrading to pipeline spec (< 4 ppm H2S)",
      "ISO 9001:2015 certified manufacturer — COA, TDS, MSDS included",
    ],
    servedIndustries: [
      "Agricultural biogas plants",
      "Landfill gas collection facilities",
      "Wastewater sludge digesters",
      "Biomethane upgrading and RNG plants",
    ],
    faqs: [
      {
        question: "Can MEA Triazine achieve biomethane pipeline specifications?",
        answer:
          "Yes. MEA Triazine 78% can reduce H2S to below 4 ppm when used in a properly designed scrubbing system. For high-H2S biogas, it is often used as a polishing step after biological or iron-based primary removal to reliably achieve pipeline-grade biomethane specifications.",
      },
      {
        question: "What equipment is needed to use MEA Triazine in a biogas plant?",
        answer:
          "A basic MEA Triazine dosing system requires a chemical storage tank, a metering/dosing pump, and a gas-liquid contact vessel (packed column or spray tower). For smaller plants, inline injection with a static mixer can also be effective. No regeneration equipment is needed.",
      },
      {
        question: "How does MEA Triazine compare to iron sponge for biogas?",
        answer:
          "Iron sponge (iron oxide) media requires periodic replacement and generates spent media that may be classified as hazardous waste. MEA Triazine is a liquid that is continuously dosed, produces non-hazardous spent solution, and requires no media change-outs. MEA Triazine has higher operating cost per unit of H2S removed but lower capital and maintenance costs.",
      },
      {
        question: "Is MEA Triazine suitable for landfill gas applications?",
        answer:
          "Yes. MEA Triazine 78% is effective for landfill gas H2S removal. Landfill gas typically contains 50–500 ppm H2S, which is well within the effective range for MEA Triazine treatment. It protects landfill gas engines, turbines, and upgrading equipment from sulfide corrosion.",
      },
    ],
  },

  "paper-mill": {
    title: "MEA Triazine Slimicide for Pulp & Paper Mills",
    h1: "MEA Triazine Slimicide for Pulp & Paper Mills",
    description:
      "MEA Triazine slimicide for pulp and paper mill biofilm control. Anti-slime agent for paper production. Exported to mills in Vietnam, Thailand, Southeast Asia.",
    keywords: [
      "Triazine slimicide paper mill",
      "biocide pulp and paper",
      "anti-slime agent paper industry",
      "paper mill biocide India",
      "slimicide manufacturer export",
      "MEA Triazine slimicide supplier for paper mills",
      "buy anti slime chemical for white water systems",
      "paper machine biofilm control chemical manufacturer",
      "wet end slimicide supplier India",
      "pulp and paper biocide manufacturer direct",
      "bulk slimicide supplier for kraft paper mills",
      "how to control slime in paper machine circuits",
      "best slimicide for paper mill white water treatment",
      "MEA Triazine quote for paper industry biocide",
      "paper production biocide chemical exporter",
      "manufacturer direct slimicide for recycled paper mills",
      "anti biofilm chemical for pulp and paper plants",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Paper_Mill_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "Biofilm and Slime in Paper Production",
        body: `Paper and pulp mills operate extensive water circuits that are highly susceptible to microbial contamination. Warm, nutrient-rich white water systems, stock preparation areas, and paper machine wet ends provide ideal conditions for bacterial growth and biofilm formation. Slime deposits on wires, felts, and machine surfaces cause sheet breaks, holes, spots, and reduced paper quality.

Uncontrolled biofilm accumulation leads to costly unplanned machine shutdowns for cleaning, increased reject rates, and elevated fibre and chemical consumption. Effective slimicide treatment is essential for maintaining production efficiency and product quality.`,
      },
      {
        heading: "Triazine as an Industrial Slimicide",
        body: `MEA Triazine is an effective formaldehyde-releasing slimicide for paper mill applications. It provides sustained antimicrobial activity in the high-volume water circuits of paper machines, controlling bacterial growth and preventing biofilm accumulation on machine surfaces.

The product can be dosed continuously into the white water system or applied as a targeted shock treatment during scheduled cleaning. Its water solubility ensures uniform distribution throughout the water circuit, and the controlled formaldehyde release mechanism provides lasting protection between doses.

MEA Triazine is compatible with common paper mill chemicals including retention aids, sizing agents, and wet-strength resins. It does not cause foaming or interfere with paper machine runnability when used at recommended dosages.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Function", value: "Slimicide / biocide" },
      { label: "Application", value: "White water systems, stock preparation, wet end" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Effective biofilm and slime control",
      "Compatible with paper mill chemistry",
      "No foaming — safe for paper machines",
      "ISO 9001:2015 certified production",
      "Export experience to Vietnam, Thailand, Southeast Asia",
      "COA, TDS, MSDS documentation provided",
    ],
    servedIndustries: [
      "Kraft and recycled paper mills",
      "Tissue and packaging board production",
      "Pulp manufacturing facilities",
      "Specialty paper manufacturers",
    ],
    faqs: [
      {
        question: "Do you export triazine slimicide to Southeast Asia?",
        answer:
          "Yes. We regularly export MEA Triazine to paper mills in Vietnam, Thailand, Indonesia, and other Southeast Asian countries. Our manufacturing facility near Gujarat ports enables competitive freight rates and reliable lead times of 10–15 days.",
      },
      {
        question: "Will MEA Triazine cause foaming in our paper machine?",
        answer:
          "No. MEA Triazine does not cause foaming when used at recommended dosages. It is compatible with standard paper mill wet-end chemistry including retention aids, sizing agents, and defoamers.",
      },
      {
        question: "What is the recommended dosage for white water systems?",
        answer:
          "Dosage depends on your system volume, temperature, and contamination level. Typical continuous dosing rates range from 50–200 ppm in the white water circuit. Our technical team can help you determine the optimal dosage for your specific mill conditions.",
      },
    ],
  },

  "healthcare-sanitation": {
    title: "Benzalkonium Chloride for Healthcare & Hospital Sanitation",
    h1: "Benzalkonium Chloride (BKC) for Healthcare & Hospital Sanitation — Manufacturer Direct from India",
    description:
      "Vasudev Chemo Pharma manufactures Benzalkonium Chloride 50% and 80% (ADBAC, CAS 8001-54-5) for hospital surface disinfection, clinical sanitation, food-contact surface sanitiser, and pharmaceutical preservation. ISO 9001:2015, GMP, and Halal certified. EPA List N active. Request COA, SDS, and sample.",
    keywords: [
      "benzalkonium chloride for healthcare",
      "BKC for hospital disinfection",
      "BKC manufacturer healthcare",
      "ADBAC for surface disinfection",
      "quaternary ammonium hospital disinfectant manufacturer",
      "BKC 50% hospital sanitiser supplier",
      "BKC 80% concentrate disinfectant brand",
      "EPA List N benzalkonium chloride manufacturer",
      "FDA 21 CFR 178.1010 food contact sanitiser",
      "GMP cosmetic preservative BKC",
      "halal certified disinfectant active ingredient",
      "ISO 9001 hospital disinfectant manufacturer India",
      "clinical surface sanitiser raw material supplier",
      "pharmaceutical preservative benzalkonium chloride",
      "eye drops nasal spray preservative manufacturer",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Industries/Healthcare_Sanitation_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The Hospital & Clinical Sanitation Challenge",
        body: `Hospital-acquired infections (HAIs) affect roughly 1 in 31 hospitalised patients on any given day in the US (CDC 2018) and ~7% of patients in developed countries (WHO). The financial cost is staggering — over USD 28 billion per year in the US alone. The clinical cost is worse: HAIs cause more deaths annually than breast cancer, AIDS, and motor vehicle accidents combined.

Surface disinfection is the front line of HAI prevention. Pathogens like MRSA, C. difficile, VRE, Pseudomonas aeruginosa, and SARS-CoV-2 persist on hospital surfaces for hours to weeks. Without effective surface sanitisation between patients, these pathogens spread room-to-room, ward-to-ward, and patient-to-patient.

Quaternary ammonium compounds (QACs) — specifically Benzalkonium Chloride (BKC, ADBAC, CAS 8001-54-5) — are the most widely used active ingredient in hospital surface disinfectants worldwide. The US EPA's List N (Disinfectants for Use Against SARS-CoV-2) includes hundreds of BKC-based products. The UK NHS, EU public health authorities, and WHO all recognise quaternary ammonium-based products as effective hospital surface disinfectants.`,
      },
      {
        heading: "How Benzalkonium Chloride Solves It",
        body: `BKC is a cationic surfactant — its positively charged quaternary ammonium head binds to the negatively charged outer membrane of bacteria, fungi, and enveloped viruses. This binding disrupts the lipid bilayer, leaks intracellular contents, and inactivates the cell within 1 – 10 minutes of contact at typical use concentrations (0.1% – 0.4% active quat).

Unlike alcohol-based disinfectants that flash off in seconds, BKC leaves a residual antimicrobial film on the surface that continues to disinfect after the wet contact period — particularly valuable in high-touch hospital surfaces (door handles, bed rails, IV poles, computer keyboards). Unlike chlorine bleach, BKC does not corrode metal, damage paint, bleach fabrics, or release toxic chlorine vapour.

Vasudev Chemo Pharma supplies BKC 50% (the global formulation reference standard, equivalent to Lonza Bardac® 22 and Stepan BTC® 824) and BKC 80% concentrate (the export-economical grade, equivalent to Lonza Bardac® 2280 and Stepan BTC® 8358) to disinfectant manufacturers, sanitiser blenders, and EPA-registered formulators across 30+ countries — including USA, UAE, Saudi Arabia, Brazil, Vietnam, Russia, and Egypt.`,
      },
      {
        heading: "Pharmaceutical Preservation Applications",
        body: `Beyond surface disinfection, BKC is one of the most widely used pharmaceutical preservatives — appearing in eye drops, nasal sprays, contact lens solutions, skin antiseptics, and topical antimicrobial products. The USP <51> Antimicrobial Effectiveness Test, BP, EP (Ph. Eur.), IP (Indian Pharmacopoeia), and JP (Japanese Pharmacopoeia) all include compendial monographs for Benzalkonium Chloride.

Typical pharmaceutical use levels are 0.001% – 0.01% active in finished product. Vasudev Chemo Pharma's GMP-certified BKC 50% and BKC 80% are supplied to pharmaceutical OEMs producing eye drops, nasal sprays, and topical antiseptics — with full COA documentation, batch records, and stability data suitable for regulatory submissions to USFDA, CDSCO (India), MHRA (UK), and EMA (EU).`,
      },
    ],
    specs: [
      { label: "Products", value: "BKC 50% (VCP-SFC-0005), BKC 80% (VCP-SFC-0006)" },
      { label: "Active substance", value: "Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC), CAS 8001-54-5" },
      { label: "Hospital use concentration", value: "0.1% – 0.4% active quat (1,000 – 4,000 ppm)" },
      { label: "Food-contact use", value: "Max 200 ppm (FDA 21 CFR 178.1010)" },
      { label: "Pharma preservative use", value: "0.001% – 0.01% active (USP <51>, BP, EP)" },
      { label: "Regulatory", value: "EPA PC Code 069105 | EU BPR PT 1, 2, 3, 4 | USP/NF/BP/EP/IP/JP monographs" },
      { label: "Certifications", value: "ISO 9001:2015 + GMP + Halal" },
      { label: "MOQ", value: "1 MT" },
    ],
    benefits: [
      "EPA-listed active ingredient (PC Code 069105) — included in EPA List N for SARS-CoV-2",
      "Effective against gram-positive and gram-negative bacteria, fungi, yeasts, enveloped viruses",
      "Residual antimicrobial film on surfaces — continues disinfecting after wet contact period",
      "Non-corrosive to metals, non-bleaching to fabrics — unlike chlorine bleach",
      "GMP-certified for pharmaceutical preservation — eye drops, nasal sprays, topical antiseptics",
      "Drop-in equivalent to Lonza Bardac®, Stepan BTC®, and Nouryon Maquat® reference grades",
    ],
    servedIndustries: [
      "Hospitals & Clinics",
      "Pharmaceutical Manufacturing",
      "Diagnostic Laboratories",
      "Long-term Care Facilities",
      "Dental Offices",
      "Veterinary Clinics",
      "Surgical Equipment Reprocessing",
    ],
    faqs: [
      {
        question: "Is Benzalkonium Chloride effective against SARS-CoV-2?",
        answer:
          "Yes. The US EPA's List N (Disinfectants for Use Against SARS-CoV-2) includes hundreds of BKC-based products at active concentrations 0.1% – 0.4%. BKC inactivates enveloped viruses by disrupting the lipid bilayer envelope. Always validate efficacy against the specific organism using EN 14476 virucidal testing.",
      },
      {
        question: "Can BKC 50% or 80% be used directly on hospital surfaces?",
        answer:
          "No. BKC 50% and 80% are concentrated raw materials. Hospital surface disinfectants are formulated by EPA-registered manufacturers who dilute the concentrate to 0.1% – 0.4% active quat in finished products. Vasudev Chemo Pharma supplies the raw material; finished hospital disinfectants must be EPA-registered before commercial sale in the USA.",
      },
      {
        question: "What is the recommended contact time for BKC surface disinfection?",
        answer:
          "Typical contact time is 1 – 10 minutes for hospital surfaces, depending on the target organism. EN 1276 bactericidal testing typically uses 5-minute contact at 0.1% – 0.4% active. EN 14476 virucidal testing uses 1 – 5 minute contact at higher concentrations. Always follow the registered product label for legally-binding contact times.",
      },
      {
        question: "Is BKC compatible with cleaning agents in hospital cleaning?",
        answer:
          "BKC is INCOMPATIBLE with anionic surfactants (LABSA, SLES, soaps) — mixing forms an insoluble complex and destroys biocidal activity. BKC IS compatible with nonionic surfactants (alcohol ethoxylates), amphoteric surfactants (cocamidopropyl betaine), and most cationic systems. Hospital cleaning-disinfectant blends must be formulated by trained chemists.",
      },
      {
        question: "Do you provide GMP and pharmaceutical-grade BKC?",
        answer:
          "Yes. Vasudev Chemo Pharma supplies GMP-certified BKC 50% and BKC 80% suitable for cosmetic preservation, eye drops, nasal sprays, and topical antiseptic applications. We provide full COA, SDS, TDS, GMP certificate, and batch records. The product meets USP, NF, BP, EP, IP, and JP compendial monographs.",
      },
    ],
  },

  "pool-water-treatment": {
    title: "Benzalkonium Chloride Algicide for Pool & Water Treatment",
    h1: "Benzalkonium Chloride for Swimming Pool, Spa & Water Treatment Sanitation — Manufacturer Direct",
    description:
      "Vasudev Chemo Pharma manufactures Benzalkonium Chloride 50% and 80% — the global standard active for swimming pool algicides, spa sanitisers, cooling tower biocides, and HVAC water treatment. ISO 9001:2015, GMP, and Halal certified. Direct supply from India to USA, EU, UAE, Brazil. Request quote, COA, sample.",
    keywords: [
      "benzalkonium chloride pool algicide",
      "BKC swimming pool algicide manufacturer",
      "BKC pool sanitiser supplier",
      "ADBAC pool water treatment",
      "quaternary ammonium pool algicide manufacturer",
      "BKC cooling tower biocide manufacturer",
      "BKC HVAC chiller biocide supplier",
      "BKC water treatment chemical India",
      "BKC algaecide for pools and spas",
      "BKC 50% pool algicide manufacturer",
      "BKC 80% pool concentrate supplier",
      "Legionella biocide manufacturer",
      "cooling water program biocide raw material",
      "swimming pool chemical manufacturer India",
      "spa water treatment quat manufacturer",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Industries/Pool_Water_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The Pool & Water Treatment Challenge",
        body: `Recreational water sanitation isn't just about keeping water clear — it's a public health responsibility. The CDC estimates 7,000 cryptosporidium illnesses per year in the US from inadequately disinfected pool water. Algae bloom, Pseudomonas dermatitis, Legionnaires' disease (Legionella pneumophila), and biofilm-mediated bacterial infections all stem from poorly maintained recreational water.

Industrial cooling water faces a different but related challenge: Legionella outbreaks in cooling towers have caused multiple fatal incidents (NYC 2015, Lisbon 2014, Quebec 2012). The HSE ACOP L8 in the UK and ASHRAE 188 in the US mandate biocide programs for cooling towers and HVAC chiller systems.

Chlorine alone is insufficient. At elevated pH (above 7.6), chlorine's biocidal activity drops sharply. UV disinfection has no residual. Salt chlorination has the same pH-sensitivity problem. Pool and water-treatment programs need a complementary biocide that works synergistically with chlorine and provides residual control.`,
      },
      {
        heading: "How Benzalkonium Chloride Solves It",
        body: `Benzalkonium Chloride (BKC) is the standard quaternary ammonium algicide for pools, spas, and recreational water worldwide. As a cationic surfactant, BKC binds to the negatively charged surface of algae cells (chlorella, spirogyra, anabaena) and chlorine-resistant biofilm bacteria, disrupting their membranes and inactivating them. BKC is non-foaming at recommended pool concentrations (5 – 15 ppm active quat) and does not affect pH, alkalinity, or chlorine demand significantly.

For cooling towers and HVAC systems, BKC at 50 – 200 ppm active quat is the most widely used quaternary ammonium biocide for Legionella control, biofilm disruption, and microbially-influenced corrosion (MIC) prevention. BKC works synergistically with phosphonate / polyacrylate dispersants in cooling-water programs and is compatible with chlorine, bromine, and oxidising biocides used in continuous-treatment programs.

Vasudev Chemo Pharma supplies BKC 50% and 80% to global pool algicide manufacturers, cooling-tower biocide formulators, HVAC chemical companies, and water-treatment chemical brands. Buyers across USA, EU, UAE, Saudi Arabia, Brazil, and Russia procure 80% concentrate from our Gujarat facility and dilute on-site to 25% – 50% in finished products — saving freight cost on long-haul exports.`,
      },
      {
        heading: "Industrial Cooling Tower & HVAC Applications",
        body: `Industrial cooling towers in datacenters, hospitals, food plants, and manufacturing facilities require continuous biocide programs to prevent Legionella growth, biofilm accumulation, and MIC. The HSE ACOP L8 (UK), ASHRAE 188 (US), and EU equivalent standards specify routine slug-dose biocide programs at 50 – 100 ppm active quat for routine control, escalating to 100 – 200 ppm for shock-treatment after Legionella detection.

BKC 80% concentrate is the most cost-efficient grade for cooling-tower biocide formulators producing slug-dose products — typically 20% – 50% BKC 80% in finished formulation, blended with surfactants and chelants for tank stability. Hospital HVAC programs use lower-active products (5% – 25% BKC 80% in finished formulation) for routine chiller maintenance.`,
      },
    ],
    specs: [
      { label: "Products", value: "BKC 50% (VCP-SFC-0005), BKC 80% (VCP-SFC-0006)" },
      { label: "Pool algicide preventive", value: "5 – 15 ppm active quat (10 – 30 mL BKC 50% per 1,000 L)" },
      { label: "Cooling tower routine", value: "50 – 100 ppm active quat (slug dose)" },
      { label: "Cooling tower shock", value: "100 – 200 ppm active quat (Legionella control)" },
      { label: "HVAC chiller", value: "25 – 100 ppm active quat (program-dependent)" },
      { label: "Compatibility", value: "Chlorine, bromine, salt-water, phosphonates, polyacrylates" },
      { label: "Certifications", value: "ISO 9001:2015 + GMP + Halal" },
      { label: "MOQ", value: "1 MT" },
    ],
    benefits: [
      "Effective at elevated pH where chlorine alone fails",
      "Non-foaming at pool concentrations — no aesthetic issues",
      "Residual antimicrobial film — provides between-treatment control",
      "Synergistic with chlorine, bromine, and salt-chlorination systems",
      "Effective against Legionella, Pseudomonas, and chlorine-resistant biofilm",
      "Direct-from-manufacturer pricing for global pool algicide and cooling-tower brands",
    ],
    servedIndustries: [
      "Swimming Pool & Spa Chemical Manufacturers",
      "Cooling Tower Service Companies",
      "HVAC Water Treatment",
      "Datacenter Cooling Water",
      "Hospital Cooling Water Programs",
      "Industrial Cooling Water (Power, Petrochemical, Food)",
    ],
    faqs: [
      {
        question: "What is the recommended dosage of BKC 50% for residential swimming pools?",
        answer:
          "Typical preventive dose is 5 – 15 ppm active quat — equivalent to 10 – 30 mL of BKC 50% per 1,000 litres of pool water, applied weekly or as part of regular pool chemistry maintenance. For algae remediation (active green-water), increase to 30 – 50 ppm active quat as a shock dose.",
      },
      {
        question: "Is BKC compatible with chlorine and salt-water pools?",
        answer:
          "Yes. BKC works synergistically with all standard pool sanitisation systems — chlorine (calcium hypochlorite, sodium hypochlorite, dichlor, trichlor), bromine, salt-water chlorination, and UV/ozone supplemental systems. BKC is most effective at elevated pH where chlorine activity drops, providing complementary biocidal action.",
      },
      {
        question: "Will BKC cause foaming in swimming pools?",
        answer:
          "No. At recommended pool concentrations (5 – 15 ppm active quat), BKC does not produce visible foam. Foaming only becomes problematic at much higher concentrations (>100 ppm) or when BKC is mixed with anionic detergent contamination. Pool circulation systems normally prevent any minor foam buildup.",
      },
      {
        question: "What is the dosage of BKC 80% for cooling tower biocide programs?",
        answer:
          "For routine biological control, slug-dose 50 – 100 ppm active quat (62.5 – 125 mg BKC 80% per litre of cooling water) once or twice per week. For Legionella shock treatment, increase to 100 – 200 ppm active quat. Always follow the HSE ACOP L8 (UK) or ASHRAE 188 (US) guidelines for your jurisdiction and validate with monthly Legionella testing.",
      },
      {
        question: "Do you supply BKC to pool chemical manufacturers in Brazil and the USA?",
        answer:
          "Yes. Vasudev Chemo Pharma exports BKC 50% and 80% to pool algicide and cooling-tower biocide formulators across the USA (Houston, Florida), Brazil (São Paulo, Rio de Janeiro), UAE (Dubai), Saudi Arabia (Riyadh, Jeddah), Vietnam (Ho Chi Minh, Hanoi), Russia (Moscow), and Egypt (Cairo, Alexandria). FOB Mundra/Kandla/Hazira ports with full export documentation.",
      },
    ],
  },

  "personal-care-cosmetics": {
    title: "Benzalkonium Chloride for Personal Care & Cosmetics — INCI Cosmetic Preservative",
    h1: "Benzalkonium Chloride (BKC) for Personal Care & Cosmetics — CTFA-Compliant Cosmetic Preservative Manufacturer",
    description:
      "Vasudev Chemo Pharma manufactures Benzalkonium Chloride 50% and 80% Cosmetic Grade — INCI-listed cationic preservative for hair conditioners, mouthwashes, shampoos, leave-on personal-care products. ISO 9001:2015, GMP, and Halal certified. CTFA-compliant. Direct supply to global cosmetic ingredient formulators.",
    keywords: [
      "benzalkonium chloride cosmetic grade",
      "BKC INCI cosmetic preservative",
      "CTFA compliant benzalkonium chloride",
      "BKC for hair conditioner",
      "BKC for mouthwash preservative",
      "BKC for shampoo cationic surfactant",
      "ADBAC cosmetic ingredient supplier",
      "cosmetic preservative manufacturer India",
      "BKC 50% cosmetic grade manufacturer",
      "BKC 80% cosmetic concentrate supplier",
      "GMP cosmetic ingredient supplier India",
      "halal cosmetic preservative manufacturer",
      "personal care preservative supplier",
      "cationic conditioning agent BKC",
      "BKC for leave-on personal care",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Industries/Personal_Care_Cosmetics_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The Cosmetic Preservation Challenge",
        body: `Personal-care products are nutrient-rich, water-based environments that support rapid microbial growth — bacteria, fungi, yeasts, and moulds can establish populations within days of contamination. Without effective preservatives, cosmetic products develop visible spoilage, off-odours, pH drift, and (more dangerously) become vehicles for pathogenic infection of consumers' skin, eyes, and mucous membranes.

The Cosmetics Europe Annex V (preservatives positive list), FDA cosmetic regulation, and ISO 11930 (Cosmetic Microbiological Challenge Testing) all require finished cosmetic products to demonstrate adequate preservation across a 12-month or longer in-use period. Choosing the right preservative is one of the most important formulation decisions a cosmetic chemist makes.`,
      },
      {
        heading: "How Benzalkonium Chloride Solves It",
        body: `Benzalkonium Chloride (BKC) is one of the most widely used cosmetic preservatives — listed under INCI name 'Benzalkonium Chloride' in Cosmetics Europe Annex V at maximum 0.1% active in rinse-off products and 0.05% active in leave-on products. As a cationic quaternary ammonium compound, BKC provides broad-spectrum antimicrobial protection against bacteria, fungi, yeasts, and moulds.

Beyond preservation, BKC plays a dual role as a cationic conditioning agent in 2-in-1 shampoos, leave-on hair products, and skin-care formulations — its positively charged head adsorbs onto negatively charged hair and skin surfaces, providing conditioning, anti-static, and substantivity benefits. This combined preservative + conditioner functionality makes BKC unusually cost-effective for cosmetic formulators.

Vasudev Chemo Pharma's Cosmetic Grade BKC 50% and 80% are CTFA-compliant, GMP-certified, Halal-certified (for export to UAE, Saudi Arabia, Malaysia, Indonesia), and supplied with INCI declaration documentation. Buyers across global personal-care brands procure 80% concentrate from our Gujarat facility and dilute to 0.125% (rinse-off) or 0.0625% (leave-on) in finished cosmetic formulations.`,
      },
      {
        heading: "Pharmaceutical Preservation in Topical & Eye Care Products",
        body: `BKC is also the most widely used preservative in eye drops, nasal sprays, contact-lens solutions, and topical antiseptics — appearing as a compendial preservative in USP, NF, BP, EP (Ph. Eur.), IP (Indian Pharmacopoeia), and JP (Japanese Pharmacopoeia). Typical pharmaceutical use is 0.001% – 0.01% active in finished products.

For pharmaceutical OEMs, Vasudev Chemo Pharma supplies GMP-certified BKC 50% and BKC 80% with full COA, SDS, TDS, batch records, and stability data suitable for regulatory submissions to USFDA, CDSCO (India), MHRA (UK), and EMA (EU). The product meets compendial monograph specifications for active content, free amine, alkyl distribution, and impurity profile.`,
      },
    ],
    specs: [
      { label: "Products", value: "BKC 50% (VCP-SFC-0005), BKC 80% (VCP-SFC-0006) — Cosmetic Grade" },
      { label: "INCI Name", value: "Benzalkonium Chloride" },
      { label: "Cosmetic max use (rinse-off)", value: "0.1% active (Cosmetics Europe Annex V)" },
      { label: "Cosmetic max use (leave-on)", value: "0.05% active (Cosmetics Europe Annex V)" },
      { label: "Pharma preservative use", value: "0.001% – 0.01% active (USP <51>, BP, EP)" },
      { label: "Functional roles", value: "Preservative + Cationic conditioning agent" },
      { label: "Compatibility", value: "Cationic conditioners (Polyquat-7, Polyquat-10, behentrimonium chloride)" },
      { label: "Incompatibility", value: "Anionic surfactants (SLES, SLS, anionic emulsifiers) — destroys activity" },
      { label: "Certifications", value: "ISO 9001:2015 + GMP + Halal + CTFA-compliant" },
      { label: "MOQ", value: "1 MT" },
    ],
    benefits: [
      "INCI-listed cosmetic preservative — Cosmetics Europe Annex V approved",
      "Dual functionality — preservative AND cationic conditioning agent",
      "GMP-certified for cosmetic and pharmaceutical formulations",
      "Halal-certified for global Muslim-majority cosmetic markets",
      "CTFA-compliant Cosmetic Grade — suitable for finished personal-care products",
      "USP/BP/EP/IP/JP compendial-grade for eye drops, nasal sprays, topical antiseptics",
    ],
    servedIndustries: [
      "Hair Care (shampoos, conditioners, leave-on treatments)",
      "Oral Care (mouthwashes, oral rinses)",
      "Skin Care (lotions, antiseptics, antibacterial wipes)",
      "Eye Care (eye drops, contact lens solutions)",
      "Pharmaceutical OEM (topical antiseptics, nasal sprays)",
      "Cosmetic Ingredient Distribution",
    ],
    faqs: [
      {
        question: "Is Vasudev Chemo Pharma's BKC suitable for INCI-declared cosmetic products?",
        answer:
          "Yes. Our Cosmetic Grade BKC 50% and BKC 80% are CTFA-compliant, GMP-certified, and supplied with INCI declaration documentation. The product can be declared as 'Benzalkonium Chloride' in finished cosmetic product ingredient lists per Cosmetics Europe Annex V (max 0.1% rinse-off, 0.05% leave-on).",
      },
      {
        question: "Can BKC be used as both a preservative and a conditioner in 2-in-1 shampoos?",
        answer:
          "Yes — this is one of BKC's unique advantages. As a cationic quaternary ammonium compound, BKC simultaneously preserves the formulation against microbial growth AND deposits onto hair fibres as a conditioning agent. It is compatible with Polyquat-7, Polyquat-10, and behentrimonium chloride conditioners commonly used in 2-in-1 shampoos.",
      },
      {
        question: "Is BKC compatible with anionic surfactants like SLES in shampoo formulations?",
        answer:
          "No. BKC is INCOMPATIBLE with anionic surfactants — including SLES, SLS, and most anionic detergents. The cationic + anionic charge interaction forms an insoluble ion-pair complex that precipitates out of solution and destroys both detergency and preservation. BKC is suitable for nonionic-based, amphoteric, or pure cationic shampoo formulations.",
      },
      {
        question: "What is the typical use level of BKC 80% in a cosmetic formulation?",
        answer:
          "For rinse-off products targeting 0.1% active matter, use 0.125% BKC 80% in finished formulation. For leave-on products targeting 0.05% active, use 0.0625% BKC 80%. Always validate via ISO 11930 Cosmetic Microbiological Challenge Testing on the finished product before commercial launch.",
      },
      {
        question: "Do you supply pharmaceutical-grade BKC for eye drop manufacturers?",
        answer:
          "Yes. Our GMP-certified BKC 50% and BKC 80% meet USP, NF, BP, EP, IP, and JP compendial monographs for eye drop preservation. Typical use level is 0.001% – 0.01% active in finished pharmaceutical product. We provide full COA, SDS, TDS, batch records, GMP certificate, and stability data suitable for USFDA / CDSCO / MHRA / EMA regulatory submissions.",
      },
    ],
  },
};

const SITE_URL = "https://www.vasudevchemopharma.com";

/* ── Static params ────────────────────────────────────────────── */

export const revalidate = 86400;

export function generateStaticParams() {
  // Pre-render core industry overview pages
  return Object.keys(industryData).map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = industryData[slug];
  if (!page) return {};

  return applyPageMetaOverride(`/industries/${slug}`, {
    title: `${page.title} | Vasudev Chemo Pharma`,
    description: page.description,
    keywords: mergeKeywordClusters(
      ...(INDUSTRY_CLUSTER_MAP[slug] ?? []),
      page.keywords
    ),
    alternates: {
      canonical: `${SITE_URL}/industries/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/industries/${slug}`,
      images: [{ url: page.image }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  });
}

/* ── Page component ───────────────────────────────────────────── */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = industryData[slug];
  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Industries", url: `${SITE_URL}/industries` },
          { name: page.title, url: `${SITE_URL}/industries/${slug}` },
        ]}
      />
      <FAQSchema items={page.faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Industry solutions</SectionLabel>
                <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                  {page.h1}
                </h1>
                <p className="text-secondary text-lg mt-6">{page.description}</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button href="/contact">Request a quote</Button>
                  <Button href="/contact?subject=sample" variant="outline">
                    Request free sample
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[7/4]">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        {page.sections.map((section, i) => (
          <section
            key={section.heading}
            className={`py-16 ${i % 2 === 0 ? "bg-light" : ""}`}
          >
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-secondary leading-relaxed mb-4 max-w-3xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Specifications table */}
        {page.specs && (
          <section className="py-16">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
                Product Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl text-left border-collapse">
                  <tbody>
                    {page.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-200">
                        <td className="py-3 pr-8 font-medium text-primary">
                          {spec.label}
                        </td>
                        <td className="py-3 text-secondary">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Why choose us */}
        <section className="py-16 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                  Why Choose Vasudev Chemo Pharma
                </h2>
                <div className="space-y-4">
                  {page.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 bg-white rounded-2xl p-4"
                    >
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5L5.5 9L14 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent"
                        />
                      </svg>
                      <span className="text-base text-primary font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries served */}
              <div>
                <h3 className="font-heading text-h4 font-semibold text-primary mb-6">
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {page.servedIndustries.map((industry) => (
                    <div
                      key={industry}
                      className="bg-white rounded-2xl p-5 text-center"
                    >
                      <span className="text-sm font-medium text-primary">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-light rounded-2xl"
                >
                  <summary className="cursor-pointer p-5 font-medium text-primary list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Technical resources */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-6">
              Technical Resources
            </h2>
            <p className="text-secondary mb-6">
              <Link href="/resources" className="text-accent underline underline-offset-2 hover:text-accent-dark">
                View all technical resources
              </Link>{" "}
              for MEA Triazine 78% including datasheets, safety information, and dosing guides.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/resources/mea-triazine-technical-datasheet"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Technical Datasheet
                </h3>
                <p className="text-xs text-secondary mt-1">Product specs &amp; download</p>
              </Link>
              <Link
                href="/resources/mea-triazine-safety-data-sheet"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Safety Data Sheet
                </h3>
                <p className="text-xs text-secondary mt-1">Hazards, handling &amp; compliance</p>
              </Link>
              <Link
                href="/resources/h2s-scavenger-dosing-guide"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Dosing Guide
                </h3>
                <p className="text-xs text-secondary mt-1">Calculations &amp; field reference</p>
              </Link>
              <Link
                href="/resources/import-compliance-guide"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Import Compliance Guide
                </h3>
                <p className="text-xs text-secondary mt-1">Country-specific requirements</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Global supply links */}
        <section className="py-12 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-6">
              Global Supply for Industry Operations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {FEATURED_COUNTRY_SLUGS.map((countrySlug) => {
                const countryData = COUNTRY_PAGES_DATA[countrySlug];
                if (!countryData) return null;
                return (
                  <Link
                    key={countrySlug}
                    href={buildCountryPagePath(countrySlug)}
                    className="rounded-2xl bg-white p-4 text-center text-sm font-medium text-primary hover:text-accent hover:shadow-md transition-all"
                  >
                    <span className="text-2xl block mb-1">{countryData.flag}</span>
                    MEA Triazine 78% supply to {countryData.countryName}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/product"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA Triazine 78% Specifications
                </h3>
                <p className="text-sm text-secondary mt-1">
                  View full product details and specifications
                </p>
              </Link>
              <Link
                href="/how-h2s-scavengers-work"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Understand H2S Scavenger Chemistry
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Complete technical guide to H2S removal chemistry
                </p>
              </Link>
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA vs MMA Triazine
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Detailed comparison to choose the right scavenger
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="relative rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
              <Image
                src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative z-10">
                <h2 className="font-heading text-h2 font-semibold text-white mb-4">
                  Ready to solve your H2S challenge?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Get a quote, request a free sample, or download our Technical Data Sheet.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contact">Request industry-specific consultation</Button>
                  <Button href="/contact?subject=sample" variant="dark">
                    Request free sample
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

