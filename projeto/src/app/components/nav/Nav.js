'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import './nav.css';

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Lê o tema salvo no localStorage ao montar
  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Aplica a classe e salva no localStorage
  useEffect(() => {
    if (!isClient) return;

    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, isClient]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    if (!isClient) return;

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav>
      <header className="navbar">
        <img className="logo" src="/logo.png" alt="Logo" />
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleAnchorClick(e, "home")}>Home</a></li>
          <li><a href="#sobre" onClick={(e) => handleAnchorClick(e, "sobre")}>Sobre</a></li>
          <li><a href="#menu" onClick={(e) => handleAnchorClick(e, "menu")}>Menu</a></li>
          <li><a href="#contato" onClick={(e) => handleAnchorClick(e, "contato")}>Contato</a></li>
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="darkToggle"
          title="Alternar modo escuro"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>
    </nav>
  );
}
