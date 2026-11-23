import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  const { name, phone, subject, message } = await req.json();
  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS.startsWith("METTEZ")) {
    return Response.json({ error: "Email non configure (voir .env)" }, { status: 500 });
  }
  if (!name || !message) {
    return Response.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO || EMAIL_USER,
      subject: `[Shooping Mall] ${String(subject || "Message").slice(0, 100)}`,
      text: `Nom : ${name}\nTelephone : ${phone || "-"}\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Echec d'envoi" }, { status: 500 });
  }
}
