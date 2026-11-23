import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shooping Mall | Vente de montres",
  description: "Shooping Mall - boutique de montres : sport, classique, elegance et connectees. Tel : 0522364759",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
