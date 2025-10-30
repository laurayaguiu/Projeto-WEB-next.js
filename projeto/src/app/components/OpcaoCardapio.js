import Image from "next/image";
import styles from "./globals.css";


    const OpcaoCardapio = {
        doces: {
            nome: 'Doces',
            descricao: 'Macarons, tortas e chocolates finos.',
            caminhoImagem: '/limao.jpg'
        },
        salgados: {
            nome: 'Salgados',
            descricao: 'Mini quiches e croissants deliciosos.',
            caminhoImagem: '/salgado.png'
        },
        bolo: {
            nome: 'Bolos',
            descricao: 'Clássicos e personalizados para eventos.',
            caminhoImagem: '/bolos.jpg'
        },
    };

    const cardapio = OpcaoCardapio[params.id];

    if (!cardapio) {
        return <p> Opção de cardápio não encontrada. </p>
    }

    return (
        <section className={styles.sectionMain}>
            <Image src={cardapio.caminhoImagem} alt={cardapio.descricao} width={500} height={350} className={styles.imagem}/>
            <h2> {cardapio.nome} </h2>
            <p className={styles.descricao}> {cardapio.descricao} </p>
        </section>
    );