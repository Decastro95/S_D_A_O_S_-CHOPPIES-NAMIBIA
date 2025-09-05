import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import Login from "./Login";
import SalesInterface from "./SalesInterface"; // your POS sales/cart component

export default function POSDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check session on load
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        // Fetch profile from pos_users table
        const { data: profile } = await supabase
          .from("pos_users")
          .select("role, shop_id")
          .eq("id", session.user.id)
          .single();

        setUser({ ...session.user, ...profile });
      }

      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          const { data: profile } = await supabase
            .from("pos_users")
            .select("role, shop_id")
            .eq("id", session.user.id)
            .single();
          setUser({ ...session.user, ...profile });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    // If no user, show login screen
    return <Login onLogin={(u) => setUser(u)} />;
  }

  // If logged in, show POS Sales Interface
  return <SalesInterface user={user} />;
}
