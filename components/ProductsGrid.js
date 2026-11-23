"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products, categories } from "@/lib/products";

export default function ProductsGrid() {
  const router = useRouter();
  const param = useSearchParams().get("cat");
  const cat = categories.includes(param) ? param : "Tous";
  const list = cat === "Tous" ? products : products.filter((p) => p.category === cat);
  const select = (c) => router.replace(c === "Tous" ? "/products/" : `/products/?cat=${c}`, { scroll: false });
  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button key={c} className={`btn ${c === cat ? "btn-yellow" : "btn-outline-light"}`} onClick={() => select(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </>
  );
}
