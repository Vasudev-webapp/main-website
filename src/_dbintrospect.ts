import "dotenv/config";
import { getPayload } from "payload";
import config from "./payload.config";

const run = async () => {
  const payload = await getPayload({ config });
  const db = payload.db as unknown as {
    pool: {
      query: (
        sql: string
      ) => Promise<{ rows: Array<Record<string, unknown>> }>;
    };
  };
  const res = await db.pool.query(
    `select column_name, data_type
       from information_schema.columns
      where table_name = 'products'
      order by column_name`
  );
  const cols = res.rows.map((r) => r.column_name);
  console.log("PRODUCTS_COLUMNS_JSON=" + JSON.stringify(cols));
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
