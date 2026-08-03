import "dotenv/config";
import { getPayload } from "payload";
import config from "./payload.config";

// Usage: npx tsx src/_genmigration.ts <migration_name>
// The Payload CLI cannot resolve this project's "@/*" tsconfig aliases, so
// migrations are generated through this tsx script instead.
const migrationName = process.argv[2] || "unnamed_migration";

const run = async () => {
  const payload = await getPayload({ config });
  const db = payload.db as unknown as {
    migrationDir: string;
    createMigration: (args: {
      payload: typeof payload;
      migrationName: string;
      forceAcceptWarning: boolean;
    }) => Promise<void>;
  };
  console.log("MIGRATION_DIR=" + db.migrationDir);
  await db.createMigration({
    payload,
    migrationName,
    forceAcceptWarning: true,
  });
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
