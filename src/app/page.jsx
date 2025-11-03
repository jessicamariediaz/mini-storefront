import Catalog from './components/Catalog';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-rose-700">
        Jessica’s Mini Sushi Storefront!
      </h1>
      <Catalog />
    </main>
  );
}