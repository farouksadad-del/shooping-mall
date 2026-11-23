import { BASE, whatsappLink } from "./products";

// 1) Essaie d'envoyer l'e-mail via /api/contact (fonctionne sur un hebergeur avec serveur, ex. Vercel,
//    avec EMAIL_USER / EMAIL_PASS / EMAIL_TO dans le fichier .env).
// 2) Si ce n'est pas possible (GitHub Pages = site statique), ouvre WhatsApp avec le message pre-rempli.
export async function sendForm({ name, phone, subject, message }) {
  try {
    const res = await fetch(`${BASE}/api/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, subject, message }),
    });
    if (res.ok) return "email";
  } catch {}
  const text = `*${subject}*\nNom : ${name}\nTelephone : ${phone || "-"}\n\n${message}`;
  window.open(whatsappLink(text), "_blank", "noopener");
  return "whatsapp";
}
