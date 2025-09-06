// Bread and Cereals Sales Data Integration for Choppies Namibia
// Based on uploaded CSV data distributed across regions by population

import { regionalPopulation, shops } from './choppiesDataUpdated';

// Sample bread and cereals products from the CSV data
export const breadCerealsProducts = [
  { name: 'White Bread (Loaf)', unitPrice: 15.00, category: 'Bread' },
  { name: 'Brown Bread (Loaf)', unitPrice: 18.00, category: 'Bread' },
  { name: 'Whole Wheat Bread', unitPrice: 22.00, category: 'Bread' },
  { name: 'Maize Meal (2.5kg)', unitPrice: 45.00, category: 'Cereals' },
  { name: 'Oats (1kg)', unitPrice: 35.00, category: 'Cereals' },
  { name: 'Cornflakes (500g)', unitPrice: 28.00, category: 'Cereals' },
  { name: 'Rice (2kg)', unitPrice: 50.00, category: 'Cereals' },
  { name: 'Pasta (500g)', unitPrice: 25.00, category: 'Cereals' },
  { name: 'Flour (2kg)', unitPrice: 32.00, category: 'Cereals' },
  { name: 'Rusks (500g)', unitPrice: 42.00, category: 'Bread' }
];

// Calculate regional bread & cereals consumption based on population
const calculateRegionalConsumption = () => {
  const totalNamibianPopulation = Object.values(regionalPopulation).reduce((sum, region) => sum + region.population, 0);
  
  // Base consumption patterns (units per person per month)
  const monthlyConsumptionPerPerson = {
    'White Bread (Loaf)': 4.2,
    'Brown Bread (Loaf)': 2.1,
    'Whole Wheat Bread': 1.0,
    'Maize Meal (2.5kg)': 1.8,
    'Oats (1kg)': 0.5,
    'Cornflakes (500g)': 0.8,
    'Rice (2kg)': 1.2,
    'Pasta (500g)': 1.5,
    'Flour (2kg)': 0.7,
    'Rusks (500g)': 0.9
  };

  const regionalData = {};

  Object.keys(regionalPopulation).forEach(region => {
    const regionPop = regionalPopulation[region].population;
    const marketPenetration = 0.5; // 50% of population shops at Choppies
    const activeCustomers = Math.round(regionPop * marketPenetration);
    
    regionalData[region] = {
      population: regionPop,
      activeCustomers: activeCustomers,
      monthlyConsumption: {},
      monthlyRevenue: 0,
      yearlyProjection: 0
    };

    let totalMonthlyRevenue = 0;

    breadCerealsProducts.forEach(product => {
      const monthlyUnits = Math.round(activeCustomers * monthlyConsumptionPerPerson[product.name]);
      const monthlyRevenue = monthlyUnits * product.unitPrice;
      
      regionalData[region].monthlyConsumption[product.name] = {
        units: monthlyUnits,
        revenue: monthlyRevenue
      };
      
      totalMonthlyRevenue += monthlyRevenue;
    });

    regionalData[region].monthlyRevenue = totalMonthlyRevenue;
    regionalData[region].yearlyProjection = totalMonthlyRevenue * 12;
  });

  return regionalData;
};

export const regionalBreadCerealsData = calculateRegionalConsumption();

// Generate monthly projections for the next 12 months
export const monthlyProjections = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months.map(month => {
    let totalRevenue = 0;
    let totalUnits = 0;
    
    Object.keys(regionalBreadCerealsData).forEach(region => {
      const regionData = regionalBreadCerealsData[region];
      // Add seasonal variation (December +20%, June-August -10%)
      const seasonalMultiplier = month === 'Dec' ? 1.2 : 
                                (month === 'Jun' || month === 'Jul' || month === 'Aug') ? 0.9 : 1.0;
      
      const adjustedRevenue = regionData.monthlyRevenue * seasonalMultiplier;
      totalRevenue += adjustedRevenue;
      
      // Calculate total units
      Object.values(regionData.monthlyConsumption).forEach(product => {
        totalUnits += product.units * seasonalMultiplier;
      });
    });
    
    return {
      month,
      revenue: Math.round(totalRevenue),
      units: Math.round(totalUnits),
      avgPrice: Math.round(totalRevenue / totalUnits * 100) / 100
    };
  });
};

// Calculate overall Namibia projections
export const namibiaOverallProjection = () => {
  const totalPopulation = Object.values(regionalPopulation).reduce((sum, region) => sum + region.population, 0);
  const totalActiveCustomers = Math.round(totalPopulation * 0.5);
  const totalMonthlyRevenue = Object.values(regionalBreadCerealsData).reduce((sum, region) => sum + region.monthlyRevenue, 0);
  const totalYearlyRevenue = totalMonthlyRevenue * 12;
  
  // Top performing regions
  const sortedRegions = Object.entries(regionalBreadCerealsData)
    .sort(([,a], [,b]) => b.yearlyProjection - a.yearlyProjection)
    .slice(0, 5);
  
  return {
    totalPopulation,
    totalActiveCustomers,
    monthlyRevenue: totalMonthlyRevenue,
    yearlyRevenue: totalYearlyRevenue,
    avgRevenuePerCustomer: Math.round(totalMonthlyRevenue / totalActiveCustomers),
    topRegions: sortedRegions.map(([region, data]) => ({
      region,
      yearlyRevenue: data.yearlyProjection,
      customers: data.activeCustomers
    }))
  };
};

// Product performance analysis
export const productPerformanceAnalysis = () => {
  const productTotals = {};
  
  breadCerealsProducts.forEach(product => {
    let totalUnits = 0;
    let totalRevenue = 0;
    
    Object.values(regionalBreadCerealsData).forEach(regionData => {
      const productData = regionData.monthlyConsumption[product.name];
      totalUnits += productData.units;
      totalRevenue += productData.revenue;
    });
    
    productTotals[product.name] = {
      monthlyUnits: totalUnits,
      monthlyRevenue: totalRevenue,
      yearlyUnits: totalUnits * 12,
      yearlyRevenue: totalRevenue * 12,
      unitPrice: product.unitPrice,
      category: product.category
    };
  });
  
  return Object.entries(productTotals)
    .sort(([,a], [,b]) => b.yearlyRevenue - a.yearlyRevenue)
    .map(([name, data]) => ({ name, ...data }));
};

export const monthlyProjectionData = monthlyProjections();
export const overallProjection = namibiaOverallProjection();
export const productPerformance = productPerformanceAnalysis();