import "./globals.css";
import Link from 'next/link';
import Nav from './components/nav/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: "VELOURS Pâtisserie",
  description: "Site de ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Nav /> 
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}