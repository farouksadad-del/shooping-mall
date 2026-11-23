import { BASE, whatsappLink } from "./products";

// 1) Envoie via /api/contact : e-mail a la boutique (EMAIL_TO) + e-mail de confirmation au client.
//    Necessite un serveur (npm run dev / npm start / Vercel) et le fichier .env.
// 2) Si ce n'est pas possible (GitHub Pages = site statique), ouvre WhatsApp avec le message pre-rempli.
export async function sendForm({ name, email, phone, subject, message }) {
  try {
    const res = await fetch(`${BASE}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });
    if (res.ok) return "email";
  } catch {}
  const text = `*${subject}*\nNom : ${name}\nE-mail : ${email || "-"}\nTelephone : ${phone || "-"}\n\n${message}`;
  window.open(whatsappLink(text), "_blank", "noopener");
  return "whatsapp";
}
