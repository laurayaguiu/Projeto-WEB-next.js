const OpcaoCardapio = {
  doces: {
    nome: "Doces",
    titulo: "Pequenas Delícias",
    descricao: "Macarons, tortas e chocolates finos.",
    caminhoImagem: "/limao.jpg",
    imagens: [
      { src: "/limao.jpg", texto: "Torta de Limão, azeda no ponto ideal!" },
      { src: "/doce2.jpg", texto: "Mouse com calda de morango" },
      { src: "/doce3.jpg", texto: "Banoffee" },
    ],
  },
  salgados: {
    nome: "Salgados",
    titulo: "Tentação Salgada",
    descricao: "Mini quiches e croissants deliciosos.",
    caminhoImagem: "/salgado.png",
    imagens: [
      { src: "/salgado.png", texto: "Torta de frango" },
      { src: "/salgado2.jpg", texto: "Esfiha" },
      { src: "/salgado3.jpg", texto: "Pão de fermentação natural" },
    ],
  },
  bolo: {
    nome: "Bolos",
    titulo: "Arte em Bolos",
    descricao: "Clássicos e personalizados para eventos.",
    caminhoImagem: "/bolo3.jpg",
    imagens: [
      { src: "/bolo1.jpg", texto: "Bolo estilo de vó, decoração de chantilly" },
      { src: "/bolo2.jpg", texto: "Bolo com decorações mais formais e elegantes" },
      { src: "/bolo3.jpg", texto: "Bolo de chocolate trufado, ótimo para tardes chuvosas" },
    ],
  },
};

export default OpcaoCardapio;
