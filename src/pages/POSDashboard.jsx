import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Login from "../components/POS/Login";
// Import your POS sales component
import SalesInterface from "../components/POS/SalesInterface";

export default function POSDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Check if session already exists
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
      }
      setLoading(false);
    };

    getSession();

    // 2. Listen for login/logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // If logged in, go to sales interface
  if (user) {
    return <SalesInterface user={user} />;
  }

  // Otherwise show login screen
  return <Login onLogin={(u) => setUser(u)} />;
}
