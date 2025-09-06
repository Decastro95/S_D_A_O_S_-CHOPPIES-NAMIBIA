import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { productCategories, topProducts, salesData } from '../data/choppiesDataUpdated';

const SalesAnalytics = () => {
  const formatCurrency = (value) => {
    return `N$${value.toLocaleString()}`;
  };

  // Calculate total sales across all shops by month
  const monthlySalesTotal = salesData[0].monthlySales.map((monthData, index) => ({
    month: monthData.month,
    totalSales: salesData.reduce((sum, shop) => sum + shop.monthlySales[index].sales, 0),
    totalTransactions: salesData.reduce((sum, shop) => sum + shop.monthlySales[index].transactions, 0)
  }));

  // Calculate quarterly data
  const quarterlyData = [
    {
      quarter: 'Q1',
      sales: monthlySalesTotal.slice(0, 3).reduce((sum, month) => sum + month.totalSales, 0),
      transactions: monthlySalesTotal.slice(0, 3).reduce((sum, month) => sum + month.totalTransactions, 0)
    },
    {
      quarter: 'Q2',
      sales: monthlySalesTotal.slice(3, 6).reduce((sum, month) => sum + month.totalSales, 0),
      transactions: monthlySalesTotal.slice(3, 6).reduce((sum, month) => sum + month.totalTransactions, 0)
    },
    {
      quarter: 'Q3',
      sales: monthlySalesTotal.slice(6, 9).reduce((sum, month) => sum + month.totalSales, 0),
      transactions: monthlySalesTotal.slice(6, 9).reduce((sum, month) => sum + month.totalTransactions, 0)
    },
    {
      quarter: 'Q4',
      sales: monthlySalesTotal.slice(9, 12).reduce((sum, month) => sum + month.totalSales, 0),
      transactions: monthlySalesTotal.slice(9, 12).reduce((sum, month) => sum + month.totalTransactions, 0)
    }
  ];

  const totalRevenue = salesData.reduce((sum, shop) => sum + shop.totalRevenue, 0);
  const totalTransactions = monthlySalesTotal.reduce((sum, month) => sum + month.totalTransactions, 0);
  const avgTransactionValue = totalRevenue / totalTransactions;

  return (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
          <p className="text-2xl font-bold text-blue-600">N${(totalRevenue / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-green-600 mt-1">+8.5% from last year</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Total Transactions</h3>
          <p className="text-2xl font-bold text-green-600">{totalTransactions.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-1">+12.3% from last year</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Avg Transaction</h3>
          <p className="text-2xl font-bold text-purple-600">{formatCurrency(Math.round(avgTransactionValue))}</p>
          <p className="text-xs text-red-600 mt-1">-2.1% from last year</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Active Shops</h3>
          <p className="text-2xl font-bold text-orange-600">{salesData.length}</p>
          <p className="text-xs text-green-600 mt-1">+{salesData.length - 20} new shops</p>
        </div>
      </div>

      {/* Monthly Sales Trend */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Sales Trend (All Shops)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlySalesTotal}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `N$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip 
              formatter={(value) => [`N$${(value / 1000000).toFixed(2)}M`, 'Total Sales']}
              labelStyle={{ color: '#374151' }}
            />
            <Line 
              type="monotone" 
              dataKey="totalSales" 
              stroke="#8884d8" 
              strokeWidth={3}
              dot={{ fill: '#8884d8', strokeWidth: 2, r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quarterly Performance */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quarterly Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={quarterlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis tickFormatter={(value) => `N$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip 
              formatter={(value) => [`N$${(value / 1000000).toFixed(2)}M`, 'Sales']}
              labelStyle={{ color: '#374151' }}
            />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Categories */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productCategories}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Selling Products</h2>
          <div className="space-y-3">
            {topProducts.slice(0, 6).map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{formatCurrency(product.revenue)}</p>
                  <p className="text-sm text-gray-600">{product.sales.toLocaleString()} units</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction Volume Trend */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Transaction Volume</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlySalesTotal}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [value.toLocaleString(), 'Transactions']}
              labelStyle={{ color: '#374151' }}
            />
            <Bar dataKey="totalTransactions" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesAnalytics;