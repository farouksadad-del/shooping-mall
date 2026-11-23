// Site statique (GitHub Pages) : pas de serveur pour envoyer des e-mails.
// Si NEXT_PUBLIC_CONTACT_EMAIL est defini, le formulaire ouvre la messagerie du client.
// Sinon, le client est invite a appeler la boutique.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export function openMail(subject, body) {
  if (!CONTACT_EMAIL) return false;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return true;
}
