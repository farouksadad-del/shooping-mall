"use client";
import { useState } from "react";
import { PHONE, PHONE_HREF, WHATSAPP_URL } from "@/lib/products";
import { sendForm } from "@/lib/send";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    const via = await sendForm({ ...form, subject: "Message du site" });
    setSending(false);
    if (via === "email") {
      setStatus("Message envoye, merci ! Un e-mail de confirmation vous a ete envoye.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("WhatsApp s'est ouvert avec votre message : appuyez sur Envoyer.");
    }
  }

  return (
    <section className="section">
      <h1 className="h2">Contactez-<em>nous</em></h1>
      <div className="contact-ways">
        <a className="btn btn-yellow" href={PHONE_HREF}>Appeler {PHONE}</a>
        <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE}</a>
      </div>
      <form onSubmit={submit} className="form narrow">
        <input required placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Votre e-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Telephone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <textarea required placeholder="Votre message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="btn btn-yellow" type="submit" disabled={sending}>{sending ? "Envoi..." : "Envoyer"}</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}
