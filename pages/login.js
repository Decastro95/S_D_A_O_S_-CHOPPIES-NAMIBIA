import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  // Capture error messages from query string
  useEffect(() => {
    if (router.query.error === "not_authorized") {
      setErrorMsg("Not authorized to access this dashboard");
    }
  }, [router.query]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    const userRole = data.user.user_metadata?.role;

    if (!userRole) {
      setErrorMsg("No role assigned. Contact admin.");
      return;
    }

    // Redirect user based on role
    switch (userRole) {
      case "admin":
        router.push("/dashboard/admin");
        break;
      case "manager":
        router.push("/dashboard/manager");
        break;
      case "cashier":
        router.push("/dashboard/cashier");
        break;
      case "supplier":
        router.push("/dashboard/supplier");
        break;
      case "ceo":
        router.push("/dashboard/ceo");
        break;
      default:
        setErrorMsg("Unknown role, contact system admin.");
    }
  };

  const handleBackToLogin = () => {
    // clear everything
    setEmail("");
    setPassword("");
    setErrorMsg("");
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Choppies Namibia Login
        </h1>

        {errorMsg && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4 text-center">
            <p>{errorMsg}</p>
            <button
              onClick={handleBackToLogin}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Back to Login
            </button>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


