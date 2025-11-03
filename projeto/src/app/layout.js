// src/app/layout.js
import "./globals.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "VELOURS Pâtisserie",
  description: "Site de e-commerce artesanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
