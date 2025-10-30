import Link from 'next/link';
export default function Nav() {
  return (
    <nav>
      <header className="navbar">
                <h1 className="logo">V</h1>
                <ul className="nav-links">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#sobre">Sobre</Link></li>
                    <li><Link href="#menu">Menu</Link></li>
                    <li><Link href="#contato">Contato</Link></li>
                </ul>
                <button id="dark-toggle">🌙</button>
      </header>
    </nav>
  );
}
