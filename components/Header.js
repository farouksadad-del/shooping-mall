"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { PHONE, PHONE_HREF } from "@/lib/products";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="logo-mark">◷</span> shooping<span>mall</span>
      </Link>
      <nav className="nav">
        <Link href="/products">Montres</Link>
        <Link href="/products?cat=Sport">Sport</Link>
        <Link href="/products?cat=Elegance">Elegance</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-right">
        <a href={PHONE_HREF} className="phone">{PHONE}</a>
        <Link href="/cart" className="btn btn-dark">Panier ({count})</Link>
      </div>
    </header>
  );
}
