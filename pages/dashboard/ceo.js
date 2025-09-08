import LogoutButton from "../../components/LogoutButton";
import withRoleGuard from "../../utils/withRoleGuard";

function CEODashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-600">
          Choppies Namibia - CEO Dashboard
        </h1>
        <LogoutButton />
      </div>
      <p className="mt-4">
        Welcome CEO! You have access to analytics, financials, and reports.
      </p>
    </div>
  );
}

export default withRoleGuard(CEODashboard, ["ceo"]);

