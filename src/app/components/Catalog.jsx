'use client';
import {useEffect, useState} from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ price: '', category: '' });
  const [status, setStatus] = useState('loading'); // 'loading', 'ready', or 'error'

  // Fetch sushi products from API
  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setStatus('ready');
      })
      .catch((err) => {
        console.error('Error fetching sushi:', err);
        setStatus('error');
      });
  }, []);

  // Simulate stock updates every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts((prev) =>
        prev.map((p) =>
          p.stock > 0 && Math.random() > 0.8
            ? { ...p, stock: p.stock - 1 }
            : p
        )
      );
    }, 5000);

    // Cleanup to stop interval when unmounted
    return () => clearInterval(interval);
  }, []);

  // Add to cart
  const addToCart = (p) => setCart((prev) => [...prev, p]);

  // Clear cart
  const clearCart = () => setCart([]);

  // Update filters
  const updateFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  // Filter sushi based on user inputs
  const filtered = products.filter(
    (p) =>
      (!filters.price || p.price <= Number(filters.price)) &&
      (!filters.category || p.category === filters.category)
  );

  // Conditional rendering based on status
  if (status === 'loading')
    return <StatusMessage message="Loading sushi menu... 🍣" />;
  if (status === 'error')
    return <StatusMessage message="Error loading sushi data 😢" />;
  if (!products.length)
    return <StatusMessage message="No sushi available right now 🍤" />;

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
