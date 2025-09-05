import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  regionalBreadCerealsData, 
  monthlyProjectionData, 
  overallProjection, 
  productPerformance,
  breadCerealsProducts 
} from '../data/breadCerealsData';

const BreadCerealsAnalytics = () => {
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  const formatCurrency = (value) => `N$${value.toLocaleString()}`;
  const formatLargeCurrency = (value) => `N$${(value / 1000000).toFixed(1)}M`;

  // Prepare regional data for charts
  const regionalChartData = Object.entries(regionalBreadCerealsData).map(([region, data]) => ({
    region: region.replace(' REGION', ''),
    monthlyRevenue: data.monthlyRevenue,
    yearlyProjection: data.yearlyProjection,
    customers: data.activeCustomers,
    population: data.population
  })).sort((a, b) => b.yearlyProjection - a.yearlyProjection);

  // Product category breakdown
  const categoryData = [
    { 
      name: 'Bread Products', 
      value: productPerformance.filter(p => p.category === 'Bread').reduce((sum, p) => sum + p.yearlyRevenue, 0),
      color: '#8884d8'
    },
    { 
      name: 'Cereal Products', 
      value: productPerformance.filter(p => p.category === 'Cereals').reduce((sum, p) => sum + p.yearlyRevenue, 0),
      color: '#82ca9d'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overall Projections Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🍞 Bread & Cereals Sales Projections</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-blue-600">Yearly Revenue Projection</h3>
            <p className="text-2xl font-bold text-blue-800">{formatLargeCurrency(overallProjection.yearlyRevenue)}</p>
            <p className="text-xs text-blue-600 mt-1">All regions combined</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-green-600">Monthly Average</h3>
            <p className="text-2xl font-bold text-green-800">{formatCurrency(overallProjection.monthlyRevenue)}</p>
            <p className="text-xs text-green-600 mt-1">Consistent demand</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-purple-600">Active Customers</h3>
            <p className="text-2xl font-bold text-purple-800">{overallProjection.totalActiveCustomers.toLocaleString()}</p>
            <p className="text-xs text-purple-600 mt-1">50% market penetration</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-orange-600">Avg Revenue/Customer</h3>
            <p className="text-2xl font-bold text-orange-800">{formatCurrency(overallProjection.avgRevenuePerCustomer)}</p>
            <p className="text-xs text-orange-600 mt-1">Per month</p>
          </div>
        </div>
      </div>

      {/* Monthly Projections Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">12-Month Revenue Projections</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyProjectionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `N$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'revenue') return [formatCurrency(value), 'Revenue'];
                if (name === 'units') return [value.toLocaleString(), 'Units Sold'];
                return [value, name];
              }}
              labelStyle={{ color: '#374151' }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#8884d8" 
              strokeWidth={3}
              dot={{ fill: '#8884d8', strokeWidth: 2, r: 5 }}
              name="revenue"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 text-sm text-gray-600">
          <p><strong>Seasonal Patterns:</strong> December shows 20% increase (holiday season), June-August show 10% decrease (winter months)</p>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Regional Sales Projections</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={regionalChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="region" 
              angle={-45}
              textAnchor="end"
              height={100}
              fontSize={11}
            />
            <YAxis tickFormatter={(value) => `N$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip 
              formatter={(value) => [formatLargeCurrency(value), 'Yearly Projection']}
              labelStyle={{ color: '#374151' }}
            />
            <Bar dataKey="yearlyProjection" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Category Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [formatLargeCurrency(value), 'Yearly Revenue']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performing Products */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Products by Revenue</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {productPerformance.slice(0, 8).map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.category} • {formatCurrency(product.unitPrice)}/unit</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{formatLargeCurrency(product.yearlyRevenue)}</p>
                  <p className="text-sm text-gray-600">{(product.yearlyUnits / 1000).toFixed(0)}K units/year</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Breakdown Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Regional Projections</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Region</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Population</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Active Customers</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Monthly Revenue</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Yearly Projection</th>
                <th className="px-4 py-3 text-right font-medium text-gray-600">Revenue/Customer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {regionalChartData.map((region, index) => (
                <tr key={region.region} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{region.region}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{region.population.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{region.customers.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right font-medium text-gray-800">
                    {formatCurrency(region.monthlyRevenue)}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">
                    {formatLargeCurrency(region.yearlyProjection)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    {formatCurrency(Math.round(region.monthlyRevenue / region.customers))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-medium text-blue-800 mb-3">📊 Key Business Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <p><strong>Top Revenue Region:</strong> {overallProjection.topRegions[0]?.region} - {formatLargeCurrency(overallProjection.topRegions[0]?.yearlyRevenue)}</p>
            <p><strong>Best Product:</strong> {productPerformance[0]?.name} - {formatLargeCurrency(productPerformance[0]?.yearlyRevenue)}</p>
            <p><strong>Market Opportunity:</strong> 50% penetration leaves room for growth</p>
          </div>
          <div>
            <p><strong>Seasonal Peak:</strong> December (+20% sales boost)</p>
            <p><strong>Category Leader:</strong> {categoryData[0]?.name} dominates revenue</p>
            <p><strong>Customer Base:</strong> {overallProjection.totalActiveCustomers.toLocaleString()} active buyers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCerealsAnalytics;