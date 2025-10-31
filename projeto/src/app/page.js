import Image from "next/image";
import styles from './home.css'; 
import Link from "next/link";
import NossoCardapio from "./components/nosso-cardapio/NossoCardapio";
import OpcaoCardapio from "./cardapio/[id]/page";




export default function Home() {
  return (
    <>
          <section id="home" className="hero">
            <img src="fundo.png" alt="Fundo da Velours" className="hero-bg" />
            <h2 className="h2">VELOURS</h2>
            <p>Pâtisserie Artesanal</p>
            <a href="#" className="btn">Cadastre-se!</a>
          </section>

          <section id="sobre" className="sobre-nos">
            <h2 className="h2">Sobre Nós</h2>
            <br></br>
            <p>
                Começamos com poucos produtos e muita paixão. Hoje, oferecemos doces e salgados artesanais,
                sempre com o mesmo cuidado e sabor.
            </p>
          </section>

          
            {/* Componente NossoCardapio */}
            <NossoCardapio />

          <section id="contato" className="contato">
            <article className="contato-container">
                <figure className="contato-imagem">
                  <img src="rocambole.jpg" alt="Doces da Velours" />
                </figure>

                <section className="contato-texto">
                  <h2 className="h2">Contato</h2>
                  <p>📞 (11) 99050-0361</p>
                  <p>📧 contato@velours.com</p>
                  <p>
                      💬 <a href="https://instagram.com/veloureepatisserie" target="_blank">Instagram</a>
                  </p>
                </section>
            </article>
          </section>
    </>
  );
}
