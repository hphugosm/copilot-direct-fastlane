import { config } from "dotenv";
import { createClient } from "@supabase/supabase-js";

config();

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const key =
  process.env.SUPABASE_ANON_KEY ||
  process.env.SUPABASE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY;
const table = process.env.SUPABASE_TABLE || process.env.VITE_SUPABASE_TABLE || "mvp_items";

if (!url || !key) {
  console.error("Missing SUPABASE_URL and SUPABASE_ANON_KEY (or SUPABASE_KEY)");
  process.exit(1);
}

const supabase = createClient(url, key);
const text = `db-init-${Date.now()}`;

const insertResult = await supabase.from(table).insert({ text }).select("id,text").single();
if (insertResult.error) {
  console.error("Insert failed:", insertResult.error.message);
  console.error("Run SQL from supabase/init.sql in Supabase SQL editor first.");
  process.exit(1);
}

const readResult = await supabase
  .from(table)
  .select("id,text,created_at")
  .eq("id", insertResult.data.id)
  .single();

if (readResult.error) {
  console.error("Read failed:", readResult.error.message);
  process.exit(1);
}

console.log("DB_INIT_OK", readResult.data);
