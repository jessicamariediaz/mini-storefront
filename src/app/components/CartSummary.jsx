'use client';
export default function CartSummary({cart, onClear}) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const count = cart.length;

  if (count === 0)
    return (
      <div className="text-gray-600 italic text-center">
        Your sushi cart is empty!
      </div>
    );

  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="font-semibold text-lg text-rose-700">Your Cart</h3>
      <p>{count} item(s)</p>
      <p>Total: ${total.toFixed(2)}</p>
      <button
        onClick={onClear}
        className="mt-2 bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
}