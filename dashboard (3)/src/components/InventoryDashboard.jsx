import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { inventoryData } from '../data/choppiesDataUpdated';

const InventoryDashboard = () => {
  const totalItems = inventoryData.reduce((sum, category) => sum + category.inStock + category.lowStock + category.outOfStock, 0);
  const totalLowStock = inventoryData.reduce((sum, category) => sum + category.lowStock, 0);
  const totalOutOfStock = inventoryData.reduce((sum, category) => sum + category.outOfStock, 0);
  const avgTurnoverRate = inventoryData.reduce((sum, category) => sum + category.turnoverRate, 0) / inventoryData.length;

  // Prepare data for stock status chart
  const stockStatusData = inventoryData.map(category => ({
    category: category.category,
    inStock: category.inStock,
    lowStock: category.lowStock,
    outOfStock: category.outOfStock
  }));

  // Prepare data for turnover rate chart
  const turnoverData = inventoryData.map(category => ({
    category: category.category.replace(' ', '\n'),
    turnoverRate: category.turnoverRate
  }));

  // Stock level distribution
  const stockDistribution = [
    { name: 'In Stock', value: inventoryData.reduce((sum, cat) => sum + cat.inStock, 0), color: '#22c55e' },
    { name: 'Low Stock', value: totalLowStock, color: '#f59e0b' },
    { name: 'Out of Stock', value: totalOutOfStock, color: '#ef4444' }
  ];

  return (
    <div className="space-y-6">
      {/* Key Inventory Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Total Items</h3>
          <p className="text-2xl font-bold text-blue-600">{totalItems.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Across all categories</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Low Stock Items</h3>
          <p className="text-2xl font-bold text-orange-600">{totalLowStock}</p>
          <p className="text-xs text-orange-600 mt-1">Needs restocking</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Out of Stock</h3>
          <p className="text-2xl font-bold text-red-600">{totalOutOfStock}</p>
          <p className="text-xs text-red-600 mt-1">Urgent attention</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Avg Turnover Rate</h3>
          <p className="text-2xl font-bold text-green-600">{avgTurnoverRate.toFixed(1)}x</p>
          <p className="text-xs text-green-600 mt-1">Times per year</p>
        </div>
      </div>

      {/* Stock Status by Category */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Status by Category</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={stockStatusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="category" 
              angle={-45}
              textAnchor="end"
              height={80}
              fontSize={12}
            />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => [value.toLocaleString(), name]}
              labelStyle={{ color: '#374151' }}
            />
            <Bar dataKey="inStock" stackId="a" fill="#22c55e" name="In Stock" />
            <Bar dataKey="lowStock" stackId="a" fill="#f59e0b" name="Low Stock" />
            <Bar dataKey="outOfStock" stackId="a" fill="#ef4444" name="Out of Stock" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock Distribution Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Overall Stock Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stockDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {stockDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value.toLocaleString(), 'Items']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Inventory Turnover Rates */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Turnover Rates</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={turnoverData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis 
                dataKey="category" 
                type="category" 
                width={100}
                fontSize={12}
              />
              <Tooltip 
                formatter={(value) => [`${value}x per year`, 'Turnover Rate']}
                labelStyle={{ color: '#374151' }}
              />
              <Bar dataKey="turnoverRate" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Inventory Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Detailed Inventory Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Category</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">In Stock</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Low Stock</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Out of Stock</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Turnover Rate</th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventoryData.map((category, index) => {
                const stockPercentage = (category.inStock / (category.inStock + category.lowStock + category.outOfStock)) * 100;
                const status = stockPercentage > 80 ? 'Good' : stockPercentage > 60 ? 'Warning' : 'Critical';
                const statusColor = status === 'Good' ? 'text-green-600 bg-green-100' : 
                                  status === 'Warning' ? 'text-orange-600 bg-orange-100' : 'text-red-600 bg-red-100';
                
                return (
                  <tr key={category.category} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{category.category}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">
                      {category.inStock.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right text-orange-600 font-medium">
                      {category.lowStock}
                    </td>
                    <td className="px-4 py-3 text-right text-red-600 font-medium">
                      {category.outOfStock}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-800 font-medium">
                      {category.turnoverRate}x
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Action Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-medium text-red-800 mb-2">Urgent Restocking Required</h3>
            <ul className="text-sm text-red-700 space-y-1">
              {inventoryData
                .filter(cat => cat.outOfStock > 15)
                .map(cat => (
                  <li key={cat.category}>• {cat.category}: {cat.outOfStock} items out of stock</li>
                ))}
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-medium text-orange-800 mb-2">Low Stock Alerts</h3>
            <ul className="text-sm text-orange-700 space-y-1">
              {inventoryData
                .filter(cat => cat.lowStock > 50)
                .map(cat => (
                  <li key={cat.category}>• {cat.category}: {cat.lowStock} items running low</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;