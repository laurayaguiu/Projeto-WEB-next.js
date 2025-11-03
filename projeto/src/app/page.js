// src/app/page.js
import Image from "next/image";
import styles from "./home.module.css";

import NossoCardapio from "./components/nosso-cardapio/NossoCardapio";

export default function Home() {
  return (
    <>
            <section id="home" className={styles.hero}>
        <Image
          src="/fundo.png"
          alt="Fundo da Velours"
          className={styles.heroBg}
          fill
          style={{ objectFit: 'cover' }} // mantém proporção e cobre toda a área
          priority
        />
        <h2 className={styles.h2}>VELOURS</h2>

        <p>Pâtisserie Artesanal</p>
        <a href="#" className={styles.btn}>
          Cadastre-se!
        </a>
      </section>

      <section id="sobre" className={styles.sobreNos}>
        <h2 className={styles.h2}>Sobre Nós</h2>
        <p>
          Começamos com poucos produtos e muita paixão. Hoje, oferecemos doces
          e salgados artesanais, sempre com o mesmo cuidado e sabor.
        </p>
      </section>

      <section id="menu">
        <NossoCardapio />
      </section>

      <section id="contato" className={styles.contato}>
        <article className={styles.contatoContainer}>
          <figure className={styles.contatoImagem}>
            <Image
              src="/rocambole.jpg"
              alt="Doces da Velours"
              width={400}
              height={300}
              className={styles.img}
              
             
            />
          </figure>

          <section className={styles.contatoTexto}>
            <h2 className={styles.h2}>Contato</h2>
            <p>📞 (11) 99050-0361</p>
            <p>📧 contato@velours.com</p>
            <p>
              💬{" "}
              <a
                href="https://instagram.com/veloureepatisserie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
