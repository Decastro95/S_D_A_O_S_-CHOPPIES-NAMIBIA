// utils/downloadReport.js
import { supabase } from "../utils/supabaseClient";

export async function downloadReport(type) {
  try {
    // ✅ get the current session token directly from Supabase
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session) {
      alert("You must be logged in to download reports");
      return;
    }

    const res = await fetch(`/api/reports?type=${type}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    if (!res.ok) {
      const { error } = await res.json();
      alert(error || "Error downloading report");
      return;
    }

    if (type === "delivery") {
      const json = await res.json();
      alert("Delivery Report: " + JSON.stringify(json, null, 2));
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `report.${type === "excel" ? "xlsx" : type}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.error(err);
    alert("Failed to download report");
  }
}
