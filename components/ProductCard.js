"use client";
import { useCart } from "./CartProvider";
import { formatPrice, img } from "@/lib/products";

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <article className="card">
      <div className="card-img">
        <span className="tag">{p.category}</span>
        <img src={img(p.image)} alt={`Montre ${p.name}`} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{p.name}</h3>
        <div className="stars">{"★".repeat(Math.round(p.rating))} <small>{p.rating}</small></div>
        <div className="card-foot">
          <strong>{formatPrice(p.price)}</strong>
          <button className="btn btn-yellow" onClick={() => add(p)}>Ajouter</button>
        </div>
      </div>
    </article>
  );
}
