'use client';

import ProductCard from './ProductCard';

export default function ProductList({products, onAdd}) {
  if (!products.length)
    return <p className="text-center text-gray-600">No sushi available sorry!</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
