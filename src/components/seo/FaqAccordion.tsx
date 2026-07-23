/**
 * FaqAccordion — the single, canonical FAQ UI for the whole site.
 *
 * Matches the product-page FAQ styling: rounded-2xl bordered cards, purple
 * (text-primary) question, accent "+" that rotates to "×" on open. Pure CSS
 * `<details>` (no client JS), so it works in Server Components.
 *
 * Use this everywhere a FAQ list is rendered so the UI/UX stays consistent.
 * (Render <FAQSchema items={faqs} /> separately for structured data.)
 */
export type FaqAccordionItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqAccordionItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="border border-gray-200 rounded-2xl overflow-hidden group"
        >
          <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-medium text-primary hover:bg-gray-50 transition-colors">
            {faq.question}
            <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl">
              +
            </span>
          </summary>
          <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
