import withRoleGuard from "../../components/withRoleGuard";

function ManagerDashboard() {
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
        a.download = `${type}_report.txt`;
        a.click();
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">
        Choppies Namibia - Sales Analytics Dashboard (Manager)
      </h1>
      <p className="mt-2">Welcome, Manager! Track store performance and suppliers.</p>

      <div className="mt-4 space-x-2">
        <button onClick={() => download("csv")} className="bg-blue-500 text-white p-2 rounded">
          Download CSV
        </button>
        <button onClick={() => download("excel")} className="bg-green-500 text-white p-2 rounded">
          Download Excel
        </button>
        <button onClick={() => download("pdf")} className="bg-red-500 text-white p-2 rounded">
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default withRoleGuard(ManagerDashboard, ["manager"]);
