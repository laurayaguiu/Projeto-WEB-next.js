import Image from "next/image";
import styles from "./globals.css";


    const OpcaoCardapio = {
        doces: {
            nome: 'Doces',
            descricao: 'Cidade famosa no Brasil, tem muchas praias bonitas.',
            caminhoImagem: '/limao.jpg'
        },
        salgados: {
            nome: 'Salgados',
            descricao: 'Maior cidade do Brasil.',
            caminhoImagem: '/salgado.png'
        },
        bolo: {
            nome: 'Bolos',
            descricao: 'Shakira vem da Colombia.',
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