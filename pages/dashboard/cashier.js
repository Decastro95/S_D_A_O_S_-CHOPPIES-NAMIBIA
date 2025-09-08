import LogoutButton from "../../components/LogoutButton";
import withRoleGuard from "../../utils/withRoleGuard";

function CashierDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">
          Choppies Namibia - Cashier Dashboard
        </h1>
        <LogoutButton />
      </div>
      <p className="mt-4">Welcome Cashier! You can process sales and print receipts.</p>
    </div>
  );
}

export default withRoleGuard(CashierDashboard, ["cashier"]);



