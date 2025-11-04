// src/app/layout.js
import "./globals.css";
import "./components/nav/nav.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "VELOURS Pâtisserie",
  description: "Site de e-commerce artesanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="light"> 
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
