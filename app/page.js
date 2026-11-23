import Link from "next/link";
import WatchSVG from "@/components/WatchSVG";
import ProductCard from "@/components/ProductCard";
import { products, PHONE, PHONE_HREF } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">
          <span>TIME</span>
          <span>TO</span>
          <em>SHINE</em>
        </h1>
        <p className="hero-sub">Essayez la montre #1<br />de la collection</p>
        <div className="hero-stage">
          <div className="pedestal" />
          <div className="hero-watch"><WatchSVG size={300} /></div>
        </div>
        <div className="arch">
          <div className="arch-watch"><WatchSVG size={70} caseColor="#e8e8e8" strap="#333" /></div>
          <div className="arch-num"><i>50</i><sup>+</sup></div>
          <p>Modeles de<br />montres</p>
          <Link href="/products" className="btn btn-yellow">Voir tout</Link>
        </div>
        <Link href="/products" className="sticker">Essayez !</Link>

        <div className="hero-bottom">
          <div className="tile tile-yellow">
            <span className="chip">▶ Video</span>
            <strong>A propos<br />de Shooping Mall</strong>
          </div>
          <div className="tile tile-dark">
            <span className="chip chip-lime">Depuis 2021</span>
            <p>Nos conseillers vous aident a trouver la montre parfaite.</p>
            <a href={PHONE_HREF} className="btn btn-yellow">Appeler {PHONE}</a>
          </div>
          <div className="rating">
            <i>4.9</i>
            <div className="stars">★★★★★</div>
            <p>Avis de nos clients</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Nos montres <em>populaires</em></h2>
        <div className="grid">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="center"><Link href="/products" className="btn btn-yellow">Toute la collection</Link></div>
      </section>

      <section className="section section-cream">
        <div className="guidance">
          <div>
            <h2 className="h2 dark">Conseil d'experts : <br />votre montre ideale vous attend !</h2>
            <div className="row">
              <Link href="/products" className="btn btn-yellow">Commander</Link>
              <Link href="/contact" className="btn btn-outline">Nous contacter</Link>
            </div>
          </div>
          <ul className="perks">
            <li><b>Livraison rapide</b>Partout au Maroc</li>
            <li><b>Garantie 2 ans</b>Sur toutes les montres</li>
            <li><b>Paiement a la livraison</b>Simple et securise</li>
          </ul>
        </div>
      </section>
    </>
  );
}
