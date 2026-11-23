"use client";
import { useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/products";
import { openMail } from "@/lib/send";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  function submit(e) {
    e.preventDefault();
    const body = `Nom : ${form.name}\nTelephone : ${form.phone || "-"}\n\n${form.message}`;
    if (openMail("Message du site Shooping Mall", body)) {
      setStatus("Votre messagerie s'ouvre : envoyez l'e-mail pour nous joindre.");
    } else {
      setStatus("Merci ! Pour une reponse rapide, appelez-nous au " + PHONE);
    }
  }

  return (
    <section className="section">
      <h1 className="h2">Contactez-<em>nous</em></h1>
      <p>Telephone : <a className="link" href={PHONE_HREF}>{PHONE}</a></p>
      <form onSubmit={submit} className="form narrow">
        <input required placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Telephone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <textarea required placeholder="Votre message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="btn btn-yellow" type="submit">Envoyer</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}
