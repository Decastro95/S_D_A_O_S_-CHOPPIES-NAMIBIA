// components/withRoleGuard.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";

export default function withRoleGuard(Component, allowedRole) {
  return function GuardedPage(props) {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
      if (user && user.user_metadata?.role !== allowedRole) {
        router.push("/login");
      }
    }, [user, router]);

    if (!user) return <p>Loading...</p>;

    return <Component {...props} />;
  };
}
