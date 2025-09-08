import { supabaseAdmin } from "../../lib/supabaseAdmin";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { view } = req.query;

      if (view === "prompts") {
        const { data, error } = await supabaseAdmin
          .from("supplier_prompts")
          .select("id,item_id,supplier_id,message,status,created_at")
          .order("created_at", { ascending: false });
        if (error) throw error;
        return res.status(200).json({ prompts: data });
      }

      const { data, error } = await supabaseAdmin
        .from("suppliers")
        .select("id,name,email,phone");
      if (error) throw error;
      return res.status(200).json({ suppliers: data });
    }

    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Suppliers API failed" });
  }
}
