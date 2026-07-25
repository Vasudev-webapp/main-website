import type { BlogEntry } from "./seo-blog-data";

/* ------------------------------------------------------------------ */
/*  Non-Triazine H2S Scavenger cluster (batch 2) — 10 articles        */
/*  Targets the "non-triazine H2S scavenger" keyword family. Framed   */
/*  factually around the real EDDM product (CAS 3586-55-8, >=90%      */
/*  active). No competitor-brand impersonation (B-Chem, "Master"),    */
/*  no fabricated performance specs (100% purity, guaranteed 75%      */
/*  reduction); such claims are discussed by mechanism instead.       */
/*  Cross-links to the non-triazine hub, EDDM product, and EDDM       */
/*  support pages to avoid cannibalising existing URLs.               */
/* ------------------------------------------------------------------ */

const AUTHOR = "Vasudev Chemo Pharma Technical Team";
const CREDENTIALS =
  "ISO 9001:2015 Certified Manufacturer of Industrial & Specialty Chemicals";

const IMG_OILGAS =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png";
const IMG_PIPELINE =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/H2S%20in%20Natural%20Gas%20Pipelines%20Risks%2C%20Regulations%2C%20and%20Removal%20Methods.png";

const OSHA_LINK = {
  text: "OSHA — Hydrogen Sulfide safety and exposure limits",
  href: "https://www.osha.gov/hydrogen-sulfide",
};
const NACE_LINK = {
  text: "AMPP (formerly NACE) — MR0175/ISO 15156 sour-service standards",
  href: "https://www.ampp.org/technical-research/standards",
};
const NIOSH_LINK = {
  text: "CDC/NIOSH — Hydrogen Sulfide workplace guidance",
  href: "https://www.cdc.gov/niosh/topics/hydrogensulfide/",
};

export const nonTriazineH2sArticlesData: Record<string, BlogEntry> = {
  /* ================================================================== */
  /*  1. PILLAR — Non-Triazine Based H2S Scavenger: Benefits & Selection */
  /*  Covers: Non Triazine Based H2S Scavenger                          */
  /* ================================================================== */
  "non-triazine-based-h2s-scavenger-benefits-selection": {
    title:
      "Non-Triazine Based H2S Scavenger: Benefits, Chemistries & Selection",
    metaTitle: "Non-Triazine H2S Scavenger — Benefits & Selection Guide",
    metaDescription:
      "A non-triazine H2S scavenger removes H2S without amine or triazine-ring chemistry, cutting pH shift, scaling and catalyst poisoning. See benefits and selection.",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "H2S Scavengers",
    image: IMG_OILGAS,
    imageAlt:
      "Non-triazine based H2S scavenger dosing skid treating sour fluids without amine chemistry",
    excerpt:
      "A non-triazine based H2S scavenger removes hydrogen sulfide without triazine-ring or amine chemistry, avoiding pH shift, scaling, and catalyst poisoning. This guide explains the main non-triazine chemistries, their benefits, and how to select one for your stream.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "What Is a Non-Triazine Based H2S Scavenger?",
        id: "what-is-non-triazine-scavenger",
        body: "A non-triazine based H2S scavenger is a hydrogen sulfide removal chemical that does not rely on the hexahydrotriazine ring used in conventional MEA and MMA triazine products. Instead, non-triazine scavengers use alternative reactive chemistries — most commonly formaldehyde-donor compounds such as EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) or glyoxal-based systems — to react irreversibly with H2S and form stable, water-soluble products. The defining characteristic is the absence of triazine and, in the case of EDDM, the absence of amine functionality. That structural difference is not cosmetic: it changes how the scavenger behaves in the field, particularly regarding pH, scaling, and compatibility with downstream catalysts. Non-triazine scavengers exist because triazine, for all its strengths, creates specific problems in certain systems that a different chemistry can avoid.",
      },
      {
        heading: "Key Benefits of Going Non-Triazine",
        id: "benefits-non-triazine",
        body: "Non-triazine scavengers can deliver a set of benefits that matter in specific operating environments, though the extent of each benefit depends on formulation, dose, feed impurities, and fluid and catalyst chemistry. Because a non-amine chemistry like EDDM does not introduce amine groups, it tends not to raise system pH the way triazine can, which can help reduce pH-driven carbonate scaling. It generally avoids the amine and dithiazine salts associated with over-reacted triazine, lowering the risk of solids fouling injection points and lines. Being amine-free, it is also less likely to contribute amine that can poison sensitive refinery catalysts downstream, subject to the specific catalyst and service conditions. And formaldehyde-donor chemistries can add slow-release biocidal activity that helps control sulfate-reducing bacteria which regenerate H2S. These are the reasons operators often evaluate non-triazine chemistry for offshore platforms, refinery streams, and high-scaling produced-fluid systems, but they are not guarantees — SDS/TDS review and application-specific compatibility testing on the actual fluid are required to confirm behaviour. For straightforward, cost-driven bulk gas duty, triazine often remains cheaper per kilogram of H2S removed, so the benefits must be weighed against cost for each application.",
      },
      {
        heading: "The Main Non-Triazine Chemistries",
        id: "main-non-triazine-chemistries",
        body: "Two families dominate non-triazine H2S scavenging. Formaldehyde-donor chemistries such as EDDM release formaldehyde that reacts with H2S to form water-soluble products at ambient temperature; they avoid amine pH shift, resist scaling, and add biocidal action, making them versatile across gas, crude, and produced-water duty. Glyoxal-based scavengers react through a different aldehyde pathway to form thiazolidine-type compounds; they suit lower-H2S applications and are chosen when an operator wants to avoid triazine by-products, though they typically carry a 20–40% price premium and lower capacity. Beyond these, some specialty and metal-based chemistries exist for niche uses. Among the liquid non-triazine options, formaldehyde-donor EDDM offers the broadest practical fit for oil and gas because it combines permanent H2S removal with scale resistance and catalyst friendliness.",
      },
      {
        heading: "How to Select a Non-Triazine Scavenger",
        id: "select-non-triazine-scavenger",
        body: "Selection follows the same discipline as any scavenger choice: analyse the stream first. Identify H2S concentration and mass load, flow rate, phase (gas, liquid, multiphase), temperature, pH, scaling tendency, and any downstream catalyst sensitivity. Non-triazine EDDM becomes the preferred choice when the analysis flags amine pH shift, carbonate scaling, catalyst poisoning, or a need for combined biocidal control — conditions common offshore, in refineries, and in high-scaling produced fluids. Where none of those constraints apply and cost dominates, triazine may still be the economical answer. Because Vasudev Chemo Pharma manufactures both triazine and non-triazine chemistries, we can bench-compare EDDM against MEA Triazine on your actual fluid and recommend the option with the best net performance and cost, rather than defaulting to one product.",
      },
      {
        heading: "Sourcing Non-Triazine Scavengers",
        id: "sourcing-non-triazine",
        body: "Vasudev Chemo Pharma manufactures its non-triazine H2S scavenger, EDDM (CAS 3586-55-8, supplied at 90% or higher active content), at an ISO 9001:2015 certified facility in Gujarat, India, and exports it globally in drums, IBCs, and bulk. Every batch ships with a Certificate of Analysis, Technical Data Sheet, and GHS-compliant Safety Data Sheet. Because we make the product rather than trade it, buyers get consistent quality, direct technical support, and manufacturer-direct pricing. Free samples are available for laboratory qualification and field trials before committing to production volumes, and our team can advise on whether a non-triazine or triazine chemistry is the better fit for your specific application.",
      },
    ],
    bullets: [
      "Non-triazine = no triazine ring; EDDM is also non-amine",
      "Avoids pH shift, carbonate scaling, and catalyst poisoning",
      "Main chemistries: formaldehyde-donor (EDDM) and glyoxal-based",
      "Best for offshore, refinery, and high-scaling produced fluids",
      "Triazine may still win on cost for simple bulk gas duty",
    ],
    quote:
      "Choosing non-triazine is not about rejecting triazine — it is about matching chemistry to constraints. When pH shift, scaling, or catalysts are in play, a non-triazine scavenger is the right engineering answer.",
    closing:
      "A non-triazine based H2S scavenger solves the specific problems triazine cannot always avoid — pH shift, scaling, and catalyst sensitivity — while delivering permanent H2S removal. To compare EDDM against triazine on your stream and source the right chemistry with full documentation, contact the Vasudev Chemo Pharma technical team or request a free sample.",
    internalLinks: [
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "Non-triazine H2S scavenger (EDDM) — overview", href: "/blog/non-triazine-h2s-scavenger-eddm" },
      { text: "Triazine vs non-triazine H2S scavenger — comparison", href: "/triazine-vs-non-triazine-scavenger" },
      { text: "Types of H2S scavengers explained", href: "/blog/types-of-h2s-scavengers-explained" },
      { text: "H2S scavenger solutions hub", href: "/solutions/h2s-scavenger" },
    ],
    externalLinks: [OSHA_LINK, NACE_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "What is a non-triazine based H2S scavenger?",
        answer:
          "It is an H2S removal chemical that does not use the triazine ring found in MEA/MMA triazine. EDDM (CAS 3586-55-8), a non-amine formaldehyde donor, and glyoxal-based products are the main non-triazine options.",
      },
      {
        question: "Why choose a non-triazine scavenger?",
        answer:
          "To avoid amine pH shift, carbonate scaling, and catalyst poisoning, and to add biocidal control — advantages in offshore, refinery, and high-scaling systems. For simple bulk gas duty, triazine is often cheaper.",
      },
      {
        question: "Is EDDM the best non-triazine scavenger?",
        answer:
          "Among liquid non-triazine options, formaldehyde-donor EDDM offers the broadest practical fit for oil and gas, combining permanent H2S removal with scale resistance, catalyst friendliness, and biocidal action. The best choice is always stream-specific.",
      },
      {
        question: "Does Vasudev Chemo Pharma supply non-triazine scavengers?",
        answer:
          "Yes. It manufactures EDDM (>=90% active) at an ISO 9001:2015 facility in India, exporting globally in drums, IBCs, and bulk with COA, TDS, and SDS documentation.",
      },
    ],
  },

  /* ================================================================== */
  /*  2. H2S Scavenger Chemicals: Applications & Market Trends          */
  /*  Covers: H2S Scavenger Chemicals: Applications & Market Trends     */
  /* ================================================================== */
  "h2s-scavenger-chemicals-applications-market-trends": {
    title:
      "H2S Scavenger Chemicals: Applications & Market Trends",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "Market Insights",
    image: IMG_PIPELINE,
    imageAlt:
      "H2S scavenger chemicals applications across oil, gas, and water treatment with market trend indicators",
    excerpt:
      "H2S scavenger chemicals are used across oil and gas, refining, biogas, and water treatment. This guide reviews their main applications and the market trends shaping demand — including the shift toward non-triazine chemistries, sustainability, and direct sourcing.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "What H2S Scavenger Chemicals Do",
        id: "what-h2s-scavenger-chemicals-do",
        body: "H2S scavenger chemicals remove hydrogen sulfide from gas and liquid streams by reacting with it irreversibly, converting a toxic, corrosive contaminant into stable, disposable products. Unlike regenerable solvent systems that release captured H2S during regeneration, scavengers are non-regenerative — consumed once and disposed of with the spent stream. This makes them the practical choice wherever building a full amine-sweetening and sulfur-recovery train is not justified: wellheads, gathering systems, tanks, and small-to-mid gas volumes. The main chemistries are liquid triazines (MEA and MMA), non-triazine formaldehyde donors such as EDDM, glyoxal-based liquids, and solid iron-oxide media. Each converts H2S through a different reaction but shares the same goal — protecting people, metal, and product specification from sulfide.",
      },
      {
        heading: "Primary Applications by Industry",
        id: "applications-by-industry",
        body: "H2S scavenger chemicals serve a broad range of industries. In oil and gas, they treat sour gas at wellheads, gathering systems, and processing plants, and control vapor-phase H2S in crude stabilisation and storage. In refining, they manage H2S in fuel-gas systems and sour-water stripper overheads. In biogas and landfill gas, they remove H2S so the gas meets engine-fuel or pipeline-injection specifications. In water and wastewater treatment, they control dissolved sulfide and the associated odour. Across all of these, the choice between triazine and non-triazine chemistry depends on the stream: catalyst-sensitive refinery service and high-scaling produced fluids increasingly favour non-triazine EDDM, while cost-driven bulk gas duty still leans on triazine.",
      },
      {
        heading: "Market Trend 1: The Shift Toward Non-Triazine Chemistry",
        id: "trend-non-triazine-shift",
        body: "One of the clearest trends in H2S scavenging is growing interest in non-triazine chemistries. Operators facing scaling, amine pH shift, or catalyst-poisoning problems with triazine are evaluating formaldehyde-donor and other non-amine options that avoid these issues. This is not a wholesale replacement of triazine — which remains dominant on cost for many duties — but a diversification, with operators increasingly selecting chemistry by application rather than defaulting to a single product. Manufacturers that offer both triazine and non-triazine ranges are well positioned to serve this trend, because they can recommend the genuinely best fit rather than defending a single-product portfolio.",
      },
      {
        heading: "Market Trend 2: Sustainability, Efficiency, and Direct Sourcing",
        id: "trend-sustainability-sourcing",
        body: "Two further trends shape the H2S scavenger market. First, sustainability and efficiency: operators want to reduce chemical consumption, waste, and the carbon footprint associated with logistics and disposal, driving interest in higher-efficiency application methods (contact towers, better mixing) and chemistries that reduce solids and disposal burden. Actual gains are stream-specific and should be validated by trials rather than assumed from headline figures. Second, direct sourcing: buyers are increasingly bypassing oilfield-service bundles and distributors to purchase directly from manufacturers, cutting the 30–60% margin those intermediaries add and gaining full quality documentation and supply security. India has emerged as a competitive manufacturing base for both triazine and non-triazine scavengers, combining feedstock access, process capability, and export logistics.",
      },
      {
        heading: "What This Means for Buyers",
        id: "what-this-means-buyers",
        body: "For procurement and technical teams, the practical takeaways are straightforward. Select scavenger chemistry by stream, not by habit — the lowest total cost of ownership comes from matching chemistry and application method to your conditions, including disposal and downtime costs, not just headline chemical price. Evaluate non-triazine options where scaling, pH, catalysts, or biocidal needs are in play. And consider direct-from-manufacturer sourcing for predictable, ongoing consumption to control cost and secure supply. Vasudev Chemo Pharma supplies MEA Triazine 78%, MMA Triazine 40%, and non-triazine EDDM directly, with the documentation and technical support buyers need to make and defend these decisions.",
      },
    ],
    bullets: [
      "Scavengers are non-regenerative — reacted once and disposed of",
      "Applications: oil & gas, refining, biogas, water/wastewater treatment",
      "Trend: diversification toward non-triazine chemistry by application",
      "Trend: sustainability, efficiency, and manufacturer-direct sourcing",
      "Buyers should select by total cost of ownership, not headline price",
    ],
    quote:
      "The H2S scavenger market is maturing from one-size-fits-all triazine toward chemistry chosen by application — a shift that rewards buyers who match the product to the stream.",
    closing:
      "H2S scavenger chemicals remain essential across oil, gas, refining, biogas, and water treatment, and the market is trending toward chemistry-by-application selection, efficiency, sustainability, and direct sourcing. To align your scavenger programme with these trends — across triazine and non-triazine options — contact the Vasudev Chemo Pharma technical team for a stream-specific recommendation and a free sample.",
    internalLinks: [
      { text: "Types of H2S scavengers explained", href: "/blog/types-of-h2s-scavengers-explained" },
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "MEA Triazine 78% H2S Scavenger — product page", href: "/product/mea-triazine-78-h2s-scavenger" },
      { text: "H2S scavenger solutions hub", href: "/solutions/h2s-scavenger" },
    ],
    externalLinks: [NACE_LINK, NIOSH_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "What are H2S scavenger chemicals used for?",
        answer:
          "They remove toxic, corrosive hydrogen sulfide from gas and liquid streams in oil and gas, refining, biogas, and water treatment, protecting workers, metal, and product specification without a full amine-sweetening plant.",
      },
      {
        question: "What are the current H2S scavenger market trends?",
        answer:
          "Diversification toward non-triazine chemistries selected by application, a focus on efficiency and sustainability to cut chemical use and disposal, and a shift to manufacturer-direct sourcing to reduce cost and secure supply.",
      },
      {
        question: "Are non-triazine scavengers replacing triazine?",
        answer:
          "Not wholesale. Triazine remains dominant on cost for many duties, but non-triazine options are increasingly chosen where scaling, pH shift, catalyst sensitivity, or biocidal needs make them the better fit.",
      },
      {
        question: "Why buy H2S scavengers directly from a manufacturer?",
        answer:
          "Direct sourcing avoids the 30–60% margin added by service bundles and distributors, and provides full quality documentation and supply security — especially valuable for predictable, ongoing consumption.",
      },
    ],
  },

  /* ================================================================== */
  /*  3. Non-Triazine H2S Scavenger — More Uptime, Less Carbon          */
  /*  Covers: Non-Triazine H2S Scavenger—More Uptime, Less Carbon       */
  /*  (framed by mechanism; no fabricated guaranteed numbers)           */
  /* ================================================================== */
  "non-triazine-h2s-scavenger-uptime-carbon": {
    title:
      "Non-Triazine H2S Scavenger: More Uptime, Less Carbon — How",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "H2S Scavengers",
    image: IMG_OILGAS,
    imageAlt:
      "Non-triazine H2S scavenger improving plant uptime and lowering carbon footprint in sour service",
    excerpt:
      "Non-triazine H2S scavengers can support more uptime and a lower carbon footprint by reducing scaling, solids, and disposal burden. This guide explains the mechanisms behind those gains — and why real results should be validated on your stream, not assumed.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "The Claim — and How to Read It Honestly",
        id: "reading-the-claim",
        body: "You will see non-triazine H2S scavengers marketed with phrases like more uptime and less carbon. These are real, achievable directions of benefit, but they are not universal guarantees — the size of any gain depends entirely on your stream, your current chemistry, and your operating problems. This article explains the genuine mechanisms by which a non-triazine scavenger such as EDDM can improve uptime and reduce carbon footprint, so you can judge whether those benefits apply to your operation. The responsible way to use any performance figure is to treat it as a hypothesis to validate with a monitored field trial, not a fixed specification. With that framing, the mechanisms below are well grounded in the chemistry.",
      },
      {
        heading: "How Non-Triazine Chemistry Supports More Uptime",
        id: "how-more-uptime",
        body: "Uptime losses in scavenger operations often trace to fouling and maintenance. Over-reacted triazine can precipitate amorphous dithiazine and trithiane solids that plug injection quills, foul lines, and force shutdowns for cleaning. A non-amine formaldehyde-donor scavenger like EDDM does not form these amine-derived solids and does not raise pH to promote carbonate scaling, so it can reduce the frequency of fouling-related interventions in systems prone to those problems. Fewer plugged quills and less scale mean fewer unplanned stops and more continuous operation. The uptime benefit is therefore real where solids and scaling are the actual failure modes — and modest where they are not. Identifying your dominant downtime cause is the first step in judging the benefit.",
      },
      {
        heading: "How Non-Triazine Chemistry Can Lower Carbon Footprint",
        id: "how-less-carbon",
        body: "The carbon footprint of a scavenger programme comes largely from chemical manufacture, transport, and spent-product disposal. A non-triazine chemistry can reduce this footprint through several levers: higher active content and efficient application reduce the mass of chemical shipped per kilogram of H2S removed; avoiding solids reduces waste-handling and disposal energy; and slow-release biocidal action can suppress sulfate-reducing bacteria that regenerate H2S, cutting repeat dosing. Lower chemical volume also means fewer truck movements and less associated transport emissions. As with uptime, the magnitude is application-dependent — a stream where triazine already runs cleanly may see little change, while a high-scaling system that currently over-doses and disposes of solids could see meaningful reductions.",
      },
      {
        heading: "Where the Benefits Are Largest",
        id: "where-benefits-largest",
        body: "The uptime and carbon benefits of switching to a non-triazine scavenger are largest in specific situations: high-scaling produced fluids where carbonate scale drives cleaning shutdowns; systems where triazine over-reaction causes recurrent solids and quill plugging; offshore platforms where every intervention is costly and logistics-heavy; and bacterially active systems where H2S regenerates and repeat dosing inflates consumption. In these cases, the mechanisms above compound. Conversely, a well-behaved, low-scaling gas stream on a clean triazine programme may gain little — and triazine may remain the lower-cost choice. Matching the switch to the right problem is what turns a marketing claim into a measured result.",
      },
      {
        heading: "Validate Before You Commit",
        id: "validate-before-commit",
        body: "Because the gains are stream-specific, the sound approach is a controlled trial: baseline your current chemical consumption, fouling frequency, and disposal volumes; run the non-triazine scavenger on a representative stream with inlet/outlet H2S monitoring and coupons or probes; then compare like-for-like over a defined period. This turns claims such as reduced chemical use, more uptime, and lower carbon into your own verified numbers. Vasudev Chemo Pharma manufactures non-triazine EDDM and MEA/MMA triazine, so we can support a fair side-by-side trial and supply either chemistry with full documentation. We would rather help you prove the benefit on your stream than ask you to take a headline figure on faith.",
      },
    ],
    bullets: [
      "Uptime and carbon benefits are real but stream-specific, not guaranteed",
      "Uptime: EDDM avoids amine solids and pH-driven scaling that cause shutdowns",
      "Carbon: less chemical mass, less waste handling, less repeat dosing",
      "Largest gains in high-scaling, offshore, and bacterially active systems",
      "Validate with a monitored side-by-side trial before switching",
    ],
    quote:
      "More uptime and less carbon are outcomes you should measure, not marketing you should accept — the chemistry makes them possible, but your stream decides the size of the win.",
    closing:
      "A non-triazine H2S scavenger can genuinely support more uptime and a lower carbon footprint by avoiding the solids, scaling, and repeat dosing that inflate cost and downtime — but the magnitude depends on your stream. To run a fair, monitored trial of EDDM against your current chemistry, contact the Vasudev Chemo Pharma technical team and request a free sample.",
    internalLinks: [
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "Non-triazine scavengers & reducing chemical use", href: "/blog/non-triazine-scavengers-reduce-chemical-use" },
      { text: "Triazine vs non-triazine H2S scavenger — comparison", href: "/triazine-vs-non-triazine-scavenger" },
      { text: "EDDM multiphase & non-triazine H2S scavenger", href: "/eddm-multiphase-h2s-scavenger" },
    ],
    externalLinks: [NACE_LINK, NIOSH_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "Can a non-triazine scavenger really improve uptime?",
        answer:
          "Yes, where downtime is driven by amine-derived solids or pH-driven scaling. A non-amine formaldehyde donor like EDDM avoids those failure modes, reducing fouling-related shutdowns. In clean-running systems the benefit is smaller.",
      },
      {
        question: "How do non-triazine scavengers lower carbon footprint?",
        answer:
          "By reducing chemical mass shipped per kg of H2S removed, cutting solids and waste-handling energy, suppressing bacteria that regenerate H2S, and lowering transport movements. The actual reduction is stream-specific.",
      },
      {
        question: "Are the more-uptime, less-carbon claims guaranteed?",
        answer:
          "No. They are achievable directions of benefit, not fixed guarantees. The size of any gain depends on your stream and current chemistry, and should be validated with a monitored trial.",
      },
      {
        question: "How do I verify the benefits for my operation?",
        answer:
          "Baseline your chemical use, fouling frequency, and disposal volumes, then run the non-triazine scavenger on a representative stream with inlet/outlet H2S monitoring and compare like-for-like over a defined period.",
      },
    ],
  },

  /* ================================================================== */
  /*  4. Non-Triazine H2S Chemical Scavengers (generic; not B-Chem)     */
  /*  Covers: B-Chem: Non-Triazine H2S Chemical Scavengers              */
  /* ================================================================== */
  "non-triazine-h2s-chemical-scavengers": {
    title:
      "Non-Triazine H2S Chemical Scavengers: How They Work & Where to Use",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "H2S Scavengers",
    image: IMG_PIPELINE,
    imageAlt:
      "Non-triazine H2S chemical scavengers reacting with hydrogen sulfide in gas and liquid streams",
    excerpt:
      "Non-triazine H2S chemical scavengers use formaldehyde-donor or aldehyde chemistries instead of the triazine ring to remove hydrogen sulfide. This guide explains how they work, their advantages, and where they fit best — plus how they compare as alternatives to branded scavengers.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "How Non-Triazine Chemical Scavengers Work",
        id: "how-non-triazine-chemicals-work",
        body: "Non-triazine H2S chemical scavengers remove hydrogen sulfide by an irreversible chemical reaction that does not depend on the hexahydrotriazine ring. The most common route is a formaldehyde-donor chemistry: a compound such as EDDM (ethylenedioxy dimethanol, CAS 3586-55-8) slowly releases formaldehyde, which reacts with H2S to form stable, water-soluble products at ambient temperature. Glyoxal-based scavengers use a related aldehyde pathway to form thiazolidine-type compounds. In every case the H2S is chemically bound and cannot re-release downstream, so treatment is permanent. The key contrast with triazine is chemical family: formaldehyde donors like EDDM contain no amine and no triazine ring, which is precisely what gives them their distinctive field behaviour.",
      },
      {
        heading: "Advantages Over Amine-Triazine Chemistry",
        id: "advantages-over-amine-triazine",
        body: "Because non-triazine chemical scavengers avoid amine functionality, they sidestep several triazine-specific issues. They do not raise system pH, so they do not promote pH-driven carbonate scaling. They do not form the dithiazine and amine solids that can plug injection points when triazine is over-reacted. They do not carry amine that can poison sensitive downstream catalysts in refinery service. And formaldehyde donors add slow-release biocidal action against sulfate-reducing bacteria. These advantages make non-triazine chemical scavengers attractive in offshore, refinery, and high-scaling applications. The trade-off is cost: for straightforward bulk gas duty, amine-triazine often remains cheaper per kilogram of H2S removed, so non-triazine is chosen for its specific benefits rather than as a universal substitute.",
      },
      {
        heading: "Where Non-Triazine Chemical Scavengers Fit Best",
        id: "where-they-fit-best",
        body: "Non-triazine chemical scavengers are the right choice in defined situations: refinery streams where catalyst protection matters; high-scaling produced fluids where avoiding pH shift prevents carbonate scale; offshore platforms where fouling-related interventions are costly; multiphase produced fluids where handling and contact behaviour favour a non-amine chemistry; and bacterially active systems where the biocidal action suppresses H2S regeneration. In gas, crude, produced water, biogas, and pipeline duty, EDDM can be dosed by continuous injection much like triazine. Matching the scavenger to these conditions — rather than defaulting to whichever product is on hand — is what delivers reliable, cost-effective H2S control.",
      },
      {
        heading: "A Note on Branded Non-Triazine Scavengers",
        id: "branded-non-triazine-note",
        body: "Several suppliers market branded non-triazine H2S chemical scavenger lines. From an engineering standpoint, what matters is not the brand but the underlying chemistry, active content, reaction behaviour, and documented performance on your stream. A formaldehyde-donor product like EDDM can serve as a functional alternative to many branded non-triazine scavengers, provided it is qualified against your fluid and specification. When evaluating any branded product against EDDM, compare on objective criteria: active content, capacity per litre, scaling and pH behaviour, catalyst compatibility, biocidal action, documentation (COA, TDS, SDS), and total delivered cost. Vasudev Chemo Pharma supplies EDDM with full documentation and free qualification samples so buyers can make that comparison on evidence rather than marketing.",
      },
      {
        heading: "Qualifying a Non-Triazine Scavenger",
        id: "qualifying-non-triazine",
        body: "Qualification is straightforward and worth doing before any switch. Start with a fluid analysis and a clear statement of the problem you want the non-triazine chemistry to solve — scaling, catalyst protection, fouling, or biocidal control. Run a bench titration to establish capacity and dose on your actual fluid, then a monitored field trial with inlet/outlet H2S measurement and corrosion/solids observation. Confirm compatibility with any co-injected chemicals such as corrosion inhibitors. Review the COA, TDS, and SDS for regulatory and handling requirements. This disciplined qualification turns a chemistry choice into a defensible, documented decision — and it is the same process our technical team supports for every customer evaluating EDDM.",
      },
    ],
    bullets: [
      "Non-triazine chemical scavengers use formaldehyde-donor or aldehyde chemistry",
      "EDDM (CAS 3586-55-8) is a non-amine, non-triazine formaldehyde donor",
      "Advantages: no pH shift, no amine solids, catalyst-friendly, biocidal",
      "Best for refinery, offshore, high-scaling, and bacterially active systems",
      "Compare branded products on chemistry and data, not brand name",
    ],
    quote:
      "With non-triazine chemical scavengers, the brand on the drum matters far less than the chemistry inside it and how it performs on your specific stream.",
    closing:
      "Non-triazine H2S chemical scavengers remove hydrogen sulfide through formaldehyde-donor and aldehyde chemistries that avoid amine pH shift, scaling, and catalyst poisoning — making them the right fit for refinery, offshore, and high-scaling service. To qualify EDDM as an alternative to a branded non-triazine scavenger on your stream, contact the Vasudev Chemo Pharma technical team for documentation and a free sample.",
    internalLinks: [
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "How EDDM works — formaldehyde donor chemistry", href: "/how-eddm-works-formaldehyde-donor" },
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "Types of H2S scavengers explained", href: "/blog/types-of-h2s-scavengers-explained" },
      { text: "Triazine vs non-triazine H2S scavenger — comparison", href: "/triazine-vs-non-triazine-scavenger" },
    ],
    externalLinks: [NACE_LINK, OSHA_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "How do non-triazine H2S chemical scavengers work?",
        answer:
          "They react irreversibly with H2S using formaldehyde-donor chemistry (e.g. EDDM, which releases formaldehyde) or glyoxal-based aldehyde chemistry, forming stable water-soluble products without using the triazine ring.",
      },
      {
        question: "What are the advantages of non-triazine chemical scavengers?",
        answer:
          "They avoid amine pH shift and carbonate scaling, do not form amine/dithiazine solids, do not poison refinery catalysts, and add biocidal action — advantages in offshore, refinery, and high-scaling service.",
      },
      {
        question: "Can EDDM replace a branded non-triazine scavenger?",
        answer:
          "Often yes, if qualified against your fluid. Compare on active content, capacity, scaling/pH behaviour, catalyst compatibility, documentation, and total delivered cost rather than on brand name.",
      },
      {
        question: "How do I qualify a non-triazine scavenger?",
        answer:
          "Run a bench titration for capacity and dose on your fluid, then a monitored field trial with inlet/outlet H2S measurement, confirm compatibility with co-injected chemicals, and review the COA, TDS, and SDS.",
      },
    ],
  },

  /* ================================================================== */
  /*  5. Non-Triazine H2S Scavenger Purity & Active Content             */
  /*  Covers: NON Triazine H2S Scavenger, Purity: 100%                  */
  /*  (purity/active content framed accurately; EDDM >=90% active)      */
  /* ================================================================== */
  "non-triazine-h2s-scavenger-purity-active-content": {
    title:
      "Non-Triazine H2S Scavenger Purity & Active Content Explained",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "Product Specs",
    image: IMG_OILGAS,
    imageAlt:
      "Non-triazine H2S scavenger purity and active content specification on a certificate of analysis",
    excerpt:
      "What does purity mean for a non-triazine H2S scavenger, and why is active content the number that really matters? This guide explains purity vs active content, why liquid scavengers are aqueous solutions, and how to read a scavenger specification accurately.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "Purity vs Active Content: What the Numbers Mean",
        id: "purity-vs-active-content",
        body: "Buyers often ask for the purity of a non-triazine H2S scavenger, but for a liquid product the more meaningful figure is active content — the percentage of the reactive scavenging compound in the supplied solution. Purity, strictly, describes how free the active compound is of impurities; active content describes how much of that compound is present in the liquid you receive. A liquid scavenger is an aqueous solution by design, so it is not a 100% neat substance — the water is functional, keeping the product pumpable and the chemistry well-behaved. Marketplace listings that advertise 100% purity usually refer to the identity or grade of the active rather than a water-free liquid, which can be misleading. The honest, useful specification to request is the active content plus the identity of the active compound.",
      },
      {
        heading: "The Active Content of EDDM Non-Triazine Scavenger",
        id: "eddm-active-content",
        body: "Vasudev Chemo Pharma's non-triazine H2S scavenger, EDDM (ethylenedioxy dimethanol, CAS 3586-55-8), is supplied at 90% or higher active content as a clear to pale-yellow liquid. That high active content means a large fraction of each litre is reactive scavenging chemistry, giving strong capacity per litre while remaining a handleable liquid. We state active content transparently on the Certificate of Analysis for every batch rather than making a blanket 100% purity claim, because a responsible specification reflects what is actually in the drum. When comparing scavenger products, always compare on stated active content and the identity of the active — a product quoted at a higher nominal purity but lower active content, or with an undisclosed active, is not necessarily the stronger scavenger.",
      },
      {
        heading: "Why Liquid Scavengers Are Not 100% Neat",
        id: "why-not-100-percent",
        body: "There are sound engineering reasons a liquid H2S scavenger is supplied as a solution rather than a neat 100% substance. Water or solvent keeps the product at a workable viscosity so it pumps reliably through metering equipment, especially in cold conditions. It stabilises the chemistry and moderates reactivity for safe handling. And it enables accurate, proportional dosing into the target stream. A hypothetical 100% neat active could be impractical to handle, more hazardous, or unstable. So the aqueous formulation is a feature, not a dilution to be suspicious of — what matters is that the active content is high, accurately stated, and verified per batch. This is why experienced buyers specify active content and read the COA rather than chasing a purity headline.",
      },
      {
        heading: "How to Read a Non-Triazine Scavenger Specification",
        id: "read-scavenger-specification",
        body: "A trustworthy non-triazine scavenger specification lists the active compound and its CAS number, the active content (with tolerance, e.g. 90% minimum), appearance, physical form, specific gravity, pH, and relevant handling/hazard data per the SDS. To compare products fairly, normalise to the reactive active: capacity per litre depends on active content and the chemistry's stoichiometry, not on a purity label. Ask for a batch Certificate of Analysis, not just a marketing sheet, and confirm the figures are measured rather than nominal. For EDDM, our COA confirms active content and key parameters for each batch, and our technical team can explain how the stated active translates into H2S removal capacity for your dosing calculations.",
      },
      {
        heading: "Getting an Accurate Specification for Your Purchase",
        id: "accurate-specification-purchase",
        body: "Before you buy any non-triazine H2S scavenger, request three things: the identity and CAS number of the active, the guaranteed minimum active content, and a representative Certificate of Analysis. These let you compare products on a like-for-like basis and calculate realistic dosing and cost per kilogram of H2S removed. Be cautious of listings that lead with purity: 100% without disclosing the active compound or content, as the number may not describe the liquid you will actually receive. Vasudev Chemo Pharma provides transparent EDDM specifications, batch COAs, TDS, and SDS, plus free samples for verification, so your purchase decision rests on documented, accurate data.",
      },
    ],
    bullets: [
      "Active content, not purity, is the number that drives scavenging capacity",
      "EDDM is supplied at >=90% active content (CAS 3586-55-8)",
      "Liquid scavengers are aqueous by design — not 100% neat",
      "'100% purity' listings can mislead; request active content + COA",
      "Compare products on stated active and chemistry, not purity labels",
    ],
    quote:
      "For a liquid H2S scavenger, chasing a 100% purity headline misses the point — the number that removes H2S is the active content, stated honestly and verified on the certificate of analysis.",
    closing:
      "When specifying a non-triazine H2S scavenger, focus on active content and documented data rather than a purity headline. EDDM at 90%+ active, backed by a batch Certificate of Analysis, gives you a transparent, comparable basis for dosing and cost. Contact the Vasudev Chemo Pharma technical team for a current EDDM specification, COA, and free sample.",
    internalLinks: [
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "EDDM CAS 3586-55-8 — properties & specifications", href: "/eddm-cas-3586-55-8-properties" },
      { text: "Non-triazine H2S scavenger composition", href: "/blog/non-triazine-h2s-scavenger-composition" },
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "EDDM grades selection guide", href: "/eddm-grades-selection-guide" },
    ],
    externalLinks: [OSHA_LINK, NIOSH_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "What is the purity of a non-triazine H2S scavenger?",
        answer:
          "For a liquid scavenger, the meaningful figure is active content, not purity. EDDM non-triazine scavenger is supplied at 90% or higher active content; it is an aqueous solution by design, not a 100% neat liquid.",
      },
      {
        question: "Is a 100% purity H2S scavenger real?",
        answer:
          "Liquid scavengers are aqueous solutions, so a 100% neat liquid is not typical. Listings advertising '100% purity' usually refer to the active's identity or grade, which can mislead — always ask for the active content and a COA.",
      },
      {
        question: "What is the active content of EDDM?",
        answer:
          "EDDM (CAS 3586-55-8) is supplied at 90% or higher active content, stated transparently on the batch Certificate of Analysis so buyers can calculate realistic dosing and capacity.",
      },
      {
        question: "How should I compare scavenger specifications?",
        answer:
          "Compare on the active compound identity/CAS, guaranteed minimum active content, and a measured Certificate of Analysis — not on a purity label — then normalise capacity per litre to the reactive active.",
      },
    ],
  },

  /* ================================================================== */
  /*  6. Non-Triazine H2S Scavenger Composition                         */
  /*  Covers: Non-Triazine H2S Scavenger Composition | PDF | Amine      */
  /* ================================================================== */
  "non-triazine-h2s-scavenger-composition": {
    title:
      "Non-Triazine H2S Scavenger Composition: Chemistry & Non-Amine Basis",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "Technical Guides",
    image: IMG_PIPELINE,
    imageAlt:
      "Non-triazine H2S scavenger composition showing non-amine formaldehyde-donor molecular structure",
    excerpt:
      "The composition of a non-triazine H2S scavenger determines how it behaves in the field. This guide explains the chemistry of EDDM — a non-amine, non-triazine formaldehyde donor (CAS 3586-55-8) — and how its composition differs from amine-based triazine scavengers.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "Why Composition Determines Field Behaviour",
        id: "why-composition-matters",
        body: "The composition of an H2S scavenger — its molecular structure and functional groups — directly determines how it performs in service: whether it shifts pH, forms solids, scales, poisons catalysts, or adds biocidal action. Two scavengers can both remove H2S yet behave very differently because of composition. This is the whole basis of the triazine vs non-triazine distinction: triazine scavengers are built on an amine-derived ring, while non-triazine scavengers such as EDDM use a different backbone entirely. Understanding composition lets engineers predict behaviour and select the right chemistry, rather than treating all scavengers as interchangeable. It also explains why the amine/non-amine question — often seen in the search phrase composition and amine — is so central to non-triazine selection.",
      },
      {
        heading: "The Composition of EDDM (Non-Amine, Non-Triazine)",
        id: "eddm-composition",
        body: "EDDM — (ethylenedioxy)dimethanol, also called ethylene glycol bis(hydroxymethyl ether) or dimethylol glycol — has the molecular formula C4H10O4 and CAS number 3586-55-8. Structurally it is a glycol-based formaldehyde donor: an ethylene glycol backbone bearing hydroxymethyl (formaldehyde-donor) groups. Critically, its composition contains no nitrogen and no amine group, and no triazine ring. This non-amine, non-triazine composition is the source of its field advantages. It is supplied as a clear to pale-yellow liquid at 90% or higher active content. Because the reactive function is a slow-release formaldehyde donor rather than an amine ring, EDDM reacts with H2S at ambient temperature without the pH shift and amine-salt formation intrinsic to triazine chemistry.",
      },
      {
        heading: "Amine vs Non-Amine: The Key Compositional Difference",
        id: "amine-vs-non-amine",
        body: "The pivotal compositional difference between conventional and non-triazine scavengers is the presence or absence of amine groups. MEA and MMA triazine are amine-based: they are built from formaldehyde and an amine (monoethanolamine or methylamine), and the resulting triazine ring carries nitrogen. That amine content is what raises pH, can form amine and dithiazine salts, and can poison certain refinery catalysts. EDDM's composition, by contrast, is non-amine — a glycol formaldehyde donor with no nitrogen — so it avoids all three effects. This is why the amine question appears so often alongside non-triazine scavenger composition searches: buyers are specifically looking for a non-amine chemistry to escape amine-related problems. EDDM answers that need directly.",
      },
      {
        heading: "How Composition Drives the H2S Reaction",
        id: "composition-drives-reaction",
        body: "EDDM's formaldehyde-donor composition dictates its reaction with H2S. In service, the hydroxymethyl groups release formaldehyde, which reacts with hydrogen sulfide to form stable, water-soluble sulfur-containing products, permanently removing the H2S. Because the mechanism runs through formaldehyde rather than an amine ring opening, it proceeds at ambient temperature and does not consume alkalinity or shift pH. The same formaldehyde-release composition gives EDDM broad-spectrum biocidal activity, which suppresses sulfate-reducing bacteria that would otherwise regenerate H2S. So a single compositional feature — the slow-release formaldehyde donor on a non-amine glycol backbone — explains both the H2S scavenging and the biocidal action, and the absence of amine explains the scale- and catalyst-friendly behaviour.",
      },
      {
        heading: "Composition, Documentation, and Handling",
        id: "composition-documentation-handling",
        body: "Because EDDM is a formaldehyde donor, its composition carries specific handling and regulatory considerations that are documented in its Safety Data Sheet, and its identity and active content are confirmed on the Certificate of Analysis. Buyers evaluating non-triazine scavenger composition should always work from these documents rather than a generic PDF, since they reflect the actual supplied product. Vasudev Chemo Pharma provides full EDDM composition data — CAS number, formula, active content, appearance, and GHS classification — in its TDS and SDS, and our technical team can explain how the composition translates into field behaviour and dosing for your specific stream. Understanding the composition is the foundation for safe handling, accurate dosing, and confident selection.",
      },
    ],
    bullets: [
      "Composition determines pH shift, scaling, catalyst, and biocidal behaviour",
      "EDDM: C4H10O4, CAS 3586-55-8 — glycol-based formaldehyde donor",
      "Non-amine and non-triazine — no nitrogen in the molecule",
      "Formaldehyde-donor function drives both H2S removal and biocidal action",
      "Work from the COA, TDS, and SDS — not a generic PDF",
    ],
    quote:
      "Composition is destiny for a scavenger: EDDM's non-amine, formaldehyde-donor structure is exactly why it removes H2S without the pH shift, scaling, and catalyst problems of amine-triazine chemistry.",
    closing:
      "The composition of a non-triazine H2S scavenger — non-amine, non-triazine, formaldehyde-donor in the case of EDDM — is what gives it its scale- and catalyst-friendly field behaviour. For full EDDM composition data, TDS, SDS, and guidance on what it means for your stream, contact the Vasudev Chemo Pharma technical team.",
    internalLinks: [
      { text: "How EDDM works — formaldehyde donor chemistry", href: "/how-eddm-works-formaldehyde-donor" },
      { text: "EDDM CAS 3586-55-8 — properties & specifications", href: "/eddm-cas-3586-55-8-properties" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "Non-triazine H2S scavenger purity & active content", href: "/blog/non-triazine-h2s-scavenger-purity-active-content" },
      { text: "EDDM synonyms & trade names", href: "/eddm-synonyms-trade-names" },
    ],
    externalLinks: [NIOSH_LINK, OSHA_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "What is a non-triazine H2S scavenger made of?",
        answer:
          "Non-triazine scavengers such as EDDM are formaldehyde-donor compounds. EDDM (C4H10O4, CAS 3586-55-8) is a glycol-based formaldehyde donor with no amine and no triazine ring, supplied at 90%+ active content.",
      },
      {
        question: "Is a non-triazine H2S scavenger amine-based?",
        answer:
          "EDDM is non-amine — it contains no nitrogen. This is the key compositional difference from MEA/MMA triazine, which are amine-based, and it is why EDDM avoids amine pH shift, salt formation, and catalyst poisoning.",
      },
      {
        question: "How does EDDM's composition remove H2S?",
        answer:
          "Its hydroxymethyl groups release formaldehyde, which reacts with H2S to form stable, water-soluble products at ambient temperature, while the same formaldehyde release provides biocidal action against sulfate-reducing bacteria.",
      },
      {
        question: "Where can I find the composition and safety data?",
        answer:
          "In the product's Technical Data Sheet and Safety Data Sheet, with identity and active content confirmed on the batch Certificate of Analysis — always work from these rather than a generic PDF.",
      },
    ],
  },

  /* ================================================================== */
  /*  7. Non-Triazine H2S Scavenger Product Range (generic; not Master) */
  /*  Covers: Master H2S Scavenger Series - (Non-Triazine)              */
  /* ================================================================== */
  "non-triazine-h2s-scavenger-product-range": {
    title:
      "Non-Triazine H2S Scavenger Product Range: Grades & Selection",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "Product Specs",
    image: IMG_OILGAS,
    imageAlt:
      "Non-triazine H2S scavenger product range in drums and IBCs for different sour-service applications",
    excerpt:
      "A non-triazine H2S scavenger product range covers different grades and applications — from oilfield gas and crude to water treatment and preservation. This guide explains how a non-triazine scavenger range is structured and how to select the right grade for your duty.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "How a Non-Triazine Scavenger Range Is Structured",
        id: "how-range-structured",
        body: "A non-triazine H2S scavenger product range is usually organised around a core active chemistry offered in grades tuned for different duties. For a formaldehyde-donor chemistry like EDDM, the core active (CAS 3586-55-8) is supplied at a high active content, with grade variations that may adjust concentration, additive packages, or formulation for specific applications — oilfield gas and crude desulfurisation, produced-water treatment, biogas, or industrial preservation and biocide use. Rather than a single one-size product, a well-designed range lets buyers match the grade to the stream and the regulatory context. The unifying thread is the non-triazine, non-amine chemistry; the differences lie in concentration, physical properties, and any performance additives suited to the target application.",
      },
      {
        heading: "Grades for Oil & Gas Duty",
        id: "grades-oil-gas",
        body: "For oil and gas H2S scavenging, the priorities are capacity per litre, reaction speed at operating temperature, and compatibility with the produced fluid and downstream equipment. A high-active EDDM grade suits continuous injection into sour gas, crude, and multiphase produced fluids, and into pipelines and wellheads, where its non-amine composition avoids pH shift and scaling. In multiphase systems, EDDM's handling behaviour is a particular advantage, which is why a dedicated multiphase application is part of the practical range. Selecting the oilfield grade comes down to H2S load, phase, temperature, and any co-injected chemistry such as corrosion inhibitors, all confirmed by a bench test on the actual fluid.",
      },
      {
        heading: "Grades for Water Treatment and Preservation",
        id: "grades-water-preservation",
        body: "Beyond oil and gas, the non-triazine range extends into water treatment and industrial preservation, exploiting the biocidal action of the formaldehyde-donor chemistry. In water and wastewater systems, EDDM can help control dissolved sulfide and the sulfate-reducing bacteria that generate H2S and odour. Where registered/approved for the specific use and jurisdiction, it may serve as an in-can preservative and industrial biocide to protect water-based products such as metalworking fluids, paints, adhesives, polymer dispersions, and pigment slurries. Biocidal and preservative uses are regulated (for example under EU BPR, US EPA FIFRA, or the applicable national scheme), so the permitted product forms, use levels, and claims must be confirmed against the product's biocidal registration and Safety Data Sheet before use rather than assumed. These preservation grades leverage the same core chemistry as the H2S-scavenging grades but are positioned for microbiological control. This dual capability — H2S scavenging and, where authorized, biocidal preservation — is a distinctive feature of formaldehyde-donor non-triazine chemistry and broadens where a single core product can be applied.",
      },
      {
        heading: "Selecting the Right Grade From the Range",
        id: "selecting-right-grade",
        body: "Grade selection follows the application and its constraints. Start with the duty: H2S scavenging (gas, crude, produced water, biogas) or preservation/biocide. Then define the operating conditions: H2S load, phase, temperature, pH sensitivity, scaling tendency, catalyst exposure, and regulatory requirements. Match these to the grade with the appropriate active content and any needed additives. For most oilfield H2S duty, a high-active EDDM grade dosed by continuous injection is the starting point; for preservation, a grade positioned for microbiological control fits better. Because Vasudev Chemo Pharma manufactures the core chemistry, we can advise on the right grade — and, where triazine would actually be more economical, say so rather than push a non-triazine product that is not the best fit.",
      },
      {
        heading: "A Note on Branded Scavenger Series",
        id: "branded-series-note",
        body: "Some suppliers market their non-triazine scavengers as a named series. From a technical standpoint, a series name is a marketing wrapper; what determines performance is the underlying chemistry, active content, and documented behaviour on your stream. A high-active EDDM grade can serve as a functional equivalent to many branded non-triazine series entries, provided it is qualified against your fluid and specification. When comparing a branded series against EDDM, evaluate objective criteria — active content, capacity, scaling/pH and catalyst behaviour, biocidal action, documentation, and total delivered cost. Vasudev Chemo Pharma supplies its non-triazine range with full COA, TDS, and SDS and free qualification samples so the comparison rests on evidence.",
      },
    ],
    bullets: [
      "A range is a core non-triazine active offered in application-tuned grades",
      "Oilfield grades: high-active EDDM for gas, crude, multiphase, pipelines",
      "Water/preservation grades leverage EDDM's biocidal action",
      "Select by duty, H2S load, phase, temperature, and constraints",
      "Compare branded 'series' on chemistry and data, not the series name",
    ],
    quote:
      "A scavenger range should be organised around fit, not branding — the right grade is the one whose active content and behaviour match your stream and duty.",
    closing:
      "A non-triazine H2S scavenger product range built on EDDM chemistry spans oilfield gas and crude, produced water, biogas, and industrial preservation — with grade selection driven by duty and operating constraints. To choose the right non-triazine grade for your application, or to qualify EDDM against a branded series, contact the Vasudev Chemo Pharma technical team for documentation and a free sample.",
    internalLinks: [
      { text: "EDDM grades selection guide", href: "/eddm-grades-selection-guide" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "EDDM multiphase & non-triazine H2S scavenger", href: "/eddm-multiphase-h2s-scavenger" },
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "Non-triazine H2S chemical scavengers", href: "/blog/non-triazine-h2s-chemical-scavengers" },
    ],
    externalLinks: [NACE_LINK, NIOSH_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "How is a non-triazine H2S scavenger range structured?",
        answer:
          "Around a core non-triazine active (e.g. EDDM, CAS 3586-55-8) offered in grades tuned for different duties — oilfield gas and crude, produced water, biogas, and industrial preservation — differing in concentration and additives.",
      },
      {
        question: "Which grade suits oil and gas H2S removal?",
        answer:
          "A high-active EDDM grade for continuous injection into sour gas, crude, and multiphase produced fluids, selected by H2S load, phase, temperature, and co-injected chemistry, and confirmed by a bench test.",
      },
      {
        question: "Can one non-triazine chemistry do both scavenging and preservation?",
        answer:
          "Yes. EDDM's formaldehyde-donor chemistry removes H2S and provides biocidal action, so the same core product spans H2S scavenging and industrial preservation grades.",
      },
      {
        question: "Is a branded scavenger series better than EDDM?",
        answer:
          "Not inherently. A series name is marketing; performance depends on chemistry, active content, and data. A high-active EDDM grade can be a functional equivalent when qualified against your fluid and compared on objective criteria.",
      },
    ],
  },

  /* ================================================================== */
  /*  8. Non-Triazine Scavengers & Reducing Chemical Use                */
  /*  Covers: Non-Triazine Scavengers Reducing Chemical Use by 75%      */
  /*  (75% framed as reported/conditional, not a guaranteed spec)       */
  /* ================================================================== */
  "non-triazine-scavengers-reduce-chemical-use": {
    title:
      "Can Non-Triazine Scavengers Reduce Chemical Use? The Real Levers",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "H2S Scavengers",
    image: IMG_PIPELINE,
    imageAlt:
      "Non-triazine scavenger reducing chemical consumption through higher efficiency and less over-dosing",
    excerpt:
      "Some non-triazine scavenger programmes report large cuts in chemical use — figures as high as 75% are quoted. This guide explains the real levers behind reduced chemical consumption, when big reductions are achievable, and why you should validate any figure on your own stream.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "Where the 'Reduce Chemical Use by 75%' Claim Comes From",
        id: "where-claim-comes-from",
        body: "Marketing for non-triazine scavengers sometimes quotes dramatic reductions in chemical consumption — figures around 75% appear in case-study claims. It is important to read such numbers correctly: they describe specific situations, usually a poorly optimised baseline being replaced by a better-matched chemistry and application, not a universal result you can expect on any stream. A large percentage reduction is most credible when the starting point was heavily over-dosed or plagued by H2S regeneration. Treat any headline reduction as a best-case data point from a particular context, and as a hypothesis to test — not a guaranteed specification. With that caveat clear, the underlying levers that reduce chemical use are genuine and worth understanding.",
      },
      {
        heading: "Lever 1: Eliminating Over-Dosing",
        id: "lever-over-dosing",
        body: "The single biggest source of wasted scavenger is over-dosing driven by poor contact. When chemical is injected into a fast-flowing line with little mixing, much of it passes through unreacted, so operators compensate by dosing far above theoretical need. Improving contact — with static mixers, atomising quills, or a contact tower — lets more of each litre react, cutting consumption sharply. This lever applies to any chemistry, triazine or non-triazine, but it is often addressed at the same time as a chemistry switch, which is why the combined change can show a large reduction. Attributing the whole saving to the chemistry alone would be misleading; much of it comes from better application.",
      },
      {
        heading: "Lever 2: Stopping H2S Regeneration",
        id: "lever-h2s-regeneration",
        body: "In systems with active sulfate-reducing bacteria, H2S is continually regenerated, so a scavenger with no biocidal action must keep treating the same recurring sulfide, inflating consumption. A formaldehyde-donor non-triazine scavenger like EDDM adds biocidal activity that suppresses these bacteria, tackling the source of the H2S rather than only the symptom. Where microbial regeneration is significant, this can reduce total chemical use over time because the H2S load itself falls. Where bacteria are not a factor, this lever contributes little — again showing why reductions are stream-specific. Identifying whether your system is bacterially active is key to knowing whether this benefit applies.",
      },
      {
        heading: "Lever 3: Avoiding Solids and Rework",
        id: "lever-solids-rework",
        body: "Over-reacted triazine can form dithiazine and trithiane solids, and pH-driven carbonate scale can accompany amine chemistry. Beyond the uptime cost, these problems can drive extra chemical use for remediation and cause inefficient operation that wastes scavenger. A non-amine chemistry that avoids solids and scaling removes this source of waste. The saving here overlaps with the uptime benefit: cleaner operation is also more chemical-efficient. As with the other levers, the magnitude depends on whether solids and scaling are actually occurring in your system today. A stream that already runs clean will not see this saving.",
      },
      {
        heading: "How to Achieve — and Verify — a Real Reduction",
        id: "achieve-verify-reduction",
        body: "To capture a genuine reduction in chemical use, combine the levers deliberately: optimise application (contact and mixing), select a chemistry matched to your problems (biocidal action where bacteria regenerate H2S; non-amine where solids and scaling waste chemical), and right-size the dose using bench titration and inlet/outlet monitoring rather than a fixed excess. Then verify: baseline your current consumption, run the improved programme on a representative stream, and compare like-for-like over a defined period. This produces your own defensible number instead of relying on a marketing figure. Vasudev Chemo Pharma manufactures non-triazine EDDM and triazine chemistries and supports this kind of trial, so any reduction you report is one you have actually measured on your stream.",
      },
    ],
    bullets: [
      "Big reduction figures (e.g. 75%) are best-case, context-specific — not guarantees",
      "Lever 1: eliminate over-dosing with better contact and mixing",
      "Lever 2: biocidal EDDM stops H2S regeneration by bacteria",
      "Lever 3: avoiding solids and scaling removes chemical waste",
      "Verify any reduction with a baselined, monitored side-by-side trial",
    ],
    quote:
      "A 75% cut in chemical use is a result someone measured in a specific system — not a spec you can assume. The levers are real; the number is yours to prove on your own stream.",
    closing:
      "Non-triazine scavengers can meaningfully reduce chemical use by eliminating over-dosing, stopping bacterial H2S regeneration, and avoiding solids — but the size of the saving depends on your system, and headline figures should be validated, not assumed. To design and verify a chemical-reduction trial with EDDM on your stream, contact the Vasudev Chemo Pharma technical team for support and a free sample.",
    internalLinks: [
      { text: "Non-triazine H2S scavenger — more uptime, less carbon", href: "/blog/non-triazine-h2s-scavenger-uptime-carbon" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "EDDM dosage guide", href: "/eddm-dosage-guide" },
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "H2S scavenger application methods", href: "/blog/h2s-scavenger-application-methods" },
    ],
    externalLinks: [NACE_LINK, NIOSH_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "Can non-triazine scavengers really cut chemical use by 75%?",
        answer:
          "Such figures are best-case results from specific poorly optimised baselines, not universal guarantees. Real reductions come from eliminating over-dosing, stopping bacterial H2S regeneration, and avoiding solids — and should be validated on your stream.",
      },
      {
        question: "What actually reduces scavenger chemical consumption?",
        answer:
          "Better application (contact, mixing) to stop over-dosing, biocidal chemistry to suppress bacteria that regenerate H2S, avoiding solids and scaling that waste chemical, and right-sizing the dose with bench titration and monitoring.",
      },
      {
        question: "Does EDDM reduce chemical use versus triazine?",
        answer:
          "It can, where its biocidal action stops H2S regeneration or where avoiding amine solids and scaling removes waste. In clean, well-optimised triazine systems the difference may be small; verify with a trial.",
      },
      {
        question: "How do I prove a chemical-use reduction?",
        answer:
          "Baseline current consumption, run the improved programme on a representative stream with inlet/outlet H2S monitoring, and compare like-for-like over a defined period to produce your own measured figure.",
      },
    ],
  },

  /* ================================================================== */
  /*  9. Non-Regenerative Liquid H2S Scavengers                         */
  /*  Covers: Non Regenerative Liquid H2S Scavengers                    */
  /* ================================================================== */
  "non-regenerative-liquid-h2s-scavengers": {
    title:
      "Non-Regenerative Liquid H2S Scavengers: How They Work & When to Use",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "Technical Guides",
    image: IMG_PIPELINE,
    imageAlt:
      "Non-regenerative liquid H2S scavenger injected once and disposed of with the treated stream",
    excerpt:
      "Non-regenerative liquid H2S scavengers react once with hydrogen sulfide and are disposed of with the stream — no regeneration required. This guide explains how they differ from regenerable systems, their advantages, and when triazine or non-triazine liquids are the right choice.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "What 'Non-Regenerative' Means",
        id: "what-non-regenerative-means",
        body: "A non-regenerative liquid H2S scavenger reacts irreversibly with hydrogen sulfide and is consumed in a single pass — the spent product leaves with the treated stream and is disposed of, rather than being recovered and reused. This contrasts with regenerable systems, such as amine gas-sweetening units, which hold H2S loosely, release it during a regeneration step, and recycle the solvent while sending concentrated H2S to a sulfur-recovery plant. Both major liquid scavenger families are non-regenerative: MEA/MMA triazine and non-triazine formaldehyde donors like EDDM all bind H2S permanently. Non-regenerative chemistry is defined by that one-way reaction — simple, permanent, and consumed once — which is exactly why it suits applications where regeneration infrastructure cannot be justified.",
      },
      {
        heading: "Non-Regenerative vs Regenerative Systems",
        id: "non-regenerative-vs-regenerative",
        body: "The choice between non-regenerative scavengers and regenerable systems is fundamentally about scale and H2S mass. Regenerable amine systems make economic sense at large gas-processing plants handling high, continuous H2S volumes, where the capital cost of absorber, stripper, and Claus sulfur-recovery units is repaid by recovering the solvent and the sulfur. Non-regenerative liquid scavengers win everywhere else: wellheads, gathering systems, tanks, offshore skids, biogas, and small-to-mid gas streams, where a simple injection package beats a multi-million-dollar plant. The trade-off is that non-regenerative chemistry is consumed and disposed of rather than recovered, so above a certain H2S mass loading, regeneration becomes cheaper. Below that crossover — which covers a very large share of field applications — non-regenerative liquids are the practical answer.",
      },
      {
        heading: "Advantages of Non-Regenerative Liquid Scavengers",
        id: "advantages-non-regenerative",
        body: "Non-regenerative liquid scavengers offer compelling advantages for the applications they suit. They need minimal equipment — a tank, a metering pump, and an injection point — so capital cost and footprint are low. They are simple to operate and reliable at remote or unmanned sites, with no regeneration cycle to manage. Their reaction is permanent, so captured H2S cannot re-release downstream. And because the chemistry is liquid, it doses precisely in proportion to flow and H2S load and handles gas, liquid, and multiphase duty. Within the non-regenerative category, triazine offers the highest capacity per litre for cost-driven duty, while non-triazine EDDM adds scale resistance, catalyst friendliness, and biocidal action for demanding streams.",
      },
      {
        heading: "Choosing Triazine or Non-Triazine for Non-Regenerative Duty",
        id: "choosing-triazine-or-non-triazine",
        body: "Once you have determined that a non-regenerative liquid scavenger fits your scale, the next choice is chemistry. MEA Triazine 78% is the default for straightforward, cost-driven bulk gas and crude duty, offering maximum capacity per litre. MMA Triazine 40% suits BTEX-free or high-temperature-stability requirements. Non-triazine EDDM is the choice where amine pH shift, carbonate scaling, or catalyst poisoning must be avoided — offshore, refinery, and high-scaling produced fluids — or where biocidal control of H2S regeneration adds value. All three are non-regenerative liquids dosed by continuous injection, so switching between them is operationally simple. The decision rests on the stream, and a bench comparison on your actual fluid is the reliable way to make it.",
      },
      {
        heading: "Disposal and Handling of Spent Scavenger",
        id: "disposal-handling-spent",
        body: "Because non-regenerative scavengers are consumed and disposed of, spent-product handling is part of the programme. Spent triazine typically yields dithiazine as the dominant by-product, which is often water-compatible; however, over-reaction, high spent loading, or long residence times can drive the chemistry toward dithiazine/trithiane precipitation and require solids management. Spent EDDM likewise forms reaction products whose solubility and handling depend on the specific formulation and service conditions. The reaction products actually present, their disposal route, and compatibility with produced-water systems must be confirmed for your specific formulation and jurisdiction using the supplied product's SDS/TDS, the identified reaction products, and the applicable local permits and regulations — not assumed to be universally water-soluble or disposal-compatible. Monitoring spent-product levels helps avoid solids and confirm treatment. Non-regenerative simplicity does not remove the need for responsible disposal — it shifts the emphasis from regeneration equipment to spent-stream management. Vasudev Chemo Pharma provides SDS/TDS guidance and technical support for handling and disposal alongside supply of both triazine and non-triazine liquids.",
      },
    ],
    bullets: [
      "Non-regenerative: reacted once, disposed of with the stream — no recovery",
      "Both triazine and non-triazine EDDM are non-regenerative liquids",
      "Best below the H2S mass where amine + Claus regeneration pays off",
      "Low capital, small footprint, permanent removal, precise liquid dosing",
      "Spent-product solubility and disposal route vary — confirm per SDS/TDS and local rules",
    ],
    quote:
      "Non-regenerative liquid scavengers trade solvent recovery for radical simplicity — a pump and a tote instead of an absorber, stripper, and sulfur plant. For most field streams, that trade is a clear win.",
    closing:
      "Non-regenerative liquid H2S scavengers — triazine and non-triazine alike — deliver permanent, low-capital H2S removal wherever a full regenerable plant is not justified. To choose between MEA Triazine, MMA Triazine, and non-triazine EDDM for your non-regenerative application, and to get SDS and disposal guidance, contact the Vasudev Chemo Pharma technical team for a stream assessment and free sample.",
    internalLinks: [
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "MEA Triazine 78% H2S Scavenger — product page", href: "/product/mea-triazine-78-h2s-scavenger" },
      { text: "Types of H2S scavengers explained", href: "/blog/types-of-h2s-scavengers-explained" },
      { text: "How H2S scavengers work — technical guide", href: "/how-h2s-scavengers-work" },
    ],
    externalLinks: [NACE_LINK, OSHA_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "What is a non-regenerative liquid H2S scavenger?",
        answer:
          "A liquid chemical that reacts irreversibly with H2S in a single pass and is disposed of with the treated stream, rather than being regenerated and reused. Both triazine and non-triazine EDDM are non-regenerative.",
      },
      {
        question: "How is it different from a regenerable amine system?",
        answer:
          "Regenerable amine systems hold H2S loosely, release it during regeneration, and recycle the solvent while recovering sulfur — economical at large scale. Non-regenerative scavengers are consumed once and suit smaller or remote streams with a simple injection package.",
      },
      {
        question: "When should I use a non-regenerative scavenger?",
        answer:
          "At wellheads, gathering systems, tanks, offshore skids, biogas, and small-to-mid gas streams — below the H2S mass loading where amine sweetening with sulfur recovery becomes cheaper.",
      },
      {
        question: "How is spent non-regenerative scavenger disposed of?",
        answer:
          "Spent triazine (dithiazine) and spent EDDM products are water-soluble and generally compatible with produced-water disposal, but disposal must follow the Safety Data Sheet and local regulations, with spent levels monitored to avoid solids.",
      },
    ],
  },

  /* ================================================================== */
  /*  10. Non-Triazine H2S Scavenger for Offshore & Refinery            */
  /*  Additional applications angle for the non-triazine keyword family */
  /* ================================================================== */
  "non-triazine-h2s-scavenger-offshore-refinery-applications": {
    title:
      "Non-Triazine H2S Scavenger for Offshore & Refinery Applications",
    date: "Jul 25, 2026",
    lastUpdated: "Jul 25, 2026",
    category: "Oil & Gas",
    image: IMG_OILGAS,
    imageAlt:
      "Non-triazine H2S scavenger applied on an offshore platform and in refinery sour-service streams",
    excerpt:
      "Non-triazine H2S scavengers are increasingly chosen for offshore platforms and refinery streams, where avoiding scaling, pH shift, and catalyst poisoning is critical. This guide covers where non-triazine EDDM fits best in demanding upstream and downstream applications.",
    author: AUTHOR,
    authorCredentials: CREDENTIALS,
    sections: [
      {
        heading: "Why Demanding Applications Favour Non-Triazine",
        id: "why-demanding-favour-non-triazine",
        body: "Offshore platforms and refineries are among the most demanding environments for H2S scavenging, and they are exactly where non-triazine chemistry earns its place. Offshore, space and weight are constrained, interventions are expensive, and any scaling or fouling that forces a shutdown carries a heavy cost — so a chemistry that avoids amine solids and pH-driven scale is valuable. In refineries, sour streams often feed or sit near catalytic processes, where amine carry-over can poison sensitive catalysts. A non-amine, non-triazine scavenger such as EDDM sidesteps both problems. This is why, even though triazine remains the cost leader for simple bulk gas, non-triazine chemistry is increasingly specified for these high-stakes upstream and downstream applications.",
      },
      {
        heading: "Non-Triazine Scavenging on Offshore Platforms",
        id: "offshore-non-triazine",
        body: "On offshore platforms, produced fluids are frequently multiphase and can be high-scaling, and topside processing must run reliably with minimal intervention. A non-triazine EDDM scavenger suits this context: its non-amine composition avoids pH shift and carbonate scaling that could foul topside equipment, and it handles well in multiphase produced fluids. Because it reacts at ambient temperature and doses by simple continuous injection, it integrates into existing chemical-injection systems without new infrastructure. Its biocidal action also helps control sulfate-reducing bacteria in seawater-injection and produced-water systems, addressing H2S at its microbial source. For operators where every deck intervention is costly, reducing fouling-related maintenance is a direct operational benefit.",
      },
      {
        heading: "Non-Triazine Scavenging in Refineries",
        id: "refinery-non-triazine",
        body: "Refineries generate and handle H2S across many units, and sour streams frequently interact with catalytic processes. The key advantage of a non-triazine scavenger here is catalyst friendliness: EDDM contains no amine to poison sensitive downstream catalysts, unlike amine-triazine chemistry that can carry over. This makes non-triazine chemistry attractive for fuel-gas conditioning, sour-water handling, and other refinery streams where protecting catalyst life is a priority. EDDM also avoids the scaling and solids that can complicate operation in refinery service. As always, the specific stream conditions — H2S load, temperature, and downstream sensitivities — determine the dose and confirm suitability, so a bench test and monitored trial precede full deployment.",
      },
      {
        heading: "High-Scaling and Catalyst-Sensitive Systems",
        id: "high-scaling-catalyst-sensitive",
        body: "Beyond the offshore/refinery split, the common thread is systems that are high-scaling or catalyst-sensitive. In high-scaling produced fluids, avoiding the pH shift that promotes carbonate scale prevents cleaning shutdowns and maintains injectivity. In catalyst-sensitive service, avoiding amine carry-over protects expensive catalyst beds. EDDM's non-amine, non-triazine composition addresses both directly, which is why it is specified where these constraints dominate. Where neither constraint applies and cost is the main driver, triazine may still be the economical choice — the point is to match the chemistry to the constraint. Because Vasudev Chemo Pharma makes both, we can advise honestly on where non-triazine is genuinely worth its premium.",
      },
      {
        heading: "Deploying Non-Triazine Scavenger in Critical Service",
        id: "deploying-critical-service",
        body: "Deploying a non-triazine scavenger in offshore or refinery service follows a disciplined path: analyse the fluid and define the constraint (scaling, catalyst protection, multiphase handling, biocidal need); bench-test EDDM for capacity and dose on the actual fluid; confirm compatibility with co-injected chemicals such as corrosion inhibitors; run a monitored field trial with inlet/outlet H2S measurement and observation of scaling and fouling; then scale up with full documentation. Given the high cost of failure in these environments, this qualification rigour is worthwhile. Vasudev Chemo Pharma supplies EDDM with COA, TDS, and SDS and supports qualification trials, so critical-service deployment rests on evidence and documentation rather than assumption.",
      },
    ],
    bullets: [
      "Offshore & refinery service favour non-triazine for scale/catalyst reasons",
      "Offshore: avoids topside scaling; handles multiphase; biocidal action",
      "Refinery: no amine to poison sensitive downstream catalysts",
      "Common thread: high-scaling or catalyst-sensitive systems",
      "Qualify in critical service with bench test + monitored trial",
    ],
    quote:
      "In offshore and refinery service, the cost of a fouling shutdown or a poisoned catalyst dwarfs the price gap between chemistries — which is exactly where non-triazine scavenging pays for itself.",
    closing:
      "For offshore platforms and refinery streams, a non-triazine H2S scavenger like EDDM avoids the scaling, pH shift, and catalyst poisoning that make amine-triazine risky in critical service — while still delivering permanent H2S removal. To qualify EDDM for your offshore or refinery application, contact the Vasudev Chemo Pharma technical team for documentation, trial support, and a free sample.",
    internalLinks: [
      { text: "EDDM multiphase & non-triazine H2S scavenger", href: "/eddm-multiphase-h2s-scavenger" },
      { text: "EDDM non-triazine H2S scavenger — product page", href: "/product/eddm-non-triazine-h2s-scavenger" },
      { text: "Refinery fuel gas H2S scavenger", href: "/refinery-fuel-gas-h2s-scavenger" },
      { text: "Non-triazine based H2S scavenger — benefits & selection", href: "/blog/non-triazine-based-h2s-scavenger-benefits-selection" },
      { text: "Triazine vs non-triazine H2S scavenger — comparison", href: "/triazine-vs-non-triazine-scavenger" },
    ],
    externalLinks: [NACE_LINK, OSHA_LINK],
    relatedProductSlug: "eddm-non-triazine-h2s-scavenger",
    faqs: [
      {
        question: "Why use a non-triazine scavenger offshore?",
        answer:
          "Offshore, EDDM's non-amine composition avoids pH shift and carbonate scaling that could foul topside equipment, it handles multiphase produced fluids, and its biocidal action controls bacteria that regenerate H2S — reducing costly interventions.",
      },
      {
        question: "Why choose non-triazine in refineries?",
        answer:
          "Because EDDM contains no amine to poison sensitive downstream catalysts, unlike amine-triazine that can carry over, making it suited to fuel-gas conditioning, sour-water handling, and other catalyst-adjacent refinery streams.",
      },
      {
        question: "Is non-triazine always better for these applications?",
        answer:
          "Not always. It is preferred where scaling or catalyst sensitivity dominates. Where neither applies and cost is the main driver, triazine may still be more economical — match the chemistry to the constraint.",
      },
      {
        question: "How is EDDM qualified for critical offshore/refinery service?",
        answer:
          "By fluid analysis, a bench test for capacity and dose, compatibility checks with co-injected chemicals, and a monitored field trial with inlet/outlet H2S measurement before full-scale deployment, all with COA, TDS, and SDS documentation.",
      },
    ],
  },
};


/* Derived list items for the /blog index grid (keeps the grid in sync). */
export const nonTriazineH2sBlogListItems = Object.entries(
  nonTriazineH2sArticlesData
).map(([slug, blog]) => ({
  slug,
  title: blog.title,
  category: blog.category,
  date: blog.date,
  image: blog.image,
  imageAlt: blog.imageAlt,
}));
