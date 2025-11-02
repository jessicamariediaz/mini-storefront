'use client';
import {useEffect, useState} from 'react';

export default function Catalog() {
  const [sushi, setSushi] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then(setSushi)
      .catch((err) => console.error('Error fetching sushi:', err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">My Sushi Menu</h2>
      <ul className="space-y-2">
        {sushi.map((item) => (
          <li key={item.id}>
            {item.name} — ${item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}