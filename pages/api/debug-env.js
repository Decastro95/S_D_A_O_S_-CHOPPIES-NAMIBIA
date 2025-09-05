export default function handler(req, res) {
  res.json({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "MISSING",
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "LOADED" : "MISSING",
  });
}
