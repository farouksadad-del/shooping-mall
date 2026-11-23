// Route serveur : active uniquement hors GitHub Pages (voir pageExtensions dans next.config.mjs).
// Envoie 2 e-mails avec le compte Gmail du fichier .env :
//   1. a la boutique (EMAIL_TO) avec tout le contenu du formulaire
//   2. au client, pour confirmer la bonne reception
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const PHONE = "0664266805";
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

// Anti-abus simple : 5 envois max par adresse IP toutes les 10 minutes
const hits = new Map();
function tooMany(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function confirmationHtml(name, isOrder) {
  const what = isOrder ? "votre commande" : "votre message";
  return `<!doctype html><html><body style="margin:0;background:#0a0a0a;font-family:Arial,sans-serif;color:#f5f5f5">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;padding:32px 20px">
    <tr><td style="font-size:24px;font-weight:bold">shooping<span style="color:#ffc72c">mall</span></td></tr>
    <tr><td style="padding:28px 0 8px;font-size:22px;font-weight:bold">Merci ${esc(name)} !</td></tr>
    <tr><td style="font-size:15px;line-height:1.6;color:#ddd">
      Nous avons bien recu ${what}. Notre equipe vous contactera tres rapidement.
      ${isOrder ? "<br>Paiement a la livraison, partout au Maroc." : ""}
    </td></tr>
    <tr><td style="padding:24px 0">
      <a href="tel:+212664266805" style="background:#ffc72c;color:#000;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:999px;display:inline-block">Appeler ${PHONE}</a>
      &nbsp;
      <a href="https://wa.me/212664266805" style="background:#25d366;color:#fff;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:999px;display:inline-block">WhatsApp</a>
    </td></tr>
    <tr><td style="font-size:12px;color:#888;border-top:1px solid #222;padding-top:16px">
      Shooping Mall - Vente de montres. Cet e-mail a ete envoye suite a votre demande sur notre site.
    </td></tr>
  </table></body></html>`;
}

export async function POST(req) {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS.startsWith("ECRIVEZ")) {
    return Response.json({ error: "Email non configure (voir .env)" }, { status: 503 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requete invalide" }, { status: 400 });
  }
  const name = String(body.name || "").trim().slice(0, 80);
  const email = String(body.email || "").trim().slice(0, 120);
  const phone = String(body.phone || "").trim().slice(0, 30);
  const subject = String(body.subject || "Message").trim().slice(0, 100);
  const message = String(body.message || "").trim().slice(0, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Nom, e-mail valide et message obligatoires" }, { status: 400 });
  }
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (tooMany(ip)) {
    return Response.json({ error: "Trop de demandes, reessayez plus tard" }, { status: 429 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_PASS.replace(/\s/g, "") },
  });
  const isOrder = /commande/i.test(subject);

  try {
    // 1. E-mail pour vous (la boutique)
    await transporter.sendMail({
      from: `"Shooping Mall - Site" <${EMAIL_USER}>`,
      to: EMAIL_TO || EMAIL_USER,
      replyTo: email,
      subject: `[Shooping Mall] ${subject} - ${name}`,
      text: `Nom : ${name}\nE-mail : ${email}\nTelephone : ${phone || "-"}\n\n${message}`,
    });
  } catch {
    return Response.json({ error: "Echec d'envoi" }, { status: 500 });
  }

  // 2. E-mail de confirmation pour le client (si echec, la demande est quand meme recue)
  let confirmation = true;
  try {
    await transporter.sendMail({
      from: `"Shooping Mall" <${EMAIL_USER}>`,
      to: email,
      subject: isOrder ? "Shooping Mall - Commande bien recue" : "Shooping Mall - Message bien recu",
      text: `Merci ${name} !\n\nNous avons bien recu ${isOrder ? "votre commande" : "votre message"}. Notre equipe vous contactera tres rapidement.\n\nTel / WhatsApp : ${PHONE}\n\nShooping Mall - Vente de montres`,
      html: confirmationHtml(name, isOrder),
    });
  } catch {
    confirmation = false;
  }

  return Response.json({ ok: true, confirmation });
}
