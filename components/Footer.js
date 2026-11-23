import Link from "next/link";
import { PHONE, PHONE_HREF, WHATSAPP_URL } from "@/lib/products";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="logo">shooping<span>mall</span></div>
          <p>Vente de montres : sport, classique, elegance et connectees. Livraison partout au Maroc.</p>
        </div>
        <div>
          <h4>Liens</h4>
          <Link href="/products">Toutes les montres</Link>
          <Link href="/cart">Panier</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={PHONE_HREF}>Tel : {PHONE}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp : {PHONE}</a>
        </div>
        <p className="copy">© {new Date().getFullYear()} Shooping Mall. Tous droits reserves. Photos : Wikimedia Commons (CC0).</p>
      </footer>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Nous ecrire sur WhatsApp">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
          <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.9 2 7L3 29l6.5-2.1c2 1.1 4.2 1.7 6.5 1.7 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.2c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.9 1.2 1.3-3.8-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5S21.8 26.2 16 26.2zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5.1 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </>
  );
}
