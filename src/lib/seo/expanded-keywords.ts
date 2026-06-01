import { BKC_50_BUYING_INTENT, BKC_50_RESEARCH_BASED } from "./bkc-50-keywords";
import { BKC_80_BUYING_INTENT, BKC_80_RESEARCH_BASED } from "./bkc-80-keywords";
import { MEA_TRIAZINE_78_BUYING_INTENT, MEA_TRIAZINE_78_RESEARCH_BASED } from "./mea-triazine-78-keywords";
import { MMA_TRIAZINE_40_BUYING_INTENT, MMA_TRIAZINE_40_RESEARCH_BASED } from "./mma-triazine-40-keywords";
import { TRIAZINE_SCAVENGER_GENERAL_BUYING_INTENT, TRIAZINE_SCAVENGER_GENERAL_RESEARCH_BASED } from "./triazine-h2s-scavenger-general-keywords";
import { METAL_WORKING_FLUIDS_BUYING_INTENT, METAL_WORKING_FLUIDS_RESEARCH_BASED } from "./metal-working-fluids-keywords";
import { BIOCIDE_OIL_GAS_BUYING_INTENT, BIOCIDE_OIL_GAS_RESEARCH_BASED } from "./biocide-oil-gas-keywords";
import { MEA_TRIAZINE_78_HIGH_CONC_BUYING_INTENT, MEA_TRIAZINE_78_HIGH_CONC_RESEARCH_BASED } from "./mea-triazine-78-high-concentration-keywords";
import { MMA_TRIAZINE_40_BTX_FREE_BUYING_INTENT, MMA_TRIAZINE_40_BTX_FREE_RESEARCH_BASED } from "./mma-triazine-40-btx-free-keywords";
import { EDDM_BUYING_INTENT, EDDM_RESEARCH_BASED } from "./eddm-keywords";
import { SCS_40_BUYING_INTENT, SCS_40_RESEARCH_BASED } from "./scs-40-keywords";

// Import new product keyword collections
import { PTSA_LONG_TAIL_KEYWORDS } from "./p-toluenesulfonic-acid-keywords";
import { SCS_90_LONG_TAIL_KEYWORDS } from "./scs-90-keywords";
import { SXS_90_LONG_TAIL_KEYWORDS } from "./sxs-90-keywords";
import { SXS_40_LONG_TAIL_KEYWORDS } from "./sxs-40-keywords";
import { BIS_2_CHLOROETHYL_AMINE_HCL_LONG_TAIL_KEYWORDS } from "./bis-2-chloroethyl-amine-hydrochloride-keywords";
import { DEAEC_HCL_LONG_TAIL_KEYWORDS } from "./di-ethyl-amino-ethyl-chloride-hydrochloride-keywords";
import { AMIT_LONG_TAIL_KEYWORDS } from "./2-amino-5-methylthiazole-keywords";
import { CEA_HCL_LONG_TAIL_KEYWORDS } from "./2-chloroethylamine-hydrochloride-keywords";

export const EXPANDED_KEYWORDS = {
  "mea-triazine-78-h2s-scavenger": {
    buyingIntent: MEA_TRIAZINE_78_BUYING_INTENT,
    researchBased: MEA_TRIAZINE_78_RESEARCH_BASED
  },
  "mma-triazine-40": {
    buyingIntent: MMA_TRIAZINE_40_BUYING_INTENT,
    researchBased: MMA_TRIAZINE_40_RESEARCH_BASED
  },
  "triazine-h2s-scavenger-general": {
    buyingIntent: TRIAZINE_SCAVENGER_GENERAL_BUYING_INTENT,
    researchBased: TRIAZINE_SCAVENGER_GENERAL_RESEARCH_BASED
  },
  "metal-working-fluids": {
    buyingIntent: METAL_WORKING_FLUIDS_BUYING_INTENT,
    researchBased: METAL_WORKING_FLUIDS_RESEARCH_BASED
  },
  "biocide-oil-gas": {
    buyingIntent: BIOCIDE_OIL_GAS_BUYING_INTENT,
    researchBased: BIOCIDE_OIL_GAS_RESEARCH_BASED
  },
  "mea-triazine-78-high-concentration": {
    buyingIntent: MEA_TRIAZINE_78_HIGH_CONC_BUYING_INTENT,
    researchBased: MEA_TRIAZINE_78_HIGH_CONC_RESEARCH_BASED
  },
  "mma-triazine-40-btx-free": {
    buyingIntent: MMA_TRIAZINE_40_BTX_FREE_BUYING_INTENT,
    researchBased: MMA_TRIAZINE_40_BTX_FREE_RESEARCH_BASED
  },
  "eddm-non-triazine-h2s-scavenger": {
    buyingIntent: EDDM_BUYING_INTENT,
    researchBased: EDDM_RESEARCH_BASED
  },
  "sodium-cumene-sulfonate-40": {
    buyingIntent: SCS_40_BUYING_INTENT,
    researchBased: SCS_40_RESEARCH_BASED
  },
  "benzalkonium-chloride-50": {
    buyingIntent: BKC_50_BUYING_INTENT,
    researchBased: BKC_50_RESEARCH_BASED
  },
  "benzalkonium-chloride-80": {
    buyingIntent: BKC_80_BUYING_INTENT,
    researchBased: BKC_80_RESEARCH_BASED
  },
  // Add maps for remaining products, splitting long tail lists dynamically or using direct maps
  "p-toluenesulfonic-acid": {
    buyingIntent: PTSA_LONG_TAIL_KEYWORDS,
    researchBased: []
  },
  "sodium-cumene-sulfonate-90": {
    buyingIntent: SCS_90_LONG_TAIL_KEYWORDS.slice(0, 150),
    researchBased: SCS_90_LONG_TAIL_KEYWORDS.slice(150)
  },
  "sodium-xylene-solid-sulfonate-90": {
    // Note: products.ts slug is sodium-xylene-sulfonate-90, let's use that
    buyingIntent: SXS_90_LONG_TAIL_KEYWORDS.slice(0, 150),
    researchBased: SXS_90_LONG_TAIL_KEYWORDS.slice(150)
  },
  "sodium-xylene-sulfonate-90": {
    buyingIntent: SXS_90_LONG_TAIL_KEYWORDS.slice(0, 150),
    researchBased: SXS_90_LONG_TAIL_KEYWORDS.slice(150)
  },
  "sodium-xylene-sulfonate-40": {
    buyingIntent: SXS_40_LONG_TAIL_KEYWORDS.slice(0, 150),
    researchBased: SXS_40_LONG_TAIL_KEYWORDS.slice(150)
  },
  "bis-2-chloroethyl-amine-hydrochloride": {
    buyingIntent: BIS_2_CHLOROETHYL_AMINE_HCL_LONG_TAIL_KEYWORDS,
    researchBased: []
  },
  "di-ethyl-amino-ethyl-chloride-hydrochloride": {
    buyingIntent: DEAEC_HCL_LONG_TAIL_KEYWORDS,
    researchBased: []
  },
  "2-amino-5-methylthiazole": {
    buyingIntent: AMIT_LONG_TAIL_KEYWORDS,
    researchBased: []
  },
  "2-chloroethylamine-hydrochloride": {
    buyingIntent: CEA_HCL_LONG_TAIL_KEYWORDS,
    researchBased: []
  }
};

