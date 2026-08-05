import Link from "next/link";

/*
 * BkcContentSections — renders the rich, unique Benzalkonium Chloride content
 * (chemical identifiers, synonyms & trade-name equivalents, application blocks,
 * a comparison table, the regulatory matrix, and an optional dilution guide)
 * as VISIBLE, crawlable on-page content on the BKC 50% / BKC 80% product pages.
 *
 * The data already existed in src/lib/seo/bkc-50-content.ts and
 * bkc-80-content.ts but was only surfaced in JSON-LD; this component makes it
 * indexable body content for SEO/AEO/GEO.
 */

type Row = { label: string; value: string };
type ApplicationBlock = { heading: string; paragraph: string; bullets: string[] };
type ComparisonTable = { title: string; headers: string[]; rows: string[][] };
type DilutionRow = {
  targetConcentration: string;
  bkc80Mass: string;
  waterMass: string;
  notes: string;
};
type HomologRow = {
  chainLength: string;
  commonName: string;
  casNumber: string;
  molecularFormula: string;
  molecularWeight: string;
};
type StructureSummary = {
  generalFormula: string;
  structureDescription: string;
  clarificationNote: string;
};

export type BkcContentSectionsProps = {
  productName: string;
  productSlug: string;
  skuBrand: string;
  identifiers: Row[];
  genericSynonyms: string[];
  tradeNames: string[];
  applicationBlocks: ApplicationBlock[];
  comparison: ComparisonTable;
  regulatory: Row[];
  dilution?: DilutionRow[];
  structureSummary?: StructureSummary;
  homologFormulas?: HomologRow[];
};

export default function BkcContentSections({
  productName,
  productSlug,
  skuBrand,
  identifiers,
  genericSynonyms,
  tradeNames,
  applicationBlocks,
  comparison,
  regulatory,
  dilution,
  structureSummary,
  homologFormulas,
}: BkcContentSectionsProps) {
  return (
    <>
      {/* ─── Chemical identifiers & synonyms ─────────────────────── */}
      <section id="identifiers" className="mb-16">
        <h2 className="font-heading text-h3 text-primary mb-6">
          What Are the Chemical Identifiers &amp; Synonyms of {productName}?
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-gray-600 mb-6">
          {productName} — CAS 8001-54-5 — is referenced across regulatory,
          customs and formulation systems by the identifiers below. Use this
          table to match technical specifications, customs HS codes and
          supplier brand names from any global source to the same active
          substance (ADBAC, CAS 8001-54-5).
        </p>

        <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto mb-8">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-5 py-3 font-semibold">Identifier</th>
                <th className="text-left px-5 py-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {identifiers.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3 font-medium text-gray-700">{row.label}</td>
                  <td className="px-5 py-3 text-primary font-mono text-xs sm:text-sm break-words">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="font-heading text-h5 text-primary mb-4">Common Synonyms</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {genericSynonyms.join(" · ")}
            </p>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 bg-light">
            <h3 className="font-heading text-h5 text-primary mb-4">
              Commercial Trade Names (Global Equivalents)
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Formulators worldwide reference this chemistry under many supplier
              brand names, all sharing CAS 8001-54-5:{" "}
              <strong className="text-primary">{tradeNames.join(", ")}</strong>.
              Vasudev Chemo Pharma supplies the same active substance under SKU{" "}
              <strong className="text-accent">{skuBrand}</strong> with COA-verified
              active matter.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Structure & formula ──────────────────────────────────── */}
      {structureSummary && (
        <section id="structure-formula" className="mb-16">
          <h2 className="font-heading text-h3 text-primary mb-6">
            {productName} Structure and Formula
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600 mb-4">
            {structureSummary.structureDescription}
          </p>
          <div className="border border-gray-200 rounded-2xl p-6 bg-light mb-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              General (mixture) formula
            </p>
            <p className="font-mono text-sm text-primary break-words">
              {structureSummary.generalFormula}
            </p>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600 mb-6">
            {structureSummary.clarificationNote}
          </p>

          {homologFormulas && homologFormulas.length > 0 && (
            <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-4 py-3 font-semibold">Alkyl Chain</th>
                    <th className="text-left px-4 py-3 font-semibold">Homolog Name</th>
                    <th className="text-left px-4 py-3 font-semibold">CAS No.</th>
                    <th className="text-left px-4 py-3 font-semibold">Molecular Formula</th>
                    <th className="text-left px-4 py-3 font-semibold">Mol. Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {homologFormulas.map((row, i) => (
                    <tr key={row.casNumber} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-4 py-3 font-medium text-gray-700">{row.chainLength}</td>
                      <td className="px-4 py-3 text-gray-600">{row.commonName}</td>
                      <td className="px-4 py-3 text-gray-600 font-mono text-xs">{row.casNumber}</td>
                      <td className="px-4 py-3 text-accent font-mono font-semibold">{row.molecularFormula}</td>
                      <td className="px-4 py-3 text-gray-600">{row.molecularWeight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* ─── Applications by industry ────────────────────────────── */}
      <section id="industry-applications" className="mb-16">
        <h2 className="font-heading text-h3 text-primary mb-6">
          What Is {productName} Used For? Applications &amp; Dosage by Industry
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-gray-600 mb-8">
          {productName} is used at 0.05%–0.4% active quat across healthcare,
          food &amp; beverage, personal care, water treatment, agriculture and
          industrial sectors as a disinfectant, sanitiser, algicide and
          preservative. Use the dosage ranges below as a starting point —
          always confirm efficacy in your specific formulation and against
          applicable regulations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {applicationBlocks.map((block) => (
            <div
              key={block.heading}
              className="border border-gray-200 rounded-2xl p-6 hover:border-accent/40 hover:shadow-md transition-all"
            >
              <h3 className="font-heading text-h5 text-primary mb-3">{block.heading}</h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-3">{block.paragraph}</p>
              <ul className="space-y-1.5">
                {block.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Dilution guide (BKC 80% only) ───────────────────────── */}
      {dilution && dilution.length > 0 && (
        <section id="dilution" className="mb-16">
          <h2 className="font-heading text-h3 text-primary mb-6">
            Dilution Guide — Making Working Concentrations from {productName}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600 mb-6">
            The 80% concentrate is diluted on-site to the working strength each
            application requires. Reference mass/volume ratios below; always verify
            against your own QC and regulatory limits (e.g. 200 ppm max for no-rinse
            food contact).
          </p>
          <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3 font-semibold">Target Concentration</th>
                  <th className="text-left px-5 py-3 font-semibold">BKC 80%</th>
                  <th className="text-left px-5 py-3 font-semibold">Water</th>
                  <th className="text-left px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {dilution.map((row, i) => (
                  <tr key={row.targetConcentration} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-5 py-3 font-medium text-primary">{row.targetConcentration}</td>
                    <td className="px-5 py-3 text-accent font-semibold">{row.bkc80Mass}</td>
                    <td className="px-5 py-3 text-gray-700">{row.waterMass}</td>
                    <td className="px-5 py-3 text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ─── Comparison table ────────────────────────────────────── */}
      <section id="comparison" className="mb-16">
        <h2 className="font-heading text-h3 text-primary mb-6">{comparison.title}</h2>
        <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-primary text-white">
                {comparison.headers.map((h, i) => (
                  <th
                    key={h}
                    className={`text-left px-4 py-3 font-semibold ${i === 1 ? "bg-accent/30" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((cells, i) => (
                <tr key={cells[0] ?? i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  {cells.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 ${
                        j === 0
                          ? "font-medium text-gray-700"
                          : j === 1
                            ? "text-accent font-semibold"
                            : "text-gray-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Regulatory & quality matrix ─────────────────────────── */}
      <section id="regulatory" className="mb-16">
        <h2 className="font-heading text-h3 text-primary mb-6">
          Is {productName} Regulatory-Compliant? Certifications &amp; Quality Status
        </h2>
        <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm min-w-[520px]">
            <tbody>
              {regulatory.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-3 font-medium text-gray-700 w-56 align-top">{row.label}</td>
                  <td className="px-5 py-3 text-gray-700 leading-relaxed">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 italic mt-4">
          Sources: US EPA List N (Disinfectants for Use Against SARS-CoV-2) —
          applicable only to specific finished-formulation products bearing
          an EPA registration number and label directions derived from this
          active ingredient, not to the raw concentrate itself,{" "}
          <a
            href="https://www.epa.gov/pesticide-registration/list-n-disinfectants-coronavirus-covid-19"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-gray-600"
          >
            epa.gov/list-n
          </a>
          ; US FDA 21 CFR 178.1010 (food-contact sanitising solutions),{" "}
          <a
            href="https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-178/subpart-C/section-178.1010"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-gray-600"
          >
            ecfr.gov/178.1010
          </a>
          ; ECHA CLP/GHS classification for ADBAC (CAS 8001-54-5); EN 1276 /
          EN 14476 / AOAC use-dilution efficacy test methods.
        </p>
        <p className="mt-6 text-sm text-gray-600 max-w-3xl">
          Need grade-specific documentation for {productName}?{" "}
          <Link
            href={`/contact?product=${encodeURIComponent(productSlug)}`}
            className="text-accent hover:underline font-medium"
          >
            Contact us
          </Link>{" "}
          for COA, SDS, TDS, GMP and Halal certificates.
        </p>
      </section>
    </>
  );
}
