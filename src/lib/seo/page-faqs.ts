import type { FaqAccordionItem } from "@/components/seo/FaqAccordion";

/**
 * Page-level FAQ content for core pages, rendered via <FaqSection />.
 *
 * Keep questions unique across pages (and distinct from the /service FAQs) so
 * no two pages publish the same FAQPage entries.
 */

export const HOME_FAQS: FaqAccordionItem[] = [
  {
    question: "Is Vasudev Chemo Pharma a manufacturer or a trader?",
    answer:
      "We are a manufacturer. Our products are produced in Gujarat, India, and supplied directly to industrial buyers, formulators and distributors, so you deal with the producer rather than a trading intermediary.",
  },
  {
    question: "Which product groups do you focus on?",
    answer:
      "Our range covers three groups: speciality chemicals, including MEA Triazine 78% and MMA Triazine 40% H2S scavengers; surfactant chemicals such as sodium cumene sulfonate and sodium xylene sulfonate hydrotropes; and pharmaceutical intermediates. The current list is on our products page.",
  },
  {
    question: "Do you supply buyers outside India?",
    answer:
      "Yes. We supply domestic customers in India as well as export buyers. Tell us your destination country or port and we will confirm the shipping options and export documentation available for that market.",
  },
  {
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Yes, samples are available to qualified business buyers for lab evaluation. Share the product, your intended application and the delivery country through our contact form, and our team will confirm sample availability and dispatch details.",
  },
  {
    question: "How do I get a price quote?",
    answer:
      "Send an enquiry through the contact form, email or WhatsApp with the product name and grade, required quantity, packaging preference and delivery location. Prices depend on quantity, packaging, destination and Incoterms, so each enquiry is quoted individually rather than from a fixed price list.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantity varies by product and by whether the order is domestic or export. Please tell us your expected volume and we will confirm the MOQ for that product.",
  },
];

export const ABOUT_FAQS: FaqAccordionItem[] = [
  {
    question: "When was Vasudev Chemo Pharma established?",
    answer:
      "Vasudev Chemo Pharma was established in 2017 and manufactures industrial, specialty and surfactant chemicals in Gujarat, India.",
  },
  {
    question: "Where is your manufacturing facility?",
    answer:
      "Our manufacturing facility is in Gujarat, India — one of the country's main chemical manufacturing regions, with established road and port connections for domestic distribution and export shipments. The full address is listed on our contact page.",
  },
  {
    question: "How do you control product quality?",
    answer:
      "Each production batch is tested against the product's specification before dispatch, and the results are reported on a batch Certificate of Analysis (COA) supplied with the shipment.",
  },
  {
    question: "What does your ISO 9001:2015 certification cover?",
    answer:
      "ISO 9001:2015 is a quality management system standard: it covers how manufacturing and quality processes are planned, controlled and documented, rather than certifying an individual product. Our manufacturing operations are ISO 9001:2015 certified. For certificate details, please contact our team.",
  },
  {
    question: "What regulatory and safety documents can you provide?",
    answer:
      "For our products we provide a Safety Data Sheet (SDS) and Technical Data Sheet (TDS), along with the batch COA for each shipment. Please ask for the specific documentation you need.",
  },
  {
    question: "Can customers audit or visit the manufacturing facility?",
    answer:
      "If you would like to visit or audit our manufacturing facility in Ankleshwar, Gujarat, contact our team by email, phone or the contact form. Tell us your preferred dates and the purpose of the visit, and we will confirm the arrangements.",
  },
];

export const CONTACT_FAQS: FaqAccordionItem[] = [
  {
    question: "How quickly will I get a reply to my enquiry?",
    answer:
      "Our team replies within 24 hours with pricing, specifications and export documentation support.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Include the product name and grade (or CAS number), the quantity you need, your preferred packaging, the delivery country or port, and the intended application. These details let us prepare a complete quote without extra rounds of questions.",
  },
  {
    question: "Can I request technical documents before placing an order?",
    answer:
      "Yes. Mention the product in your message and ask for its Technical Data Sheet (TDS) or Safety Data Sheet (SDS). We share these with business buyers so you can evaluate the product before ordering.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can send an enquiry through the contact form at any time, and our team replies within 24 hours. You can also call +91 8238641294 (sales enquiries) or +91 9898837713 (general enquiries), email sales@vasudevchemopharma.com or export@vasudevchemopharma.com, or message us on WhatsApp.",
  },
  {
    question: "What payment terms do you accept?",
    answer:
      "The agreed payment terms are confirmed on the proforma invoice for each order.",
  },
  {
    question: "Will my enquiry details be kept confidential?",
    answer:
      "How we handle the details you submit is described in our privacy policy. Please sign an NDA before a customer shares a confidential formulation or specification.",
  },
];

export const PRODUCTS_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question:
      "How do I choose between grades of the same product, such as 40% and 90%?",
    answer:
      "Grades usually differ in active content and physical form. For example, sodium cumene sulfonate is offered as a 40% liquid and a 90% powder: the liquid grade blends directly into liquid formulations, while the high-active powder suits powder or concentrated products and reduces the water you pay to ship. Share your formulation type and we will recommend a grade.",
  },
  {
    question: "Where can I find the specifications for a product?",
    answer:
      "Each product page lists key identifiers such as chemical formula and CAS number. Full specifications — assay, appearance, pH and other parameters — are given in the product's Technical Data Sheet, which you can request from the product page or the contact form.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Packaging depends on the product's physical form. Please tell us your preferred packaging when you enquire.",
  },
  {
    question: "What if the product I need is not listed?",
    answer:
      "The listed catalogue does not cover every chemical we can supply or manufacture. Send us the chemical name, CAS number and required specification, and we will confirm whether we can supply it.",
  },
  {
    question: "What is the typical lead time for an order?",
    answer:
      "Lead time depends on the product, the quantity and the current production schedule. The expected dispatch date is confirmed in our quotation.",
  },
];

export const INDUSTRIES_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question: "My industry is not listed. Can you still help?",
    answer:
      "Yes. The industries shown are where our products are most commonly used, not a complete list. If your process needs one of our chemicals, or a chemical with a similar function, contact us with details of the application.",
  },
  {
    question: "Do you provide technical support for using your products?",
    answer:
      "Our team can share technical data sheets, typical usage information and application guidance. Optimum dosage and process conditions depend on your system, so they should be confirmed through lab or field trials at your site.",
  },
  {
    question: "Can I run a trial before switching suppliers?",
    answer:
      "Yes. Industrial buyers commonly qualify a new supplier through a sample evaluation followed by a plant or field trial. We can provide samples and documentation to support your qualification process, with trial quantities agreed per enquiry.",
  },
  {
    question: "Do you supply distributors as well as end users?",
    answer:
      "Yes. We supply distributors and re-exporters as well as end users. For example, for the UAE we support re-export from the Jebel Ali Free Trade Zone for distribution across GCC countries. Share your region, products and expected volumes through the contact form and our team will discuss supply with you.",
  },
];

export const APPLICATIONS_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question: "How should I use the application guides on this page?",
    answer:
      "Each guide covers one use case — such as natural gas, crude oil or biogas H2S treatment, or biocide use in water treatment and metalworking fluids — and explains how the relevant product is typically applied. Start with the guide closest to your process, then contact us with your operating conditions for a specific recommendation.",
  },
  {
    question:
      "Is the same H2S scavenger suitable for gas and liquid hydrocarbon streams?",
    answer:
      "Not always. Water-based triazine scavengers are widely used in gas streams and water-wet systems, while some liquid hydrocarbon systems are better served by a different scavenger chemistry depending on water content, temperature and mixing. Share your stream type, H2S level, temperature and water content so we can recommend a suitable product.",
  },
  {
    question: "Why don't the guides give a single fixed dosage?",
    answer:
      "Dosage depends on contaminant concentration, flow rate, contact time, temperature and the injection method, so a rate that works on one system can be wrong on another. Treat any figures in the guides as a starting point and confirm the rate through trials and monitoring on your own system.",
  },
  {
    question: "Are your products compatible with other treatment chemicals?",
    answer:
      "Compatibility depends on the specific chemicals and concentrations involved; for example, triazine scavengers can interact with some corrosion inhibitors. We recommend a compatibility test with your existing chemical programme before field use.",
  },
];

export const COMPARE_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question: "What do these comparison pages compare?",
    answer:
      "Each page sets our MEA Triazine 78% alongside a named branded or distributor product, covering points such as active chemistry, typical concentration, supply route and markets served. The pages are a starting point for evaluation, not a performance guarantee.",
  },
  {
    question: "Is Vasudev Chemo Pharma affiliated with the brands mentioned?",
    answer:
      "No. Brand and product names on these pages are trademarks of their respective owners and are used only to identify the products being compared. We are not affiliated with or endorsed by those companies.",
  },
  {
    question: "Can MEA Triazine 78% directly replace my current H2S scavenger?",
    answer:
      "Products with the same active chemistry often perform similarly, but concentration, formulation additives and your operating conditions all affect results. Before switching, compare the specifications side by side and run a lab or field trial on your own system.",
  },
  {
    question: "Can you match my current product's specification?",
    answer:
      "Send us the technical data sheet or specification of the product you use now. Our team will compare it with our grades and tell you how closely we can match it.",
  },
];

export const RESOURCES_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question: "How are these resources different from the blog?",
    answer:
      "Resources are reference-style technical guides on chemistry, selection, dosing and troubleshooting, written to stay useful over time. The blog covers industry topics, product comparisons and buying guides.",
  },
  {
    question: "Can these guides replace site-specific engineering advice?",
    answer:
      "No. The guides explain general principles and typical practice. Treatment design for a specific plant should be confirmed by qualified engineers using your operating data, lab results and field trials.",
  },
  {
    question: "Do the figures in the guides apply to the exact grade I buy?",
    answer:
      "Figures such as concentrations or typical dosage ranges describe general practice or our standard grades. Always check them against the current Technical Data Sheet for the exact grade you purchase.",
  },
  {
    question: "Can I suggest a topic for a new guide?",
    answer:
      "Yes. If you have a technical question about H2S scavenging, hydrotropes or another product area we have not covered, send it through the contact form. Recurring questions help us decide which guides to write next.",
  },
];

export const BLOG_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question: "What topics does the blog cover?",
    answer:
      "The blog covers H2S scavengers and triazine chemistry, hydrotropes and surfactants, biocides, product comparisons, and buying guides for industrial chemicals, including supply questions for international buyers.",
  },
  {
    question: "Who writes and reviews the articles?",
    answer:
      "Articles are published by Vasudev Chemo Pharma, a manufacturer of industrial, specialty and surfactant chemicals, and each article shows its author. For product-specific technical details, refer to the product's Technical Data Sheet and Safety Data Sheet or contact our team.",
  },
  {
    question: "Can I rely on an article for decisions about my own process?",
    answer:
      "Articles are general information. Operating conditions vary between sites, so confirm any treatment, dosage or handling decision against the product's current TDS and SDS, and through trials on your own system.",
  },
  {
    question: "How can I ask a question about an article?",
    answer:
      "Send your question through the contact form and mention the article title. Our team will reply directly.",
  },
];

export const CASE_STUDY_INDEX_FAQS: FaqAccordionItem[] = [
  {
    question: "Are the clients in these case studies named?",
    answer:
      "Each case study focuses on the project, the problem and the measured results. If you would like more detail about a specific project, contact our team and mention the case study title.",
  },
  {
    question: "Can I expect the same results at my site?",
    answer:
      "Not necessarily. Each case study reflects one site's conditions — feed composition, equipment and operating practice. Results at your site depend on your own conditions, which is why we recommend a trial before full-scale use.",
  },
  {
    question: "Can you provide customer references?",
    answer:
      "Tell us your application and country through the contact form and our team will advise what information we can share. To evaluate our products, you can also request the TDS, SDS and a sample COA, or a product sample.",
  },
  {
    question: "How do I start a similar project with you?",
    answer:
      "Contact us with a description of your process, the problem you want to solve and your current treatment, if any. We will suggest a suitable product, share technical documents and agree on a sample or trial plan.",
  },
];
