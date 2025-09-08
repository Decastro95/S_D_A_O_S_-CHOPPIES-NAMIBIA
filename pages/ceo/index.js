import withRoleGuard from "../../components/withRoleGuard";

function CEODashboard() {
  const download = (type) => {
    fetch(`/api/reports?type=${type}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("supabase_token")}`,
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `ceo_${type}_report.txt`;
        a.click();
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-purple-700">
        CEO Executive Dashboard
      </h1>
      <p className="mt-2">Welcome, CEO! Access all analytics and supplier overviews.</p>

      <div className="mt-4 space-x-2">
        <button onClick={() => download("csv")} className="bg-blue-500 text-white p-2 rounded">
          CSV
        </button>
        <button onClick={() => download("excel")} className="bg-green-500 text-white p-2 rounded">
          Excel
        </button>
        <button onClick={() => download("pdf")} className="bg-red-500 text-white p-2 rounded">
          PDF
        </button>
        <button onClick={() => download("delivery")} className="bg-yellow-500 text-white p-2 rounded">
          Delivery Notes
        </button>
      </div>
    </div>
  );
}

export default withRoleGuard(CEODashboard, ["ceo"]);
