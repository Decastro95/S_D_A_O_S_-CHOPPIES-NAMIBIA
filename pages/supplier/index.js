import withRoleGuard from "../../components/withRoleGuard";

function SupplierDashboard() {
  const download = () => {
    fetch(`/api/reports?type=delivery`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("supabase_token")}`,
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `delivery_note.txt`;
        a.click();
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-yellow-700">Supplier Dashboard</h1>
      <p className="mt-2">Welcome, Supplier! View delivery requests and stock prompts.</p>

      <div className="mt-4">
        <button onClick={download} className="bg-yellow-500 text-white p-2 rounded">
          Download Delivery Note
        </button>
      </div>
    </div>
  );
}

export default withRoleGuard(SupplierDashboard, ["supplier"]);
