import { createClient } from "@supabase/supabase-js";

const statusEl = document.getElementById("status");
const listEl = document.getElementById("items");
const formEl = document.getElementById("item-form");
const inputEl = document.getElementById("item-input");

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const table = import.meta.env.VITE_SUPABASE_TABLE || "mvp_items";

if (!url || !anonKey) {
  statusEl.textContent = "Chybi VITE_SUPABASE_URL nebo VITE_SUPABASE_ANON_KEY v .env";
  formEl.addEventListener("submit", (event) => event.preventDefault());
} else {
  const supabase = createClient(url, anonKey);

  const renderItems = async () => {
    const { data, error } = await supabase
      .from(table)
      .select("id,text,created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      statusEl.textContent = `Nacteni selhalo: ${error.message}`;
      return;
    }

    listEl.innerHTML = "";
    for (const item of data) {
      const li = document.createElement("li");
      li.textContent = item.text;
      listEl.appendChild(li);
    }

    statusEl.textContent = "Data nactena";
  };

  formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = inputEl.value.trim();
    if (!text) {
      return;
    }

    const { error } = await supabase.from(table).insert({ text });
    if (error) {
      statusEl.textContent = `Ulozeni selhalo: ${error.message}`;
      return;
    }

    inputEl.value = "";
    statusEl.textContent = "Ulozeno";
    await renderItems();
  });

  renderItems();
}
