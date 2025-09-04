import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { regionalPerformance } from '../data/choppiesDataUpdated';

const RegionalOverview = () => {
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff88', '#ff8042', '#8dd1e1', '#d084d0', '#a4de6c', '#ffc0cb', '#ffb347', '#87ceeb', '#dda0dd', '#98fb98'];

  const formatCurrency = (value) => {
    return `N$${(value / 1000000).toFixed(1)}M`;
  };

  const formatSmallCurrency = (value) => {
    return `N$${value.toLocaleString()}`;
  };

  const totalRevenue = regionalPerformance.reduce((sum, region) => sum + region.revenue, 0);
  const totalShops = regionalPerformance.reduce((sum, region) => sum + region.shops, 0);
  const totalPopulation = regionalPerformance.reduce((sum, region) => sum + region.population, 0);

  // Prepare data for population vs revenue scatter plot
  const populationRevenueData = regionalPerformance.map(region => ({
    ...region,
    x: region.population,
    y: region.revenue,
    z: region.shops
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Regional Performance Overview</h2>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-600">Total Revenue</h3>
            <p className="text-2xl font-bold text-blue-800">{formatCurrency(totalRevenue)}</p>
            <p className="text-xs text-blue-600 mt-1">Across all regions</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-600">Total Shops</h3>
            <p className="text-2xl font-bold text-green-800">{totalShops}</p>
            <p className="text-xs text-green-600 mt-1">Active locations</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-600">Market Coverage</h3>
            <p className="text-2xl font-bold text-purple-800">{(totalPopulation / 1000000).toFixed(1)}M</p>
            <p className="text-xs text-purple-600 mt-1">People served</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-orange-600">Avg Revenue/Shop</h3>
            <p className="text-2xl font-bold text-orange-800">{formatSmallCurrency(Math.round(totalRevenue / totalShops))}</p>
            <p className="text-xs text-orange-600 mt-1">Per location</p>
          </div>
        </div>

        {/* Revenue by Region Chart */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Revenue by Region (Based on Population & Economic Factors)</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={regionalPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="region" 
                angle={-45}
                textAnchor="end"
                height={100}
                fontSize={11}
              />
              <YAxis tickFormatter={formatCurrency} />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'revenue') return [formatCurrency(value), 'Revenue'];
                  if (name === 'population') return [value.toLocaleString(), 'Population'];
                  return [value, name];
                }}
                labelStyle={{ color: '#374151' }}
              />
              <Bar dataKey="revenue" fill="#8884d8" name="revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Population vs Revenue Correlation */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Population vs Revenue Correlation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={populationRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="Population"
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Revenue"
                tickFormatter={formatCurrency}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value, name, props) => {
                  if (name === 'Revenue') return [formatCurrency(value), name];
                  if (name === 'Population') return [value.toLocaleString(), name];
                  return [value, name];
                }}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    return `${payload[0].payload.region} (${payload[0].payload.shops} shops)`;
                  }
                  return label;
                }}
              />
              <Scatter dataKey="y" fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Regional Distribution and Performance Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Revenue Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionalPerformance.slice(0, 8)} // Show top 8 regions
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ region, percent }) => `${region}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {regionalPerformance.slice(0, 8).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [formatCurrency(value), 'Revenue']} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Performance Table */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Regional Performance Summary</h3>
            <div className="overflow-x-auto max-h-80 overflow-y-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-2 py-2 text-left font-medium text-gray-600">Region</th>
                    <th className="px-2 py-2 text-right font-medium text-gray-600">Population</th>
                    <th className="px-2 py-2 text-right font-medium text-gray-600">Shops</th>
                    <th className="px-2 py-2 text-right font-medium text-gray-600">Revenue/Capita</th>
                    <th className="px-2 py-2 text-right font-medium text-gray-600">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {regionalPerformance.map((region, index) => (
                    <tr key={region.region} className="hover:bg-gray-50">
                      <td className="px-2 py-2 font-medium text-gray-800 text-xs">{region.region}</td>
                      <td className="px-2 py-2 text-right text-gray-600 text-xs">{(region.population / 1000).toFixed(0)}K</td>
                      <td className="px-2 py-2 text-right text-gray-600 text-xs">{region.shops}</td>
                      <td className="px-2 py-2 text-right text-gray-600 text-xs">N${region.revenuePerCapita}</td>
                      <td className={`px-2 py-2 text-right font-medium text-xs ${
                        region.growth >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {region.growth > 0 ? '+' : ''}{region.growth}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Key Regional Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <p><strong>Highest Revenue:</strong> {regionalPerformance[0]?.region} - {formatCurrency(regionalPerformance[0]?.revenue)}</p>
              <p><strong>Most Shops:</strong> {regionalPerformance.find(r => r.shops === Math.max(...regionalPerformance.map(r => r.shops)))?.region} ({Math.max(...regionalPerformance.map(r => r.shops))} locations)</p>
            </div>
            <div>
              <p><strong>Highest Revenue/Capita:</strong> {regionalPerformance.find(r => r.revenuePerCapita === Math.max(...regionalPerformance.map(r => r.revenuePerCapita)))?.region} (N${Math.max(...regionalPerformance.map(r => r.revenuePerCapita))})</p>
              <p><strong>Growth Leader:</strong> {regionalPerformance.find(r => r.growth === Math.max(...regionalPerformance.map(r => r.growth)))?.region} ({Math.max(...regionalPerformance.map(r => r.growth)).toFixed(1)}%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalOverview;