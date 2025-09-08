import LogoutButton from "../../components/LogoutButton";
import withRoleGuard from "../../utils/withRoleGuard";

function SupplierDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">
          Choppies Namibia - Supplier Dashboard
        </h1>
        <LogoutButton />
      </div>
      <p className="mt-4">Welcome Supplier! You can manage deliveries and invoices.</p>
    </div>
  );
}

export default withRoleGuard(SupplierDashboard, ["supplier"]);


