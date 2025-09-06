// Choppies Namibia Sales Data
// Based on actual regions and towns from the contact list

export const regions = [
  'OSHIKOTO REGION',
  'OSHANA REGION',
  'KHOMAS REGION', 
  'ERONGO REGION',
  'OTJOZONDJUPA REGION',
  'HARDAP REGION',
  'KARAS REGION',
  'KUNENE REGION'
];

export const shops = [
  { id: 'OMU001', name: 'Choppies Omuthiya', region: 'OSHIKOTO REGION', town: 'Omuthiya', phone: '+264813675644', email: 'omuthiya@choppies.co.na' },
  { id: 'OND001', name: 'Choppies Ondangwa', region: 'OSHANA REGION', town: 'Ondangwa', phone: '+264813270405', email: 'ondangwa@choppies.co.na' },
  { id: 'WHK001', name: 'Choppies Windhoek Central', region: 'KHOMAS REGION', town: 'Windhoek', phone: '+264813123456', email: 'windhoek@choppies.co.na' },
  { id: 'WHK002', name: 'Choppies Katutura', region: 'KHOMAS REGION', town: 'Windhoek', phone: '+264813123457', email: 'katutura@choppies.co.na' },
  { id: 'WAL001', name: 'Choppies Walvis Bay', region: 'ERONGO REGION', town: 'Walvis Bay', phone: '+264813234567', email: 'walvisbay@choppies.co.na' },
  { id: 'SWA001', name: 'Choppies Swakopmund', region: 'ERONGO REGION', town: 'Swakopmund', phone: '+264813234568', email: 'swakopmund@choppies.co.na' },
  { id: 'OTJ001', name: 'Choppies Otjiwarongo', region: 'OTJOZONDJUPA REGION', town: 'Otjiwarongo', phone: '+264813345678', email: 'otjiwarongo@choppies.co.na' },
  { id: 'MAR001', name: 'Choppies Mariental', region: 'HARDAP REGION', town: 'Mariental', phone: '+264813456789', email: 'mariental@choppies.co.na' },
  { id: 'KEE001', name: 'Choppies Keetmanshoop', region: 'KARAS REGION', town: 'Keetmanshoop', phone: '+264813567890', email: 'keetmanshoop@choppies.co.na' },
  { id: 'OPU001', name: 'Choppies Opuwo', region: 'KUNENE REGION', town: 'Opuwo', phone: '+264813678901', email: 'opuwo@choppies.co.na' }
];

// Generate realistic sales data for the past 12 months
const generateMonthlySales = (baseAmount, variance = 0.3) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    month,
    sales: Math.round(baseAmount * (1 + (Math.random() - 0.5) * variance)),
    transactions: Math.round((baseAmount / 150) * (1 + (Math.random() - 0.5) * 0.2))
  }));
};

export const salesData = shops.map(shop => ({
  ...shop,
  monthlySales: generateMonthlySales(
    shop.region === 'KHOMAS REGION' ? 850000 : 
    shop.region === 'ERONGO REGION' ? 650000 :
    shop.region === 'OSHANA REGION' ? 450000 : 350000
  ),
  totalRevenue: shop.region === 'KHOMAS REGION' ? 10200000 : 
                shop.region === 'ERONGO REGION' ? 7800000 :
                shop.region === 'OSHANA REGION' ? 5400000 : 4200000,
  avgTransaction: Math.round(120 + Math.random() * 80),
  customerCount: Math.round(2000 + Math.random() * 3000)
}));

export const productCategories = [
  { name: 'Groceries', value: 45, color: '#8884d8' },
  { name: 'Fresh Produce', value: 20, color: '#82ca9d' },
  { name: 'Beverages', value: 15, color: '#ffc658' },
  { name: 'Household Items', value: 12, color: '#ff7300' },
  { name: 'Personal Care', value: 8, color: '#00ff88' }
];

export const topProducts = [
  { name: 'Bread (Loaf)', sales: 45000, revenue: 675000, category: 'Groceries' },
  { name: 'Milk (2L)', sales: 32000, revenue: 896000, category: 'Groceries' },
  { name: 'Coca Cola (500ml)', sales: 28000, revenue: 420000, category: 'Beverages' },
  { name: 'Rice (2kg)', sales: 25000, revenue: 1250000, category: 'Groceries' },
  { name: 'Cooking Oil (750ml)', sales: 22000, revenue: 1100000, category: 'Groceries' },
  { name: 'Bananas (kg)', sales: 20000, revenue: 400000, category: 'Fresh Produce' },
  { name: 'Soap Bar', sales: 18000, revenue: 270000, category: 'Personal Care' },
  { name: 'Tomatoes (kg)', sales: 15000, revenue: 450000, category: 'Fresh Produce' }
];

export const regionalPerformance = regions.map(region => {
  const regionShops = shops.filter(shop => shop.region === region);
  const regionSales = salesData.filter(shop => shop.region === region);
  const totalRevenue = regionSales.reduce((sum, shop) => sum + shop.totalRevenue, 0);
  
  return {
    region: region.replace(' REGION', ''),
    shops: regionShops.length,
    revenue: totalRevenue,
    avgPerShop: regionShops.length > 0 ? Math.round(totalRevenue / regionShops.length) : 0,
    growth: Math.round((Math.random() - 0.3) * 20 * 10) / 10 // -6% to +14% growth
  };
});

export const inventoryData = [
  { category: 'Groceries', inStock: 15420, lowStock: 89, outOfStock: 12, turnoverRate: 8.5 },
  { category: 'Fresh Produce', inStock: 3200, lowStock: 45, outOfStock: 8, turnoverRate: 15.2 },
  { category: 'Beverages', inStock: 8900, lowStock: 23, outOfStock: 5, turnoverRate: 12.1 },
  { category: 'Household Items', inStock: 5600, lowStock: 67, outOfStock: 15, turnoverRate: 6.8 },
  { category: 'Personal Care', inStock: 4100, lowStock: 34, outOfStock: 7, turnoverRate: 9.3 }
];