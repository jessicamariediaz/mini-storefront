export async function GET() {
  const products = [
    { id: 's1', name: 'California Roll', price: 10, category: 'Rolls', stock: 8 },
    { id: 's2', name: 'Spicy Tuna Roll', price: 12, category: 'Rolls', stock: 6 },
    { id: 's3', name: 'Salmon Nigiri', price: 8,  category: 'Nigiri', stock: 10 },
    { id: 's4', name: 'Tuna Nigiri', price: 9,  category: 'Nigiri' , stock: 9 },
    { id: 's5', name: 'Dragon Roll', price: 15, category: 'Special Rolls', stock: 4 },
    { id: 's6', name: 'Rainbow Roll', price: 14, category: 'Special Rolls', stock: 3 },
    { id: 's7', name: 'Miso Soup', price: 4,  category: 'Sides', stock: 12 },
    { id: 's8', name: 'Edamame', price: 5 ,  category: 'Sides', stock: 11 },
    { id: 's9', name: 'Sake (Hot)', price: 7,  category: 'Drinks', stock: 7 },
    { id: 's10',name: 'Green Tea', price: 3,  category: 'Drinks', stock: 15 },
  ];
  return Response.json(products);
  }