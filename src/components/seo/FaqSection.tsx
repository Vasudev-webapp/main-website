import SectionLabel from "@/components/SectionLabel";
import FaqAccordion, { type FaqAccordionItem } from "@/components/seo/FaqAccordion";
import FAQSchema from "@/components/seo/FAQSchema";

/**
 * FaqSection — page-level FAQ block: SectionLabel pill + section heading +
 * the canonical FaqAccordion, with FAQPage JSON-LD rendered from the same
 * items so visible content and structured data always match.
 *
 * Production builds omit any item still containing an unresolved
 * "[CONFIRM WITH CLIENT" marker (from both the list and the schema), and the
 * section is not rendered at all when no items remain.
 */
const PLACEHOLDER_MARKER = "[CONFIRM WITH CLIENT";

type FaqSectionProps = {
  items: FaqAccordionItem[];
  label?: string;
  title?: string;
  className?: string;
  id?: string;
};

export default function FaqSection({
  items,
  label = "FAQ",
  title = "Frequently asked questions",
  className = "py-12 lg:py-20",
  id = "faq",
}: FaqSectionProps) {
  const visibleItems =
    process.env.NODE_ENV === "production"
      ? items.filter(
          (item) =>
            !item.question.includes(PLACEHOLDER_MARKER) &&
            !item.answer.includes(PLACEHOLDER_MARKER)
        )
      : items;

  if (visibleItems.length === 0) return null;

  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={className}>
      <FAQSchema items={visibleItems} />
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2
            id={headingId}
            className="font-heading text-h2 font-semibold text-primary mt-4"
          >
            {title}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={visibleItems} />
        </div>
      </div>
    </section>
  );
}
