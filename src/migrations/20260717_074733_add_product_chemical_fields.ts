import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the product chemical / SEO fields that exist in the Products collection
 * schema but were never applied to the database (schema drift caused by push
 * being disabled against this environment).
 *
 * Written as an idempotent delta:
 *   - enum types are created only if absent
 *   - columns use ADD COLUMN IF NOT EXISTS
 * so it is safe to run against a database that may already have some of them.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_products_physical_form" AS ENUM('liquid', 'powder', 'crystal', 'paste', 'gas', 'other');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_products_search_intent" AS ENUM('transactional', 'commercial', 'informational');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "iupac_name" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "alternate_names" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "inchi_key" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "smiles" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "einecs" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "un_number" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "chemical_class" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "base_chemistry" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "active_content" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "physical_form" "public"."enum_products_physical_form";
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "export_markets" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "port_of_loading" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "transit_days" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "incoterms" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "local_brand_equivalents" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "local_language_names" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "target_buyers" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "competitor_brands" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "primary_keyword" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "secondary_keywords" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "search_intent" "public"."enum_products_search_intent" DEFAULT 'transactional';
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "direct_answer_snippet" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "audience_type" varchar;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "area_served" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "manufacturing_location" varchar DEFAULT 'Ankleshwar, Gujarat, India';
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "ranking_metrics" jsonb;
    ALTER TABLE "products" ADD COLUMN IF NOT EXISTS "seo_score_override" numeric;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "products" DROP COLUMN IF EXISTS "iupac_name";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "alternate_names";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "inchi_key";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "smiles";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "einecs";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "un_number";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "chemical_class";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "base_chemistry";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "active_content";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "physical_form";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "export_markets";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "port_of_loading";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "transit_days";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "incoterms";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "local_brand_equivalents";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "local_language_names";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "target_buyers";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "competitor_brands";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "primary_keyword";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "secondary_keywords";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "search_intent";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "direct_answer_snippet";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "audience_type";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "area_served";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "manufacturing_location";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "ranking_metrics";
    ALTER TABLE "products" DROP COLUMN IF EXISTS "seo_score_override";

    DROP TYPE IF EXISTS "public"."enum_products_search_intent";
    DROP TYPE IF EXISTS "public"."enum_products_physical_form";
  `)
}
