'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import './nav.css';

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marca que o componente já foi montado no cliente
    setIsClient(true);
  }, []);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();

    // Se ainda não estiver montado no client, não faz nada
    if (!isClient) return;

    // Se o usuário estiver fora da home, leva pra home e rola até o id
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    // Se estiver na home, rola até a seção correspondente
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav>
      <header className="navbar">
        <img class="logo" src="/logo.png" alt="Logo" />
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleAnchorClick(e, "home")}>Home</a></li>
          <li><a href="#sobre" onClick={(e) => handleAnchorClick(e, "sobre")}>Sobre</a></li>
          <li><a href="#menu" onClick={(e) => handleAnchorClick(e, "menu")}>Menu</a></li>
          <li><a href="#contato" onClick={(e) => handleAnchorClick(e, "contato")}>Contato</a></li>
        </ul>
        <button id="dark-toggle">🌙</button>
      </header>
    </nav>
  );
}