// utils/withRoleGuard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabaseClient";

export default function withRoleGuard(Component, requiredRole) {
  return function GuardedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push("/login?error=Not authorized to access this dashboard");
          return;
        }

        const role = user.user_metadata?.role;

        if (role !== requiredRole) {
          router.push("/login?error=Not authorized to access this dashboard");
        }
      };

      checkAuth();
    }, [router]);

    return <Component {...props} />;
  };
}
