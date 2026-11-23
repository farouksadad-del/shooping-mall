import ProductsGrid from "@/components/ProductsGrid";

export const metadata = { title: "Montres | Shooping Mall" };

export default function ProductsPage({ searchParams }) {
  return (
    <section className="section">
      <h1 className="h2">Toutes nos <em>montres</em></h1>
      <ProductsGrid initial={searchParams?.cat || "Tous"} />
    </section>
  );
}
