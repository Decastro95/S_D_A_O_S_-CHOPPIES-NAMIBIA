import LogoutButton from "../../components/LogoutButton";
import withRoleGuard from "../../utils/withRoleGuard";

function ManagerDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Choppies Namibia - Manager Dashboard
        </h1>
        <LogoutButton />
      </div>
      <p className="mt-4">Welcome Manager! You can view sales reports and staff activity.</p>
    </div>
  );
}

export default withRoleGuard(ManagerDashboard, ["manager"]);

