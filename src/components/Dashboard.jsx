import React, { useState } from 'react';
import StatsCard from './StatsCard';
import RegionalOverview from './RegionalOverview';
import ShopPerformance from './ShopPerformance';
import SalesAnalytics from './SalesAnalytics';
import InventoryDashboard from './InventoryDashboard';
import BreadCerealsAnalytics from './BreadCerealsAnalytics';
import CategoryAnalytics from './CategoryAnalytics';
import POSSystem from './POSSystem';
import { salesData, regionalPerformance } from '../data/choppiesDataUpdated';
import { overallProjection } from '../data/breadCerealsData';
import { categorySalesData } from '../data/expandedCategoriesData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Calculate key metrics
  const totalRevenue = salesData.reduce((sum, shop) => sum + shop.totalRevenue, 0);
  const totalShops = salesData.length;
  const avgRevenuePerShop = totalRevenue / totalShops;
  const totalCustomers = salesData.reduce((sum, shop) => sum + shop.customerCount, 0);

  // Add bread & cereals and category projections to total
  const breadCerealsYearlyRevenue = overallProjection.yearlyRevenue;
  const categoryYearlyRevenue = categorySalesData.reduce((sum, cat) => sum + cat.yearlyProjection, 0);
  const combinedRevenue = totalRevenue + breadCerealsYearlyRevenue + categoryYearlyRevenue;

  const tabs = [
    { id: 'overview', name: 'Regional Overview', icon: '🌍' },
    { id: 'shops', name: 'Shop Performance', icon: '🏪' },
    { id: 'sales', name: 'Sales Analytics', icon: '📊' },
    { id: 'categories', name: 'Category Analytics', icon: '📦' },
    { id: 'bread-cereals', name: 'Bread & Cereals', icon: '🍞' },
    { id: 'inventory', name: 'Inventory', icon: '📋' },
    { id: 'pos', name: 'POS System', icon: '🛒' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Stats - Only show if not POS tab */}
      {activeTab !== 'pos' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Revenue Projection"
            value={`N$${(combinedRevenue / 1000000).toFixed(1)}M`}
            change="+22.8%"
            changeType="positive"
          />
          <StatsCard
            title="Active Shops"
            value={totalShops.toString()}
            change={`+${totalShops - 20} new`}
            changeType="positive"
          />
          <StatsCard
            title="Product Categories"
            value="10"
            change="All categories active"
            changeType="positive"
          />
          <StatsCard
            title="Total Customers"
            value={(totalCustomers + overallProjection.totalActiveCustomers).toLocaleString()}
            change="+25.4%"
            changeType="positive"
          />
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-3 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className={activeTab === 'pos' ? '' : 'p-6'}>
          {activeTab === 'overview' && <RegionalOverview />}
          {activeTab === 'shops' && <ShopPerformance />}
          {activeTab === 'sales' && <SalesAnalytics />}
          {activeTab === 'categories' && <CategoryAnalytics />}
          {activeTab === 'bread-cereals' && <BreadCerealsAnalytics />}
          {activeTab === 'inventory' && <InventoryDashboard />}
          {activeTab === 'pos' && <POSSystem />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;