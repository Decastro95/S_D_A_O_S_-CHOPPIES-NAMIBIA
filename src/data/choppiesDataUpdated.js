// Updated Choppies Namibia Sales Data with Real Regional Population and Sales Data

// Regional population data from Namibia census
export const regionalPopulation = {
  'KARAS': { population: 90000, cities: ['Keetmanshoop', 'Lüderitz', 'Aroab', 'Berseba', 'Karasburg'] },
  'HARDAP': { population: 85000, cities: ['Mariental', 'Rehoboth', 'Gibeon'] },
  'KHOMAS': { population: 420000, cities: ['Windhoek'] },
  'ERONGO': { population: 180000, cities: ['Walvis Bay', 'Swakopmund', 'Henties Bay'] },
  'OTJOZONDJUPA': { population: 145000, cities: ['Otjiwarongo', 'Okahandja', 'Grootfontein'] },
  'OMAHEKE': { population: 75000, cities: ['Gobabis'] },
  'KUNENE': { population: 95000, cities: ['Opuwo', 'Outjo', 'Khorixas'] },
  'OMUSATI': { population: 245000, cities: ['Outapi', 'Okahao'] },
  'OSHANA': { population: 180000, cities: ['Oshakati', 'Ondangwa'] },
  'OSHIKOTO': { population: 185000, cities: ['Omuthiya', 'Tsumeb'] },
  'OHANGWENA': { population: 250000, cities: ['Eenhana'] },
  'KAVANGO EAST': { population: 135000, cities: ['Rundu'] },
  'KAVANGO WEST': { population: 95000, cities: ['Nkurenkuru'] },
  'ZAMBEZI': { population: 95000, cities: ['Katima Mulilo'] }
};

// Updated shop data based on population and strategic locations
export const shops = [
  // Khomas Region (Highest population - 420k)
  { id: 'WHK001', name: 'Choppies Windhoek Central', region: 'KHOMAS', town: 'Windhoek', phone: '+264813123456', email: 'windhoek@choppies.co.na', storeCode: 'Store_01' },
  { id: 'WHK002', name: 'Choppies Katutura', region: 'KHOMAS', town: 'Windhoek', phone: '+264813123457', email: 'katutura@choppies.co.na', storeCode: 'Store_02' },
  { id: 'WHK003', name: 'Choppies Windhoek North', region: 'KHOMAS', town: 'Windhoek', phone: '+264813123458', email: 'windhoek.north@choppies.co.na', storeCode: 'Store_03' },
  
  // Ohangwena Region (250k population)
  { id: 'EEN001', name: 'Choppies Eenhana', region: 'OHANGWENA', town: 'Eenhana', phone: '+264813234567', email: 'eenhana@choppies.co.na', storeCode: 'Store_04' },
  
  // Omusati Region (245k population)
  { id: 'OUT001', name: 'Choppies Outapi', region: 'OMUSATI', town: 'Outapi', phone: '+264813345678', email: 'outapi@choppies.co.na', storeCode: 'Store_05' },
  { id: 'OKA001', name: 'Choppies Okahao', region: 'OMUSATI', town: 'Okahao', phone: '+264813345679', email: 'okahao@choppies.co.na', storeCode: 'Store_06' },
  
  // Oshikoto Region (185k population)
  { id: 'OMU001', name: 'Choppies Omuthiya', region: 'OSHIKOTO', town: 'Omuthiya', phone: '+264813675644', email: 'omuthiya@choppies.co.na', storeCode: 'Store_07' },
  { id: 'TSU001', name: 'Choppies Tsumeb', region: 'OSHIKOTO', town: 'Tsumeb', phone: '+264813456789', email: 'tsumeb@choppies.co.na', storeCode: 'Store_08' },
  
  // Oshana Region (180k population)
  { id: 'OND001', name: 'Choppies Ondangwa', region: 'OSHANA', town: 'Ondangwa', phone: '+264813270405', email: 'ondangwa@choppies.co.na', storeCode: 'Store_09' },
  { id: 'OSH001', name: 'Choppies Oshakati', region: 'OSHANA', town: 'Oshakati', phone: '+264813567890', email: 'oshakati@choppies.co.na', storeCode: 'Store_10' },
  
  // Erongo Region (180k population)
  { id: 'WAL001', name: 'Choppies Walvis Bay', region: 'ERONGO', town: 'Walvis Bay', phone: '+264813234567', email: 'walvisbay@choppies.co.na', storeCode: 'Store_11' },
  { id: 'SWA001', name: 'Choppies Swakopmund', region: 'ERONGO', town: 'Swakopmund', phone: '+264813234568', email: 'swakopmund@choppies.co.na', storeCode: 'Store_12' },
  
  // Otjozondjupa Region (145k population)
  { id: 'OTJ001', name: 'Choppies Otjiwarongo', region: 'OTJOZONDJUPA', town: 'Otjiwarongo', phone: '+264813345678', email: 'otjiwarongo@choppies.co.na', storeCode: 'Store_13' },
  { id: 'OKA002', name: 'Choppies Okahandja', region: 'OTJOZONDJUPA', town: 'Okahandja', phone: '+264813345680', email: 'okahandja@choppies.co.na', storeCode: 'Store_14' },
  
  // Kavango East Region (135k population)
  { id: 'RUN001', name: 'Choppies Rundu', region: 'KAVANGO EAST', town: 'Rundu', phone: '+264813678901', email: 'rundu@choppies.co.na', storeCode: 'Store_15' },
  
  // Zambezi Region (95k population)
  { id: 'KAT001', name: 'Choppies Katima Mulilo', region: 'ZAMBEZI', town: 'Katima Mulilo', phone: '+264813789012', email: 'katima@choppies.co.na', storeCode: 'Store_16' },
  
  // Kavango West Region (95k population)
  { id: 'NKU001', name: 'Choppies Nkurenkuru', region: 'KAVANGO WEST', town: 'Nkurenkuru', phone: '+264813890123', email: 'nkurenkuru@choppies.co.na', storeCode: 'Store_17' },
  
  // Kunene Region (95k population)
  { id: 'OPU001', name: 'Choppies Opuwo', region: 'KUNENE', town: 'Opuwo', phone: '+264813678901', email: 'opuwo@choppies.co.na', storeCode: 'Store_18' },
  
  // Karas Region (90k population)
  { id: 'KEE001', name: 'Choppies Keetmanshoop', region: 'KARAS', town: 'Keetmanshoop', phone: '+264813567890', email: 'keetmanshoop@choppies.co.na', storeCode: 'Store_19' },
  { id: 'LUD001', name: 'Choppies Lüderitz', region: 'KARAS', town: 'Lüderitz', phone: '+264813567891', email: 'luderitz@choppies.co.na', storeCode: 'Store_20' },
  
  // Hardap Region (85k population)
  { id: 'MAR001', name: 'Choppies Mariental', region: 'HARDAP', town: 'Mariental', phone: '+264813456789', email: 'mariental@choppies.co.na', storeCode: 'Store_21' },
  { id: 'REH001', name: 'Choppies Rehoboth', region: 'HARDAP', town: 'Rehoboth', phone: '+264813456790', email: 'rehoboth@choppies.co.na', storeCode: 'Store_22' },
  
  // Omaheke Region (75k population)
  { id: 'GOB001', name: 'Choppies Gobabis', region: 'OMAHEKE', town: 'Gobabis', phone: '+264813901234', email: 'gobabis@choppies.co.na', storeCode: 'Store_23' }
];

// Generate realistic sales data based on regional population and economic factors
const generateRegionalSales = (region, population, shopCount) => {
  // Economic factors: Khomas (capital) has highest spending power, northern regions have lower income
  const economicMultiplier = {
    'KHOMAS': 1.5,
    'ERONGO': 1.3,
    'OTJOZONDJUPA': 1.1,
    'OSHANA': 0.9,
    'OSHIKOTO': 0.9,
    'OHANGWENA': 0.8,
    'OMUSATI': 0.8,
    'KAVANGO EAST': 0.7,
    'HARDAP': 1.0,
    'KARAS': 1.0,
    'KUNENE': 0.8,
    'KAVANGO WEST': 0.7,
    'ZAMBEZI': 0.7,
    'OMAHEKE': 0.9
  };

  const baseRevenuePerCapita = 150; // N$ per person per year
  const multiplier = economicMultiplier[region] || 1.0;
  const totalRegionalRevenue = population * baseRevenuePerCapita * multiplier;
  const revenuePerShop = totalRegionalRevenue / shopCount;

  return {
    totalRevenue: Math.round(revenuePerShop),
    monthlyAverage: Math.round(revenuePerShop / 12),
    customerCount: Math.round(population * 0.6 / shopCount), // 60% of population shops at Choppies
    avgTransaction: Math.round(80 + (multiplier * 40)) // Higher income regions have higher transaction values
  };
};

// Generate monthly sales data with seasonal variations
const generateMonthlySales = (baseAmount, region) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Seasonal factors (December is holiday season, April is post-harvest)
  const seasonalFactors = [0.9, 0.85, 0.95, 1.1, 1.0, 0.9, 0.9, 0.95, 1.0, 1.05, 1.1, 1.3];
  
  return months.map((month, index) => ({
    month,
    sales: Math.round(baseAmount * seasonalFactors[index] * (0.8 + Math.random() * 0.4)),
    transactions: Math.round((baseAmount * seasonalFactors[index] / 120) * (0.8 + Math.random() * 0.4))
  }));
};

// Create sales data for each shop
export const salesData = shops.map(shop => {
  const regionPopulation = regionalPopulation[shop.region]?.population || 100000;
  const regionShops = shops.filter(s => s.region === shop.region).length;
  const salesMetrics = generateRegionalSales(shop.region, regionPopulation, regionShops);
  
  return {
    ...shop,
    ...salesMetrics,
    monthlySales: generateMonthlySales(salesMetrics.monthlyAverage, shop.region)
  };
});

// Calculate regional performance based on actual data
export const regionalPerformance = Object.keys(regionalPopulation).map(region => {
  const regionShops = shops.filter(shop => shop.region === region);
  const regionSales = salesData.filter(shop => shop.region === region);
  const totalRevenue = regionSales.reduce((sum, shop) => sum + shop.totalRevenue, 0);
  const population = regionalPopulation[region]?.population || 0;
  
  return {
    region: region.replace(' REGION', ''),
    shops: regionShops.length,
    revenue: totalRevenue,
    population: population,
    revenuePerCapita: population > 0 ? Math.round(totalRevenue / population) : 0,
    avgPerShop: regionShops.length > 0 ? Math.round(totalRevenue / regionShops.length) : 0,
    growth: Math.round((Math.random() - 0.2) * 20 * 10) / 10 // -4% to +16% growth
  };
}).sort((a, b) => b.revenue - a.revenue);

// Product categories remain the same
export const productCategories = [
  { name: 'Groceries', value: 45, color: '#8884d8' },
  { name: 'Fresh Produce', value: 20, color: '#82ca9d' },
  { name: 'Beverages', value: 15, color: '#ffc658' },
  { name: 'Household Items', value: 12, color: '#ff7300' },
  { name: 'Personal Care', value: 8, color: '#00ff88' }
];

// Updated top products with Namibian context
export const topProducts = [
  { name: 'Maize Meal (2.5kg)', sales: 85000, revenue: 2125000, category: 'Groceries' },
  { name: 'Bread (Loaf)', sales: 75000, revenue: 1125000, category: 'Groceries' },
  { name: 'Milk (2L)', sales: 62000, revenue: 1736000, category: 'Groceries' },
  { name: 'Cooking Oil (750ml)', sales: 48000, revenue: 2400000, category: 'Groceries' },
  { name: 'Rice (2kg)', sales: 45000, revenue: 2250000, category: 'Groceries' },
  { name: 'Coca Cola (500ml)', sales: 42000, revenue: 630000, category: 'Beverages' },
  { name: 'Sugar (2kg)', sales: 38000, revenue: 1140000, category: 'Groceries' },
  { name: 'Bananas (kg)', sales: 35000, revenue: 700000, category: 'Fresh Produce' },
  { name: 'Tomatoes (kg)', sales: 32000, revenue: 960000, category: 'Fresh Produce' },
  { name: 'Soap Bar', sales: 28000, revenue: 420000, category: 'Personal Care' }
];

export const inventoryData = [
  { category: 'Groceries', inStock: 25420, lowStock: 156, outOfStock: 23, turnoverRate: 12.5 },
  { category: 'Fresh Produce', inStock: 8200, lowStock: 89, outOfStock: 15, turnoverRate: 24.2 },
  { category: 'Beverages', inStock: 15900, lowStock: 67, outOfStock: 12, turnoverRate: 18.1 },
  { category: 'Household Items', inStock: 9600, lowStock: 134, outOfStock: 28, turnoverRate: 8.8 },
  { category: 'Personal Care', inStock: 6100, outOfStock: 18, lowStock: 45, turnoverRate: 11.3 }
];

// Export regions for easy access
export const regions = Object.keys(regionalPopulation);