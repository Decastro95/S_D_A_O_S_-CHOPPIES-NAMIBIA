import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-green-600">
          <img src="/logo-choppies.png" alt="Choppies Logo" className="h-8 mb-2" />
          Choppies
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin"><span className="block p-2 hover:bg-green-600 rounded">Admin</span></Link>
          <Link href="/manager"><span className="block p-2 hover:bg-green-600 rounded">Manager</span></Link>
          <Link href="/cashier"><span className="block p-2 hover:bg-green-600 rounded">Cashier</span></Link>
        </nav>
      </aside>
      {/* Main */}
      <div className="flex-1 flex flex-col">
        <header className="bg-red-600 text-white p-4 shadow">Choppies Dashboard</header>
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}