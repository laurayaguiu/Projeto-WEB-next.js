  
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nosso-cardapio.module.css";
import OpcaoCardapio from "../../data/cardapio";

const NossoCardapio = ({ opcoes = OpcaoCardapio }) => {
  return (
    <section className={styles.menu}>
      <h2 className={styles.titleCardapio}>Nosso Cardápio</h2>
      <article className={styles.menuGrid}>
        {Object.entries(opcoes).map(([key, item]) => (
          <Link key={key} href={`/cardapio/${key}`} className={styles.card}>
            <Image
              src={item.caminhoImagem} 
              alt={item.nome}
              width={150}
              height={150}
              className={styles.imagemCardapio}
            />
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </Link>
        ))}
      </article>
      <p className={styles.descricao}>
        <br />
        Explore nossa seleção cuidadosamente curada de doces artesanais,
        <br />
        salgados irresistíveis e bolos que são verdadeiras obras de arte.
      </p>
    </section>
  );
};

export default NossoCardapio;