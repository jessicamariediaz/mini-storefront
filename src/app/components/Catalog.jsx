'use client';
import {useEffect, useState} from 'react';
import ProductList from './ProductList';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const addToCart = (p) => setCart((prev) => [...prev, p]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Sushi Menu</h2>
      <ProductList products={products} onAdd={addToCart} />
    </div>
  );
}