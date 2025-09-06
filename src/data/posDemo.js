// Demo data for POS system presentation
export const demoProducts = [
  // Beverages
  { barcode: '1234567890123', name: 'Coca Cola 500ml', price: 12.50, category: 'Beverages', stock: 150 },
  { barcode: '1234567890124', name: 'Sprite 500ml', price: 12.50, category: 'Beverages', stock: 120 },
  { barcode: '1234567890125', name: 'Windhoek Lager 330ml', price: 18.00, category: 'Beverages', stock: 200 },
  
  // Groceries
  { barcode: '2234567890123', name: 'White Bread 700g', price: 8.50, category: 'Groceries', stock: 80 },
  { barcode: '2234567890124', name: 'Milk 1L', price: 15.00, category: 'Groceries', stock: 60 },
  { barcode: '2234567890125', name: 'Eggs 12 pack', price: 25.00, category: 'Groceries', stock: 45 },
  
  // CFC (Chicken)
  { barcode: '3234567890123', name: 'Chicken Pieces 1kg', price: 45.00, category: 'CFC', stock: 30 },
  { barcode: '3234567890124', name: 'Chicken Wings 500g', price: 28.00, category: 'CFC', stock: 25 },
  
  // Household
  { barcode: '4234567890123', name: 'Washing Powder 2kg', price: 65.00, category: 'Household', stock: 40 },
  { barcode: '4234567890124', name: 'Toilet Paper 4 pack', price: 22.00, category: 'Household', stock: 70 },
  
  // Fresh Produce
  { barcode: '5234567890123', name: 'Bananas 1kg', price: 18.00, category: 'Fresh', stock: 25 },
  { barcode: '5234567890124', name: 'Tomatoes 1kg', price: 35.00, category: 'Fresh', stock: 20 }
];

export const demoTransactions = [
  {
    id: 'TXN001',
    date: new Date().toISOString(),
    items: [
      { barcode: '1234567890123', name: 'Coca Cola 500ml', price: 12.50, quantity: 2 },
      { barcode: '2234567890123', name: 'White Bread 700g', price: 8.50, quantity: 1 }
    ],
    total: 33.50,
    payment: 'cash'
  }
];

// Quick demo barcodes for easy typing during presentation
export const quickDemoBarcodes = [
  '1111', // Maps to Coca Cola
  '2222', // Maps to White Bread  
  '3333', // Maps to Chicken Pieces
  '4444', // Maps to Washing Powder
  '5555'  // Maps to Bananas
];

// Map quick codes to full barcodes
export const quickCodeMap = {
  '1111': '1234567890123',
  '2222': '2234567890123', 
  '3333': '3234567890123',
  '4444': '4234567890123',
  '5555': '5234567890123'
};