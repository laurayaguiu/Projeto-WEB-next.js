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
        <nav>
            <header className="navbar">
            <h1 className="logo">V</h1>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <button id="dark-toggle">🌙</button>
            </header>
        </nav>
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