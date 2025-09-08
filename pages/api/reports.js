import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: "Invalid token" });
  }

  const role = user.user_metadata.role;
  const { type } = req.query;

  // Role-based restrictions
  const rolePermissions = {
    ceo: ["csv", "excel", "pdf", "delivery"],
    admin: ["csv", "excel", "pdf"],
    manager: ["csv", "excel", "pdf"],
    cashier: ["csv"],
    supplier: ["delivery"],
  };

  if (!rolePermissions[role]?.includes(type)) {
    return res.status(403).json({ error: "Not allowed to download this file" });
  }

  // For demo purposes, we just return dummy text
  res.setHeader("Content-Type", "text/plain");
  res.send(`This is a ${type.toUpperCase()} report for ${role}`);
}
