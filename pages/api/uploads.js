import formidable from "formidable";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Use POST");

  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) throw err;
      const file = files.file;
      if (!file) return res.status(400).json({ error: "No file" });

      const arrayBuffer = await fsReadAsArrayBuffer(file.filepath);
      const path = `uploads/${Date.now()}-${file.originalFilename}`;

      const { error: upErr } = await supabaseAdmin.storage
        .from("uploads")
        .upload(path, Buffer.from(arrayBuffer), {
          contentType: file.mimetype,
          upsert: false,
        });
      if (upErr) throw upErr;

      const { data: urlData } = supabaseAdmin.storage
        .from("uploads")
        .getPublicUrl(path);

      return res.status(200).json({ ok: true, url: urlData.publicUrl });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Upload failed" });
    }
  });
}

import fs from "fs";
function fsReadAsArrayBuffer(p) {
  return new Promise((resolve, reject) =>
    fs.readFile(p, (err, data) => (err ? reject(err) : resolve(data)))
  );
}
