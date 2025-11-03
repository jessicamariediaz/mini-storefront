'use client';
export default function CategoryFilter({value, onChange}) {
  return (
    <label className="flex flex-col">
      Category:
      <select
        className="border rounded px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="Rolls">Rolls</option>
        <option value="Special Rolls">Special Rolls</option>
        <option value="Nigiri">Nigiri</option>
        <option value="Sides">Sides</option>
        <option value="Drinks">Drinks</option>
      </select>
    </label>
  );
}