import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blogs_entry_type" AS ENUM('article', 'image-override');
  CREATE TYPE "public"."enum_blogs_category" AS ENUM('H2S Scavengers', 'Technical Guides', 'Specialty Chemicals', 'Sustainability', 'Comparisons', 'Buying Guides', 'Brand Alternatives', 'Applications', 'Safety & Handling', 'Company News');
  CREATE TYPE "public"."enum_blogs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blogs_v_version_entry_type" AS ENUM('article', 'image-override');
  CREATE TYPE "public"."enum__blogs_v_version_category" AS ENUM('H2S Scavengers', 'Technical Guides', 'Specialty Chemicals', 'Sustainability', 'Comparisons', 'Buying Guides', 'Brand Alternatives', 'Applications', 'Safety & Handling', 'Company News');
  CREATE TYPE "public"."enum__blogs_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "blogs_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" jsonb
  );
  
  CREATE TABLE "blogs_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "blogs_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "blogs_secondary_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "blogs_internal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "blogs_external_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "_blogs_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar,
  	"body" jsonb
  );
  
  CREATE TABLE "_blogs_v_version_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_version_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_version_secondary_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_version_internal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_version_external_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_entry_type" "enum__blogs_v_version_entry_type" DEFAULT 'article',
  	"version_category" "enum__blogs_v_version_category",
  	"version_excerpt" varchar,
  	"version_quote" varchar,
  	"version_closing" varchar,
  	"version_primary_keyword" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_no_index" boolean DEFAULT false,
  	"version_canonical_override" varchar,
  	"version_image" varchar,
  	"version_google_drive_image_url" varchar,
  	"version_image_alt" varchar,
  	"version_author" varchar DEFAULT 'Vasudev Chemo Pharma Technical Team',
  	"version_author_credentials" varchar DEFAULT 'Specialty chemical manufacturing & H2S scavenger formulation',
  	"version_related_product_slug" varchar,
  	"version_published_date" timestamp(3) with time zone,
  	"version_last_updated" timestamp(3) with time zone,
  	"version_featured" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blogs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "blogs" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "blogs" ALTER COLUMN "slug" DROP NOT NULL;
  ALTER TABLE "blogs" ADD COLUMN "entry_type" "enum_blogs_entry_type" DEFAULT 'article';
  ALTER TABLE "blogs" ADD COLUMN "category" "enum_blogs_category";
  ALTER TABLE "blogs" ADD COLUMN "excerpt" varchar;
  ALTER TABLE "blogs" ADD COLUMN "quote" varchar;
  ALTER TABLE "blogs" ADD COLUMN "closing" varchar;
  ALTER TABLE "blogs" ADD COLUMN "primary_keyword" varchar;
  ALTER TABLE "blogs" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "blogs" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "blogs" ADD COLUMN "no_index" boolean DEFAULT false;
  ALTER TABLE "blogs" ADD COLUMN "canonical_override" varchar;
  ALTER TABLE "blogs" ADD COLUMN "image_alt" varchar;
  ALTER TABLE "blogs" ADD COLUMN "author" varchar DEFAULT 'Vasudev Chemo Pharma Technical Team';
  ALTER TABLE "blogs" ADD COLUMN "author_credentials" varchar DEFAULT 'Specialty chemical manufacturing & H2S scavenger formulation';
  ALTER TABLE "blogs" ADD COLUMN "related_product_slug" varchar;
  ALTER TABLE "blogs" ADD COLUMN "published_date" timestamp(3) with time zone;
  ALTER TABLE "blogs" ADD COLUMN "last_updated" timestamp(3) with time zone;
  ALTER TABLE "blogs" ADD COLUMN "featured" boolean DEFAULT false;
  ALTER TABLE "blogs" ADD COLUMN "_status" "enum_blogs_status" DEFAULT 'draft';
  ALTER TABLE "blogs_sections" ADD CONSTRAINT "blogs_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_bullets" ADD CONSTRAINT "blogs_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_faqs" ADD CONSTRAINT "blogs_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_secondary_keywords" ADD CONSTRAINT "blogs_secondary_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_internal_links" ADD CONSTRAINT "blogs_internal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_external_links" ADD CONSTRAINT "blogs_external_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_sections" ADD CONSTRAINT "_blogs_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_bullets" ADD CONSTRAINT "_blogs_v_version_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_faqs" ADD CONSTRAINT "_blogs_v_version_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_secondary_keywords" ADD CONSTRAINT "_blogs_v_version_secondary_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_internal_links" ADD CONSTRAINT "_blogs_v_version_internal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_external_links" ADD CONSTRAINT "_blogs_v_version_external_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_parent_id_blogs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "blogs_sections_order_idx" ON "blogs_sections" USING btree ("_order");
  CREATE INDEX "blogs_sections_parent_id_idx" ON "blogs_sections" USING btree ("_parent_id");
  CREATE INDEX "blogs_bullets_order_idx" ON "blogs_bullets" USING btree ("_order");
  CREATE INDEX "blogs_bullets_parent_id_idx" ON "blogs_bullets" USING btree ("_parent_id");
  CREATE INDEX "blogs_faqs_order_idx" ON "blogs_faqs" USING btree ("_order");
  CREATE INDEX "blogs_faqs_parent_id_idx" ON "blogs_faqs" USING btree ("_parent_id");
  CREATE INDEX "blogs_secondary_keywords_order_idx" ON "blogs_secondary_keywords" USING btree ("_order");
  CREATE INDEX "blogs_secondary_keywords_parent_id_idx" ON "blogs_secondary_keywords" USING btree ("_parent_id");
  CREATE INDEX "blogs_internal_links_order_idx" ON "blogs_internal_links" USING btree ("_order");
  CREATE INDEX "blogs_internal_links_parent_id_idx" ON "blogs_internal_links" USING btree ("_parent_id");
  CREATE INDEX "blogs_external_links_order_idx" ON "blogs_external_links" USING btree ("_order");
  CREATE INDEX "blogs_external_links_parent_id_idx" ON "blogs_external_links" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_version_sections_order_idx" ON "_blogs_v_version_sections" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_sections_parent_id_idx" ON "_blogs_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_version_bullets_order_idx" ON "_blogs_v_version_bullets" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_bullets_parent_id_idx" ON "_blogs_v_version_bullets" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_version_faqs_order_idx" ON "_blogs_v_version_faqs" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_faqs_parent_id_idx" ON "_blogs_v_version_faqs" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_version_secondary_keywords_order_idx" ON "_blogs_v_version_secondary_keywords" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_secondary_keywords_parent_id_idx" ON "_blogs_v_version_secondary_keywords" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_version_internal_links_order_idx" ON "_blogs_v_version_internal_links" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_internal_links_parent_id_idx" ON "_blogs_v_version_internal_links" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_version_external_links_order_idx" ON "_blogs_v_version_external_links" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_external_links_parent_id_idx" ON "_blogs_v_version_external_links" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_parent_idx" ON "_blogs_v" USING btree ("parent_id");
  CREATE INDEX "_blogs_v_version_version_title_idx" ON "_blogs_v" USING btree ("version_title");
  CREATE INDEX "_blogs_v_version_version_slug_idx" ON "_blogs_v" USING btree ("version_slug");
  CREATE INDEX "_blogs_v_version_version_updated_at_idx" ON "_blogs_v" USING btree ("version_updated_at");
  CREATE INDEX "_blogs_v_version_version_created_at_idx" ON "_blogs_v" USING btree ("version_created_at");
  CREATE INDEX "_blogs_v_version_version__status_idx" ON "_blogs_v" USING btree ("version__status");
  CREATE INDEX "_blogs_v_created_at_idx" ON "_blogs_v" USING btree ("created_at");
  CREATE INDEX "_blogs_v_updated_at_idx" ON "_blogs_v" USING btree ("updated_at");
  CREATE INDEX "_blogs_v_latest_idx" ON "_blogs_v" USING btree ("latest");
  CREATE INDEX "_blogs_v_autosave_idx" ON "_blogs_v" USING btree ("autosave");
  CREATE INDEX "blogs__status_idx" ON "blogs" USING btree ("_status");`)

  // Every row that existed before this migration was created purely to override
  // the hero image of a hard-coded article — the authoring fields did not exist
  // yet. The new "entry_type" column defaults to 'article' (correct for new
  // documents), so reclassify those legacy rows explicitly. Without this they
  // would be treated as empty articles and would fail publish validation.
  await db.execute(sql`
   UPDATE "blogs"
   SET "entry_type" = 'image-override'
   WHERE "excerpt" IS NULL
     AND "closing" IS NULL
     AND NOT EXISTS (
       SELECT 1 FROM "blogs_sections" WHERE "blogs_sections"."_parent_id" = "blogs"."id"
     );`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blogs_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_secondary_keywords" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_internal_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_external_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v_version_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v_version_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v_version_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v_version_secondary_keywords" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v_version_internal_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v_version_external_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blogs_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "blogs_sections" CASCADE;
  DROP TABLE "blogs_bullets" CASCADE;
  DROP TABLE "blogs_faqs" CASCADE;
  DROP TABLE "blogs_secondary_keywords" CASCADE;
  DROP TABLE "blogs_internal_links" CASCADE;
  DROP TABLE "blogs_external_links" CASCADE;
  DROP TABLE "_blogs_v_version_sections" CASCADE;
  DROP TABLE "_blogs_v_version_bullets" CASCADE;
  DROP TABLE "_blogs_v_version_faqs" CASCADE;
  DROP TABLE "_blogs_v_version_secondary_keywords" CASCADE;
  DROP TABLE "_blogs_v_version_internal_links" CASCADE;
  DROP TABLE "_blogs_v_version_external_links" CASCADE;
  DROP TABLE "_blogs_v" CASCADE;
  DROP INDEX "blogs__status_idx";
  ALTER TABLE "blogs" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "blogs" ALTER COLUMN "slug" SET NOT NULL;
  ALTER TABLE "blogs" DROP COLUMN "entry_type";
  ALTER TABLE "blogs" DROP COLUMN "category";
  ALTER TABLE "blogs" DROP COLUMN "excerpt";
  ALTER TABLE "blogs" DROP COLUMN "quote";
  ALTER TABLE "blogs" DROP COLUMN "closing";
  ALTER TABLE "blogs" DROP COLUMN "primary_keyword";
  ALTER TABLE "blogs" DROP COLUMN "meta_title";
  ALTER TABLE "blogs" DROP COLUMN "meta_description";
  ALTER TABLE "blogs" DROP COLUMN "no_index";
  ALTER TABLE "blogs" DROP COLUMN "canonical_override";
  ALTER TABLE "blogs" DROP COLUMN "image_alt";
  ALTER TABLE "blogs" DROP COLUMN "author";
  ALTER TABLE "blogs" DROP COLUMN "author_credentials";
  ALTER TABLE "blogs" DROP COLUMN "related_product_slug";
  ALTER TABLE "blogs" DROP COLUMN "published_date";
  ALTER TABLE "blogs" DROP COLUMN "last_updated";
  ALTER TABLE "blogs" DROP COLUMN "featured";
  ALTER TABLE "blogs" DROP COLUMN "_status";
  DROP TYPE "public"."enum_blogs_entry_type";
  DROP TYPE "public"."enum_blogs_category";
  DROP TYPE "public"."enum_blogs_status";
  DROP TYPE "public"."enum__blogs_v_version_entry_type";
  DROP TYPE "public"."enum__blogs_v_version_category";
  DROP TYPE "public"."enum__blogs_v_version_status";`)
}
