import "./globals.css";
import Link from 'next/link';


export const metadata = {
  title: "VELOURS Pâtisserie",
  description: "Site de ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Nav /> {/* ✅ Aqui é o componente sendo renderizado corretamente */}
        <main>
          {children}
        </main>
        <footer>
            <p>&copy; 2025 VELOURS Pâtisserie</p>
        </footer>
      </body>
    </html>
  );
}