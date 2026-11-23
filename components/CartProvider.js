"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sm-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sm-cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (p) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: p.id, qty: 1 }];
    });
  const setQty = (id, qty) =>
    setItems((prev) => (qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return <CartContext.Provider value={{ items, add, setQty, clear, count }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
