import Image from "next/image";
import styles from "../cardapio.module.css";


export default async function PaginaCardapio({ params }) {
  const { id } = await params;

  const OpcaoCardapio = {
    doces: {
      nome: "Doces",
      descricao: "Macarons, tortas e chocolates finos.",
      titulo: "Pequenas delícias",
      imagens: [
        { src: "/limao.jpg", texto: "Torta de Limão" },
        { src: "/doce2.jpg", texto: "Mouse com calda de morango" },
        { src: "/doce3.jpg", texto: " Banoffee" },
      ],
      caminhoImagem: "/limao.jpg",
    },
    salgados: {
      nome: "Salgados",
      descricao: "Mini quiches e croissants deliciosos.",
      titulo: "Tentação Salgada",
      imagens: [
        { src: "/salgado.jpg", texto: "Torta de frango" },
        { src: "/salgado2.jpg", texto: "Esfiha" },
        { src: "/salgado3.jpg", texto: "Pão de fermentação natural" },
      ],
      caminhoImagem: "/salgado.jpg",
    },
    bolo: {
      nome: "Bolos",
      descricao: "Clássicos e personalizados para eventos.",
      titulo: "Arte em Bolos",
      imagens: [
        { src: "/bolo1.jpg", texto: "Bolo chantilly" },
        { src: "/bolo2.jpg", texto: "Bolo com decorações mais formais e elegantes" },
        { src: "/bolo3.jpg", texto: "Bolo de chocolate trufado" },
      ],
      caminhoImagem: "/bolo3.jpg",
    },
  };

  const cardapio = OpcaoCardapio[id?.toLowerCase().trim()];

  if (!cardapio) {
    return <p>Opção de cardápio não encontrada.</p>;
  }

  return (
    <section className={styles.sectionMain}>
      <h2>{cardapio.nome}</h2>
      <p className={styles.descricao}>{cardapio.descricao}</p>

      <div className={styles.galeria}>
        {cardapio.imagens.map((item, index) => (
          <div key={index} className={styles.item}>
            <Image
              src={item.src}
              alt={item.texto}
              width={300}
              height={200}
              className={styles.imagem}
            />
            <p className={styles.legenda}>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
