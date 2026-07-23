import { LandingPageData } from "@/components/seo/LandingPageLayout";

/**
 * Content-review baseline date for landing pages that do not set their own
 * datePublished/dateModified. Surfaces a visible "Last updated" stamp and
 * matching Article schema (SEO Rule 3 & Rule 4). Bump this when the landing
 * content is reviewed/updated, or set per-entry dates for finer control.
 */
export const CONTENT_REVIEWED_DATE = "2026-07-18";

export const CUSTOM_LANDING_PAGES_DATA: Record<string, LandingPageData> = {
  "triazine-based-h2s-scavenger": {
    slug: "triazine-based-h2s-scavenger",
    category: "solutions",
    canonicalOverride: "/solutions/h2s-scavenger",
    title: "Triazine Based H2S Scavenger Manufacturer | B2B Bulk Supply",
    description: "Buy high-performance triazine based H2S scavengers from Vasudev Chemo Pharma. ISO 9001:2015 supplier of MEA 78% and MMA 40% grades. Request a COA today.",
    h1: "High-Performance Triazine Based H2S Scavenger for Industrial Abatement",
    intro: "Triazine chemistry is the global standard for non-regenerative hydrogen sulfide removal in upstream and midstream oilfield operations. By reacting selectively with H2S, triazine compounds convert highly toxic, corrosive sulfur compounds into water-soluble, stable amine byproducts (predominantly dithiazine derivatives).",
    sections: [
      {
        heading: "Understanding Triazine-Based Sulfide Scavenging",
        id: "understanding-triazine",
        body: "Teritary amine-based triazine compounds react irreversibly with toxic acid gases in multi-phase hydrocarbon streams. This eliminates pipeline safety hazards and protects pipeline infrastructure against sulfide stress cracking (SSC) and hydrogen embrittlement."
      },
      {
        heading: "Key Applications in Oilfield Processing",
        id: "applications",
        body: "- Direct Pipeline Injection: Continuous dosing of triazine solutions directly into pipelines to protect infrastructure.\n- Bubble Towers / Contactors: Passing sour natural gas streams through liquid chemical baths for deep desulfurization.\n- Produced Water Mitigation: Removing dissolved sulfides from production fluids before disposal or reinjection."
      }
    ],
    specs: [
      { label: "MEA Triazine 78% Active", value: "Aqueous MEA triazine solution (CAS 4719-04-4)" },
      { label: "MMA Triazine 40% Active", value: "BTX-free non-scaling formulation" },
      { label: "Application Temperature", value: "10 °C to 80 °C" }
    ],
    benefits: [
      "Selectively treats H2S in gas, oil, and water phases",
      "Forms stable, water-soluble dithiazine byproducts",
      "High chemical efficiency with simple injection setups"
    ],
    faqs: [
      {
        question: "How does a triazine based H2S scavenger work?",
        answer: "Triazine based H2S scavengers react chemically with hydrogen sulfide to convert it into water-soluble dithiazine. The reaction is fast, highly selective, and irreversible under typical operating conditions."
      },
      {
        question: "What is the difference between MEA and MMA triazine?",
        answer: "MEA Triazine (monoethanolamine-based) is a highly active 78% concentration compound optimized for gas bubble towers and general sweetening. MMA Triazine (monomethylamine-based) is typically 40% active, BTX-free, and prevents scale/solids deposition in high-temperature or offshore applications."
      }
    ]
  },
  "h2s-scavenger": {
    slug: "h2s-scavenger",
    category: "solutions",
    title: "H2S Scavenger Chemicals | Hydrogen Sulfide Removal Solution",
    description: "Looking for a reliable H2S scavenger manufacturer? Vasudev Chemo Pharma supplies premium amine-based and BTX-free chemical solutions for sour gas.",
    h1: "Industrial H2S Scavenger Chemical Solutions",
    intro: "An H2S scavenger is a specialized chemical agent formulated to neutralize hydrogen sulfide gas in hydrocarbon streams, wastewater systems, and biogas facilities. Sulfide removal is essential to maintain workplace safety (preventing fatal gas exposure) and protect capital assets from hydrogen embrittlement.",
    sections: [
      {
        heading: "What is an H2S Scavenger?",
        id: "what-is-scavenger",
        body: "H2S scavengers react with acidic hydrogen sulfide molecules to convert them into stable sulfur-containing compounds. This reduces corrosive potential and controls harmful odors in downstream operations."
      },
      {
        heading: "Chemical Classification and Selection",
        id: "classification",
        body: "Industrial scavengers are broadly classified into amine-based triazines, which are highly efficient and cost-effective, and non-amine or BTX-free formulations that prevent nitrogen contamination of catalysts."
      }
    ],
    specs: [
      { label: "Aqueous MEA triazine", value: "78% concentration grade available" },
      { label: "Aqueous MMA triazine", value: "40% concentration BTX-free grade" },
      { label: "pH Range", value: "Alkaline (9.0 - 11.0)" }
    ],
    benefits: [
      "Protects capital equipment from micro-cracking",
      "Controls noxious sulfur odors in tank farms",
      "Complies with environmental and pipeline specifications"
    ],
    faqs: [
      {
        question: "Why is hydrogen sulfide removal necessary in the oilfield?",
        answer: "Hydrogen sulfide is extremely toxic, lethal at low concentrations, and highly corrosive to steel piping, causing sulfide stress cracking. Removal is mandatory for safety and infrastructure protection."
      },
      {
        question: "Do you offer non-triazine H2S scavengers?",
        answer: "Yes, alongside our core MEA and MMA triazine scavengers, we manufacture specialty non-triazine and non-amine alternatives for applications sensitive to nitrogen or solids deposition."
      }
    ]
  },
  "hydrogen-sulfide-scavenger": {
    slug: "hydrogen-sulfide-scavenger",
    category: "solutions",
    canonicalOverride: "/solutions/h2s-scavenger",
    title: "Hydrogen Sulfide Scavenger Manufacturer | Vasudev Chemo",
    description: "Protect your pipelines and personnel. We manufacture high-purity hydrogen sulfide scavenger chemistry for global export. Inquire for bulk pricing.",
    h1: "Specialty Hydrogen Sulfide Scavenger Chemistry",
    intro: "Sour gas and sour crude contain hydrogen sulfide (H2S), which poses immediate occupational risks and environmental hazards. Applying a chemical hydrogen sulfide scavenger reduces vapor-phase H2S to zero ppm, enabling safe transportation and refining.",
    sections: [
      {
        heading: "The Hazards of Sour Hydrocarbon Streams",
        id: "hazards",
        body: "Acidic H2S gas initiates micro-cracking and pits metal surfaces when dissolved in water. Dosing high-performance organic scavengers removes the gas from both the gas and liquid phases, neutralizing acid gases and eliminating toxic vapor emissions."
      },
      {
        heading: "Direct Contact Tower Applications",
        id: "contact-towers",
        body: "For high-volume sour gas sweetening, direct contact towers utilizing a diluted batch of MEA Triazine 78% provide the highest mass-transfer efficiency, scrubbing sulfur compounds out of the gas stream down to pipeline specifications (usually under 4 ppm)."
      }
    ],
    specs: [
      { label: "Primary Compound", value: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine" },
      { label: "Active Matter", value: "78% ± 1% w/w" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" }
    ],
    benefits: [
      "Irreversible reaction avoids hydrogen sulfide re-evolution",
      "High chemical purity avoids pre-shipment polymerization",
      "Synthesized under strict ISO quality control metrics"
    ],
    faqs: [
      {
        question: "How is the scavenger dosage calculated?",
        answer: "Dosage depends on the H2S concentration (ppm), gas flow rate, temperature, and target outlet specification. Typically, 1 to 4 ppm of active triazine chemical is required per ppm of H2S removed."
      },
      {
        question: "What is the shelf life of your liquid H2S scavengers?",
        answer: "Under proper storage conditions (cool, dry, ventilated area), our liquid triazine based scavengers maintain a stable shelf life of 12 to 24 months."
      }
    ]
  },
  "mea-triazine-h2s-scavenger": {
    slug: "mea-triazine-h2s-scavenger",
    category: "solutions",
    title: "MEA Triazine H2S Scavenger Manufacturer | 78% Active",
    description: "High-active MEA Triazine 78% H2S Scavenger from India's leading B2B chemical manufacturer. Fast reaction kinetics, export packaging. Request MSDS.",
    h1: "Industrial Grade MEA Triazine H2S Scavenger",
    intro: "Monoethanolamine (MEA) triazine is the most widely used organic compound for the chemical absorption and conversion of hydrogen sulfide. Formulated at 78% active matter, it delivers maximum cost efficiency per kilogram of active chemical, reducing freight costs and storage footprint.",
    sections: [
      {
        heading: "High-Activity Amine Scavenging Solution",
        id: "high-activity",
        body: "Our high-active MEA triazine is formulated to maximize the active tertiary amine groups available to react with H2S molecules. It provides rapid kinetics for direct pipeline injection and gas scrubbing towers, keeping chemical costs low."
      },
      {
        heading: "Reaction Mechanism with Hydrogen Sulfide",
        id: "mechanism",
        body: "The tertiary nitrogen atoms in the cyclic hexahydro-1,3,5-triazine ring react selectively with the acidic H2S molecule. This ring cleavage forms monoethanolamine and 5-(2-hydroxyethyl)-1,3,5-dithiazine. The reaction does not produce elemental sulfur solids, minimizing pipe clogging."
      }
    ],
    specs: [
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active Matter", value: "78% (w/w)" },
      { label: "Specific Gravity", value: "1.10 - 1.14 at 25 °C" }
    ],
    benefits: [
      "Maximum active concentration lowers freight costs per kg active",
      "Selective reaction does not consume carbon dioxide",
      "Aqueous formula is fully miscible in production water cut"
    ],
    faqs: [
      {
        question: "What is the molecular CAS number of MEA Triazine?",
        answer: "The CAS number for hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine) is 4719-04-4."
      },
      {
        question: "Does MEA Triazine cause downstream refining issues?",
        answer: "If over-dosed, unreacted triazine and spent amine byproducts can migrate into the crude oil, potentially poisoning desalter water and refinery catalysts. Precise dosing is highly recommended."
      }
    ]
  },
  "high-performance-triazine-scavenger": {
    slug: "high-performance-triazine-scavenger",
    category: "solutions",
    title: "High Performance Triazine Based Scavenger Manufacturer",
    description: "Master sour gas treatment. We manufacture high performance triazine based scavengers engineered for extreme temperatures and high-flow streams.",
    h1: "High Performance Triazine Based Scavengers for Severe Service",
    intro: "High-flow sour gas fields, deepwater subsea completions, and high-temperature separators require scavenging chemicals that perform under extreme mechanical and thermal stress. Our high-performance triazine lines are winterized and chemically stabilized.",
    sections: [
      {
        heading: "Overcoming Severe Service Challenges",
        id: "challenges",
        body: "High-pressure, high-temperature wells promote rapid solids dropout if spent scavenger chemistry is unstable. Our high-performance formulas are engineered with specific stabilizers to prevent dithiazine polymerization and keep pipeline operations running smoothly."
      },
      {
        heading: "Formulations Engineered for Efficiency",
        id: "formulations",
        body: "We produce winterized MEA Triazine with glycols that drop the pour point to -20 °C, ensuring stable pumpability in cold regions. We also formulate low-scaling MMA Triazines for offshore platforms sensitive to carbonate deposits."
      }
    ],
    specs: [
      { label: "Grades", value: "Standard, Winterized, and Low-Scaling (BTX-free)" },
      { label: "Pour Point", value: "Down to -20 °C (winterized)" },
      { label: "Solids Control", value: "Stabilized against dithiazine precipitation" }
    ],
    benefits: [
      "Stable under high shear and pipeline pressures",
      "Winterization prevents chemical freezing during transit",
      "Stringent quality checking ensures zero polymer impurities"
    ],
    faqs: [
      {
        question: "Are your scavengers winterized?",
        answer: "Yes, we manufacture winterized grades with specialized glycols to lower the pour point to -20°C or lower for cold-weather operations."
      },
      {
        question: "What is the contact time required for maximum H2S removal?",
        answer: "Typically, a gas-liquid contact time of 10 to 30 seconds is required in contact towers, whereas direct pipeline injection requires longer residence times depending on stream velocities."
      }
    ]
  },
  "liquid-h2s-scavenger-manufacturer": {
    slug: "liquid-h2s-scavenger-manufacturer",
    category: "solutions",
    title: "Liquid H2S Scavenger Manufacturer | B2B Wholesale India",
    description: "Leading liquid H2S scavenger manufacturer in India. Vasudev Chemo Pharma supplies premium organic triazine formulations. Global logistics support.",
    h1: "B2B Liquid H2S Scavenger Manufacturer & Exporter",
    intro: "Liquid chemical injection is the most flexible, cost-effective way to control toxic hydrogen sulfide gases. As a direct manufacturer, Vasudev Chemo Pharma handles large-scale raw material synthesis to deliver stable aqueous solutions globally.",
    sections: [
      {
        heading: "Industrial Aqueous Chemical Sourcing",
        id: "industrial-sourcing",
        body: "Sourcing directly from a primary manufacturer ensures stable pricing, continuous supply, and batch consistency. We process raw amines and aldehydes into high-concentration triazines at our Gujarat chemical plant."
      },
      {
        heading: "Custom Formulation and Blending",
        id: "custom-blending",
        body: "We blend custom active concentrations, adjust pH levels, and integrate scale or corrosion inhibitors based on customer specifications, reducing the number of injection pumps required on-site."
      }
    ],
    specs: [
      { label: "Active Matter Options", value: "78% (MEA base) / 40% (MMA base) / Custom" },
      { label: "Plant Certification", value: "ISO 9001:2015 certified production" },
      { label: "Package Types", value: "UN-approved drums, IBCs, and ISO tanks" }
    ],
    benefits: [
      "Direct manufacturer supply eliminates middleman markups",
      "Flexible packaging tailored for sea and road logistics",
      "Rigorous quality control with COA on every delivery batch"
    ],
    faqs: [
      {
        question: "Do you provide custom formulations for H2S removal?",
        answer: "Yes, we blend custom active concentrations, adjust pH levels, and integrate scale or corrosion inhibitors based on customer specifications."
      },
      {
        question: "Are your manufacturing sites ISO certified?",
        answer: "Our chemical manufacturing facilities are certified under ISO 9001:2015, ensuring consistent quality control standards."
      }
    ]
  },
  "sulfide-scavenger": {
    slug: "sulfide-scavenger",
    category: "solutions",
    title: "Sulfide Scavenger Chemicals | Sour Gas Abatement",
    description: "Safe, efficient sulfide scavenger chemistry from Vasudev Chemo Pharma. Control hydrogen sulfide emissions in liquids and vapors. Bulk supply.",
    h1: "Sulfide Scavenger Chemistry for Liquid & Vapor Treatment",
    intro: "Sulfide scavenging involves the removal of dissolved sulfide ions (HS- and S2-) and free hydrogen sulfide from water streams. Dissolved sulfides promote microbiologically influenced corrosion (MIC) by supporting sulfate-reducing bacteria (SRB).",
    sections: [
      {
        heading: "Controlling Dissolved Sulfides in Process Waters",
        id: "controlling-sulfides",
        body: "Sulfide ions in produced water and industrial wastewater generate highly corrosive acids. Injecting high-affinity triazines converts dissolved sulfides into non-volatile, stable dithiazine molecules, protecting steel infrastructure."
      },
      {
        heading: "Product Portfolio for Sulfide Abatement",
        id: "abatement-portfolio",
        body: "Our portfolio features highly active MEA Triazine 78% for gas phase scrubbing and monomethylamine (MMA) Triazine 40% for refinery and process waters sensitive to nitrogen precipitation."
      }
    ],
    specs: [
      { label: "Chemical Base", value: "Triazine-based aqueous solutions" },
      { label: "Treated Media", value: "Natural gas, crude oil, process/produced water" },
      { label: "Spent Reaction pH", value: "Alkaline (9.0 - 11.5)" }
    ],
    benefits: [
      "Prevents sulfide stress cracking in carbon steel pipelines",
      "Eliminates volatile sewer and industrial process odors",
      "Highly selective reaction avoids wasting active chemical"
    ],
    faqs: [
      {
        question: "What is the difference between vapor scavenging and liquid scavenging?",
        answer: "Vapor scavenging extracts gas-phase H2S from gas streams using spray contactors or bubble towers. Liquid scavenging treats dissolved sulfides directly in liquids like crude oil, fuel oil, or wastewater."
      },
      {
        question: "What is the typical pH range of spent triazines?",
        answer: "Spent triazines are alkaline, usually displaying a pH range between 9.0 and 11.5, which helps prevent sour gas reactivation but requires careful waste management."
      }
    ]
  },
  "hydrogen-sulfide-removal": {
    slug: "hydrogen-sulfide-removal",
    category: "solutions",
    title: "Hydrogen Sulfide Removal Solutions | Industrial Gas Sweetening",
    description: "Complete hydrogen sulfide removal solutions from India's trusted chemical manufacturer. Explore triazine and non-triazine options. Request pricing.",
    h1: "Industrial Hydrogen Sulfide Removal Solutions",
    intro: "Successfully removing hydrogen sulfide requires choosing the correct chemical package based on flow parameters. Vasudev Chemo Pharma provides bulk supply of organic liquid scavengers designed to optimize chemical usage in scrubber towers, pipeline injection systems, and storage tank headspaces.",
    sections: [
      {
        heading: "Engineered Systems for Sour Gas Treatment",
        id: "engineered-systems",
        body: "Liquid scavenging chemistry represents a simple, low-CAPEX solution for sour gas desulfurization. Dosing active triazines selectively treats hydrogen sulfide without removing carbon dioxide, minimizing chemical consumption."
      },
      {
        heading: "Chemical Selection Matrix",
        id: "selection-matrix",
        body: "For standard gas contactors, MEA Triazine 78% delivers maximum mass-transfer kinetics. In systems prone to mineral scale, monomethylamine (MMA) Triazine 40% prevents dithiazine scaling."
      }
    ],
    specs: [
      { label: "Primary Active", value: "MEA Triazine 78% / MMA Triazine 40%" },
      { label: "Efficiency Target", value: "Sulfide concentrations reduced to < 4 ppm" },
      { label: "Equipment CAPEX", value: "Low (requires only dosing pumps and contactor)" }
    ],
    benefits: [
      "Irreversible reaction prevents downstream re-release of gas",
      "Aqueous solutions are fully compatible with produced brine cuts",
      "Manufactured in ISO-certified facility in Gujarat, India"
    ],
    faqs: [
      {
        question: "Does the removal of H2S using triazine generate solid waste?",
        answer: "Under typical conditions, triazines react to form water-soluble dithiazine. However, if overspent or used in dry gas streams without water injection, crystalline scaling or solids dropout can occur."
      },
      {
        question: "Is your hydrogen sulfide removal chemistry REACH registered?",
        answer: "Yes, our key chemical intermediates and export products conform to global regulations, including EU REACH compliance criteria."
      }
    ]
  },
  "triazine-scavenger-chemical": {
    slug: "triazine-scavenger-chemical",
    category: "solutions",
    title: "Triazine Scavenger Chemical | MEA & MMA Liquid Supplier",
    description: "Secure your logistics. We supply commercial triazine scavenger chemicals in drums, IBCs, and ISO tanks directly from India. Contact us for quotes.",
    h1: "Premium Triazine Scavenger Chemical Formulations",
    intro: "Triazine scavenger chemicals are cyclic tertiary amines that display rapid reaction kinetics when in contact with hydrogen sulfide. This mechanism does not release corrosive free amines back into the process stream.",
    sections: [
      {
        heading: "Chemistry of Hexahydro-1,3,5-Triazines",
        id: "triazine-chemistry",
        body: "The organic triazine ring acts as a highly selective scrubbing agent, pulling H2S molecules into the aqueous phase and forming stable organosulfur byproducts, thus keeping pipeline corrosion rates low."
      },
      {
        heading: "Direct Sourcing for Distributors and Services",
        id: "distributor-sourcing",
        body: "We manufacture high-active MEA Triazine 78% and MMA Triazine 40%. Direct factory sourcing ensures stable batch properties and robust supply chains for oilfield service companies."
      }
    ],
    specs: [
      { label: "Chemical Name", value: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine" },
      { label: "Grades Supplied", value: "MEA Triazine 78% / MMA Triazine 40%" },
      { label: "Incoterms", value: "FOB, CIF, CFR global shipping support" }
    ],
    benefits: [
      "Prevents hydrogen sulfide gas accumulation in tank headspaces",
      "Minimizes free amine content to avoid downstream pipeline scaling",
      "Stable aqueous solution prevents settlement during sea transit"
    ],
    faqs: [
      {
        question: "What chemical impurities are checked in triazine analysis?",
        answer: "We monitor free monoethanolamine (MEA), density, pH, refractive index, and polymer impurities to ensure no polymerization occurs during transportation."
      },
      {
        question: "Can triazine scavengers be used in refinery applications?",
        answer: "Yes, but they are carefully monitored to ensure amine nitrogen does not contaminate refinery overheads or poison hydrotreating catalysts."
      }
    ]
  },
  "h2s-treatment-chemical": {
    slug: "h2s-treatment-chemical",
    category: "solutions",
    title: "H2S Treatment Chemical Manufacturer | Oilfield Specialty Chemistry",
    description: "Bulk supply of H2S treatment chemicals. High active triazine formulations for natural gas, wastewater, and refineries. Request a quote.",
    h1: "Industrial H2S Treatment Chemicals",
    intro: "Hydrogen sulfide (H2S) treatment chemicals are required in facilities to comply with occupational safety standards (e.g., OSHA limits) and prevent offensive odor complaints. Treatment involves dosing highly selective aqueous scavengers.",
    sections: [
      {
        heading: "Safe Handling and Compliance Chemistry",
        id: "safety-compliance",
        body: "Dosing chemical scavengers neutralizes gaseous H2S, converting it into water-soluble, non-volatile dithiazine. This protects workers from lethal gas concentrations and ensures compliance with environmental discharge regulations."
      },
      {
        heading: "Selecting Your Treatment Chemical Package",
        id: "treatment-package",
        body: "MEA Triazine 78% represents the standard chemical choice for natural gas contactors. MMA Triazine 40% is selected for offshore wells and refineries requiring low scaling potential."
      }
    ],
    specs: [
      { label: "Primary Application", value: "H2S gas scrubbing and water sulfide control" },
      { label: "Chemical Active", value: "MEA Triazine (78%) / MMA Triazine (40%)" },
      { label: "Refinery Standards", value: "Low aromatic (BTX-free) grades available" }
    ],
    benefits: [
      "Eliminates volatile sulfide odors in wastewater tanks",
      "Prevents sulfide stress cracking in carbon steel pipelines",
      "Buffered pH range provides corrosion protection"
    ],
    faqs: [
      {
        question: "Are H2S treatment chemicals corrosive?",
        answer: "Aqueous triazine solutions are alkaline (pH 9-11) and are not corrosive to carbon steel. However, proper PPE is required during handling due to their organic amine content."
      },
      {
        question: "How is spent H2S treatment chemical disposed of?",
        answer: "Spent triazines containing dithiazine are usually handled through deep-well injection, biological wastewater treatment, or hazardous chemical disposal facilities depending on local regulations."
      }
    ]
  },
  "triazine-h2s-scavenger-manufacturer": {
    slug: "triazine-h2s-scavenger-manufacturer",
    category: "about",
    title: "Triazine Based Hydrogen Sulfide Scavenger Manufacturer India",
    description: "ISO 9001:2015 certified triazine based hydrogen sulfide scavenger manufacturer in Gujarat, India. Bulk MEA 78% & MMA 40% export grades. Inquire now.",
    h1: "Global Triazine Based Hydrogen Sulfide Scavenger Manufacturer",
    intro: "As a dedicated triazine based hydrogen sulfide scavenger manufacturer, Vasudev Chemo Pharma operates state-of-the-art reaction vessels in Gujarat, India. Our high-shear synthesis processes guarantee low levels of free ethanolamine (MEA) and prevent pre-shipment polymerization.",
    sections: [
      {
        heading: "High-Volume Industrial Organic Synthesis",
        id: "organic-synthesis",
        body: "Our manufacturing facility operates under strict quality guidelines to synthesize hexahydrotriazines. High shear condensation reaction control prevents polymer residue build-up, resulting in stable, transparent liquid chemical product."
      },
      {
        heading: "Supply Chain and Global Logistical Footprint",
        id: "global-logistics",
        body: "Operating from Gujarat, India, we ship specialty chemicals through Mundra and Nhava Sheva ports. We supply MEA Triazine 78% and MMA Triazine 40% in UN-approved HDPE drums, IBCs, and ISO tanks."
      }
    ],
    specs: [
      { label: "Direct Manufacturer", value: "Vasudev Chemo Pharma (Gujarat, India)" },
      { label: "Quality Control", value: "ISO 9001:2015 certified chemical plant" },
      { label: "Grades Synthesized", value: "MEA Triazine 78% / MMA Triazine 40%" }
    ],
    benefits: [
      "Direct from manufacturer pricing ensures high cost efficiency",
      "Low free amine content minimizes downhole scaling risk",
      "Global compliance support including REACH and GHS SDS"
    ],
    faqs: [
      {
        question: "Where is your triazine manufacturing facility located?",
        answer: "Our primary chemical manufacturing plant is located in Gujarat, India, which is the chemical hub of the country, providing direct logistics access to major ports like Mundra and Nhava Sheva."
      },
      {
        question: "What certifications does your chemical manufacturing facility hold?",
        answer: "Vasudev Chemo Pharma is ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified, adhering strictly to global chemical quality and safety standards."
      }
    ]
  },
  "mea-triazine-78-supplier": {
    slug: "mea-triazine-78-supplier",
    category: "supply",
    title: "MEA Triazine 78% Supplier | B2B Bulk Chemical Export",
    description: "Trusted MEA Triazine 78% supplier. Vasudev Chemo Pharma provides drum, IBC, and bulk ISO tank delivery worldwide directly from India. Get a quote.",
    h1: "B2B MEA Triazine 78% Supplier & Logistics Partner",
    intro: "Finding a reliable MEA Triazine 78% supplier is key for oilfield operations looking to secure supply chains. At 78% active concentration, our product offers high desulfurization efficiency.",
    sections: [
      {
        heading: "Bulk Supply for Global Gas Sweetening Operations",
        id: "bulk-supply",
        body: "We maintain continuous production campaigns of MEA Triazine 78% to supply oilfield services and chemical distributors. Our product is highly active and miscible, lowering the volume required for desulfurization."
      },
      {
        heading: "Seamless Export & Incoterms Support",
        id: "export-incoterms",
        body: "We support shipping terms including FOB, CIF, and CFR. Our logistics team handles custom clearance, cargo inspection, and export compliance to guarantee safe arrival at your port."
      }
    ],
    specs: [
      { label: "Active matter", value: "78% ± 1% w/w" },
      { label: "Supplier Origin", value: "Gujarat, India (FOB Mundra)" },
      { label: "Packaging Options", value: "HDPE Drums, IBC tanks, ISO tankers" }
    ],
    benefits: [
      "High concentration saves shipping costs per active kg",
      "Ready to ship inventory ensures fast transit times",
      "Full documentation (COA, MSDS, TDS) supplied with every batch"
    ],
    faqs: [
      {
        question: "What packaging sizes do you supply as an MEA Triazine 78% supplier?",
        answer: "We supply MEA Triazine 78% in 200L HDPE drums (80 drums per 20ft FCL), 1000L IBC tanks, and bulk ISO tanks."
      },
      {
        question: "Can we request a pre-shipment sample for lab testing?",
        answer: "Yes, we support commercial buyers with free pre-shipment samples along with the batch Certificate of Analysis (COA) and MSDS."
      }
    ]
  },
  "h2s-control-chemical-supplier": {
    slug: "h2s-control-chemical-supplier",
    category: "supply",
    title: "H2S Control Chemical Supplier | Industrial H2S Abatement",
    description: "Vasudev Chemo Pharma is a leading H2S control chemical supplier. We specialize in MEA 78% and MMA 40% triazine. Request bulk MSDS.",
    h1: "Industrial H2S Control Chemical Supplier",
    intro: "Sourcing from an experienced H2S control chemical supplier ensures that your industrial wastewater facility, oilfield pipeline, or biogas reactor operates safely and complies with local environmental regulations.",
    sections: [
      {
        heading: "Comprehensive Sulfide Abatement Sourcing",
        id: "abatement-sourcing",
        body: "We offer tailored chemical solutions to control dissolved sulfides in waters and toxic H2S in vapors. Our technical team works with engineers to optimize dosage curves and select the best product."
      },
      {
        heading: "Product Availability and Core Grades",
        id: "core-grades",
        body: "We supply standard MEA Triazine 78% for gas process operations, and monomethylamine (MMA) Triazine 40% for applications where scaling and BTX-free criteria are critical."
      }
    ],
    specs: [
      { label: "Supplier Profile", value: "Primary chemical manufacturer & global exporter" },
      { label: "Target Sectors", value: "Oil, gas, biogas, wastewater, paper pulp" },
      { label: "Aqueous Solutions", value: "MEA Triazine (78%) / MMA Triazine (40%)" }
    ],
    benefits: [
      "Helps meet strict occupational health and safety gas limits",
      "Controls sulfide corrosivity in industrial processing waters",
      "Continuous chemical availability avoids pipeline operational halts"
    ],
    faqs: [
      {
        question: "Do you offer emergency chemical supplies?",
        answer: "Yes, we maintain safety stocks of standard MEA 78% and MMA 40% triazines at our warehouses to support urgent client requirements."
      },
      {
        question: "Can your chemicals be used in municipal sewage treatment?",
        answer: "Yes, our scavengers are highly effective at controlling odor and corrosion caused by H2S in municipal wastewater systems."
      }
    ]
  },
  "triazine-h2s-scavenger-exporter": {
    slug: "triazine-h2s-scavenger-exporter",
    category: "export",
    title: "Triazine H2S Scavenger Exporter | India to Global Ports",
    description: "Direct triazine H2S scavenger exporter shipping to Middle East, Americas, and SE Asia. ISO certified chemistry from Gujarat, India. Request quotes.",
    h1: "Direct Triazine H2S Scavenger Exporter",
    intro: "As an established triazine H2S scavenger exporter, Vasudev Chemo Pharma ships specialty chemicals from India's west coast ports (Mundra and Nhava Sheva) to key energy hubs worldwide.",
    sections: [
      {
        heading: "Serving Global Oilfield Markets",
        id: "global-markets",
        body: "We export high-active triazine scavengers to major producing regions including the US Permian Basin, Middle Eastern gas fields, and South American offshore assets. Our logistics network ensures timely sea transit."
      },
      {
        heading: "Regulatory Compliance and Safety Documentation",
        id: "compliance",
        body: "All export shipments are fully documented, including EU REACH compliance certificates, GHS-aligned Material Safety Data Sheets (MSDS), Technical Data Sheets (TDS), and Certificate of Analysis (COA)."
      }
    ],
    specs: [
      { label: "Export Ports", value: "Mundra Port / Nhava Sheva (JNPT) Port, India" },
      { label: "Core Exports", value: "MEA Triazine 78% / MMA Triazine 40% / SXS / SCS" },
      { label: "Customs Support", value: "Complete hazardous chemical export documentation" }
    ],
    benefits: [
      "FOB Mundra and CIF global port shipping packages",
      "UN-certified heavy-duty packaging prevents maritime damage",
      "Vast export experience ensuring zero customs clearance delays"
    ],
    faqs: [
      {
        question: "What are your primary export destinations?",
        answer: "We regularly export H2S scavengers to major oil and gas hubs in the United States, UAE, Saudi Arabia, Brazil, Egypt, Russia, and Southeast Asia."
      },
      {
        question: "What is the standard lead time for export shipments?",
        answer: "For standard drum and IBC orders, the lead time is 7 to 14 days from order confirmation to port delivery in India."
      }
    ]
  },
  "specialty-chemical-exporter-india": {
    slug: "specialty-chemical-exporter-india",
    category: "export",
    title: "Specialty Chemical Exporter India | Vasudev Chemo Pharma",
    description: "Leading B2B specialty chemical exporter in India. ISO 9001 certified manufacturing, exporting high-purity oilfield chemistries globally. Request quote.",
    h1: "B2B Specialty Chemical Exporter in India",
    intro: "India has become a leading hub for specialty chemical synthesis. As a specialty chemical exporter in India, Vasudev Chemo Pharma combines modern synthesis facilities with strict quality control.",
    sections: [
      {
        heading: "High-Quality Oilfield & Industrial Chemistry Sourcing",
        id: "quality-sourcing",
        body: "Our Ankleshwar-affiliated synthesis plant produces high-performance chemistries including triazine based H2S scavengers, biocides, and hydrotrope coupling agents (SXS, SCS), serving global B2B buyers."
      },
      {
        heading: "Packaging and Compliance Standards",
        id: "packaging-standards",
        body: "We package specialty products in UN-approved HDPE drums, IBC tanks, and bulk ISO tanks, ensuring full compliance with international shipping codes (IMDG, IATA)."
      }
    ],
    specs: [
      { label: "Exporter Profile", value: "Vasudev Chemo Pharma (ISO 9001:2015 certified)" },
      { label: "Chemical Types", value: "Oilfield production chemicals, hydrotropes, intermediates" },
      { label: "Global Reach", value: "Exporting to 30+ countries globally" }
    ],
    benefits: [
      "Rigorous quality control with batch lab tests",
      "REACH and GHS compliant documents for safe import clearance",
      "Direct manufacturer exports avoid extra broker costs"
    ],
    faqs: [
      {
        question: "What types of specialty chemicals do you export?",
        answer: "We export a wide range of specialty chemicals, including triazine-based H2S scavengers, biocides, hydrotropes (SXS, SCS), and pharmaceutical intermediates."
      },
      {
        question: "Are your export products REACH compliant?",
        answer: "Yes, our products are manufactured and documented in accordance with REACH and GHS guidelines for seamless importation."
      }
    ]
  },
  "h2s-scavenger-manufacturer-ahmedabad": {
    slug: "h2s-scavenger-manufacturer-ahmedabad",
    category: "location",
    title: "H2S Scavenger Manufacturer Ahmedabad | Vasudev Chemo",
    description: "Direct B2B H2S scavenger manufacturer in Ahmedabad, Gujarat. ISO 9001:2015 high-active triazine solutions for export. Inquire for pricing.",
    h1: "H2S Scavenger Manufacturer in Ahmedabad",
    intro: "Ahmedabad is a premier industrial gateway for chemical production in India. Operating from this strategic base, Vasudev Chemo Pharma manufactures high-purity liquid hydrogen sulfide scavengers.",
    sections: [
      {
        heading: "Industrial Manufacturing and Infrastructure in Gujarat",
        id: "ahmedabad-infrastructure",
        body: "Ahmedabad's well-connected road networks and chemical clusters facilitate easy access to raw materials and quick logistical movement of finished chemical assets to domestic oilfields and major export ports."
      },
      {
        heading: "Chemical Portfolio and Custom Blends",
        id: "ahmedabad-portfolio",
        body: "We synthesize MEA Triazine 78% for gas process desulfurization and MMA Triazine 40% for BTX-free operations under strict quality controls."
      }
    ],
    specs: [
      { label: "Location Base", value: "Ahmedabad industrial area, Gujarat, India" },
      { label: "Quality Metric", value: "ISO 9001:2015 certified production" },
      { label: "Standard Grades", value: "MEA Triazine 78% / MMA Triazine 40% / Custom" }
    ],
    benefits: [
      "Immediate logistics access to Mundra and Nhava Sheva ports",
      "Stable raw material pipelines lower production costs",
      "Export packaging including 220L drums and 1000L IBCs"
    ],
    faqs: [
      {
        question: "Where is your Ahmedabad factory located?",
        answer: "Our corporate headquarters and manufacturing affiliates are located within the industrial chemical hubs surrounding Ahmedabad, Gujarat, India."
      },
      {
        question: "What is the MOQ for bulk orders from your Ahmedabad site?",
        answer: "Our minimum order quantity for commercial orders is typically 1 Metric Ton (MT) for drums or IBCs, and FCL loads for export."
      }
    ]
  },
  "h2s-scavenger-manufacturer-gujarat": {
    slug: "h2s-scavenger-manufacturer-gujarat",
    category: "location",
    title: "H2S Scavenger Manufacturer Gujarat | ISO 9001 Supplier",
    description: "Sourcing directly? Leading H2S scavenger manufacturer in Gujarat, India. Quality assured MEA Triazine 78% & MMA 40%. Request bulk samples.",
    h1: "Direct H2S Scavenger Manufacturer in Gujarat",
    intro: "Gujarat produces the majority of India's specialty chemical output. Sourcing from an established H2S scavenger manufacturer in Gujarat like Vasudev Chemo Pharma guarantees access to integrated chemical clusters, bringing down synthesis costs.",
    sections: [
      {
        heading: "Gujarat: The Chemical Hub of India",
        id: "gujarat-hub",
        body: "With major chemical zones in Ankleshwar, Dahej, and Vadodara, Gujarat is the ideal location for high-volume chemical synthesis. Sourcing here ensures reliable product properties and lower transportation costs."
      },
      {
        heading: "Product Offerings & Specifications",
        id: "gujarat-offerings",
        body: "We manufacture MEA Triazine 78% for standard gas-sweetening and MMA Triazine 40% for scale-control fluid. Both grades are shipped globally with complete COA and MSDS documentation."
      }
    ],
    specs: [
      { label: "State Base", value: "Gujarat, India (chemical production hub)" },
      { label: "Primary Shipping Ports", value: "Mundra Port, Hazira Port, Kandla Port" },
      { label: "Products", value: "MEA Triazine 78% / MMA Triazine 40% / Intermediates" }
    ],
    benefits: [
      "Access to Gujarat's state-of-the-art chemical infrastructure",
      "Fast dispatch of domestic and export bulk containers",
      "Highly competitive pricing due to localized raw materials"
    ],
    faqs: [
      {
        question: "Why source from an H2S scavenger manufacturer in Gujarat?",
        answer: "Gujarat offers robust industrial infrastructure, stable raw material pipelines, and immediate proximity to major ports (Mundra, Hazira, Kandla), ensuring lower export shipping costs."
      },
      {
        question: "Are your materials tested before dispatch?",
        answer: "Yes, every batch undergoes strict quality control checks in our in-house testing laboratory. We provide a Certificate of Analysis (COA) with every dispatch."
      }
    ]
  },
  "mea-triazine-manufacturer-gujarat": {
    slug: "mea-triazine-manufacturer-gujarat",
    category: "location",
    title: "MEA Triazine Manufacturer Gujarat | B2B Bulk Active 78%",
    description: "Looking for a direct MEA triazine manufacturer in Gujarat? Vasudev Chemo Pharma offers premium hexahydrotriazine. Get a factory quote.",
    h1: "MEA Triazine Manufacturer in Gujarat",
    intro: "As a direct MEA triazine manufacturer in Gujarat, Vasudev Chemo Pharma processes raw monoethanolamine and formaldehyde intermediates into high-active hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine.",
    sections: [
      {
        heading: "Synthesizing High-Active Hexahydro-1,3,5-Triazine",
        id: "triazine-synthesis",
        body: "Our chemical synthesis plant features modern condensation reactors. We carefully control reaction temperature and formaldehyde ratios to prevent polymer sediment formation, yielding high-purity triazine."
      },
      {
        heading: "Complementary Products & Custom Blending",
        id: "complementary",
        body: "Beside MEA Triazine 78%, we manufacture MMA Triazine 40% (BTX-free) for scale control in high-temperature subsea wells and sensitive refinery streams."
      }
    ],
    specs: [
      { label: "Primary Compound", value: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine" },
      { label: "Active Matter", value: "78% ± 1% w/w" },
      { label: "Manufacturer Site", value: "Gujarat, India (FOB Mundra)" }
    ],
    benefits: [
      "High desulfurization kinetics optimized for gas bubble towers",
      "Buffer capacity provides corrosion control in wet sour gas",
      "Exported in heavy-duty HDPE drums and secure IBC containers"
    ],
    faqs: [
      {
        question: "What chemical grade does your Gujarat facility produce?",
        answer: "We produce industrial-grade 78% active MEA Triazine (CAS 4719-04-4) optimized for oilfield and refinery applications."
      },
      {
        question: "What is the lead time for domestic and export shipping from Gujarat?",
        answer: "Domestic orders are shipped in 3 to 5 days, while export orders are loaded and shipped from Gujarat ports in 7 to 14 days."
      }
    ]
  },
  "triazine-based-h2s-scavenger-ahmedabad-india": {
    slug: "triazine-based-h2s-scavenger-ahmedabad-india",
    category: "location",
    title: "Triazine Based H2S Scavenger Ahmedabad India",
    description: "Direct supply of triazine based H2S scavenger from Ahmedabad, India. ISO 9001:2015 chemical manufacturer exporting globally. Inquire now.",
    h1: "Triazine Based H2S Scavenger Supplier in Ahmedabad, India",
    intro: "Sourcing triazine based H2S scavenger from Ahmedabad, India gives procurement officers an advantageous combination of competitive chemical pricing and access to western India's robust shipping routes.",
    sections: [
      {
        heading: "Serving Global Energy Hubs from Western India",
        id: "serving-energy",
        body: "Ahmedabad's proximity to Mundra port reduces inland transit time for export containers. Vasudev Chemo Pharma is a direct manufacturer, providing stable chemical formulations that protect pipelines against sulfide cracking."
      },
      {
        heading: "Core Chemical Grades & Logistics",
        id: "logistics-grades",
        body: "We synthesize MEA Triazine 78% H2S Scavenger for gas process sweetening, and monomethylamine (MMA) Triazine 40% for applications where scale prevention is critical."
      }
    ],
    specs: [
      { label: "Supplier Location", value: "Ahmedabad, Gujarat, India" },
      { label: "Incoterms Supported", value: "FOB Mundra, CIF global destinations" },
      { label: "Shipping Packing", value: "HDPE Drums, IBCs, and ISO tanks" }
    ],
    benefits: [
      "Immediate logistics access to western India's major ports",
      "Alkaline buffered formula resists carbon steel corrosion",
      "Direct from manufacturer exports ensures batch uniformity"
    ],
    faqs: [
      {
        question: "Which Indian ports do you use for exporting chemical products?",
        answer: "We export most of our shipments through Mundra Port, Kandla Port, and Nhava Sheva (JNPT) Port, which are well-connected to our Ahmedabad logistics network."
      },
      {
        question: "Do you provide custom concentrations of triazine-based H2S scavengers?",
        answer: "Yes, we can adjust the active matter (e.g., 50%, 60%, or winterized blends) according to the specifications of the customer."
      }
    ]
  },
  "oilfield-chemical-manufacturer-gujarat": {
    slug: "oilfield-chemical-manufacturer-gujarat",
    category: "location",
    title: "Oilfield Chemical Manufacturer Gujarat | B2B Specialty Chemistry",
    description: "Premium oilfield chemical manufacturer in Gujarat, India. Supplying high-purity triazines, biocides, and hydrotropes to global oilfield service companies.",
    h1: "Leading B2B Oilfield Chemical Manufacturer in Gujarat",
    intro: "Vasudev Chemo Pharma is a leading oilfield chemical manufacturer in Gujarat, India. Our synthesis plant provides essential chemicals for drilling, completion, stimulation, and production phases.",
    sections: [
      {
        heading: "Industrial Chemical Solutions for Downhole & Production Chemistry",
        id: "oilfield-solutions",
        body: "Our state-of-the-art reaction vessels produce chemicals that meet severe service conditions downhole. We manufacture organic H2S scavengers, scale inhibitors, and specialty hydrotropes."
      },
      {
        heading: "Primary Oilfield Product Lines",
        id: "oilfield-products",
        body: "We specialize in MEA Triazine 78% and MMA Triazine 40% H2S scavengers, alongside hydrotropes like Sodium Xylene Sulfonate (SXS) and Sodium Cumene Sulfonate (SCS)."
      }
    ],
    specs: [
      { label: "Manufacturing Site", value: "Gujarat, India (chemical industrial area)" },
      { label: "Standard Dosing Form", value: "Liquid and powder organic chemicals" },
      { label: "Compliance Metrics", value: "Formulated to meet NACE guidelines" }
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturing plant",
      "Raw material integration yields highly competitive pricing",
      "Supported by complete TDS, MSDS, and Certificates of Analysis"
    ],
    faqs: [
      {
        question: "What oilfield production chemicals do you manufacture?",
        answer: "We manufacture H2S scavengers, scale inhibitors, corrosion inhibitor intermediates, and hydrotropes for drilling and workover fluid formulations."
      },
      {
        question: "Do your chemical products meet international oilfield standards?",
        answer: "Yes, our production chemistries are synthesized and tested to align with API (American Petroleum Institute) and NACE (National Association of Corrosion Engineers) guidelines."
      }
    ]
  },
  "industrial-biocide-manufacturer-india": {
    slug: "industrial-biocide-manufacturer-india",
    category: "location",
    title: "Industrial Biocide Manufacturer India | Vasudev Chemo Pharma",
    description: "Leading industrial biocide manufacturer in India. Supplying oil and gas, metalworking fluids, and industrial water treatment markets globally. Request quote.",
    h1: "B2B Industrial Biocide Manufacturer in India",
    intro: "Microbiologically influenced corrosion (MIC) represents a significant threat to pipeline integrity. As a dedicated industrial biocide manufacturer in India, Vasudev Chemo Pharma synthesizes highly effective organic biocides and preservation chemicals.",
    sections: [
      {
        heading: "Preventing Microbiological Corrosion in Oil & Gas Infrastructure",
        id: "microbial-corrosion",
        body: "Sulfate-reducing bacteria (SRB) thrive in production water cuts, creating highly corrosive sulfides. Dosing our high-potency biocides controls microbial growth, preventing MIC in pipeline networks."
      },
      {
        heading: "Synergy Between Biocides & Scavengers",
        id: "biocide-scavenger",
        body: "While biocides prevent microbial generation of H2S, our chemical scavengers (MEA Triazine 78% and MMA Triazine 40%) remove any pre-existing gas, providing double-layer asset protection."
      }
    ],
    specs: [
      { label: "Biocide Classes", value: "BKC (Benzalkonium Chloride) / Organic Aldehydes" },
      { label: "Target Sectors", value: "Cooling towers, produced water, metalworking sumps" },
      { label: "Active Concentrations", value: "BKC 50% / BKC 80% / Custom blends" }
    ],
    benefits: [
      "Effective control of sulfate-reducing and slime-forming bacteria",
      "Compatible with major oilfield water treatment programmes",
      "Reduces biofilm fouling in industrial cooling water loops"
    ],
    faqs: [
      {
        question: "What types of industrial biocides do you manufacture?",
        answer: "We manufacture and supply organic biocides, including benzalkonium chloride (BKC) and glutaraldehyde formulations for industrial water treatment and oilfield use."
      },
      {
        question: "Can biocides and H2S scavengers be dosed together?",
        answer: "Yes, but compatibility tests must be performed beforehand. Our technical team supports custom blending to ensure no phase separation or precipitation occurs."
      }
    ]
  },
  "chemical-manufacturer-oil-gas-india": {
    slug: "chemical-manufacturer-oil-gas-india",
    category: "location",
    title: "Chemical Manufacturer for Oil & Gas Industry India",
    description: "Leading chemical manufacturer for oil & gas industry in India. High-purity triazine H2S scavengers, biocides, and hydrotropes. Get a custom quote.",
    h1: "Specialty Chemical Manufacturer for Oil & Gas Industry in India",
    intro: "The energy sector requires high-volume, reliable chemical synthesis. As a primary chemical manufacturer for oil & gas industry in India, Vasudev Chemo Pharma provides custom specialty formulations designed to optimize drilling muds, gas sweetening towers, and pipeline transport.",
    sections: [
      {
        heading: "Supplying Upstream, Midstream, and Downstream Chemistry",
        id: "energy-chemistry",
        body: "From wellhead drilling fluids to refinery processing additives, our chemicals are designed to maximize safety and reduce corrosion. We operate advanced reactors in Gujarat, India, delivering stable chemical product to global ports."
      },
      {
        heading: "Core Production Chemistry Portfolio",
        id: "oil-gas-portfolio",
        body: "We synthesize MEA Triazine 78% and MMA Triazine 40% H2S scavengers, alongside hydrotrope solubilizers (SXS, SCS) and organic biocides (BKC)."
      }
    ],
    specs: [
      { label: "Synthesizer Site", value: "Gujarat, India (ISO 9001:2015 certified)" },
      { label: "Product Classes", value: "Scavengers, biocides, hydrotropes, intermediates" },
      { label: "Support Offered", value: "White-labeling, custom blending, NDAs" }
    ],
    benefits: [
      "Rigorous batch checking yields high chemical stability",
      "FOB and CIF shipping options with full compliance clearance",
      "Helps operators protect pipelines from sulfide failures"
    ],
    faqs: [
      {
        question: "What makes your oil and gas chemicals B2B grade?",
        answer: "We formulate and package our chemicals under ISO quality control metrics, ensuring high active concentrations and stability for long-distance maritime transport."
      },
      {
        question: "Do you support contract manufacturing for global oilfield service companies?",
        answer: "Yes, we offer white-label manufacturing, custom blending, and private-label chemical synthesis services under strict NDA agreements."
      }
    ]
  },

  /* =====================================================================
     Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine landing cluster.
     Six DISTINCT pages (each a different search intent), all self-canonical
     and all linking/CTA to /product/mea-triazine-78-h2s-scavenger via
     LandingPageLayout. Not doorway pages: each answers a different question.
     ===================================================================== */

  "hexahydro-1-3-5-tris-2-hydroxyethyl-s-triazine": {
    slug: "hexahydro-1-3-5-tris-2-hydroxyethyl-s-triazine",
    category: "solutions",
    title: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4)",
    description:
      "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) is the IUPAC name for MEA Triazine 78% H2S scavenger. Learn its structure, properties, formation and synonyms.",
    h1: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine — CAS 4719-04-4",
    intro:
      "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) is the IUPAC chemical name for the compound sold commercially as MEA Triazine 78%, the most widely used liquid hydrogen sulphide (H2S) scavenger in the oil and gas industry. This page explains what the molecule is, how it is formed, its physical properties, and the many synonyms under which it is bought and sold.",
    sections: [
      {
        heading: "What is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine?",
        id: "definition",
        body: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine is a water-soluble organic compound with CAS number 4719-04-4. It belongs to the hexahydrotriazine family and is the active ingredient in MEA Triazine 78%. In industrial use it functions as a non-regenerative H2S scavenger: it reacts irreversibly with hydrogen sulphide to form stable, water-soluble dithiazine by-products, removing toxic and corrosive H2S from gas and liquid hydrocarbon streams.",
      },
      {
        heading: "How the molecule is formed",
        id: "chemistry",
        body: "The compound is produced by the condensation of monoethanolamine (MEA) with formaldehyde. Three molecules of monoethanolamine react with three of formaldehyde to build a six-membered hexahydrotriazine ring bearing three 2-hydroxyethyl groups. The finished product is a clear to pale-yellow liquid, typically supplied at 78% active concentration in water, with a mild amine odour and an alkaline pH of roughly 9 to 11.",
      },
      {
        heading: "Synonyms and trade references",
        id: "synonyms",
        body: "The same molecule is referenced under many names across datasheets, customs records and supplier catalogues: MEA Triazine, monoethanolamine triazine, 1,3,5-triazine-1,3,5(2H,4H,6H)-triethanol, 1,3,5-tris(2-hydroxyethyl)hexahydro-1,3,5-triazine, triazinetriethanol and HHT. All share CAS 4719-04-4 and describe the same triazine-based H2S scavenger chemistry supplied by Vasudev Chemo Pharma as MEA Triazine 78%.",
      },
    ],
    specs: [
      { label: "IUPAC Name", value: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Commercial Name", value: "MEA Triazine 78%" },
      { label: "Appearance", value: "Clear to pale-yellow liquid" },
      { label: "Active Matter", value: "78% ± 1% (aqueous)" },
    ],
    benefits: [
      "Reacts irreversibly with H2S — no re-evolution of sulphide",
      "Forms water-soluble, non-toxic dithiazine by-products",
      "Highest scavenging capacity per litre among liquid scavengers",
    ],
    faqs: [
      {
        question: "Is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine the same as MEA Triazine?",
        answer: "Yes. Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine is the IUPAC chemical name; MEA Triazine 78% is the commercial name for the same compound (CAS 4719-04-4) supplied at 78% active concentration.",
      },
      {
        question: "What is the CAS number of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine?",
        answer: "The CAS number is 4719-04-4. It is also referenced as monoethanolamine triazine and triazinetriethanol.",
      },
      {
        question: "What is it used for?",
        answer: "It is used as a hydrogen sulphide (H2S) scavenger in natural gas, crude oil, biogas and wastewater, converting toxic H2S into stable, water-soluble by-products.",
      },
    ],
    keywords: [
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine cas 4719-04-4",
      "what is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine structure",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine properties",
      "monoethanolamine triazine",
      "triazinetriethanol",
    ],
  },

  "hexahydro-tris-2-hydroxyethyl-s-triazine-manufacturer-india": {
    slug: "hexahydro-tris-2-hydroxyethyl-s-triazine-manufacturer-india",
    category: "solutions",
    title: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Manufacturer in India",
    description:
      "Direct manufacturer of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4) in India. ISO 9001:2015 plant in Gujarat, batch COA, factory-direct supply.",
    h1: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Manufacturer in India",
    intro:
      "Vasudev Chemo Pharma is a direct manufacturer of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4) in India. We produce this triazine-based H2S scavenger in-house at our ISO 9001:2015 certified plant in Ankleshwar, Gujarat — not a trading house — so buyers get factory-direct pricing and full batch documentation.",
    sections: [
      {
        heading: "In-house manufacturing in Gujarat, India",
        id: "manufacturing",
        body: "Our facility in Ankleshwar, Gujarat, synthesises hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine by the controlled condensation of monoethanolamine and formaldehyde in dedicated reactors. Manufacturing in-house lets us control the active concentration, colour and formaldehyde content of every batch, and produce custom concentrations (50%, 60%, 80%) alongside the standard 78% grade.",
      },
      {
        heading: "Quality control and batch documentation",
        id: "quality",
        body: "Every batch is tested for active matter (target 78% ± 1%), pH, specific gravity, colour and formaldehyde content before release. Each shipment carries a batch-specific Certificate of Analysis (COA), Safety Data Sheet (SDS) and Technical Data Sheet (TDS). Our ISO 9001:2015 quality management system provides full traceability from raw-material receipt to finished-product dispatch.",
      },
      {
        heading: "Why buy from the manufacturer directly",
        id: "direct",
        body: "Sourcing hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine directly from the manufacturer removes distributor and oilfield-service-company markups that can add 40–60% to the ex-works cost. For operators with predictable, ongoing consumption we offer monthly and quarterly supply contracts that lock in price and guarantee availability.",
      },
    ],
    specs: [
      { label: "Manufacturer", value: "Vasudev Chemo Pharma" },
      { label: "Plant Location", value: "Ankleshwar, Gujarat, India" },
      { label: "Certification", value: "ISO 9001:2015" },
      { label: "Grades", value: "78% standard; 50 / 60 / 80% on request" },
      { label: "Documentation", value: "Batch COA, SDS, TDS" },
    ],
    benefits: [
      "Direct-manufacturer pricing — no intermediary markup",
      "Batch-level COA with full traceability",
      "Custom concentrations available from the same plant",
    ],
    faqs: [
      {
        question: "Are you a manufacturer or a trader of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine?",
        answer: "We are a direct manufacturer. The product is synthesised in-house at our ISO 9001:2015 certified plant in Ankleshwar, Gujarat, India.",
      },
      {
        question: "Do you provide a Certificate of Analysis?",
        answer: "Yes. Every batch ships with a batch-specific COA, plus SDS and TDS. Full traceability is maintained under our ISO 9001:2015 system.",
      },
      {
        question: "Can you manufacture custom concentrations?",
        answer: "Yes. Alongside the standard 78% grade we can supply 50%, 60% and 80% concentrations to order.",
      },
    ],
    keywords: [
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine manufacturer",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine manufacturer in india",
      "mea triazine 78 manufacturer india",
      "mea triazine manufacturer gujarat",
      "cas 4719-04-4 manufacturer india",
      "triazine h2s scavenger manufacturer india",
    ],
  },

  "hexahydro-tris-2-hydroxyethyl-s-triazine-supplier-price": {
    slug: "hexahydro-tris-2-hydroxyethyl-s-triazine-supplier-price",
    category: "solutions",
    title: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Supplier — Price, Packaging & MOQ",
    description:
      "Bulk supplier of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%). Drum, IBC and tanker packaging, 1 MT MOQ, factory-direct price and free samples.",
    h1: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Supplier — Price, Packaging & MOQ",
    intro:
      "Vasudev Chemo Pharma supplies hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4) in bulk to oilfield, refinery, biogas and wastewater buyers. This page covers packaging options, minimum order quantity, how pricing works and how to request a quote or sample.",
    sections: [
      {
        heading: "Packaging options",
        id: "packaging",
        body: "We supply in packaging sized to your logistics:\n- 200 L HDPE drums for smaller and trial orders\n- 1000 L IBC totes for medium-volume users\n- Bulk tanker loads and ISO tanks for large continuous consumers\nCustom packaging is available on request.",
      },
      {
        heading: "Pricing basis and minimum order quantity",
        id: "pricing",
        body: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine is priced per metric tonne and depends on order volume, packaging and Incoterms (EXW, FOB or CIF). The minimum order quantity is 1 MT for domestic buyers and typically 1 x 20' FCL for export. Because we ship factory-direct, prices exclude the distributor markups common in this supply chain. Request a written quotation for your volume and destination.",
      },
      {
        heading: "Samples and ordering",
        id: "samples",
        body: "Free samples are available for laboratory qualification and field trials before you commit to production volumes. Once a grade and packaging are confirmed, we issue a proforma invoice with lead time and shipping terms. Repeat buyers can set up monthly or quarterly supply contracts for price stability.",
      },
    ],
    specs: [
      { label: "Packaging", value: "200 L drum · 1000 L IBC · bulk tanker / ISO tank" },
      { label: "Minimum Order", value: "1 MT (domestic); 1 x 20' FCL (export)" },
      { label: "Price Basis", value: "Per MT — EXW / FOB / CIF" },
      { label: "Samples", value: "Available for qualification & field trials" },
    ],
    benefits: [
      "Factory-direct pricing without intermediary markup",
      "Flexible packaging from drums to bulk tankers",
      "Free samples and repeat-supply contracts",
    ],
    faqs: [
      {
        question: "What is the price of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine?",
        answer: "Pricing is per metric tonne and depends on volume, packaging and Incoterms. As a direct manufacturer we quote factory-direct prices — request a written quotation for your destination and volume.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "1 MT for domestic orders and typically one 20-foot full container load (FCL) for export shipments.",
      },
      {
        question: "Can I get a sample before ordering?",
        answer: "Yes. Free samples are available for laboratory qualification and field testing before bulk commitment.",
      },
    ],
    keywords: [
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine supplier",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine supplier in india",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine price",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine bulk price",
      "mea triazine 78 price",
      "mea triazine 78 drum ibc price",
    ],
  },

  "hexahydro-tris-2-hydroxyethyl-s-triazine-exporter-india": {
    slug: "hexahydro-tris-2-hydroxyethyl-s-triazine-exporter-india",
    category: "solutions",
    title: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Exporter from India",
    description:
      "Exporter of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%) from India. Shipping via Mundra, Hazira & JNPT with COA, SDS, TDS and full export documentation.",
    h1: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Exporter from India",
    intro:
      "Vasudev Chemo Pharma exports hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4) from India to oil & gas, refinery and water-treatment buyers worldwide. This page covers our loading ports, Incoterms, export documentation and the markets we serve.",
    sections: [
      {
        heading: "Loading ports and transit",
        id: "ports",
        body: "We ship from major Indian ports — Mundra, Hazira, JNPT (Nhava Sheva) and Kandla — chosen for the fastest routing to each destination. Typical sea-freight transit runs 3–8 days to the Gulf (Jebel Ali, Hamad, Sohar, Dammam), 10–14 days to Egypt, and 20–30 days to the US Gulf and Brazil. Air freight is available for urgent samples.",
      },
      {
        heading: "Export documentation and Incoterms",
        id: "documentation",
        body: "Every export shipment includes a batch Certificate of Analysis (COA), GHS-compliant Safety Data Sheet (SDS), Technical Data Sheet (TDS), commercial invoice, packing list and certificate of origin, plus any destination-specific paperwork. We offer Ex-Works, FOB and CIF Incoterms. The HS code for this product is 29336990.",
      },
      {
        heading: "Markets we serve",
        id: "markets",
        body: "We have exported hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine to the UAE, Saudi Arabia, Oman, Qatar, Kuwait, Iraq, Egypt, Turkey, Russia, the United States, Brazil, Vietnam, Thailand and other markets. Bulk drum, IBC, flexitank and ISO-tank options support both spot orders and long-term export contracts.",
      },
    ],
    specs: [
      { label: "Loading Ports", value: "Mundra · Hazira · JNPT · Kandla" },
      { label: "Incoterms", value: "EXW · FOB · CIF" },
      { label: "HS Code", value: "29336990" },
      { label: "Export Packaging", value: "Drums · IBC · flexitank · ISO tank" },
    ],
    benefits: [
      "Complete export documentation (COA, SDS, TDS, CoO)",
      "Fast routing via multiple Indian ports",
      "Proven supply to 14+ countries",
    ],
    faqs: [
      {
        question: "Which ports do you export hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine from?",
        answer: "We ship from Mundra, Hazira, JNPT (Nhava Sheva) and Kandla in India, selecting the port that gives the best routing to your destination.",
      },
      {
        question: "What Incoterms and documentation do you provide?",
        answer: "We offer EXW, FOB and CIF. Every shipment includes a batch COA, GHS SDS, TDS, commercial invoice, packing list and certificate of origin.",
      },
      {
        question: "Which countries do you export to?",
        answer: "Markets include the UAE, Saudi Arabia, Oman, Qatar, Kuwait, Iraq, Egypt, Turkey, Russia, the USA, Brazil, Vietnam and Thailand, among others.",
      },
    ],
    keywords: [
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine exporter",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine exporter from india",
      "mea triazine 78 exporter india",
      "triazine h2s scavenger exporter india",
      "export mea triazine 78",
      "cas 4719-04-4 exporter india",
    ],
  },

  "hexahydro-tris-2-hydroxyethyl-s-triazine-sds-specifications": {
    slug: "hexahydro-tris-2-hydroxyethyl-s-triazine-sds-specifications",
    category: "solutions",
    title: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine SDS, COA & Specifications",
    description:
      "Specifications, GHS safety data and storage guidance for hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4). COA, SDS and TDS on request.",
    h1: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine — SDS, COA & Specifications",
    intro:
      "This page summarises the technical specifications, GHS safety classification and storage guidance for hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4). Full COA, SDS and TDS documents are supplied with every order.",
    sections: [
      {
        heading: "Typical specifications",
        id: "specifications",
        body: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine 78% is a clear to pale-yellow liquid, fully miscible in water. Typical values: active matter 78% ± 1%; pH (as is) 9.0–11.0; specific gravity 1.20–1.25 at 25 °C; viscosity 25–35 cP at 25 °C; freezing point around 5 °C. Exact batch values are stated on the Certificate of Analysis.",
      },
      {
        heading: "GHS safety classification",
        id: "safety",
        body: "The product is classified as an irritant. Signal word: Warning. Pictogram: GHS07. Hazard statements: H315 (causes skin irritation), H319 (causes serious eye irritation) and H335 (may cause respiratory irritation). Wear gloves, eye protection and adequate ventilation when handling. In case of eye contact, rinse cautiously with water for several minutes and seek medical advice.",
      },
      {
        heading: "Storage, handling and documentation",
        id: "storage",
        body: "Store in a cool, well-ventilated area in tightly sealed HDPE containers, away from direct sunlight and strong acids. The product is compatible with standard chemical injection equipment and produced-water systems. Every shipment is accompanied by a batch Certificate of Analysis (COA), a GHS-compliant Safety Data Sheet (SDS/MSDS) and a Technical Data Sheet (TDS).",
      },
    ],
    specs: [
      { label: "Active Matter", value: "78% ± 1%" },
      { label: "pH (as is)", value: "9.0 – 11.0" },
      { label: "Specific Gravity (25 °C)", value: "1.20 – 1.25" },
      { label: "GHS", value: "GHS07 · Warning · H315/H319/H335" },
      { label: "HS Code", value: "29336990" },
    ],
    benefits: [
      "Batch-specific COA with every shipment",
      "GHS-compliant SDS for regulated import markets",
      "Clear specification band for consistent performance",
    ],
    faqs: [
      {
        question: "Is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine hazardous?",
        answer: "It is classified as an irritant (GHS07, Warning) with hazard statements H315, H319 and H335. Use gloves, eye protection and ventilation. It is not classified as a severe corrosive or toxic substance.",
      },
      {
        question: "What are the storage conditions?",
        answer: "Store in tightly sealed HDPE containers in a cool, well-ventilated area away from direct sunlight and strong acids.",
      },
      {
        question: "Do you provide SDS, COA and TDS?",
        answer: "Yes. A batch COA, GHS-compliant SDS/MSDS and TDS are supplied with every order.",
      },
    ],
    keywords: [
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine sds",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine msds",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine specifications",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine coa",
      "mea triazine 78 sds",
      "mea triazine 78 specifications",
    ],
  },

  "hexahydro-tris-2-hydroxyethyl-s-triazine-uses-applications": {
    slug: "hexahydro-tris-2-hydroxyethyl-s-triazine-uses-applications",
    category: "solutions",
    title: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Uses & Applications",
    description:
      "Uses and applications of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%) — H2S scavenging in oil & gas, biogas and wastewater, plus dosing guidance.",
    h1: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine Uses & Applications",
    intro:
      "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine 78%, CAS 4719-04-4) is used across the energy and water sectors as a hydrogen sulphide (H2S) scavenger. This page explains how it works and where it is applied, from oilfield gas sweetening to biogas and wastewater odour control.",
    sections: [
      {
        heading: "How it removes H2S",
        id: "mechanism",
        body: "When hydrogen sulphide contacts the triazine ring, the reaction proceeds in steps: the first mole of H2S converts the triazine to a mono-thio intermediate, and the second produces dithiazine. The by-products are water-soluble and non-toxic, so they can be handled in standard produced-water systems. The reaction is fast at ambient temperature and accelerates at the 40–80 °C conditions common in oilfield operations.",
      },
      {
        heading: "Oil & gas applications",
        id: "oil-gas",
        body: "In upstream operations it is injected at the wellhead or into gathering lines to protect infrastructure and meet pipeline H2S specifications. In midstream gas processing it is used in bubble and spray towers for deep sweetening. Refineries use it to treat off-gases from distillation, hydrotreating and coking units, and for tank-vapour and crude-stabilisation duty.",
      },
      {
        heading: "Biogas, wastewater and other uses",
        id: "other-uses",
        body: "Beyond oil and gas, it removes H2S from biogas and landfill gas to meet pipeline-injection or power-generation specifications, and controls sulphide odour and corrosion in municipal and industrial wastewater. It also acts as a formaldehyde-releasing biocide for metalworking fluids. Typical dosing is around 1.5–3 L per kg of H2S, confirmed against field data.",
      },
    ],
    specs: [
      { label: "Primary Function", value: "H2S scavenger (non-regenerative)" },
      { label: "Phases Treated", value: "Gas, oil and water phases" },
      { label: "Working Temperature", value: "10 °C to 80 °C" },
      { label: "Typical Dosing", value: "~1.5–3 L per kg H2S removed" },
    ],
    benefits: [
      "Selective H2S removal across gas, oil and water",
      "Clean, water-soluble reaction by-products",
      "Works in oilfield, biogas, wastewater and biocide duty",
    ],
    faqs: [
      {
        question: "What is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine used for?",
        answer: "It is used to scavenge hydrogen sulphide (H2S) in natural gas, crude oil, produced water, biogas and wastewater, and as a formaldehyde-releasing biocide in metalworking fluids.",
      },
      {
        question: "How is it dosed?",
        answer: "Typical treating rates are about 1.5–3 L per kg of H2S removed, applied by continuous injection or via a contactor/bubble tower. Confirm dosing against field conditions.",
      },
      {
        question: "Can it be used for biogas?",
        answer: "Yes. It removes H2S from biogas and landfill gas so the gas meets pipeline-injection or power-generation specifications.",
      },
    ],
    keywords: [
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine uses",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine applications",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine h2s scavenger",
      "mea triazine 78 uses",
      "mea triazine 78 dosage",
      "triazine h2s scavenger applications",
    ],
  },

  /* =====================================================================
     Benzalkonium Chloride 50% (BKC 50%) supporting cluster.
     Grade-specific pages, each self-canonical, funnelling to
     /product/benzalkonium-chloride-50 via the parameterised layout.
     ===================================================================== */

  "benzalkonium-chloride-50-cas-8001-54-5-adbac": {
    slug: "benzalkonium-chloride-50-cas-8001-54-5-adbac",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride 50% — CAS 8001-54-5 (ADBAC) Identity",
    description:
      "Chemical identity of Benzalkonium Chloride 50% (BKC 50%): CAS 8001-54-5, ADBAC, EC 264-151-6, InChIKey, SMILES, UNII and INCI. Manufactured & exported from India.",
    h1: "Benzalkonium Chloride 50% — Chemical Identity (CAS 8001-54-5, ADBAC)",
    intro:
      "Benzalkonium Chloride 50% (BKC 50%) is a 50% aqueous solution of Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC), a cationic surfactant and quaternary ammonium biocide. This page consolidates the chemical identity — CAS, EC/EINECS, InChI, SMILES, UNII and INCI — so procurement, regulatory and formulation teams can map any datasheet to the same substance.",
    sections: [
      {
        heading: "Identity and identifiers",
        id: "identity",
        body: "BKC is a mixture of alkyl chain lengths (predominantly C12–C16), so it carries a mixture CAS number 8001-54-5 alongside chain-specific CAS numbers (63449-41-2, 68391-01-5, 68424-85-1). Key identifiers: EC/EINECS 264-151-6; molecular formula C6H5CH2N(CH3)2RCl (R = C8–C18 alkyl); representative InChIKey JUKPWJGBANNWMW-UHFFFAOYSA-M; UNII F5UM2KM3W7; INCI name 'Benzalkonium Chloride'; EPA PC Code 069105; HS Code 29239000.",
      },
      {
        heading: "What the 50% grade is",
        id: "grade",
        body: "The 50% grade is the ready-to-use global formulation standard: a clear pale-yellow liquid, fully water-miscible, pH 6–8 (10% solution), specific gravity 0.96–1.00 at 25 °C, with a controlled C12/C14/C16 alkyl distribution optimised for biocidal activity. It is used directly (with dilution) in disinfectants, sanitisers, preservatives and algaecides. For freight-economical concentrate, see BKC 80%.",
      },
    ],
    specs: [
      { label: "CAS Number", value: "8001-54-5 (mixture)" },
      { label: "EC / EINECS", value: "264-151-6" },
      { label: "Active Matter", value: "50 ± 1%" },
      { label: "HS Code", value: "29239000" },
    ],
    benefits: [
      "One reference for all BKC identifiers (CAS, EC, InChI, UNII, INCI)",
      "Maps competitor datasheets to the same active substance",
      "Manufactured under ISO 9001:2015 in Gujarat, India",
    ],
    faqs: [
      {
        question: "What is the CAS number of Benzalkonium Chloride 50%?",
        answer: "The mixture CAS number is 8001-54-5. Chain-specific CAS numbers include 63449-41-2, 68391-01-5 and 68424-85-1. The EC/EINECS number is 264-151-6.",
      },
      {
        question: "Is BKC 50% the same as ADBAC?",
        answer: "Yes. BKC is Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC), a quaternary ammonium compound. 'BKC 50%' denotes a 50% active aqueous solution.",
      },
      {
        question: "What is the INCI name for cosmetic use?",
        answer: "The INCI name is 'Benzalkonium Chloride' (COSING reference 31618), used to declare it in cosmetic formulations.",
      },
    ],
    keywords: [
      "benzalkonium chloride 50 cas 8001-54-5",
      "bkc 50 adbac",
      "benzalkonium chloride 50 inci name",
      "adbac 50 percent identity",
      "benzalkonium chloride ec 264-151-6",
    ],
  },

  "benzalkonium-chloride-50-specifications-sds-coa": {
    slug: "benzalkonium-chloride-50-specifications-sds-coa",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "BKC 50% Specifications, SDS, COA & Regulatory Status",
    description:
      "Technical specifications, GHS safety data, and regulatory status (EPA, FDA, EU BPR, pharmacopoeia) for Benzalkonium Chloride 50%. COA, SDS, TDS, GMP & Halal on request.",
    h1: "Benzalkonium Chloride 50% — Specifications, SDS, COA & Regulatory Status",
    intro:
      "This page summarises the technical specifications, GHS classification and global regulatory status of Benzalkonium Chloride 50% (BKC 50%, CAS 8001-54-5). Batch COA, GHS-compliant SDS, TDS, GMP and Halal certificates are supplied with every order.",
    sections: [
      {
        heading: "Typical specifications",
        id: "specifications",
        body: "Active matter 50 ± 1%; appearance clear to slightly viscous pale-yellow liquid; pH 6.0–8.0 (10% aqueous, 25 °C); specific gravity 0.96–1.00 at 25 °C; colour ≤ 50 APHA; free amine ≤ 1.5%; alkyl distribution C12/C14/C16 = 40–50% / 30–40% / 10–20%; heavy metals ≤ 10 ppm; flash point > 100 °C; shelf life 24 months in sealed HDPE drums.",
      },
      {
        heading: "GHS safety and regulatory status",
        id: "regulatory",
        body: "GHS: GHS05 (corrosive), GHS07 (irritant), GHS09 (aquatic). Hazards H302, H314, H318, H400, H410; signal word Danger. Regulatory: US EPA antimicrobial PC Code 069105 (List N formulations); FDA 21 CFR 178.1010 for no-rinse food contact ≤ 200 ppm; EU BPR PT1/PT2/PT3/PT4; monographs in USP, NF, BP, EP, IP, JP. Manufactured under ISO 9001:2015 + GMP + Halal.",
      },
    ],
    specs: [
      { label: "Active Matter", value: "50 ± 1%" },
      { label: "pH (10% soln, 25 °C)", value: "6.0 – 8.0" },
      { label: "GHS", value: "GHS05/07/09 · Danger" },
      { label: "Certifications", value: "ISO 9001:2015 · GMP · Halal" },
    ],
    benefits: [
      "Batch-specific COA with every shipment",
      "Pharmacopoeia-grade (USP/BP/EP/IP) available",
      "EPA, FDA and EU BPR reference points in one place",
    ],
    faqs: [
      {
        question: "Is BKC 50% approved for food-contact surfaces?",
        answer: "Yes — as a no-rinse food-contact sanitiser under FDA 21 CFR 178.1010 at up to 200 ppm active quat. Do not exceed 200 ppm for no-rinse food contact.",
      },
      {
        question: "What is the pH and specific gravity of BKC 50%?",
        answer: "pH is 6.0–8.0 (10% aqueous solution at 25 °C) and specific gravity is 0.96–1.00 at 25 °C.",
      },
      {
        question: "Do you provide SDS, COA and pharmacopoeia documentation?",
        answer: "Yes. Every order includes a batch COA, GHS-compliant SDS and TDS. USP/BP/EP/IP-grade documentation and GMP/Halal certificates are available on request.",
      },
    ],
    keywords: [
      "bkc 50 specifications",
      "benzalkonium chloride 50 sds",
      "benzalkonium chloride 50 coa",
      "bkc 50 msds",
      "benzalkonium chloride 50 regulatory status",
    ],
  },

  "benzalkonium-chloride-50-dosage-dilution-guide": {
    slug: "benzalkonium-chloride-50-dosage-dilution-guide",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "BKC 50% Dosage & Dilution Guide by Application",
    description:
      "Recommended BKC 50% dosages and dilutions for hospital disinfection, food-contact sanitising, pool algicide and cooling-tower biocide use. Confirm against local regulations.",
    h1: "Benzalkonium Chloride 50% — Dosage & Dilution Guide by Application",
    intro:
      "Benzalkonium Chloride 50% (BKC 50%) is used at different in-use concentrations depending on the application. This guide gives typical active-quat dosages for the main uses; always validate efficacy in your own system and comply with the relevant regulatory limits.",
    sections: [
      {
        heading: "Typical in-use concentrations",
        id: "concentrations",
        body: "- Hospital hard-surface disinfection: 0.1%–0.4% active quat (1,000–4,000 ppm)\n- Food-contact no-rinse sanitiser: ≤ 200 ppm active quat (FDA 21 CFR 178.1010)\n- Non-food-contact zones (drains, walls): 1,000–2,000 ppm\n- Pool/spa algicide: 5–15 ppm active quat (preventive, weekly)\n- Cooling-tower slug dose: 50–100 ppm; shock 100–200 ppm for biofilm/Legionella",
      },
      {
        heading: "Working from the 50% liquid",
        id: "working-strength",
        body: "Because BKC 50% is 50% active, 2 g of product delivers 1 g of active quat. For a 0.2% active (2,000 ppm) cleaning sanitiser, add ~4 g BKC 50% per litre of water. For a 200 ppm food-contact rinse, add ~0.4 g per litre. Prepare fresh working solutions, use potable water, and check compatibility with any co-formulated nonionic/amphoteric surfactants.",
      },
    ],
    specs: [
      { label: "Hospital surfaces", value: "0.1% – 0.4% active" },
      { label: "Food contact (no-rinse)", value: "≤ 200 ppm active" },
      { label: "Pool algicide", value: "5 – 15 ppm active" },
      { label: "Cooling tower shock", value: "100 – 200 ppm active" },
    ],
    benefits: [
      "Application-specific dosing at a glance",
      "Regulatory limits flagged (e.g. 200 ppm food contact)",
      "Simple 50%-liquid conversion maths",
    ],
    faqs: [
      {
        question: "How much BKC 50% makes a 2,000 ppm disinfectant?",
        answer: "About 4 g of BKC 50% per litre of water delivers ~0.2% (2,000 ppm) active quat, since the product is 50% active.",
      },
      {
        question: "What is the maximum BKC concentration for no-rinse food contact?",
        answer: "200 ppm active quat, per FDA 21 CFR 178.1010. Do not exceed this for no-rinse food-contact surfaces.",
      },
      {
        question: "Should working solutions be made fresh?",
        answer: "Yes. Prepare working dilutions fresh in potable water and verify efficacy; avoid mixing with anionic surfactants, which deactivate cationic quats.",
      },
    ],
    keywords: [
      "bkc 50 dosage",
      "benzalkonium chloride 50 dilution",
      "bkc 50 disinfectant dilution ratio",
      "benzalkonium chloride dosage ppm",
      "bkc 50 pool algicide dose",
    ],
  },

  "benzalkonium-chloride-50-brand-equivalents": {
    slug: "benzalkonium-chloride-50-brand-equivalents",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "BKC 50% — Lonza Bardac 22, Stepan BTC & Maquat Equivalent",
    description:
      "Vasudev Chemo Pharma BKC 50% is a direct equivalent to Lonza Bardac® 22, Stepan BTC® 824, Nouryon Maquat® and Pilot Lonzabac® 50% grades — same active (ADBAC, CAS 8001-54-5).",
    h1: "Benzalkonium Chloride 50% — Brand Equivalents & Alternatives",
    intro:
      "Buyers switching supplier need confidence that a new BKC 50% matches their qualified brand. Vasudev Chemo Pharma's BKC 50% is the same active substance (ADBAC, CAS 8001-54-5) as the major reference grades, at direct-from-India pricing.",
    sections: [
      {
        heading: "Equivalent reference grades",
        id: "equivalents",
        body: "Our BKC 50% is a functional equivalent to: Lonza Bardac® 22 and Hyamine® 3500; Stepan BTC® 824 / BTC® 50NF; Nouryon (AkzoNobel) Maquat® MC 1412 and LC 12-50; Pilot Lonzabac® 50 / Sumquat® 2350; and Kao Sanisol® C. All share the ADBAC active and CAS 8001-54-5; differences are in alkyl-distribution lot specifications, which we can match on request.",
      },
      {
        heading: "How to cross-qualify",
        id: "cross-qualify",
        body: "We provide a specification-comparison document and 1–5 kg trial samples so your lab can run parallel formulation and efficacy tests (EN 1276 bactericidal, EN 1650 fungicidal, EN 14476 virucidal) plus stability studies before switching. We can tune the C12/C14/C16 alkyl distribution to align with your incumbent grade.",
      },
    ],
    specs: [
      { label: "Active Substance", value: "ADBAC (CAS 8001-54-5)" },
      { label: "Matches", value: "Bardac® 22 · BTC® 824 · Maquat® MC 1412" },
      { label: "Samples", value: "1 – 5 kg for cross-qualification" },
      { label: "Origin", value: "India (Gujarat), ISO 9001:2015" },
    ],
    benefits: [
      "Same active as premium Western brands",
      "Spec-match on alkyl distribution available",
      "Direct-from-India pricing vs IP-brand premium",
    ],
    faqs: [
      {
        question: "Is your BKC 50% a drop-in replacement for Lonza Bardac 22?",
        answer: "It is the same active substance (ADBAC, CAS 8001-54-5) at 50% active. We provide a spec-comparison and samples so you can cross-qualify against Bardac® 22 in your own formulation and efficacy tests.",
      },
      {
        question: "Which brand grades does BKC 50% correspond to?",
        answer: "Lonza Bardac® 22, Stepan BTC® 824 / 50NF, Nouryon Maquat® MC 1412 / LC 12-50, Pilot Lonzabac® 50 and Kao Sanisol® C, among others.",
      },
      {
        question: "Can you match a specific alkyl distribution?",
        answer: "Yes. We can tune the C12/C14/C16 distribution to align with your incumbent grade; contact us with your target specification.",
      },
    ],
    keywords: [
      "lonza bardac 22 alternative",
      "stepan btc 824 equivalent",
      "maquat mc 1412 alternative",
      "bkc 50 brand equivalent",
      "benzalkonium chloride 50 alternative supplier",
    ],
  },

  "benzalkonium-chloride-50-manufacturer-india": {
    slug: "benzalkonium-chloride-50-manufacturer-india",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride 50% Manufacturer in India",
    description:
      "Direct manufacturer of Benzalkonium Chloride 50% (BKC 50%) in India. ISO 9001:2015, GMP & Halal certified plant in Gujarat. Cosmetic, disinfectant & technical grades.",
    h1: "Benzalkonium Chloride 50% (BKC 50%) Manufacturer in India",
    intro:
      "Vasudev Chemo Pharma manufactures Benzalkonium Chloride 50% (BKC 50%, CAS 8001-54-5) in-house at our ISO 9001:2015, GMP and Halal-certified facility in Gujarat, India — supplying disinfectant, cosmetic and technical grades directly to formulators worldwide.",
    sections: [
      {
        heading: "Manufacturing and grades",
        id: "manufacturing",
        body: "We produce BKC 50% with a controlled C12–C16 alkyl distribution optimised for biocidal activity, in three grades: Industrial/Technical, Cosmetic (CTFA-compliant) and Disinfectant (suitable for EPA-registered formulators). Manufacturing in-house lets us hold tight tolerances on active matter, colour, free amine and alkyl ratio, and issue matching COAs per batch.",
      },
      {
        heading: "Quality, certifications and traceability",
        id: "quality",
        body: "Every batch is released against active matter (50 ± 1%), pH, specific gravity, colour (APHA) and free-amine specifications. We operate under ISO 9001:2015 with GMP and Halal certification — the last is essential for export to the UAE, Saudi Arabia, Malaysia and Indonesia. Full batch traceability supports pharmacopoeia and cosmetic regulatory submissions.",
      },
    ],
    specs: [
      { label: "Plant", value: "Gujarat, India" },
      { label: "Certifications", value: "ISO 9001:2015 · GMP · Halal" },
      { label: "Grades", value: "Industrial · Cosmetic · Disinfectant" },
      { label: "Active Matter", value: "50 ± 1%" },
    ],
    benefits: [
      "Direct manufacturer — no intermediary markup",
      "GMP + Halal grades for regulated export markets",
      "Batch COA with full traceability",
    ],
    faqs: [
      {
        question: "Are you a manufacturer of BKC 50% or a trader?",
        answer: "We are a direct manufacturer. BKC 50% is produced in-house at our ISO 9001:2015, GMP and Halal-certified plant in Gujarat, India.",
      },
      {
        question: "Which grades of BKC 50% do you manufacture?",
        answer: "Industrial/Technical, Cosmetic (CTFA-compliant) and Disinfectant grades, all at 50 ± 1% active matter.",
      },
      {
        question: "Do you hold GMP and Halal certification?",
        answer: "Yes. We manufacture under ISO 9001:2015 with GMP and Halal certification; certificates are provided on request for export markets.",
      },
    ],
    keywords: [
      "benzalkonium chloride 50 manufacturer",
      "bkc 50 manufacturer india",
      "benzalkonium chloride manufacturer gujarat",
      "adbac 50 manufacturer india",
      "bkc 50 cosmetic grade manufacturer",
    ],
  },

  "benzalkonium-chloride-50-supplier-price": {
    slug: "benzalkonium-chloride-50-supplier-price",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "BKC 50% Supplier — Bulk Price, Packaging & MOQ",
    description:
      "Bulk supplier of Benzalkonium Chloride 50% (BKC 50%). Drum, IBC and ISO-tank packaging, 1 MT MOQ, factory-direct pricing and samples. Request a quote.",
    h1: "Benzalkonium Chloride 50% Supplier — Bulk Price, Packaging & MOQ",
    intro:
      "Vasudev Chemo Pharma supplies Benzalkonium Chloride 50% (BKC 50%) in bulk to disinfectant, cosmetic, water-treatment and agricultural formulators. This page covers packaging, minimum order quantity, and how pricing and samples work.",
    sections: [
      {
        heading: "Packaging and minimum order",
        id: "packaging",
        body: "BKC 50% ships in 50 kg and 200 kg HDPE drums, 1000 kg IBC totes, and bulk ISO tanks. Minimum order is 1 MT for domestic buyers and typically one 20' FCL for export. Custom packaging and private-label options are available for blenders.",
      },
      {
        heading: "Pricing and samples",
        id: "pricing",
        body: "Price is quoted per metric tonne and depends on grade, packaging, volume and Incoterms (EXW/FOB/CIF). As a direct manufacturer we quote factory-direct prices with no distributor markup. Free samples are available for qualification, and repeat buyers can set monthly or quarterly contracts for price stability.",
      },
    ],
    specs: [
      { label: "Packaging", value: "50/200 kg drum · 1000 kg IBC · ISO tank" },
      { label: "MOQ", value: "1 MT (domestic); 1 x 20' FCL (export)" },
      { label: "Price Basis", value: "Per MT — EXW / FOB / CIF" },
      { label: "Samples", value: "Available for qualification" },
    ],
    benefits: [
      "Factory-direct pricing, no intermediary markup",
      "Flexible packaging incl. private label",
      "Samples and repeat-supply contracts",
    ],
    faqs: [
      {
        question: "What is the price of BKC 50%?",
        answer: "Pricing is per metric tonne and depends on grade, packaging, volume and Incoterms. As a direct manufacturer we quote factory-direct — request a written quotation for your destination and volume.",
      },
      {
        question: "What packaging is available for BKC 50%?",
        answer: "50 kg and 200 kg HDPE drums, 1000 kg IBC totes, and bulk ISO tanks, with custom/private-label options.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "1 MT for domestic orders and typically one 20-foot full container load (FCL) for export.",
      },
    ],
    keywords: [
      "benzalkonium chloride 50 supplier",
      "bkc 50 price",
      "bkc 50 supplier india",
      "benzalkonium chloride 50 bulk price",
      "bkc 50 drum ibc price",
    ],
  },

  "benzalkonium-chloride-50-exporter-india": {
    slug: "benzalkonium-chloride-50-exporter-india",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride 50% Exporter from India",
    description:
      "Exporter of Benzalkonium Chloride 50% (BKC 50%) from India via Mundra, Hazira & JNPT. COA, SDS, TDS, Halal & certificate of origin. EXW/FOB/CIF to global markets.",
    h1: "Benzalkonium Chloride 50% (BKC 50%) Exporter from India",
    intro:
      "Vasudev Chemo Pharma exports Benzalkonium Chloride 50% (BKC 50%, CAS 8001-54-5) from India to disinfectant, cosmetic and water-treatment buyers worldwide, with complete export documentation and Halal certification for Gulf and Southeast Asian markets.",
    sections: [
      {
        heading: "Ports, Incoterms and documentation",
        id: "logistics",
        body: "We ship from Mundra, Hazira and JNPT (Nhava Sheva) under HS Code 29239000, offering EXW, FOB and CIF Incoterms. Every export shipment includes a batch COA, GHS-compliant SDS, TDS, commercial invoice, packing list, certificate of origin and — on request — GMP and Halal certificates.",
      },
      {
        heading: "Markets served",
        id: "markets",
        body: "BKC 50% is exported to the UAE, Saudi Arabia, Oman, Qatar, Malaysia, Indonesia, the United States, Brazil and other markets. Halal certification supports Gulf and Southeast Asian import requirements; drum, IBC and ISO-tank options support both spot and contract export volumes.",
      },
    ],
    specs: [
      { label: "Loading Ports", value: "Mundra · Hazira · JNPT" },
      { label: "Incoterms", value: "EXW · FOB · CIF" },
      { label: "HS Code", value: "29239000" },
      { label: "Export Docs", value: "COA · SDS · TDS · CoO · Halal" },
    ],
    benefits: [
      "Complete export documentation incl. Halal",
      "Multiple Indian ports for efficient routing",
      "Spot and long-term export contracts",
    ],
    faqs: [
      {
        question: "Which ports do you export BKC 50% from?",
        answer: "We ship from Mundra, Hazira and JNPT (Nhava Sheva) in India, choosing the port with the best routing to your destination.",
      },
      {
        question: "Do you provide Halal and certificate of origin for BKC 50%?",
        answer: "Yes. Halal certification (on request) and a certificate of origin are provided alongside COA, SDS and TDS for export shipments.",
      },
      {
        question: "What Incoterms do you offer?",
        answer: "EXW, FOB and CIF. We quote CIF to your nominated port on request.",
      },
    ],
    keywords: [
      "benzalkonium chloride 50 exporter",
      "bkc 50 exporter india",
      "benzalkonium chloride 50 export",
      "bkc 50 halal certified exporter",
      "adbac 50 exporter from india",
    ],
  },

  /* =====================================================================
     Benzalkonium Chloride 80% (BKC 80%) supporting cluster.
     Concentrate / blender / export focus, funnelling to
     /product/benzalkonium-chloride-80.
     ===================================================================== */

  "benzalkonium-chloride-80-cas-8001-54-5-adbac": {
    slug: "benzalkonium-chloride-80-cas-8001-54-5-adbac",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "Benzalkonium Chloride 80% — CAS 8001-54-5 (ADBAC) Concentrate",
    description:
      "Chemical identity of Benzalkonium Chloride 80% (BKC 80%): CAS 8001-54-5, ADBAC, EC 264-151-6, InChIKey, SMILES, UNII, INCI. High-active export concentrate from India.",
    h1: "Benzalkonium Chloride 80% — Chemical Identity (CAS 8001-54-5, ADBAC)",
    intro:
      "Benzalkonium Chloride 80% (BKC 80%) is the high-active, freight-economical concentrate of Alkyl Dimethyl Benzyl Ammonium Chloride (ADBAC). It shares the same identity as BKC 50% — CAS 8001-54-5 — but ships ~1.6× more active matter per kilogram. This page consolidates its identifiers for procurement and regulatory mapping.",
    sections: [
      {
        heading: "Identity and identifiers",
        id: "identity",
        body: "BKC 80% is the same active substance as BKC 50%, differing only in concentration. Mixture CAS 8001-54-5 (chain-specific 63449-41-2, 68391-01-5, 68424-85-1); EC/EINECS 264-151-6; formula C6H5CH2N(CH3)2RCl (R = C8–C18); representative InChIKey JUKPWJGBANNWMW-UHFFFAOYSA-M; UNII F5UM2KM3W7; INCI 'Benzalkonium Chloride'; EPA PC Code 069105; HS Code 29239000.",
      },
      {
        heading: "Why the 80% concentrate exists",
        id: "concentrate",
        body: "At 80% active, the concentrate reduces freight cost per kilogram of active matter by roughly 37% versus BKC 50%, which is why disinfectant brands and sanitiser blenders import it and dilute on-site. It is a pale-yellow viscous liquid that can gel below ~15 °C, so it is stored and shipped warm. Physically it matches Lonza Bardac® 2280 / Stepan BTC® 8358 grades.",
      },
    ],
    specs: [
      { label: "CAS Number", value: "8001-54-5 (mixture)" },
      { label: "Active Matter", value: "80 ± 1%" },
      { label: "Freight vs 50%", value: "~37% lower per kg active" },
      { label: "HS Code", value: "29239000" },
    ],
    benefits: [
      "Same active as BKC 50%, higher concentration",
      "Lower freight cost per kg of active matter",
      "Maps to Bardac® 2280 / BTC® 8358 grades",
    ],
    faqs: [
      {
        question: "Is BKC 80% chemically different from BKC 50%?",
        answer: "No — both are ADBAC (CAS 8001-54-5). BKC 80% is simply an 80% active concentrate versus 50%, chosen to cut freight cost and allow on-site dilution.",
      },
      {
        question: "Why does BKC 80% gel in cold weather?",
        answer: "At high active content the solution becomes viscous and can gel below ~15 °C. Store and ship above 15 °C; gentle warming restores a pourable liquid.",
      },
      {
        question: "What is the INCI name?",
        answer: "'Benzalkonium Chloride' — the same INCI declaration as the 50% grade.",
      },
    ],
    keywords: [
      "benzalkonium chloride 80 cas 8001-54-5",
      "bkc 80 adbac concentrate",
      "benzalkonium chloride 80 identity",
      "adbac 80 percent",
      "bkc 80 inci name",
    ],
  },

  "benzalkonium-chloride-80-specifications-sds-coa": {
    slug: "benzalkonium-chloride-80-specifications-sds-coa",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "BKC 80% Specifications, SDS, COA & Regulatory Status",
    description:
      "Specifications, GHS safety data and regulatory status (EPA, FDA, EU BPR, pharmacopoeia) for Benzalkonium Chloride 80% concentrate. COA, SDS, TDS, GMP & Halal on request.",
    h1: "Benzalkonium Chloride 80% — Specifications, SDS, COA & Regulatory Status",
    intro:
      "This page summarises the specifications, GHS classification and regulatory status of Benzalkonium Chloride 80% (BKC 80%, CAS 8001-54-5). The 80% grade is more aggressive than the 50% grade — handle with full PPE. Batch COA, SDS, TDS, GMP and Halal certificates ship with every order.",
    sections: [
      {
        heading: "Typical specifications",
        id: "specifications",
        body: "Active matter 80 ± 1%; appearance clear to pale-yellow viscous liquid (gel below ~15 °C); pH 6.0–8.0 (10% aqueous, 25 °C); specific gravity 1.00–1.04 at 25 °C; colour ≤ 80 APHA; free amine ≤ 2.0%; refractive index 1.450–1.480; alkyl distribution C12/C14/C16 = 40–50% / 30–40% / 10–20%; flash point > 100 °C; store 15–40 °C; shelf life 24 months.",
      },
      {
        heading: "GHS safety and regulatory status",
        id: "regulatory",
        body: "GHS: GHS05 (corrosive), GHS07 (irritant), GHS09 (aquatic); H302, H314, H318, H400, H410; signal word Danger. As a raw material, BKC 80% supplies EPA-registered formulators (PC Code 069105, List N), EU BPR PT1–PT4 biocide producers, and food-contact sanitiser blenders (finished products ≤ 200 ppm under FDA 21 CFR 178.1010). Pharmacopoeia grades meet USP/BP/EP/IP.",
      },
    ],
    specs: [
      { label: "Active Matter", value: "80 ± 1%" },
      { label: "Specific Gravity", value: "1.00 – 1.04 (25 °C)" },
      { label: "Storage", value: "15 – 40 °C (gel below 15 °C)" },
      { label: "GHS", value: "GHS05/07/09 · Danger" },
    ],
    benefits: [
      "Batch-specific COA with every shipment",
      "Documentation for EPA/EU BPR formulators",
      "GMP + Halal grades available",
    ],
    faqs: [
      {
        question: "How should BKC 80% be stored?",
        answer: "Store in sealed HDPE drums at 15–40 °C, away from direct sunlight. Below ~15 °C it can gel; warm gently to restore a pourable liquid.",
      },
      {
        question: "Is BKC 80% more hazardous than BKC 50%?",
        answer: "It carries the same GHS classification (GHS05/07/09, Danger) but is more concentrated, so handle with full PPE and dilute carefully.",
      },
      {
        question: "Do you provide COA, SDS and pharmacopoeia documentation?",
        answer: "Yes — batch COA, GHS SDS and TDS with every order; USP/BP/EP/IP documentation and GMP/Halal certificates on request.",
      },
    ],
    keywords: [
      "bkc 80 specifications",
      "benzalkonium chloride 80 sds",
      "benzalkonium chloride 80 coa",
      "bkc 80 msds",
      "benzalkonium chloride 80 regulatory",
    ],
  },

  "benzalkonium-chloride-80-dilution-guide": {
    slug: "benzalkonium-chloride-80-dilution-guide",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "BKC 80% Dilution Guide — Make 50%, 25% & Use Concentrations",
    description:
      "How to dilute Benzalkonium Chloride 80% concentrate to BKC 50%, 25%, 10% and final-use disinfectant/food-contact/pool concentrations. Mass ratios and ppm targets.",
    h1: "Benzalkonium Chloride 80% — Dilution Guide for Blenders",
    intro:
      "Benzalkonium Chloride 80% is bought as a concentrate and diluted on-site. This guide gives the mass ratios to step down to BKC 50%, 25% and 10%, and to reach final-use disinfectant, food-contact and pool concentrations.",
    sections: [
      {
        heading: "Stepping down to standard concentrations",
        id: "step-down",
        body: "By mass: 62.5 kg BKC 80% + 37.5 kg demineralised water → 100 kg BKC 50% (matches Bardac® 22 / BTC® 824 grade). 31.25 kg BKC 80% + 68.75 kg water → 100 kg BKC 25%. 12.5 kg BKC 80% + 87.5 kg water → 100 kg BKC 10%. Always add concentrate to water with agitation, warm the concentrate above 15 °C first, and use demineralised water to avoid hard-water precipitation.",
      },
      {
        heading: "Final-use concentrations from 80%",
        id: "final-use",
        body: "Direct from BKC 80%: hospital hard-surface disinfectant at 0.4% active = 5.0 g per litre water; routine sanitiser at 0.2% = 2.5 g/L; food-contact no-rinse at 200 ppm = 0.25 g/L (do not exceed, FDA 21 CFR 178.1010); pool algicide preventive at 10 ppm = 12.5 g per 1,000 L pool water. Verify efficacy and avoid anionic surfactants, which deactivate the cationic quat.",
      },
    ],
    specs: [
      { label: "To BKC 50%", value: "62.5 kg 80% + 37.5 kg water" },
      { label: "To BKC 25%", value: "31.25 kg 80% + 68.75 kg water" },
      { label: "Hospital 0.4%", value: "5.0 g per litre water" },
      { label: "Food contact", value: "0.25 g/L (200 ppm max)" },
    ],
    benefits: [
      "Exact mass ratios for on-site dilution",
      "Final-use targets for common applications",
      "Freight-economical vs shipping pre-diluted grades",
    ],
    faqs: [
      {
        question: "How do I make BKC 50% from BKC 80%?",
        answer: "Blend 62.5 kg of BKC 80% with 37.5 kg of demineralised water to yield 100 kg of BKC 50% (by mass). Warm the concentrate above 15 °C and add to water under agitation.",
      },
      {
        question: "How much BKC 80% makes a 200 ppm food-contact sanitiser?",
        answer: "About 0.25 g of BKC 80% per litre of water gives ~200 ppm active quat — the maximum for no-rinse food contact under FDA 21 CFR 178.1010.",
      },
      {
        question: "What water should I use for dilution?",
        answer: "Use demineralised or soft potable water. Hard water can reduce activity and cause precipitation; avoid anionic surfactants in the same blend.",
      },
    ],
    keywords: [
      "bkc 80 dilution to 50",
      "benzalkonium chloride 80 dilution guide",
      "how to dilute bkc 80",
      "bkc 80 to bkc 50 ratio",
      "benzalkonium chloride 80 use concentration",
    ],
  },

  "benzalkonium-chloride-80-brand-equivalents": {
    slug: "benzalkonium-chloride-80-brand-equivalents",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "BKC 80% — Lonza Bardac 2280, Stepan BTC 8358 & Maquat 4480-E Equivalent",
    description:
      "Vasudev Chemo Pharma BKC 80% is a direct equivalent to Lonza Bardac® 2280, Stepan BTC® 8358, Nouryon Maquat® 4480-E and Pilot Lonzabac® 80% — same active (ADBAC, CAS 8001-54-5).",
    h1: "Benzalkonium Chloride 80% — Brand Equivalents & Alternatives",
    intro:
      "BKC 80% is the highest-volume export concentrate in the global BKC market, and buyers switching supplier need brand-match confidence. Vasudev Chemo Pharma's BKC 80% is the same active substance (ADBAC, CAS 8001-54-5) as the major 80% reference grades, at direct-from-India pricing.",
    sections: [
      {
        heading: "Equivalent 80% reference grades",
        id: "equivalents",
        body: "Our BKC 80% is a functional equivalent to Lonza Bardac® 2280 and Hyamine® 80; Stepan BTC® 8358 / 8248; Nouryon (AkzoNobel) Maquat® 4480-E and LC 12-80; and Pilot Lonzabac® 80 / Sumquat® 2380. All are 80% ADBAC (CAS 8001-54-5). We supply the same chemistry as SKU VCP-SFC-0006 with a matchable C12/C14/C16 alkyl distribution.",
      },
      {
        heading: "Cross-qualification for blenders",
        id: "cross-qualify",
        body: "For drop-in replacement in EPA-registered or EU BPR formulations, we supply a spec-comparison document and 1–5 kg trial samples for parallel formulation runs, EN 1276 / EN 14476 efficacy testing and stability studies. Because you dilute on-site, matching the concentrate active and alkyl profile is what matters — both of which we align to your incumbent.",
      },
    ],
    specs: [
      { label: "Active Substance", value: "ADBAC (CAS 8001-54-5), 80%" },
      { label: "Matches", value: "Bardac® 2280 · BTC® 8358 · Maquat® 4480-E" },
      { label: "SKU", value: "VCP-SFC-0006" },
      { label: "Samples", value: "1 – 5 kg for cross-qualification" },
    ],
    benefits: [
      "Same active as premium 80% Western brands",
      "Alkyl-distribution spec match available",
      "Direct-from-India pricing on the concentrate",
    ],
    faqs: [
      {
        question: "Is your BKC 80% a replacement for Lonza Bardac 2280?",
        answer: "Yes — it is 80% ADBAC (CAS 8001-54-5), the same active as Bardac® 2280. We provide spec-comparison and samples so you can cross-qualify in your own formulation and efficacy tests.",
      },
      {
        question: "Which 80% brand grades does it correspond to?",
        answer: "Lonza Bardac® 2280 / Hyamine® 80, Stepan BTC® 8358 / 8248, Nouryon Maquat® 4480-E / LC 12-80, and Pilot Lonzabac® 80.",
      },
      {
        question: "Can you match my incumbent alkyl distribution?",
        answer: "Yes. We can align the C12/C14/C16 distribution to your current grade — send us the target specification.",
      },
    ],
    keywords: [
      "lonza bardac 2280 alternative",
      "stepan btc 8358 equivalent",
      "maquat 4480-e alternative",
      "bkc 80 brand equivalent",
      "benzalkonium chloride 80 alternative supplier",
    ],
  },

  "benzalkonium-chloride-80-manufacturer-india": {
    slug: "benzalkonium-chloride-80-manufacturer-india",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "Benzalkonium Chloride 80% Manufacturer in India",
    description:
      "Direct manufacturer of Benzalkonium Chloride 80% (BKC 80%) concentrate in India. ISO 9001:2015, GMP & Halal certified plant in Gujarat. Disinfectant & cosmetic grades.",
    h1: "Benzalkonium Chloride 80% (BKC 80%) Manufacturer in India",
    intro:
      "Vasudev Chemo Pharma manufactures Benzalkonium Chloride 80% (BKC 80%, CAS 8001-54-5) concentrate at our ISO 9001:2015, GMP and Halal-certified plant in Gujarat, India — supplying disinfectant brands, sanitiser blenders and cosmetic formulators worldwide.",
    sections: [
      {
        heading: "Manufacturing the 80% concentrate",
        id: "manufacturing",
        body: "We produce BKC 80% with a controlled C12–C16 alkyl distribution optimised for maximum biocidal activity at the lowest dilution rates, in Industrial/Technical, Cosmetic (CTFA-compliant) and Disinfectant grades. In-house manufacturing lets us hold active matter at 80 ± 1% and match the alkyl profile of the reference brands blenders qualify against.",
      },
      {
        heading: "Certifications and export readiness",
        id: "quality",
        body: "Every batch is released against active matter, pH, specific gravity, colour and free-amine specifications under ISO 9001:2015, with GMP and Halal certification. Halal is essential for export to the UAE, Saudi Arabia, Malaysia and Indonesia. We provide spec-comparison documents so blenders can cross-qualify our concentrate against Bardac® 2280 / BTC® 8358.",
      },
    ],
    specs: [
      { label: "Plant", value: "Gujarat, India" },
      { label: "Certifications", value: "ISO 9001:2015 · GMP · Halal" },
      { label: "Active Matter", value: "80 ± 1%" },
      { label: "Grades", value: "Industrial · Cosmetic · Disinfectant" },
    ],
    benefits: [
      "Direct manufacturer of the 80% concentrate",
      "Alkyl-profile matching for blender qualification",
      "GMP + Halal for regulated export markets",
    ],
    faqs: [
      {
        question: "Do you manufacture BKC 80% or trade it?",
        answer: "We manufacture BKC 80% in-house at our ISO 9001:2015, GMP and Halal-certified plant in Gujarat, India.",
      },
      {
        question: "Which grades of BKC 80% are available?",
        answer: "Industrial/Technical, Cosmetic (CTFA-compliant) and Disinfectant grades, all at 80 ± 1% active matter.",
      },
      {
        question: "Can you match a reference brand's alkyl distribution?",
        answer: "Yes. We tune the C12/C14/C16 distribution to align with grades such as Lonza Bardac® 2280 or Stepan BTC® 8358.",
      },
    ],
    keywords: [
      "benzalkonium chloride 80 manufacturer",
      "bkc 80 manufacturer india",
      "benzalkonium chloride 80 manufacturer gujarat",
      "adbac 80 manufacturer india",
      "bkc 80 concentrate manufacturer",
    ],
  },

  "benzalkonium-chloride-80-supplier-price": {
    slug: "benzalkonium-chloride-80-supplier-price",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "BKC 80% Supplier — Bulk Price, Packaging & MOQ",
    description:
      "Bulk supplier of Benzalkonium Chloride 80% (BKC 80%) concentrate. Drum, IBC and ISO-tank packaging, 1 MT MOQ, factory-direct pricing and samples. Request a quote.",
    h1: "Benzalkonium Chloride 80% Supplier — Bulk Price, Packaging & MOQ",
    intro:
      "Vasudev Chemo Pharma supplies Benzalkonium Chloride 80% (BKC 80%) concentrate to disinfectant brands, sanitiser blenders and cosmetic OEMs. This page covers packaging, minimum order quantity, and how pricing and samples work for the freight-economical 80% grade.",
    sections: [
      {
        heading: "Packaging and minimum order",
        id: "packaging",
        body: "BKC 80% ships in 50 kg and 200 kg HDPE drums, 1000 kg IBC totes, and bulk ISO tanks. Because it can gel below 15 °C, drums are filled and shipped to avoid cold-chain gelation, and heated storage is advised in cold climates. Minimum order is 1 MT domestic and typically one 20' FCL for export; custom/private-label options available.",
      },
      {
        heading: "Pricing logic",
        id: "pricing",
        body: "BKC 80% is quoted per metric tonne. Because it carries ~1.6× the active matter of BKC 50%, its per-kg-active landed cost is typically ~37% lower once freight is included — the reason blenders import the concentrate and dilute locally. As a direct manufacturer we quote factory-direct with no distributor markup; samples are available for qualification.",
      },
    ],
    specs: [
      { label: "Packaging", value: "50/200 kg drum · 1000 kg IBC · ISO tank" },
      { label: "MOQ", value: "1 MT (domestic); 1 x 20' FCL (export)" },
      { label: "Price Basis", value: "Per MT — EXW / FOB / CIF" },
      { label: "Freight advantage", value: "~37% lower per kg active vs 50%" },
    ],
    benefits: [
      "Freight-economical concentrate pricing",
      "Factory-direct, no intermediary markup",
      "Private-label and contract supply",
    ],
    faqs: [
      {
        question: "Why is BKC 80% cheaper to ship than BKC 50%?",
        answer: "It carries ~1.6× the active matter per kilogram, so per-kg-active landed cost is roughly 37% lower once freight is included — you import less water.",
      },
      {
        question: "What packaging and MOQ apply?",
        answer: "50/200 kg drums, 1000 kg IBC and ISO tanks; MOQ is 1 MT domestic and typically one 20' FCL for export.",
      },
      {
        question: "Do you offer samples and private label?",
        answer: "Yes — free qualification samples and private-label/contract supply are available.",
      },
    ],
    keywords: [
      "benzalkonium chloride 80 supplier",
      "bkc 80 price",
      "bkc 80 supplier india",
      "benzalkonium chloride 80 bulk price",
      "bkc 80 concentrate price",
    ],
  },

  "benzalkonium-chloride-80-exporter-india": {
    slug: "benzalkonium-chloride-80-exporter-india",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-80",
    primaryProductLabel: "View BKC 80% product",
    contactProductSlug: "benzalkonium-chloride-80",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
    ],
    title: "Benzalkonium Chloride 80% Exporter from India",
    description:
      "Exporter of Benzalkonium Chloride 80% (BKC 80%) concentrate from India via Mundra, Hazira & JNPT. COA, SDS, TDS, Halal & CoO. EXW/FOB/CIF to global blenders.",
    h1: "Benzalkonium Chloride 80% (BKC 80%) Exporter from India",
    intro:
      "Vasudev Chemo Pharma exports Benzalkonium Chloride 80% (BKC 80%, CAS 8001-54-5) concentrate worldwide — the export-economical grade global disinfectant brands and blenders import and dilute on-site. Full export documentation and Halal certification support Gulf and Southeast Asian markets.",
    sections: [
      {
        heading: "Ports, Incoterms and documentation",
        id: "logistics",
        body: "We ship from Mundra, Hazira and JNPT (Nhava Sheva) under HS Code 29239000 with EXW, FOB and CIF Incoterms. Each shipment includes a batch COA, GHS-compliant SDS, TDS, commercial invoice, packing list, certificate of origin, and — on request — GMP and Halal certificates. Temperature-aware packing prevents cold-chain gelation below 15 °C.",
      },
      {
        heading: "Markets and use case",
        id: "markets",
        body: "Because it ships ~37% less freight per kg active, BKC 80% is the preferred export grade for blenders in the UAE, Saudi Arabia, Malaysia, Indonesia, the USA, Brazil and beyond, who dilute to 50%, 25% or final-use concentrations locally. ISO-tank, IBC and drum options support both spot and long-term export contracts.",
      },
    ],
    specs: [
      { label: "Loading Ports", value: "Mundra · Hazira · JNPT" },
      { label: "Incoterms", value: "EXW · FOB · CIF" },
      { label: "HS Code", value: "29239000" },
      { label: "Export Docs", value: "COA · SDS · TDS · CoO · Halal" },
    ],
    benefits: [
      "Freight-economical concentrate for export",
      "Complete export documentation incl. Halal",
      "Temperature-aware packing against gelation",
    ],
    faqs: [
      {
        question: "Why do exporters prefer BKC 80% over BKC 50%?",
        answer: "The 80% concentrate ships ~37% less freight per kilogram of active matter; blenders dilute it to 50%, 25% or use concentration on arrival.",
      },
      {
        question: "Which documents accompany a BKC 80% export shipment?",
        answer: "Batch COA, GHS SDS, TDS, commercial invoice, packing list, certificate of origin, and GMP/Halal certificates on request.",
      },
      {
        question: "How is gelation prevented in transit?",
        answer: "We use temperature-aware packing and advise heated storage in cold climates, since BKC 80% can gel below ~15 °C.",
      },
    ],
    keywords: [
      "benzalkonium chloride 80 exporter",
      "bkc 80 exporter india",
      "benzalkonium chloride 80 export",
      "bkc 80 concentrate exporter",
      "adbac 80 exporter from india",
    ],
  },

  /* =====================================================================
     BKC application / industry cluster (shared — covers both 50% & 80%,
     links to both product pages). Each page is a distinct use-case.
     ===================================================================== */

  "benzalkonium-chloride-hospital-disinfectant": {
    slug: "benzalkonium-chloride-hospital-disinfectant",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride for Hospital & Surface Disinfectants",
    description:
      "BKC (Benzalkonium Chloride) for hospital and clinical surface disinfectants — efficacy, in-use concentrations (0.1–0.4%), EN 1276/1650/14476, and EPA List N context.",
    h1: "Benzalkonium Chloride for Hospital & Healthcare Surface Disinfection",
    intro:
      "Benzalkonium Chloride (BKC / ADBAC) is the global reference active for hospital and clinical surface disinfectants. The cationic quat binds negatively-charged microbial membranes and inactivates gram-positive and gram-negative bacteria, fungi, yeasts and enveloped viruses. Vasudev Chemo Pharma supplies both BKC 50% (ready-to-use) and BKC 80% (blender concentrate) grades for disinfectant formulators.",
    sections: [
      {
        heading: "Efficacy and in-use concentrations",
        id: "efficacy",
        body: "Typical hospital hard-surface disinfection uses 0.1%–0.4% active quat (1,000–4,000 ppm). Efficacy is validated under EN 1276 (bactericidal), EN 1650 (fungicidal) and EN 14476 (virucidal, incl. enveloped viruses such as coronaviruses and influenza). BKC is the active in many EPA List N products for use against SARS-CoV-2 and is effective at room temperature.",
      },
      {
        heading: "Formulation notes",
        id: "formulation",
        body: "BKC is compatible with nonionic (alcohol ethoxylates, APGs) and amphoteric (betaine) surfactants for cleaner-disinfectant blends, but is deactivated by anionic surfactants. Blenders typically start from BKC 80% concentrate and dilute to 50% or final use; end-users can dose directly from BKC 50%. Provide contact time per the target organism and surface.",
      },
    ],
    specs: [
      { label: "In-use concentration", value: "0.1% – 0.4% active (1,000–4,000 ppm)" },
      { label: "Standards", value: "EN 1276 / EN 1650 / EN 14476" },
      { label: "Grades", value: "BKC 50% (RTU) · BKC 80% (concentrate)" },
    ],
    benefits: [
      "Broad-spectrum incl. enveloped viruses",
      "EPA List N formulation context",
      "50% and 80% grades from one manufacturer",
    ],
    faqs: [
      {
        question: "What BKC concentration is used for hospital surface disinfection?",
        answer: "Typically 0.1%–0.4% active quat (1,000–4,000 ppm), depending on the target organisms and required contact time.",
      },
      {
        question: "Is BKC effective against viruses like coronavirus?",
        answer: "Yes — BKC is effective against enveloped viruses (coronaviruses, influenza, HIV) and is the active in many EPA List N products; validate under EN 14476 for your formulation.",
      },
      {
        question: "Which surfactants are compatible with BKC?",
        answer: "Nonionic and amphoteric surfactants are compatible; avoid anionic surfactants, which deactivate the cationic quat.",
      },
    ],
    keywords: [
      "benzalkonium chloride hospital disinfectant",
      "bkc surface disinfectant",
      "benzalkonium chloride disinfectant concentration",
      "quaternary ammonium disinfectant supplier",
      "bkc en 14476 disinfectant",
    ],
  },

  "benzalkonium-chloride-food-beverage-cip-sanitiser": {
    slug: "benzalkonium-chloride-food-beverage-cip-sanitiser",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride for Food & Beverage CIP/COP Sanitation",
    description:
      "BKC for food & beverage CIP/COP sanitation — no-rinse food-contact use ≤ 200 ppm (FDA 21 CFR 178.1010), efficacy vs Listeria, Salmonella & E. coli. Supplier from India.",
    h1: "Benzalkonium Chloride for Food & Beverage CIP / COP Sanitation",
    intro:
      "Benzalkonium Chloride (BKC) is a no-rinse food-contact sanitiser used in dairy plants, breweries, soft-drink bottlers and meat/poultry processors for clean-in-place (CIP) and clean-out-of-place (COP) cycles. Vasudev Chemo Pharma supplies BKC 50% and 80% grades for food-safety sanitiser formulators.",
    sections: [
      {
        heading: "Food-contact limits and efficacy",
        id: "limits",
        body: "For no-rinse food-contact surfaces, BKC is approved up to 200 ppm active quat under FDA 21 CFR 178.1010 — do not exceed this. Non-food-contact zones (drains, walls, equipment exteriors) typically use 1,000–2,000 ppm. BKC is effective against the main food pathogens: Listeria monocytogenes, Salmonella, E. coli O157:H7 and Pseudomonas spp.",
      },
      {
        heading: "Use in CIP sequences",
        id: "cip",
        body: "BKC sanitising is applied after the alkaline (caustic) and acid CIP steps, commonly at 60–70 °C. It is compatible with typical alkaline CIP chemistries when dosed as a separate sanitising step. Blenders formulate from BKC 80% concentrate; verify hardness tolerance and use soft/demineralised water to maintain activity.",
      },
    ],
    specs: [
      { label: "Food-contact (no-rinse)", value: "≤ 200 ppm (FDA 21 CFR 178.1010)" },
      { label: "Non-food-contact", value: "1,000 – 2,000 ppm" },
      { label: "Targets", value: "Listeria · Salmonella · E. coli" },
    ],
    benefits: [
      "FDA no-rinse food-contact reference (≤200 ppm)",
      "Effective vs key food pathogens",
      "50% and 80% grades for blenders",
    ],
    faqs: [
      {
        question: "What is the maximum BKC concentration for no-rinse food contact?",
        answer: "200 ppm active quat under FDA 21 CFR 178.1010. Higher concentrations require a potable-water rinse or are limited to non-food-contact surfaces.",
      },
      {
        question: "Which pathogens does BKC control in food plants?",
        answer: "Listeria monocytogenes, Salmonella, E. coli O157:H7 and Pseudomonas species, among others.",
      },
      {
        question: "Where does BKC fit in a CIP cycle?",
        answer: "As the sanitising step after caustic and acid cleaning, typically at 60–70 °C, using soft or demineralised water.",
      },
    ],
    keywords: [
      "benzalkonium chloride food grade sanitiser",
      "bkc cip sanitiser",
      "benzalkonium chloride 200 ppm food contact",
      "quat sanitiser dairy brewery",
      "bkc food safe disinfectant supplier",
    ],
  },

  "benzalkonium-chloride-cosmetic-preservative": {
    slug: "benzalkonium-chloride-cosmetic-preservative",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride Cosmetic Preservative (INCI, Annex V)",
    description:
      "BKC as a cosmetic preservative — INCI 'Benzalkonium Chloride', EU Annex V limits (0.1% rinse-off, 0.05% leave-on), CTFA-compliant grades. Cosmetic-grade supplier from India.",
    h1: "Benzalkonium Chloride as a Cosmetic Preservative",
    intro:
      "Benzalkonium Chloride is a CTFA / Cosmetics Europe approved cosmetic preservative and conditioning agent, declared under INCI name 'Benzalkonium Chloride'. Vasudev Chemo Pharma supplies Cosmetic Grade BKC 50% and 80% for hair conditioners, shampoos, mouthwashes and leave-on personal-care products.",
    sections: [
      {
        heading: "Regulatory use limits",
        id: "limits",
        body: "Under EU Cosmetics Regulation Annex V, BKC is permitted at a maximum of 0.1% active in rinse-off products and 0.05% in leave-on products. It also functions as a positively-charged conditioning agent in 2-in-1 shampoo systems and is compatible with cationic conditioning polymers (Polyquaternium-7, Polyquaternium-10, behentrimonium chloride).",
      },
      {
        heading: "Grade and formulation",
        id: "formulation",
        body: "Cosmetic Grade BKC from Vasudev Chemo Pharma is CTFA-compliant and GMP-certified. Formulators typically dose from a diluted stock; from BKC 80% concentrate, 0.125% product delivers 0.1% active (rinse-off) and 0.0625% delivers 0.05% active (leave-on). Avoid anionic surfactants, which reduce cationic preservative efficacy.",
      },
    ],
    specs: [
      { label: "INCI", value: "Benzalkonium Chloride" },
      { label: "Rinse-off max", value: "0.1% active (EU Annex V)" },
      { label: "Leave-on max", value: "0.05% active (EU Annex V)" },
    ],
    benefits: [
      "CTFA-compliant, GMP-certified cosmetic grade",
      "Preservative + cationic conditioning function",
      "INCI-declared for global cosmetic markets",
    ],
    faqs: [
      {
        question: "What is the INCI name for BKC in cosmetics?",
        answer: "'Benzalkonium Chloride' (COSING reference 31618).",
      },
      {
        question: "What are the maximum cosmetic use levels?",
        answer: "Under EU Annex V, 0.1% active in rinse-off and 0.05% active in leave-on products.",
      },
      {
        question: "Do you supply a cosmetic grade?",
        answer: "Yes — CTFA-compliant, GMP-certified Cosmetic Grade BKC 50% and 80%, with documentation on request.",
      },
    ],
    keywords: [
      "benzalkonium chloride cosmetic preservative",
      "bkc inci name",
      "benzalkonium chloride cosmetic grade supplier",
      "bkc annex v cosmetic limit",
      "benzalkonium chloride conditioner preservative",
    ],
  },

  "benzalkonium-chloride-pharmaceutical-preservative": {
    slug: "benzalkonium-chloride-pharmaceutical-preservative",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride Pharmaceutical Preservative (Eye Drops, Nasal)",
    description:
      "BKC as a pharmaceutical preservative for eye drops, nasal sprays and topical antiseptics — USP <51>, 0.001–0.01% use levels, USP/BP/EP/IP grades. GMP supplier from India.",
    h1: "Benzalkonium Chloride as a Pharmaceutical Preservative",
    intro:
      "Benzalkonium Chloride is a widely used antimicrobial preservative in ophthalmic and nasal formulations, contact-lens solutions and topical antiseptics. Vasudev Chemo Pharma supplies GMP, pharmacopoeia-grade BKC 50% and 80% meeting USP, BP, EP and IP monographs.",
    sections: [
      {
        heading: "Preservative use levels",
        id: "use-levels",
        body: "In finished pharmaceuticals BKC is used at 0.001%–0.01% active in eye drops and nasal sprays, 0.001%–0.005% in contact-lens solutions, and up to ~0.1% in topical antiseptics, validated by USP <51> antimicrobial effectiveness testing. It provides multi-dose preservation against bacteria, fungi and yeast.",
      },
      {
        heading: "Grade and compliance",
        id: "compliance",
        body: "Disinfectant/pharmaceutical-grade BKC from Vasudev Chemo Pharma is GMP-certified with compendial documentation (USP, NF, BP, EP/Ph. Eur., IP, JP) suitable for regulatory submissions. Formulators dilute from concentrate to the low use levels required; compatibility with the active drug and excipients should be confirmed.",
      },
    ],
    specs: [
      { label: "Eye/nasal use", value: "0.001% – 0.01% active" },
      { label: "Contact-lens", value: "0.001% – 0.005% active" },
      { label: "Standards", value: "USP/BP/EP/IP · USP <51>" },
    ],
    benefits: [
      "GMP, pharmacopoeia-grade documentation",
      "Proven multi-dose preservative",
      "USP/BP/EP/IP compliance for submissions",
    ],
    faqs: [
      {
        question: "What concentration of BKC is used in eye drops?",
        answer: "Typically 0.001%–0.01% active quat, validated by USP <51> antimicrobial effectiveness testing.",
      },
      {
        question: "Do you provide pharmacopoeia-grade BKC?",
        answer: "Yes — GMP-certified BKC meeting USP, NF, BP, EP (Ph. Eur.), IP and JP monographs, with documentation for regulatory submissions.",
      },
      {
        question: "Is BKC suitable for multi-dose formulations?",
        answer: "Yes — it is a standard antimicrobial preservative for multi-dose ophthalmic and nasal products; confirm compatibility with the active and excipients.",
      },
    ],
    keywords: [
      "benzalkonium chloride pharmaceutical preservative",
      "bkc eye drops preservative",
      "benzalkonium chloride usp grade supplier",
      "bkc nasal spray preservative",
      "benzalkonium chloride pharma grade india",
    ],
  },

  "benzalkonium-chloride-swimming-pool-spa-algicide": {
    slug: "benzalkonium-chloride-swimming-pool-spa-algicide",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride Pool & Spa Algicide",
    description:
      "BKC as a swimming pool and spa algicide — preventive dosing (5–15 ppm), synergy with chlorine/bromine, and use as an algicide raw material. Supplier from India.",
    h1: "Benzalkonium Chloride as a Swimming Pool & Spa Algicide",
    intro:
      "Benzalkonium Chloride is a widely used algicide and supplementary sanitiser for residential and commercial swimming pools, spas and water features. Vasudev Chemo Pharma supplies BKC 50% (ready-to-blend) and BKC 80% (concentrate) to pool-chemical formulators.",
    sections: [
      {
        heading: "Dosing and synergy",
        id: "dosing",
        body: "A typical preventive dose is 5–15 ppm active quat (about 10–30 mL of BKC 50% per 1,000 L pool water) applied weekly. BKC works synergistically with chlorine, bromine and salt-chlorinated systems — especially at elevated pH where chlorine alone is less effective — and controls Pseudomonas, green/black algae and chlorine-resistant biofilms.",
      },
      {
        heading: "As an algicide raw material",
        id: "raw-material",
        body: "Pool-chemical brands formulate retail algicides at ~10%–20% BKC (from 80% concentrate) with stabilisers, fragrances and dyes. BKC is non-foaming at recommended pool concentrations and does not significantly shift pH, and it is compatible with standard chlorine, bromine, salt, UV and ozone systems.",
      },
    ],
    specs: [
      { label: "Preventive dose", value: "5 – 15 ppm active (weekly)" },
      { label: "Retail algicide", value: "~10% – 20% BKC in product" },
      { label: "Compatibility", value: "Chlorine · bromine · salt · UV · ozone" },
    ],
    benefits: [
      "Synergistic with chlorine at high pH",
      "Non-foaming at pool concentrations",
      "Concentrate grade for algicide blenders",
    ],
    faqs: [
      {
        question: "How much BKC is used to treat a pool?",
        answer: "A preventive dose is typically 5–15 ppm active quat, roughly 10–30 mL of BKC 50% per 1,000 L of pool water weekly.",
      },
      {
        question: "Does BKC replace chlorine in pools?",
        answer: "No — it is a supplementary algicide that works alongside chlorine or bromine, adding algae and biofilm control, especially at higher pH.",
      },
      {
        question: "What grade is best for making a retail algicide?",
        answer: "BKC 80% concentrate, diluted to ~10%–20% in the finished algicide with stabilisers and dyes.",
      },
    ],
    keywords: [
      "benzalkonium chloride pool algicide",
      "bkc swimming pool algaecide",
      "benzalkonium chloride pool dosage",
      "pool algicide raw material supplier",
      "bkc spa sanitiser",
    ],
  },

  "benzalkonium-chloride-cooling-tower-hvac-biocide": {
    slug: "benzalkonium-chloride-cooling-tower-hvac-biocide",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride Cooling Tower & HVAC Biocide (Legionella)",
    description:
      "BKC as a cooling-tower and HVAC biocide — slug/shock dosing (50–200 ppm), Legionella and SRB control, biofilm disruption. Water-treatment biocide supplier from India.",
    h1: "Benzalkonium Chloride as a Cooling Tower & HVAC Biocide",
    intro:
      "Benzalkonium Chloride controls Legionella pneumophila, sulphate-reducing bacteria (SRB) and biofilm in industrial cooling towers, HVAC chillers and recirculating water systems. Vasudev Chemo Pharma supplies BKC 50% and 80% to water-treatment biocide formulators.",
    sections: [
      {
        heading: "Dosing programs",
        id: "dosing",
        body: "Routine biological control uses a 50–100 ppm active-quat slug dose; biofilm disruption and Legionella control use a 100–200 ppm shock dose (aligned with guidance such as HSE ACOP L8). BKC is most effective against gram-negative bacteria (Pseudomonas, Legionella, Enterobacter) and helps preserve heat-exchanger performance by reducing microbially-influenced corrosion (MIC).",
      },
      {
        heading: "Program compatibility",
        id: "compatibility",
        body: "BKC is compatible with most phosphonate/polyacrylate dispersant programs and is typically alternated with an oxidising biocide for resistance management. Water-treatment companies formulate slug-dose products at ~20%–50% BKC (from 80% concentrate). Avoid anionic treatment chemicals that would deactivate the cationic quat.",
      },
    ],
    specs: [
      { label: "Routine slug dose", value: "50 – 100 ppm active" },
      { label: "Shock (Legionella)", value: "100 – 200 ppm active" },
      { label: "Product blend", value: "~20% – 50% BKC (from 80%)" },
    ],
    benefits: [
      "Legionella and SRB control",
      "Biofilm disruption / MIC reduction",
      "Concentrate grade for biocide blenders",
    ],
    faqs: [
      {
        question: "What BKC dose controls Legionella in cooling towers?",
        answer: "A shock dose of 100–200 ppm active quat is typical for biofilm disruption and Legionella control; 50–100 ppm for routine biological control.",
      },
      {
        question: "Is BKC compatible with cooling-water dispersants?",
        answer: "Yes — it is compatible with most phosphonate/polyacrylate programs; alternate with an oxidising biocide for resistance management and avoid anionic chemicals.",
      },
      {
        question: "Which grade do biocide formulators buy?",
        answer: "BKC 80% concentrate, diluted to ~20%–50% in finished slug-dose products.",
      },
    ],
    keywords: [
      "benzalkonium chloride cooling tower biocide",
      "bkc legionella control",
      "benzalkonium chloride hvac biocide",
      "quat biocide water treatment supplier",
      "bkc srb biofilm control",
    ],
  },

  "benzalkonium-chloride-poultry-dairy-farm-disinfectant": {
    slug: "benzalkonium-chloride-poultry-dairy-farm-disinfectant",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride for Poultry & Dairy Farm Disinfection",
    description:
      "BKC for poultry house, dairy farm and hatchery biosecurity — foot-bath and surface disinfection dosing (0.2–1.0%), Halal-certified supply from India.",
    h1: "Benzalkonium Chloride for Poultry & Dairy Farm Disinfection",
    intro:
      "Benzalkonium Chloride is a cornerstone biocide for agricultural biosecurity — poultry house pre-stocking decontamination, dairy hygiene, hatchery foot-baths and greenhouse sanitation. Vasudev Chemo Pharma supplies BKC 50% and 80% (Halal-certified) to farm-disinfectant formulators.",
    sections: [
      {
        heading: "Application dosing",
        id: "dosing",
        body: "Poultry and dairy disinfection typically uses 0.2%–0.5% active quat (1:100 to 1:250 dilution from 50%); foot-bath biosecurity zones use 0.5%–1.0% active quat. BKC controls the bacteria, fungi and enveloped viruses of concern in livestock housing and is applied by spray, fogging or immersion.",
      },
      {
        heading: "Concentrate for biosecurity brands",
        id: "concentrate",
        body: "Agricultural disinfectant brands blend BKC 80% concentrate into finished products at ~30%–60% (surface disinfectants) or ~25%–50% (foot-bath products) for end-user dilution. Halal certification supports export to Gulf and Southeast Asian agricultural markets.",
      },
    ],
    specs: [
      { label: "Surface disinfection", value: "0.2% – 0.5% active" },
      { label: "Foot-bath", value: "0.5% – 1.0% active" },
      { label: "Product blend", value: "25% – 60% BKC (from 80%)" },
    ],
    benefits: [
      "Broad-spectrum farm biosecurity active",
      "Halal-certified for Gulf/SE-Asia export",
      "50% and 80% grades for blenders",
    ],
    faqs: [
      {
        question: "What BKC dilution is used for poultry house disinfection?",
        answer: "Typically 0.2%–0.5% active quat (about 1:100 to 1:250 from BKC 50%); foot-baths use 0.5%–1.0% active.",
      },
      {
        question: "Is Halal-certified BKC available for farm disinfectants?",
        answer: "Yes — Halal-certified BKC 50% and 80% are available, which is important for export to Gulf and Southeast Asian markets.",
      },
      {
        question: "Which grade do biosecurity brands buy?",
        answer: "BKC 80% concentrate, blended to ~25%–60% in finished farm-disinfectant products.",
      },
    ],
    keywords: [
      "benzalkonium chloride poultry disinfectant",
      "bkc dairy farm disinfectant",
      "benzalkonium chloride foot bath disinfectant",
      "quat farm biosecurity disinfectant supplier",
      "bkc hatchery disinfectant",
    ],
  },

  "benzalkonium-chloride-veterinary-disinfectant": {
    slug: "benzalkonium-chloride-veterinary-disinfectant",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride for Veterinary Disinfection",
    description:
      "BKC for veterinary surface and equipment disinfection — clinic and kennel sanitation dosing, broad-spectrum efficacy, and concentrate supply from India.",
    h1: "Benzalkonium Chloride for Veterinary Surface & Equipment Disinfection",
    intro:
      "Benzalkonium Chloride is used across veterinary clinics, kennels, catteries and animal-transport equipment for surface and instrument sanitation. Vasudev Chemo Pharma supplies BKC 50% and 80% to veterinary-disinfectant formulators.",
    sections: [
      {
        heading: "Use and efficacy",
        id: "use",
        body: "Veterinary surface and equipment disinfection typically uses 0.1%–0.5% active quat depending on soil load and target organisms. BKC is effective against gram-positive and gram-negative bacteria, fungi and enveloped viruses common in animal-care environments, and is low-odour and non-staining at use concentrations.",
      },
      {
        heading: "Formulation notes",
        id: "formulation",
        body: "Veterinary brands typically formulate from BKC 80% concentrate with nonionic surfactants and sequestrants for hard-water tolerance. As with all quats, avoid anionic surfactants; ensure adequate contact time and pre-clean heavily soiled surfaces for full efficacy.",
      },
    ],
    specs: [
      { label: "Use concentration", value: "0.1% – 0.5% active" },
      { label: "Spectrum", value: "Bacteria · fungi · enveloped viruses" },
      { label: "Grades", value: "BKC 50% · BKC 80%" },
    ],
    benefits: [
      "Broad-spectrum, low-odour at use levels",
      "Formulate from concentrate with builders",
      "Consistent quat active from one manufacturer",
    ],
    faqs: [
      {
        question: "What concentration of BKC is used for veterinary disinfection?",
        answer: "Typically 0.1%–0.5% active quat, adjusted for soil load and target organisms.",
      },
      {
        question: "Is BKC suitable for animal-care equipment?",
        answer: "Yes — it is broad-spectrum, low-odour and non-staining at use concentrations; pre-clean heavily soiled items and allow adequate contact time.",
      },
      {
        question: "Which grade should a veterinary brand buy?",
        answer: "BKC 80% concentrate to formulate finished products, or BKC 50% for ready-to-dilute use.",
      },
    ],
    keywords: [
      "benzalkonium chloride veterinary disinfectant",
      "bkc animal clinic disinfectant",
      "veterinary quat disinfectant supplier",
      "bkc kennel disinfectant",
      "benzalkonium chloride vet grade",
    ],
  },

  "benzalkonium-chloride-wood-preservation": {
    slug: "benzalkonium-chloride-wood-preservation",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride for Wood Preservation",
    description:
      "BKC for wood preservation — surface-mildew control, log and outdoor-timber protection against fungal decay. Quat wood-preservative carrier supply from India.",
    h1: "Benzalkonium Chloride for Wood Preservation",
    intro:
      "Benzalkonium Chloride is used as a fungicidal active in wood preservation — controlling surface mildew, protecting logs and outdoor timber against fungal decay, and serving as the biocidal carrier in some pressure-treatment systems. Vasudev Chemo Pharma supplies BKC 50% and 80% to wood-preservative formulators.",
    sections: [
      {
        heading: "Use levels",
        id: "use-levels",
        body: "Wood preservation typically uses 0.5%–2% active quat applied as a surface spray, dip or pressure-treatment carrier solution. BKC controls decay fungi and surface mould/mildew and is often combined with other actives (e.g. copper systems) for durability classes requiring ground-contact protection.",
      },
      {
        heading: "Formulation",
        id: "formulation",
        body: "Preservative formulators blend from BKC 80% concentrate (typically 10%–25% in carrier solutions). Penetration and retention depend on wood species, moisture and treatment method; confirm efficacy against the target service class. As with all quats, avoid anionic co-formulants.",
      },
    ],
    specs: [
      { label: "Use concentration", value: "0.5% – 2% active" },
      { label: "Carrier blend", value: "10% – 25% BKC (from 80%)" },
      { label: "Function", value: "Fungicide / anti-mildew" },
    ],
    benefits: [
      "Controls decay fungi and surface mildew",
      "Compatible carrier for combination systems",
      "Concentrate grade for preservative blenders",
    ],
    faqs: [
      {
        question: "What BKC concentration is used for wood preservation?",
        answer: "Typically 0.5%–2% active quat, as a surface spray, dip or pressure-treatment carrier.",
      },
      {
        question: "Can BKC be combined with copper wood preservatives?",
        answer: "Yes — it is often used with other actives to meet durability classes; validate the combined system against the target service class.",
      },
      {
        question: "Which grade do preservative formulators buy?",
        answer: "BKC 80% concentrate, typically diluted to 10%–25% in the carrier solution.",
      },
    ],
    keywords: [
      "benzalkonium chloride wood preservative",
      "bkc wood preservation",
      "quat wood preservative supplier",
      "benzalkonium chloride anti-mildew wood",
      "bkc timber treatment biocide",
    ],
  },

  "benzalkonium-chloride-textile-antimicrobial-finish": {
    slug: "benzalkonium-chloride-textile-antimicrobial-finish",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride for Textile Antimicrobial Finishing",
    description:
      "BKC as a textile antimicrobial finish and cationic softener base — hospital scrubs, sportswear and uniforms. Pad-bath dosing and concentrate supply from India.",
    h1: "Benzalkonium Chloride for Textile Antimicrobial Finishing",
    intro:
      "Benzalkonium Chloride is applied as an antimicrobial finish and cationic softener base on textiles — hospital scrubs, sportswear, uniforms and technical fabrics — to control odour-causing bacteria and fungi. Vasudev Chemo Pharma supplies BKC 50% and 80% to textile-auxiliary formulators.",
    sections: [
      {
        heading: "Application on fabric",
        id: "application",
        body: "Antimicrobial finishing typically applies 0.05%–0.2% BKC on dry fabric weight after a pad-bath application, followed by drying/curing. The cationic quat has natural affinity for negatively-charged fibres, giving durable-to-wash antimicrobial and odour-control performance and a soft hand.",
      },
      {
        heading: "Formulation and compatibility",
        id: "compatibility",
        body: "Textile brands formulate pad-bath concentrates from BKC 80% (typically 10%–50% in the bath formulation). Combine with nonionic wetting agents; avoid anionic auxiliaries that would deactivate the cationic quat. Confirm wash-durability and skin-contact compliance for the end use.",
      },
    ],
    specs: [
      { label: "On-fabric add-on", value: "0.05% – 0.2% (dry weight)" },
      { label: "Pad-bath blend", value: "10% – 50% BKC (from 80%)" },
      { label: "Function", value: "Antimicrobial finish / softener" },
    ],
    benefits: [
      "Durable odour-control finish",
      "Cationic affinity for fibres",
      "Concentrate grade for auxiliary formulators",
    ],
    faqs: [
      {
        question: "How much BKC is applied to fabric for antimicrobial finish?",
        answer: "Typically 0.05%–0.2% on dry fabric weight after a pad-bath application, then dried/cured.",
      },
      {
        question: "Does the finish survive washing?",
        answer: "The cationic quat binds negatively-charged fibres, giving durable-to-wash performance; validate wash durability for your fabric and process.",
      },
      {
        question: "Which auxiliaries are compatible?",
        answer: "Nonionic wetting agents; avoid anionic auxiliaries that deactivate the cationic quat.",
      },
    ],
    keywords: [
      "benzalkonium chloride textile finish",
      "bkc antimicrobial textile",
      "quat textile softener supplier",
      "benzalkonium chloride odour control fabric",
      "bkc pad bath finish",
    ],
  },

  "benzalkonium-chloride-oilfield-produced-water-biocide": {
    slug: "benzalkonium-chloride-oilfield-produced-water-biocide",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride Oilfield & Produced-Water Biocide",
    description:
      "BKC as an oilfield biocide for produced-water and injection-system microbial control — SRB control, 50–200 ppm dosing, concentrate supply from India.",
    h1: "Benzalkonium Chloride as an Oilfield & Produced-Water Biocide",
    intro:
      "Benzalkonium Chloride is used for microbial control in oilfield produced water and water-injection systems, targeting sulphate-reducing bacteria (SRB) that drive souring and microbially-influenced corrosion. Vasudev Chemo Pharma supplies BKC 50% and 80% to oilfield-chemical formulators.",
    sections: [
      {
        heading: "Dosing and role",
        id: "dosing",
        body: "In produced-water and injection systems BKC is dosed at ~50–200 ppm active quat depending on bacterial load and system volume, applied as batch/slug treatment or continuous injection. It controls SRB and general aerobic/anaerobic bacteria, helping limit reservoir souring, biofilm and MIC in flowlines and injection wells.",
      },
      {
        heading: "Formulation",
        id: "formulation",
        body: "Oilfield-chemical companies formulate injection biocides at ~10%–40% BKC (from 80% concentrate). BKC is often alternated with other biocide chemistries for resistance management; confirm compatibility with corrosion inhibitors and scale inhibitors, and avoid anionic co-additives.",
      },
    ],
    specs: [
      { label: "Dose", value: "50 – 200 ppm active" },
      { label: "Product blend", value: "10% – 40% BKC (from 80%)" },
      { label: "Target", value: "SRB · aerobic/anaerobic bacteria" },
    ],
    benefits: [
      "SRB and biofilm control in water systems",
      "Reduces souring and MIC risk",
      "Concentrate grade for oilfield blenders",
    ],
    faqs: [
      {
        question: "What BKC dose is used in produced water?",
        answer: "Typically 50–200 ppm active quat, by batch/slug or continuous injection, depending on bacterial load and system volume.",
      },
      {
        question: "Does BKC control sulphate-reducing bacteria?",
        answer: "Yes — it controls SRB and general bacteria, helping limit reservoir souring and microbially-influenced corrosion.",
      },
      {
        question: "Is BKC compatible with other oilfield chemicals?",
        answer: "It is generally compatible with corrosion and scale inhibitors; confirm case-by-case and avoid anionic co-additives that deactivate the quat.",
      },
    ],
    keywords: [
      "benzalkonium chloride oilfield biocide",
      "bkc produced water biocide",
      "quat biocide srb control supplier",
      "benzalkonium chloride injection water biocide",
      "bkc oilfield microbial control",
    ],
  },

  "benzalkonium-chloride-phase-transfer-catalyst": {
    slug: "benzalkonium-chloride-phase-transfer-catalyst",
    category: "solutions",
    primaryProductPath: "/product/benzalkonium-chloride-50",
    primaryProductLabel: "View BKC 50% product",
    contactProductSlug: "benzalkonium-chloride-50",
    relatedProductLinks: [
      { href: "/product/benzalkonium-chloride-50", label: "Benzalkonium Chloride 50% (BKC 50%)" },
      { href: "/product/benzalkonium-chloride-80", label: "Benzalkonium Chloride 80% (BKC 80%)" },
    ],
    title: "Benzalkonium Chloride as a Phase-Transfer Catalyst",
    description:
      "BKC as a phase-transfer catalyst in fine-chemical and pharmaceutical synthesis — mechanism, typical loadings, and technical-grade supply from India.",
    h1: "Benzalkonium Chloride as a Phase-Transfer Catalyst",
    intro:
      "Beyond its biocidal uses, Benzalkonium Chloride is a cationic quaternary ammonium salt used as a phase-transfer catalyst (PTC) in fine-chemical and pharmaceutical synthesis. Vasudev Chemo Pharma supplies technical-grade BKC 50% and 80% to synthesis and specialty-chemical manufacturers.",
    sections: [
      {
        heading: "How it works",
        id: "mechanism",
        body: "As a PTC, the lipophilic quaternary ammonium cation ferries anionic reactants across the aqueous–organic interface, accelerating reactions such as nucleophilic substitutions, O-/N-alkylations, oxidations and eliminations in biphasic systems. This can improve rate, yield and selectivity while allowing milder conditions.",
      },
      {
        heading: "Typical loadings and grade",
        id: "loadings",
        body: "PTC applications typically use ~1%–10% BKC relative to substrate, adjusted empirically. Technical-grade BKC (50% or 80%) is used; the concentrate reduces water introduced to moisture-sensitive systems. Confirm compatibility with your solvent system and downstream work-up/purification.",
      },
    ],
    specs: [
      { label: "Typical loading", value: "~1% – 10% vs substrate" },
      { label: "Function", value: "Phase-transfer catalyst (PTC)" },
      { label: "Grade", value: "Technical BKC 50% / 80%" },
    ],
    benefits: [
      "Accelerates biphasic reactions",
      "Can improve yield and selectivity",
      "Concentrate limits added water",
    ],
    faqs: [
      {
        question: "Can Benzalkonium Chloride be used as a phase-transfer catalyst?",
        answer: "Yes — as a cationic quaternary ammonium salt it transfers anionic reactants across aqueous–organic interfaces, accelerating biphasic reactions.",
      },
      {
        question: "What loading of BKC is used as a PTC?",
        answer: "Typically ~1%–10% relative to substrate, optimised empirically for the specific reaction.",
      },
      {
        question: "Which grade is used for synthesis?",
        answer: "Technical-grade BKC 50% or 80%; the 80% concentrate limits water introduced into moisture-sensitive systems.",
      },
    ],
    keywords: [
      "benzalkonium chloride phase transfer catalyst",
      "bkc ptc synthesis",
      "quaternary ammonium phase transfer catalyst supplier",
      "benzalkonium chloride catalyst",
      "bkc technical grade synthesis",
    ],
  }
};

export function getCustomPageData(slug: string): LandingPageData | null {
  const page = CUSTOM_LANDING_PAGES_DATA[slug];
  if (!page) return null;

  // Ensure every landing page carries a visible/structured last-updated date
  // (SEO Rule 3). Entries may set their own datePublished/dateModified to
  // override; otherwise fall back to the content-review baseline date. Update
  // CONTENT_REVIEWED_DATE (or set per-entry dates) whenever content changes.
  return {
    ...page,
    datePublished: page.datePublished ?? CONTENT_REVIEWED_DATE,
    dateModified: page.dateModified ?? CONTENT_REVIEWED_DATE,
  };
}
