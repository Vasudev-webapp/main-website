import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), true);

const run = async () => {
  // Dynamic import so payload.config.ts reads env vars AFTER loadEnvConfig
  const { default: config } = await import("./payload.config");
  const { getPayload } = await import("payload");

  const payload = await getPayload({ config });
  const db = payload.db as unknown as { migrate: () => Promise<void> };
  await db.migrate();
  console.log("MIGRATE_DONE");
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
