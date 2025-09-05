import { supabase } from "../../supabaseClient";

async function returnItem(saleId, productId, quantity) {
  // Record the return
  await supabase.from("returns").insert({
    sale_id: saleId,
    product_id: productId,
    quantity,
    reason: "Customer changed mind",
  });

  // Increment stock back
  await supabase.rpc("increment_stock", {
    product_id: productId,
    qty: quantity,
  });
}
