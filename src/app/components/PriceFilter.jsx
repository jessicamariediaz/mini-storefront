'use client';

export default function PriceFilter({value, onChange}) {
  return (
    <label className="flex flex-col">
      Max Price:
      <input
        type="number"
        className="border rounded px-2 py-1"
        placeholder="ex: 15"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}