import "dotenv/config";
import { getPayload } from "payload";
import config from "./payload.config";

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
    migrationName: "add_product_chemical_fields",
    forceAcceptWarning: true,
  });
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
