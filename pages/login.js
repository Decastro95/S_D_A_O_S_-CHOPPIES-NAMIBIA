import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  // Show error from redirect query string
  useState(() => {
    if (router.query.error) {
      setErrorMsg(router.query.error);
    }
  }, [router.query]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    const role = data.user.user_metadata.role;

    switch (role) {
      case "admin":
        router.push("/admin");
        break;
      case "manager":
        router.push("/manager");
        break;
      case "cashier":
        router.push("/cashier");
        break;
      case "supplier":
        router.push("/supplier");
        break;
      case "ceo":
        router.push("/ceo");
        break;
      default:
        router.push("/login?error=Unknown role");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h1 className="text-xl font-bold mb-4">Choppies Login</h1>
        {errorMsg && (
          <p className="bg-red-100 text-red-700 p-2 mb-4 rounded">{errorMsg}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
