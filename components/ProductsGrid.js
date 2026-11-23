"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/lib/products";

export default function ProductsGrid({ initial = "Tous" }) {
  const [cat, setCat] = useState(categories.includes(initial) ? initial : "Tous");
  const list = cat === "Tous" ? products : products.filter((p) => p.category === cat);
  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button key={c} className={`btn ${c === cat ? "btn-yellow" : "btn-outline-light"}`} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </>
  );
}
