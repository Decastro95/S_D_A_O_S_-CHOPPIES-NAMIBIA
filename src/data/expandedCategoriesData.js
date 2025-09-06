// Expanded Categories Data for Choppies Namibia
// Based on the 10 main categories with detailed product items

export const productCategories = {
  BEVERAGES: {
    name: 'Beverages',
    icon: '🥤',
    color: '#3B82F6',
    items: [
      { name: 'Coca-Cola (500ml)', price: 12.50, stock: 850, lowStock: 100 },
      { name: 'Fanta Orange (500ml)', price: 12.50, stock: 720, lowStock: 100 },
      { name: 'Sprite (500ml)', price: 12.50, stock: 680, lowStock: 100 },
      { name: 'Savanna Cider (440ml)', price: 18.00, stock: 450, lowStock: 50 },
      { name: 'Windhoek Lager (440ml)', price: 22.00, stock: 380, lowStock: 50 },
      { name: 'Tafel Lager (440ml)', price: 20.00, stock: 320, lowStock: 50 },
      { name: 'Fresh Milk (1L)', price: 18.50, stock: 290, lowStock: 30 },
      { name: 'Mageu (500ml)', price: 8.50, stock: 180, lowStock: 25 },
      { name: 'Fruit Juice (1L)', price: 25.00, stock: 240, lowStock: 30 },
      { name: 'Energy Drink (250ml)', price: 15.00, stock: 320, lowStock: 40 }
    ]
  },
  
  EDIBLE_GROCERIES: {
    name: 'Edible Groceries',
    icon: '🛒',
    color: '#10B981',
    items: [
      { name: 'Maize Meal (2.5kg)', price: 45.00, stock: 580, lowStock: 80 },
      { name: 'Rice (2kg)', price: 50.00, stock: 420, lowStock: 60 },
      { name: 'Sugar (2kg)', price: 35.00, stock: 380, lowStock: 50 },
      { name: 'Cooking Oil (750ml)', price: 28.00, stock: 320, lowStock: 40 },
      { name: 'Salt (1kg)', price: 12.00, stock: 250, lowStock: 30 },
      { name: 'Flour (2kg)', price: 32.00, stock: 290, lowStock: 40 },
      { name: 'Tea Bags (100s)', price: 22.00, stock: 180, lowStock: 25 },
      { name: 'Coffee (200g)', price: 45.00, stock: 150, lowStock: 20 },
      { name: 'Pasta (500g)', price: 25.00, stock: 200, lowStock: 30 },
      { name: 'Canned Beans (410g)', price: 18.00, stock: 340, lowStock: 40 }
    ]
  },

  CFC: {
    name: 'CFC (Chicken & Fast Foods)',
    icon: '🍗',
    color: '#F59E0B',
    items: [
      { name: 'Whole Chicken (1.5kg)', price: 85.00, stock: 120, lowStock: 20 },
      { name: 'Chicken Pieces (1kg)', price: 65.00, stock: 180, lowStock: 25 },
      { name: 'Chicken Wings (1kg)', price: 70.00, stock: 150, lowStock: 20 },
      { name: 'Frozen Chips (1kg)', price: 35.00, stock: 200, lowStock: 30 },
      { name: 'Boerewors (1kg)', price: 95.00, stock: 80, lowStock: 15 },
      { name: 'Beef Mince (1kg)', price: 120.00, stock: 60, lowStock: 10 },
      { name: 'Pork Chops (1kg)', price: 110.00, stock: 45, lowStock: 8 },
      { name: 'Fish Fillets (500g)', price: 85.00, stock: 90, lowStock: 15 },
      { name: 'Sausages (1kg)', price: 75.00, stock: 120, lowStock: 20 },
      { name: 'Bacon (500g)', price: 65.00, stock: 85, lowStock: 12 }
    ]
  },

  ETHNIC_PRODUCTS: {
    name: 'Ethnic Products',
    icon: '🌍',
    color: '#8B5CF6',
    items: [
      { name: 'Mopane Worms (500g)', price: 120.00, stock: 45, lowStock: 8 },
      { name: 'Dried Fish (250g)', price: 85.00, stock: 60, lowStock: 10 },
      { name: 'Traditional Spices Mix', price: 25.00, stock: 80, lowStock: 12 },
      { name: 'Oshifima Mix (1kg)', price: 35.00, stock: 120, lowStock: 18 },
      { name: 'Wild Spinach (Omutete)', price: 15.00, stock: 40, lowStock: 8 },
      { name: 'Marula Oil (250ml)', price: 180.00, stock: 25, lowStock: 5 },
      { name: 'Traditional Porridge Mix', price: 28.00, stock: 90, lowStock: 15 },
      { name: 'Kapana Spice (100g)', price: 22.00, stock: 65, lowStock: 10 },
      { name: 'Dried Meat (Biltong 500g)', price: 150.00, stock: 35, lowStock: 6 },
      { name: 'Traditional Herbs Bundle', price: 45.00, stock: 30, lowStock: 5 }
    ]
  },

  FRESH: {
    name: 'Fresh Products',
    icon: '🥬',
    color: '#059669',
    items: [
      { name: 'Tomatoes (1kg)', price: 25.00, stock: 180, lowStock: 30 },
      { name: 'Onions (1kg)', price: 20.00, stock: 220, lowStock: 35 },
      { name: 'Potatoes (2kg)', price: 35.00, stock: 280, lowStock: 40 },
      { name: 'Carrots (1kg)', price: 18.00, stock: 150, lowStock: 25 },
      { name: 'Cabbage (1 head)', price: 15.00, stock: 120, lowStock: 20 },
      { name: 'Spinach (bunch)', price: 12.00, stock: 90, lowStock: 15 },
      { name: 'Bananas (1kg)', price: 22.00, stock: 200, lowStock: 30 },
      { name: 'Apples (1kg)', price: 35.00, stock: 140, lowStock: 20 },
      { name: 'Oranges (1kg)', price: 28.00, stock: 160, lowStock: 25 },
      { name: 'Lettuce (1 head)', price: 18.00, stock: 85, lowStock: 15 }
    ]
  },

  GENERAL_MERCHANDISE: {
    name: 'General Merchandise',
    icon: '🏪',
    color: '#6B7280',
    items: [
      { name: 'Toilet Paper (4 rolls)', price: 35.00, stock: 280, lowStock: 40 },
      { name: 'Laundry Detergent (1kg)', price: 45.00, stock: 180, lowStock: 25 },
      { name: 'Dish Soap (750ml)', price: 22.00, stock: 220, lowStock: 30 },
      { name: 'Matches (10 boxes)', price: 8.00, stock: 150, lowStock: 20 },
      { name: 'Candles (pack of 6)', price: 18.00, stock: 120, lowStock: 18 },
      { name: 'Batteries (AA 4-pack)', price: 25.00, stock: 90, lowStock: 15 },
      { name: 'Light Bulbs (60W)', price: 15.00, stock: 80, lowStock: 12 },
      { name: 'Plastic Bags (50s)', price: 12.00, stock: 200, lowStock: 30 },
      { name: 'Aluminum Foil (10m)', price: 28.00, stock: 65, lowStock: 10 },
      { name: 'Cleaning Cloth (3-pack)', price: 20.00, stock: 110, lowStock: 15 }
    ]
  },

  HOUSEHOLD: {
    name: 'Household',
    icon: '🏠',
    color: '#DC2626',
    items: [
      { name: 'Cooking Pots (Medium)', price: 180.00, stock: 25, lowStock: 5 },
      { name: 'Plates Set (6 pieces)', price: 120.00, stock: 35, lowStock: 6 },
      { name: 'Cups Set (6 pieces)', price: 85.00, stock: 40, lowStock: 8 },
      { name: 'Kitchen Knives Set', price: 150.00, stock: 20, lowStock: 4 },
      { name: 'Plastic Containers (5L)', price: 45.00, stock: 60, lowStock: 10 },
      { name: 'Brooms', price: 35.00, stock: 45, lowStock: 8 },
      { name: 'Mops', price: 55.00, stock: 30, lowStock: 6 },
      { name: 'Buckets (10L)', price: 65.00, stock: 40, lowStock: 8 },
      { name: 'Towels (Bath)', price: 95.00, stock: 50, lowStock: 10 },
      { name: 'Bed Sheets (Double)', price: 180.00, stock: 25, lowStock: 5 }
    ]
  },

  PERISHABLE: {
    name: 'Perishable',
    icon: '❄️',
    color: '#0EA5E9',
    items: [
      { name: 'Fresh Bread (Loaf)', price: 15.00, stock: 120, lowStock: 20 },
      { name: 'Eggs (30s)', price: 65.00, stock: 80, lowStock: 15 },
      { name: 'Butter (500g)', price: 55.00, stock: 45, lowStock: 8 },
      { name: 'Cheese (500g)', price: 85.00, stock: 35, lowStock: 6 },
      { name: 'Yogurt (500ml)', price: 25.00, stock: 60, lowStock: 10 },
      { name: 'Ice Cream (1L)', price: 45.00, stock: 40, lowStock: 8 },
      { name: 'Frozen Vegetables (1kg)', price: 35.00, stock: 70, lowStock: 12 },
      { name: 'Fresh Meat (1kg)', price: 150.00, stock: 25, lowStock: 5 },
      { name: 'Sour Milk (500ml)', price: 18.00, stock: 55, lowStock: 10 },
      { name: 'Cream (250ml)', price: 32.00, stock: 30, lowStock: 6 }
    ]
  },

  PERSONAL_CARE: {
    name: 'Personal Care',
    icon: '🧴',
    color: '#EC4899',
    items: [
      { name: 'Toothpaste (100ml)', price: 22.00, stock: 180, lowStock: 25 },
      { name: 'Toothbrush', price: 15.00, stock: 120, lowStock: 20 },
      { name: 'Shampoo (400ml)', price: 45.00, stock: 90, lowStock: 15 },
      { name: 'Soap Bar (125g)', price: 12.00, stock: 200, lowStock: 30 },
      { name: 'Body Lotion (400ml)', price: 55.00, stock: 70, lowStock: 12 },
      { name: 'Deodorant (150ml)', price: 35.00, stock: 85, lowStock: 15 },
      { name: 'Razor Blades (5-pack)', price: 28.00, stock: 60, lowStock: 10 },
      { name: 'Sanitary Pads (10s)', price: 25.00, stock: 110, lowStock: 18 },
      { name: 'Baby Diapers (30s)', price: 120.00, stock: 40, lowStock: 8 },
      { name: 'Tissue Paper (200s)', price: 18.00, stock: 150, lowStock: 25 }
    ]
  },

  PETS: {
    name: 'Pets',
    icon: '🐕',
    color: '#92400E',
    items: [
      { name: 'Dog Food (2kg)', price: 85.00, stock: 45, lowStock: 8 },
      { name: 'Cat Food (1kg)', price: 65.00, stock: 35, lowStock: 6 },
      { name: 'Pet Treats (500g)', price: 35.00, stock: 60, lowStock: 10 },
      { name: 'Dog Leash', price: 45.00, stock: 20, lowStock: 4 },
      { name: 'Pet Bowls (Set)', price: 55.00, stock: 25, lowStock: 5 },
      { name: 'Cat Litter (5kg)', price: 75.00, stock: 30, lowStock: 6 },
      { name: 'Pet Shampoo (250ml)', price: 42.00, stock: 40, lowStock: 8 },
      { name: 'Dog Toys', price: 25.00, stock: 50, lowStock: 10 },
      { name: 'Pet Collar', price: 35.00, stock: 35, lowStock: 7 },
      { name: 'Bird Seed (1kg)', price: 28.00, stock: 45, lowStock: 8 }
    ]
  }
};

// Calculate category totals
export const categoryTotals = Object.entries(productCategories).map(([key, category]) => {
  const totalStock = category.items.reduce((sum, item) => sum + item.stock, 0);
  const totalValue = category.items.reduce((sum, item) => sum + (item.stock * item.price), 0);
  const lowStockItems = category.items.filter(item => item.stock <= item.lowStock).length;
  const outOfStockItems = category.items.filter(item => item.stock === 0).length;
  
  return {
    key,
    name: category.name,
    icon: category.icon,
    color: category.color,
    totalItems: category.items.length,
    totalStock,
    totalValue,
    lowStockItems,
    outOfStockItems,
    avgPrice: totalValue / totalStock,
    items: category.items
  };
});

// Generate sales data by category
export const categorySalesData = categoryTotals.map(category => {
  const monthlySales = Math.round(category.totalValue * 0.15); // 15% turnover monthly
  const yearlyProjection = monthlySales * 12;
  
  return {
    ...category,
    monthlySales,
    yearlyProjection,
    salesGrowth: Math.random() * 20 - 5, // Random growth between -5% to +15%
    topSellingItem: category.items.reduce((prev, current) => 
      (prev.stock * prev.price) > (current.stock * current.price) ? prev : current
    )
  };
});

// Monthly sales trends by category (12 months)
export const categoryMonthlySales = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => {
  const monthData = { month };
  
  categoryTotals.forEach(category => {
    const baseValue = category.totalValue * 0.15;
    // Add seasonal variations
    const seasonalMultiplier = month === 'Dec' ? 1.3 : 
                              (month === 'Jun' || month === 'Jul') ? 0.8 : 
                              Math.random() * 0.4 + 0.9; // 0.9 to 1.3
    
    monthData[category.key] = Math.round(baseValue * seasonalMultiplier);
  });
  
  return monthData;
});