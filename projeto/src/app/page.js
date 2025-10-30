import Image from "next/image";
import styles from './home.css'; 


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

          
          <section id="menu" className="section-menu">
            <h2 className="h2">Nosso Cardápio</h2>
            <article className="menu-grid">

                <a href="#" className="card">
                  <img src="limao.jpg" alt="Doces artesanais" />
                  <h3>Doces</h3>
                  <p>Macarons, tortas e chocolates finos.</p>
                </a>

                <a href="#" className="card">
                  <img src="salgado.png" alt="Salgados deliciosos" />
                  <h3>Salgados</h3>
                  <p>Mini quiches e croissants deliciosos.</p>
                </a>

                <a href="#" className="card">
                  <img src="bolos.jpg" alt="Bolos personalizados" />
                  <h3>Bolos</h3>
                  <p>Clássicos e personalizados para eventos.</p>
                </a>

            </article>
            <br></br>
            <p>Explore nossa seleção cuidadosamente curada de doces artesanais, <br></br> salgados irresistíveis e bolos que são verdadeiras obras de arte.</p>
          </section>

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
