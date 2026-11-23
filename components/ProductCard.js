"use client";
import WatchSVG from "./WatchSVG";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <article className="card">
      <div className="card-img">
        <span className="tag">{p.category}</span>
        <WatchSVG caseColor={p.case} dial={p.dial} accent={p.accent} strap={p.strap} size={150} />
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
