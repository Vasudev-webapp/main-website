import { RichText } from "@payloadcms/richtext-lexical/react";

import { isLexicalBody, type ArticleBody } from "@/lib/blog/lexical-text";

type ArticleSectionBodyProps = {
  body: ArticleBody;
};

/**
 * Renders one article section body.
 *
 * Hard-coded articles store the body as a single plain string; CMS articles
 * store Lexical rich text so authors can add H3/H4 subheadings, real tables,
 * lists and links. Both are server-rendered into static HTML, which is what
 * keeps the content readable by Google and by AI crawlers that do not execute
 * JavaScript.
 */
export default function ArticleSectionBody({ body }: ArticleSectionBodyProps) {
  if (typeof body === "string") {
    return <p className="text-secondary leading-relaxed">{body}</p>;
  }

  if (!isLexicalBody(body)) return null;

  return (
    <div className="article-richtext text-secondary leading-relaxed">
      <RichText data={body} />
    </div>
  );
}
