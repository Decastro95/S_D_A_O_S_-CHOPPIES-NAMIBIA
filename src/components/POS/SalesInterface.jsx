import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function SalesInterface({ user }) {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Checkout: insert sale into Supabase
  const handleCheckout = async () => {
    if (cart.length === 0) {
      setMessage("Cart is empty!");
      return;
    }

    try {
      const { data, error } = await supabase.from("sales").insert([
        {
          shop_id: user.shop_id,
          user_id: user.id,
          items: cart, // JSON field in sales table
          total: cart.reduce((sum, item) => sum + item.price, 0),
        },
      ]);

      if (error) throw error;

      setMessage("✅ Sale recorded successfully!");
      clearCart();
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  // Return item: push back into inventory
  const handleReturn = async (product) => {
    try {
      const { error } = await supabase
        .from("products")
        .update({ stock: product.stock + 1 })
        .eq("id", product.id);

      if (error) throw error;

      setMessage(`↩️ Returned ${product.name} to inventory.`);
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Welcome {user.email} ({user.role})
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>

      {/* Cashier View */}
      {user.role === "cashier" && (
        <div>
          <h2 className="text-lg font-semibold mb-2">💳 POS Sales Interface</h2>
          <div className="mb-4">
            {/* Demo: Add product manually */}
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded mr-2"
              onClick={() =>
                addToCart({ id: 1, name: "Bread", price: 15, stock: 100 })
              }
            >
              + Bread
            </button>
            <button
              className="px-3 py-1 bg-blue-600 text-white rounded"
              onClick={() =>
                addToCart({ id: 2, name: "Milk", price: 20, stock: 50 })
              }
            >
              + Milk
            </button>
          </div>

          {/* Cart */}
          <div className="border p-4 rounded bg-gray-50">
            <h3 className="font-semibold">🛒 Cart</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between">
                  {item.name} - ${item.price}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">
              Total: ${cart.reduce((sum, i) => sum + i.price, 0)}
            </p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={handleCheckout}
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="px-3 py-1 bg-gray-400 text-white rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Returns */}
          <div className="mt-4 border p-4 rounded bg-gray-50">
            <h3 className="font-semibold">↩️ Returns</h3>
            <button
              className="px-3 py-1 bg-yellow-600 text-white rounded"
              onClick={() =>
                handleReturn({ id: 1, name: "Bread", stock: 100 })
              }
            >
              Return Bread
            </button>
          </div>
        </div>
      )}

      {/* Manager View */}
      {user.role === "manager" && (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            📊 Manager Dashboard (Reports & Inventory)
          </h2>
          <p>Here you can view sales reports and manage inventory.</p>
          {/* Example placeholder */}
          <div className="mt-4 border p-4 rounded bg-gray-50">
            <h3 className="font-semibold">Reports</h3>
            <p>📈 Weekly sales, inventory levels, staff performance, etc.</p>
          </div>
        </div>
      )}

      {/* Message */}
      {message && (
        <div className="mt-4 p-2 bg-green-100 border rounded">{message}</div>
      )}
    </div>
  );
}

