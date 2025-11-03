import Catalog from './components/Catalog';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center drop-shadow">
        Jessica’s Mini Sushi Storefront!
      </h1>
      <Catalog />
    </main>
  );
}