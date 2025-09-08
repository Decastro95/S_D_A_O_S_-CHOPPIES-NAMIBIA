// components/Layout.js
export default function Layout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-red-600 text-white p-4 text-xl font-bold">
        Choppies Dashboard – {title}
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-200 text-center p-2 text-sm">
        © 2025 Choppies
      </footer>
    </div>
  );
}
