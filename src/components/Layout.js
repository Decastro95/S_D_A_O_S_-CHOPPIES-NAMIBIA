// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-red-700 text-white p-4 space-y-6">
        <h1 className="text-2xl font-bold">Choppies</h1>
        <nav className="space-y-2">
          <Link href="/admin" className="block hover:underline">
            Admin Dashboard
          </Link>
          <Link href="/manager" className="block hover:underline">
            Manager Dashboard
          </Link>
          <Link href="/cashier" className="block hover:underline">
            Cashier Dashboard
          </Link>
          <Link href="/login" className="block hover:underline">
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <header className="bg-red-600 text-white p-4 rounded-xl mb-6 shadow">
          <h2 className="text-xl font-semibold">
            Choppies Namibia – Real-time Analytics
          </h2>
        </header>

        <div>{children}</div>
      </main>
    </div>
  );
}
