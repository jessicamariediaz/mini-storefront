'use client';
import {useEffect, useState} from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ price: '', category: '' });

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const addToCart = (p) => setCart((prev) => [...prev, p]);
  const clearCart = () => setCart([]);

  const updateFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const filtered = products.filter(
    (p) =>
      (!filters.price || p.price <= Number(filters.price)) &&
      (!filters.category || p.category === filters.category)
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <PriceFilter
          value={filters.price}
          onChange={(v) => updateFilter('price', v)}
        />
        <CategoryFilter
          value={filters.category}
          onChange={(v) => updateFilter('category', v)}
        />
      </div>

      <ProductList products={filtered} onAdd={addToCart} />
      <CartSummary cart={cart} onClear={clearCart} />
    </div>
  );
}