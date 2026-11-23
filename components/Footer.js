import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="logo">shooping<span>mall</span></div>
        <p>Vente de montres : sport, classique, elegance et connectees.</p>
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
      </div>
      <p className="copy">© {new Date().getFullYear()} Shooping Mall. Tous droits reserves.</p>
    </footer>
  );
}
