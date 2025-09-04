import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { salesData, shops } from '../data/choppiesDataUpdated';

const ShopPerformance = () => {
  const [selectedShop, setSelectedShop] = useState(salesData[0]);
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  const formatCurrency = (value) => {
    return `N$${value.toLocaleString()}`;
  };

  const formatLargeCurrency = (value) => {
    return `N$${(value / 1000000).toFixed(1)}M`;
  };

  // Get unique regions for filter
  const regions = ['ALL', ...new Set(salesData.map(shop => shop.region))];
  
  // Filter shops by region
  const filteredShops = selectedRegion === 'ALL' 
    ? salesData 
    : salesData.filter(shop => shop.region === selectedRegion);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 lg:mb-0">Shop Performance Analysis</h2>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-600">Region:</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'ALL' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-600">Select Shop:</label>
              <select
                value={selectedShop.id}
                onChange={(e) => setSelectedShop(filteredShops.find(shop => shop.id === e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                {filteredShops.map(shop => (
                  <option key={shop.id} value={shop.id}>
                    {shop.name} - {shop.town}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Shop Details */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-600">Shop Name</h3>
              <p className="text-lg font-semibold text-gray-800">{selectedShop.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Location</h3>
              <p className="text-lg font-semibold text-gray-800">{selectedShop.town}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Region</h3>
              <p className="text-lg font-semibold text-gray-800">{selectedShop.region}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600">Contact</h3>
              <p className="text-sm text-gray-600">{selectedShop.phone}</p>
              <p className="text-sm text-gray-600">{selectedShop.email}</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Total Revenue</h3>
            <p className="text-2xl font-bold text-blue-800">{formatLargeCurrency(selectedShop.totalRevenue)}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Avg Transaction</h3>
            <p className="text-2xl font-bold text-green-800">{formatCurrency(selectedShop.avgTransaction)}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600">Customer Count</h3>
            <p className="text-2xl font-bold text-purple-800">{selectedShop.customerCount.toLocaleString()}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-orange-600">Monthly Avg</h3>
            <p className="text-2xl font-bold text-orange-800">
              {formatCurrency(selectedShop.monthlyAverage)}
            </p>
          </div>
        </div>

        {/* Monthly Sales Trend */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Monthly Sales Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedShop.monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `N$${(value / 1000).toFixed(0)}K`} />
              <Tooltip 
                formatter={(value) => [formatCurrency(value), 'Sales']}
                labelStyle={{ color: '#374151' }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#8884d8" 
                strokeWidth={2}
                dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Transactions */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Monthly Transaction Count</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={selectedShop.monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [value.toLocaleString(), 'Transactions']}
                labelStyle={{ color: '#374151' }}
              />
              <Bar dataKey="transactions" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Shop Comparison Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          {selectedRegion === 'ALL' ? 'All Shops' : `${selectedRegion} Region`} Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Shop Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Region</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Total Revenue</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Avg Transaction</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Customers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredShops
                .sort((a, b) => b.totalRevenue - a.totalRevenue)
                .map((shop, index) => (
                <tr 
                  key={shop.id} 
                  className={`hover:bg-gray-50 cursor-pointer ${
                    shop.id === selectedShop.id ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedShop(shop)}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">{shop.name}</td>
                  <td className="px-4 py-3 text-gray-600">{shop.region}</td>
                  <td className="px-4 py-3 text-right font-medium text-gray-800">
                    {formatLargeCurrency(shop.totalRevenue)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {formatCurrency(shop.avgTransaction)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {shop.customerCount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopPerformance;