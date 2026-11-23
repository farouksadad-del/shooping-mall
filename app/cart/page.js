"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { products, formatPrice, img } from "@/lib/products";
import { sendForm } from "@/lib/send";

export default function CartPage() {
  const { items, setQty, clear } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const lines = items.map((i) => ({ ...products.find((p) => p.id === i.id), qty: i.qty })).filter((l) => l.name);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  async function order(e) {
    e.preventDefault();
    setSending(true);
    const message =
      lines.map((l) => `${l.qty} x ${l.name} (${formatPrice(l.price)})`).join("\n") +
      `\n\nTotal : ${formatPrice(total)}\nAdresse : ${form.address}`;
    const via = await sendForm({ name: form.name, email: form.email, phone: form.phone, subject: "Nouvelle commande", message });
    setSending(false);
    if (via === "email") {
      setStatus("Commande envoyee ! Un e-mail de confirmation vous a ete envoye.");
      clear();
    } else {
      setStatus("WhatsApp s'est ouvert avec votre commande : appuyez sur Envoyer pour la confirmer.");
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
                <img src={img(l.image)} alt="" className="cart-thumb" />
                <span className="cart-name">{l.name}</span>
                <span className="qty">
                  <button onClick={() => setQty(l.id, l.qty - 1)} aria-label="Moins">−</button>
                  {l.qty}
                  <button onClick={() => setQty(l.id, l.qty + 1)} aria-label="Plus">+</button>
                </span>
                <strong>{formatPrice(l.price * l.qty)}</strong>
              </div>
            ))}
            <div className="cart-total">Total : {formatPrice(total)}</div>
          </div>
          <form onSubmit={order} className="form">
            <h3>Passer la commande</h3>
            <input required placeholder="Nom complet" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Votre e-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input required placeholder="Telephone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <textarea required placeholder="Adresse de livraison" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            <button className="btn btn-yellow" type="submit" disabled={sending}>{sending ? "Envoi..." : "Confirmer la commande"}</button>
            <small className="muted">Paiement a la livraison.</small>
          </form>
        </div>
      )}
      {status && <p className="status">{status}</p>}
    </section>
  );
}
