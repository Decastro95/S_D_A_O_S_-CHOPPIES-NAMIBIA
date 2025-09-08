import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function withRoleGuard(WrappedComponent, allowedRoles = []) {
  return function RoleGuard(props) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkUser = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          router.push("/login?error=not_authorized");
          return;
        }

        const userRole = session.user.user_metadata?.role;

        if (!userRole || !allowedRoles.includes(userRole)) {
          router.push("/login?error=not_authorized");
          return;
        }

        setAuthorized(true);
        setLoading(false);
      };

      checkUser();
    }, [router]);

    if (loading) {
      return <p className="p-6">Checking authorization...</p>;
    }

    if (!authorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

