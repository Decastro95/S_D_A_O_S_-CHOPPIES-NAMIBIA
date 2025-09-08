import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function withRoleGuard(Component, allowedRoles) {
  return function GuardedPage(props) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const checkRole = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          router.push("/login?error=Please log in first");
          return;
        }

        const role = session.user.user_metadata.role;

        if (!allowedRoles.includes(role)) {
          router.push("/login?error=Not authorized to access this dashboard");
          return;
        }

        setLoading(false);
      };

      checkRole();
    }, [router]);

    if (loading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}
