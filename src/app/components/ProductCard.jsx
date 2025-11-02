'use client';
export default function ProductCard({product, onAdd}) {
  return (
    <div className="border rounded p-4 bg-white shadow hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg text-rose-700">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>

      {product.stock > 0 ? (
        <>
          <p className="text-green-600 text-sm mb-2">
            {product.stock} left in stock
          </p>
          <button
            className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded"
            onClick={() => onAdd(product)}
          >
            Add to Cart
          </button>
        </>
      ) : (
        <p className="text-red-500 font-semibold">Out of Stock</p>
      )}

    </div>
    
  );
}