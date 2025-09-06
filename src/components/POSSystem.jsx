import React, { useState } from 'react';
import { demoProducts, quickCodeMap, demoTransactions } from '../data/posDemo';

const POSSystem = () => {
  const [cart, setCart] = useState([]);
  const [barcode, setBarcode] = useState('');
  const [total, setTotal] = useState(0);
  const [showDemo, setShowDemo] = useState(true);

  const addToCart = (productBarcode) => {
    // Check if it's a quick demo code
    const actualBarcode = quickCodeMap[productBarcode] || productBarcode;
    
    const product = demoProducts.find(p => p.barcode === actualBarcode);
    if (product) {
      const existingItem = cart.find(item => item.barcode === actualBarcode);
      if (existingItem) {
        setCart(cart.map(item => 
          item.barcode === actualBarcode 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      calculateTotal();
      setBarcode('');
    } else {
      alert('Product not found! Try demo codes: 1111, 2222, 3333, 4444, 5555');
    }
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  };

  const removeFromCart = (barcode) => {
    setCart(cart.filter(item => item.barcode !== barcode));
    calculateTotal();
  };

  const processPayment = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }
    
    alert(`Payment processed successfully!\nTotal: N$${total.toFixed(2)}\nThank you for shopping at Choppies!`);
    setCart([]);
    setTotal(0);
  };

  const quickAddProduct = (quickCode) => {
    setBarcode(quickCode);
    addToCart(quickCode);
  };

  React.useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Choppies POS System</h2>
        <p className="text-red-100">Point of Sale - Live Demonstration</p>
      </div>

      {showDemo && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">🎯 Demo Instructions</h3>
              <p className="text-blue-700 mb-2">Use these quick demo codes for your presentation:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><strong>1111</strong> - Coca Cola (N$12.50)</div>
                <div><strong>2222</strong> - White Bread (N$8.50)</div>
                <div><strong>3333</strong> - Chicken Pieces (N$45.00)</div>
                <div><strong>4444</strong> - Washing Powder (N$65.00)</div>
                <div><strong>5555</strong> - Bananas (N$18.00)</div>
              </div>
            </div>
            <button 
              onClick={() => setShowDemo(false)}
              className="text-blue-500 hover:text-blue-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Barcode Scanner Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            📱 Barcode Scanner
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scan or Enter Barcode
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addToCart(barcode)}
                  placeholder="Enter barcode or demo code (1111, 2222, etc.)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={() => addToCart(barcode)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Quick Demo Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Demo Products
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(quickCodeMap).map(([code, _]) => {
                  const product = demoProducts.find(p => p.barcode === quickCodeMap[code]);
                  return (
                    <button
                      key={code}
                      onClick={() => quickAddProduct(code)}
                      className="px-3 py-2 bg-green-100 text-green-800 rounded text-xs hover:bg-green-200 transition-colors"
                    >
                      {code}<br/>{product?.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
            🛒 Shopping Cart
            <span className="text-sm font-normal text-gray-500">
              {cart.length} items
            </span>
          </h3>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.barcode} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">N${item.price} × {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-green-600">
                      N${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.barcode)}
                      className="text-red-500 hover:text-red-700 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total and Payment */}
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                N${total.toFixed(2)}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={processPayment}
                disabled={cart.length === 0}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                💳 Process Payment
              </button>
              <button
                onClick={() => {setCart([]); setTotal(0);}}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                🗑️ Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Catalog for Reference */}
      <div className="bg-white p-6 rounded-lg shadow-lg border">
        <h3 className="text-lg font-semibold mb-4">📦 Available Products (Demo Catalog)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-64 overflow-y-auto">
          {demoProducts.map((product) => (
            <div key={product.barcode} className="p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-sm">{product.name}</h4>
                <span className="text-green-600 font-bold text-sm">N${product.price}</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">Category: {product.category}</p>
              <p className="text-xs text-gray-500 mb-2">Stock: {product.stock}</p>
              <button
                onClick={() => addToCart(product.barcode)}
                className="w-full px-2 py-1 bg-red-100 text-red-800 rounded text-xs hover:bg-red-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSSystem;