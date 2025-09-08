import withRoleGuard from "../../components/withRoleGuard";

function CashierDashboard() {
  const download = () => {
    fetch(`/api/reports?type=csv`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("supabase_token")}`,
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `cashier_sales.csv`;
        a.click();
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700">Cashier Dashboard</h1>
      <p className="mt-2">Welcome, Cashier! Record sales and view daily reports.</p>

      <div className="mt-4">
        <button onClick={download} className="bg-blue-500 text-white p-2 rounded">
          Download Daily CSV Report
        </button>
      </div>
    </div>
  );
}

export default withRoleGuard(CashierDashboard, ["cashier"]);
