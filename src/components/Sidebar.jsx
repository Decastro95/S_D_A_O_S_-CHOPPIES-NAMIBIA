import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 'regional', name: 'Regional Overview', icon: '🌍' },
    { id: 'shops', name: 'Shop Performance', icon: '🏪' },
    { id: 'sales', name: 'Sales Analytics', icon: '📊' },
    { id: 'categories', name: 'Category Analytics', icon: '📦' },
    { id: 'bread', name: 'Bread & Cereals', icon: '🍞' },
    { id: 'inventory', name: 'Inventory', icon: '📋' },
    { id: 'pos', name: 'POS System', icon: '💳' }
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-green-600 to-green-700 text-white shadow-lg">
      <div className="p-6">
        <div className="bg-white/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Dashboard Navigation</h2>
          <p className="text-green-100 text-sm">Comprehensive retail analytics for Choppies Namibia</p>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 text-left group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 bg-red-600 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-2">Quick Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-red-100">Active Shops:</span>
              <span className="font-bold">23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-100">Regions:</span>
              <span className="font-bold">14</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-100">Revenue:</span>
              <span className="font-bold">N$99.2M</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-green-100 text-xs">
            © 2024 Choppies Namibia
          </p>
          <p className="text-green-200 text-xs font-semibold">
            Great Value for Your Money!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;