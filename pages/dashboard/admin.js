import LogoutButton from "../../components/LogoutButton";
import withRoleGuard from "../../utils/withRoleGuard";

function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">
          Choppies Namibia - Admin Dashboard
        </h1>
        <LogoutButton />
      </div>
      <p className="mt-4">Welcome Admin! You have full system control.</p>
    </div>
  );
}

export default withRoleGuard(AdminDashboard, ["admin"]);

