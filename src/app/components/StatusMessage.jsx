'use client';
export default function StatusMessage({message}) {
  return (
    <div className="text-center text-gray-600 py-8 italic">
      <p>{message}</p>
    </div>
  );
}
