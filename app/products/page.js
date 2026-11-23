import { Suspense } from "react";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata = { title: "Montres | Shooping Mall" };

export default function ProductsPage() {
  return (
    <section className="section">
      <h1 className="h2">Toutes nos <em>montres</em></h1>
      <Suspense fallback={null}>
        <ProductsGrid />
      </Suspense>
    </section>
  );
}
