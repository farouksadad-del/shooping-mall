export const PHONE = "0664266805";
export const PHONE_HREF = "tel:+212664266805";
export const WHATSAPP_URL = "https://wa.me/212664266805";

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const img = (file) => `${BASE}/watches/${file}`;

export const whatsappLink = (text) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

// Photos : Wikimedia Commons, licence CC0 (domaine public) - voir CREDITS.md
export const products = [
  { id: 1, name: "Black Wood", category: "Sport", price: 890, rating: 4.8, image: "black-wood.jpg" },
  { id: 2, name: "Gold Classic", category: "Elegance", price: 1890, rating: 4.9, image: "gold-classic.jpg" },
  { id: 3, name: "Silver Multifonction", category: "Classique", price: 1290, rating: 4.8, image: "silver-multifunction.jpg" },
  { id: 4, name: "Vintage Chrono", category: "Classique", price: 1490, rating: 4.7, image: "vintage-chrono.jpg" },
  { id: 5, name: "White Minimal", category: "Elegance", price: 990, rating: 4.6, image: "white-minimal.jpg" },
  { id: 6, name: "Smart Steel", category: "Connectee", price: 2290, rating: 4.9, image: "smart-steel.jpg" },
  { id: 7, name: "Skeleton Automatique", category: "Sport", price: 2490, rating: 5.0, image: "skeleton-automatic.jpg" },
  { id: 8, name: "Smart White", category: "Connectee", price: 1590, rating: 4.5, image: "smart-white.jpg" },
  { id: 9, name: "Rose Gold Femme", category: "Elegance", price: 1190, rating: 4.8, image: "rose-gold.jpg" },
  { id: 10, name: "Business Classique", category: "Classique", price: 1390, rating: 4.7, image: "business-classic.jpg" },
];

export const categories = ["Tous", "Sport", "Classique", "Elegance", "Connectee"];

export const formatPrice = (n) => `${n.toLocaleString("fr-FR")} MAD`;
