import "../styles/globals.css";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function MyApp({ Component, pageProps }) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        setRole(data.session.user.user_metadata?.role || "guest");
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setRole(session.user.user_metadata?.role || "guest");
        } else {
          setRole("guest");
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return <Component {...pageProps} userRole={role} />;
}

export default MyApp;
