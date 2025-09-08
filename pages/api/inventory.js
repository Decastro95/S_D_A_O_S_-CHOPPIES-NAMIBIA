import { supabaseAdmin } from "../../lib/supabaseAdmin";

/**
 * Demo inventory; in production fetch from Supabase.
 * Structure is compatible with both.
 */
const demoInventory = [
  { id: 1, sku: "1111", name: "Coca Cola 500ml", stock: 15, min: 20, supplier_id: 1 },
  { id: 2, sku: "2222", name: "White Bread 700g", stock: 6,  min: 10, supplier_id: 2 },
  { id: 3, sku: "3333", name: "Chicken Pieces", stock: 3,  min: 8,  supplier_id: 3 },
];

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // Replace with Supabase query if you already have the table
      // const { data, error } = await supabaseAdmin.from("inventory").select("*");
      // if (error) throw error;
      return res.status(200).json({ items: demoInventory });
    }

    if (req.method === "POST") {
      const { action, itemId } = req.query;

      // POST /api/inventory?action=restock&itemId=2
      if (action === "restock") {
        const item = demoInventory.find(i => i.id === Number(itemId));
        if (!item) return res.status(404).json({ error: "Item not found" });

        // Record a supplier prompt in Supabase for manager visibility
        // Table: supplier_prompts (id, item_id, supplier_id, message, status, created_at)
        const message = `Low stock alert for ${item.name} (SKU ${item.sku}). Current: ${item.stock}, Min: ${item.min}. Please deliver.`;
        await supabaseAdmin.from("supplier_prompts").insert({
          item_id: item.id,
          supplier_id: item.supplier_id,
          message,
          status: "sent",
        });

        return res.status(200).json({ ok: true, message });
      }

      return res.status(400).json({ error: "Unknown action" });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).end("Method Not Allowed");
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Inventory API failed" });
  }
}
