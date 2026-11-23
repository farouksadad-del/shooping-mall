export const PHONE = "0522364759";
export const PHONE_HREF = "tel:+212522364759";

export const products = [
  { id: 1, name: "Chrono Noir", category: "Sport", price: 1290, rating: 4.9, case: "#1a1a1a", dial: "#0d0d0d", accent: "#FFC72C", strap: "#222" },
  { id: 2, name: "Gold Classic", category: "Classique", price: 1890, rating: 4.8, case: "#FFC72C", dial: "#161616", accent: "#FFC72C", strap: "#2b2b2b" },
  { id: 3, name: "Midnight Steel", category: "Classique", price: 990, rating: 4.7, case: "#b9b9b9", dial: "#101010", accent: "#e8e8e8", strap: "#111" },
  { id: 4, name: "Sunrise Diver", category: "Sport", price: 1490, rating: 4.9, case: "#2a2a2a", dial: "#FFC72C", accent: "#0d0d0d", strap: "#FFC72C" },
  { id: 5, name: "Royal Minimal", category: "Elegance", price: 790, rating: 4.6, case: "#d9d4c3", dial: "#f3efe0", accent: "#111", strap: "#1a1a1a" },
  { id: 6, name: "Smart Pulse", category: "Connectee", price: 1190, rating: 4.5, case: "#1a1a1a", dial: "#050505", accent: "#FFC72C", strap: "#1a1a1a" },
  { id: 7, name: "Black Gold Automatic", category: "Elegance", price: 2490, rating: 5.0, case: "#FFC72C", dial: "#0a0a0a", accent: "#FFC72C", strap: "#0a0a0a" },
  { id: 8, name: "Urban Racer", category: "Sport", price: 890, rating: 4.4, case: "#3a3a3a", dial: "#1a1a1a", accent: "#FFC72C", strap: "#FFC72C" },
];

export const categories = ["Tous", "Sport", "Classique", "Elegance", "Connectee"];

export const formatPrice = (n) => `${n.toLocaleString("fr-FR")} MAD`;
