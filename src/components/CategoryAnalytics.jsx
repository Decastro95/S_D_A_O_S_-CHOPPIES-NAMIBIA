import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { categorySalesData, categoryMonthlySales, productCategories } from '../data/expandedCategoriesData';

const CategoryAnalytics = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('sales'); // 'sales' or 'inventory'

  const formatCurrency = (value) => `N$${value.toLocaleString()}`;
  const formatLargeCurrency = (value) => `N$${(value / 1000000).toFixed(1)}M`;

  // Calculate totals
  const totalYearlyRevenue = categorySalesData.reduce((sum, cat) => sum + cat.yearlyProjection, 0);
  const totalMonthlyRevenue = categorySalesData.reduce((sum, cat) => sum + cat.monthlySales, 0);
  const totalLowStockItems = categorySalesData.reduce((sum, cat) => sum + cat.lowStockItems, 0);
  const totalOutOfStockItems = categorySalesData.reduce((sum, cat) => sum + cat.outOfStockItems, 0);

  // Prepare data for charts
  const categoryRevenueData = categorySalesData
    .sort((a, b) => b.yearlyProjection - a.yearlyProjection)
    .map(cat => ({
      name: cat.name.replace(' Products', '').replace(' Merchandise', ''),
      revenue: cat.yearlyProjection,
      growth: cat.salesGrowth,
      color: cat.color
    }));

  // Get selected category data
  const selectedCategoryData = selectedCategory === 'ALL' ? null : 
    categorySalesData.find(cat => cat.key === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Category Performance Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-blue-600">Total Category Revenue</h3>
            <p className="text-2xl font-bold text-blue-800">{formatLargeCurrency(totalYearlyRevenue)}</p>
            <p className="text-xs text-blue-600 mt-1">Yearly projection</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-green-600">Monthly Average</h3>
            <p className="text-2xl font-bold text-green-800">{formatLargeCurrency(totalMonthlyRevenue)}</p>
            <p className="text-xs text-green-600 mt-1">Across all categories</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-orange-600">Low Stock Alerts</h3>
            <p className="text-2xl font-bold text-orange-800">{totalLowStockItems}</p>
            <p className="text-xs text-orange-600 mt-1">Items need restocking</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-red-600">Out of Stock</h3>
            <p className="text-2xl font-bold text-red-800">{totalOutOfStockItems}</p>
            <p className="text-xs text-red-600 mt-1">Urgent attention needed</p>
          </div>
        </div>
      </div>

      {/* Category Selection and View Mode */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">All Categories</option>
              {categorySalesData.map(category => (
                <option key={category.key} value={category.key}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('sales')}
              className={`px-4 py-2 rounded-md font-medium ${
                viewMode === 'sales' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Sales View
            </button>
            <button
              onClick={() => setViewMode('inventory')}
              className={`px-4 py-2 rounded-md font-medium ${
                viewMode === 'inventory' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Inventory View
            </button>
          </div>
        </div>

        {/* Category Revenue Chart */}
        {viewMode === 'sales' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue by Category</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={categoryRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  fontSize={11}
                />
                <YAxis tickFormatter={(value) => formatLargeCurrency(value)} />
                <Tooltip 
                  formatter={(value) => [formatLargeCurrency(value), 'Yearly Revenue']}
                  labelStyle={{ color: '#374151' }}
                />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Inventory Overview Chart */}
        {viewMode === 'inventory' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Inventory Status by Category</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={categorySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  fontSize={11}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalStock" stackId="a" fill="#22c55e" name="In Stock" />
                <Bar dataKey="lowStockItems" stackId="a" fill="#f59e0b" name="Low Stock" />
                <Bar dataKey="outOfStockItems" stackId="a" fill="#ef4444" name="Out of Stock" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Monthly Sales Trends */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Sales Trends by Category</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={categoryMonthlySales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `N$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip 
              formatter={(value, name) => [
                formatLargeCurrency(value), 
                categorySalesData.find(cat => cat.key === name)?.name || name
              ]}
            />
            {categorySalesData.slice(0, 5).map((category, index) => (
              <Line
                key={category.key}
                type="monotone"
                dataKey={category.key}
                stroke={category.color}
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Selected Category Details */}
      {selectedCategoryData && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{selectedCategoryData.icon}</span>
            <h3 className="text-xl font-semibold text-gray-800">{selectedCategoryData.name} - Detailed View</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800">Revenue Projection</h4>
              <p className="text-2xl font-bold text-blue-900">{formatLargeCurrency(selectedCategoryData.yearlyProjection)}</p>
              <p className="text-sm text-blue-600">
                {selectedCategoryData.salesGrowth > 0 ? '+' : ''}{selectedCategoryData.salesGrowth.toFixed(1)}% growth
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800">Total Stock Value</h4>
              <p className="text-2xl font-bold text-green-900">{formatCurrency(selectedCategoryData.totalValue)}</p>
              <p className="text-sm text-green-600">{selectedCategoryData.totalItems} different items</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-orange-800">Top Selling Item</h4>
              <p className="text-lg font-bold text-orange-900">{selectedCategoryData.topSellingItem.name}</p>
              <p className="text-sm text-orange-600">{formatCurrency(selectedCategoryData.topSellingItem.price)} each</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Item Name</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Price</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Stock</th>
                  <th className="px-4 py-3 text-right font-medium text-gray-600">Stock Value</th>
                  <th className="px-4 py-3 text-center font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {selectedCategoryData.items.map((item, index) => {
                  const stockValue = item.stock * item.price;
                  const status = item.stock === 0 ? 'Out of Stock' : 
                                item.stock <= item.lowStock ? 'Low Stock' : 'In Stock';
                  const statusColor = status === 'In Stock' ? 'text-green-600 bg-green-100' :
                                    status === 'Low Stock' ? 'text-orange-600 bg-orange-100' :
                                    'text-red-600 bg-red-100';
                  
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{item.name}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(item.price)}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{item.stock}</td>
                      <td className="px-4 py-3 text-right font-medium text-gray-800">
                        {formatCurrency(stockValue)}
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
      )}

      {/* Category Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Categories */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Performing Categories</h3>
          <div className="space-y-3">
            {categorySalesData.slice(0, 5).map((category, index) => (
              <div key={category.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800">{category.name}</p>
                    <p className="text-sm text-gray-600">{category.totalItems} items</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{formatLargeCurrency(category.yearlyProjection)}</p>
                  <p className={`text-sm ${category.salesGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {category.salesGrowth > 0 ? '+' : ''}{category.salesGrowth.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Inventory Alerts</h3>
          <div className="space-y-3">
            {categorySalesData
              .filter(cat => cat.lowStockItems > 0 || cat.outOfStockItems > 0)
              .slice(0, 5)
              .map((category) => (
                <div key={category.key} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <p className="font-medium text-gray-800">{category.name}</p>
                      <p className="text-sm text-red-600">
                        {category.lowStockItems} low stock, {category.outOfStockItems} out of stock
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      Action Needed
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAnalytics;