"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { products, formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, setQty, clear } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [status, setStatus] = useState("");

  const lines = items.map((i) => ({ ...products.find((p) => p.id === i.id), qty: i.qty })).filter((l) => l.name);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  async function order(e) {
    e.preventDefault();
    setStatus("Envoi...");
    const message =
      lines.map((l) => `${l.qty} x ${l.name} (${formatPrice(l.price)})`).join("\n") +
      `\n\nTotal : ${formatPrice(total)}\nAdresse : ${form.address}`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, subject: "Nouvelle commande", message }),
      });
      if (!res.ok) throw new Error();
      setStatus("Commande envoyee ! Nous vous appelons bientot.");
      clear();
    } catch {
      setStatus("Erreur d'envoi. Appelez-nous au 0522364759.");
    }
  }

  return (
    <section className="section">
      <h1 className="h2">Votre <em>panier</em></h1>
      {lines.length === 0 ? (
        <p>Votre panier est vide. <Link href="/products" className="link">Voir les montres</Link></p>
      ) : (
        <div className="cart">
          <div>
            {lines.map((l) => (
              <div key={l.id} className="cart-line">
                <span>{l.name}</span>
                <span className="qty">
                  <button onClick={() => setQty(l.id, l.qty - 1)}>−</button>
                  {l.qty}
                  <button onClick={() => setQty(l.id, l.qty + 1)}>+</button>
                </span>
                <strong>{formatPrice(l.price * l.qty)}</strong>
              </div>
            ))}
            <div className="cart-total">Total : {formatPrice(total)}</div>
          </div>
          <form onSubmit={order} className="form">
            <h3>Passer la commande</h3>
            <input required placeholder="Nom complet" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required placeholder="Telephone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <textarea required placeholder="Adresse de livraison" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            <button className="btn btn-yellow" type="submit">Confirmer la commande</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      )}
      {lines.length === 0 && status && <p className="status">{status}</p>}
    </section>
  );
}
