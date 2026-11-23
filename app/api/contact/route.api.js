// Route serveur : active uniquement hors GitHub Pages (voir pageExtensions dans next.config.mjs).
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  const { name, phone, subject, message } = await req.json();
  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS.startsWith("ECRIVEZ")) {
    return Response.json({ error: "Email non configure (voir .env)" }, { status: 503 });
  }
  if (!name || !message) {
    return Response.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS.replace(/\s/g, "") },
    });
    await transporter.sendMail({
      from: `"Shooping Mall" <${EMAIL_USER}>`,
      to: EMAIL_TO || EMAIL_USER,
      subject: `[Shooping Mall] ${String(subject || "Message").slice(0, 100)}`,
      text: `Nom : ${name}\nTelephone : ${phone || "-"}\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Echec d'envoi" }, { status: 500 });
  }
}
