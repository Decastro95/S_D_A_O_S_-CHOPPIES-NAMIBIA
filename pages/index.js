// pages/index.js
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-choppiesRed mb-4">
        Welcome to Choppies Dashboards
      </h1>
      <p className="text-lg text-gray-700">
        Please{" "}
        <a href="/login" className="text-choppiesGreen underline">
          login
        </a>{" "}
        to continue.
      </p>
    </div>
  );
}
