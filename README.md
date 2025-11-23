# PROJETO-BORBOLETA

Para criarmos nosso projeto de caráter extensionista, decidimos colaborar com uma confeitaria iniciante no mercado. \
Atualmente a proprietária da Velours Pâtisserie (Carolina Macedo) vende as comidas majoritariamente dentro de seu condomínio via WhatsApp, porém quer expandir seu público e, através de um website, aumentar o alcance e a divulgação de seus produtos.

De início, pensamos em um site e-commerce, o qual irá abrangir:
- Uma home page (com seções sobre nós, cardápio, novidades, contatos);
- Um menu de navegação com versão mobile;
- Uma seção hero de destaque com o nome da Pâtisserie;
- Sobre nós (informações sobre a confeitaria e a confeiteira);
- Menu (com fotos e características dos doces);
- Contatos (tanto página do Instagram como telefone para agendamentos);
- Página de formulário (cadastro do cliente).


#Tutorial 

## 🏗️ Arquivo: `layout.js`

Este arquivo define o **layout base** do site, ou seja, a estrutura global que envolve todas as páginas da aplicação.

### 🧩 Função principal
```js
export const metadata = {
   title: "VELOURS Pâtisserie",
   description: "Site de e-commerce artesanal",
};
```
- Define metadados do site (título e descrição) que aparecem no navegador e em mecanismos de busca.  
- `metadata` é uma exportação especial do Next.js que permite personalizar o HTML `<head>`.

---

```js
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="light"> 
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```
- `RootLayout` é o **componente de layout principal**.  
- O Next.js renderiza tudo dentro dele.  
- O parâmetro `{ children }` representa o conteúdo das páginas internas (como `page.js`).  
- `<html lang="pt-br">` define o idioma padrão da página.  
- O `<body>` contém o conteúdo que será injetado de outras páginas.
- O `className ="light"` define uma classe que usaremos para implementações de estilo css

🧠 *Resumo:*  
Esse arquivo cria a “casca” do site — o HTML global — e permite que outras páginas sejam renderizadas dentro dele.

---

## 🏠 Arquivo: `page.js`

Este arquivo define o conteúdo **da página inicial do site** (rota `/`).

### Estrutura:
```js
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import NossoCardapio from "./components/nosso-cardapio/NossoCardapio";

export default function Home() {
  return (
    <>
      ....
    </>
  );
}
```

### Explicação:
- `import styles from "./page.module.css";` e similares  
  importam os estilos específicos dessa página. 

- `export default function Home()`  
  Cria o componente principal da página inicial.  
  `Home` é o nome do componente que o Next.js renderiza na URL `/`.

- `<>... </>` foi usado para agrupar vários elementos sem criar uma nova tag HTML.

```js
<section id="home" className={styles.hero}>
  <Image src="/fundo.png" ... />
  <h2 className={styles.h2}>VELOURS</h2>
  <p>Pâtisserie Artesanal</p>
  <Link href="/formulario" className={styles.btn}>Cadastre-se!</Link>
</section>

//css - Essa seção cria a capa do site, com o título no centro da tela e um botão chamativo.

.hero {
  position: relative;
  min-height: 100vh; /* ocupa a altura da tela toda */
  display: flex;
  flex-direction: column;
  justify-content: center; /* centraliza verticalmente */
  align-items: center;     /* centraliza horizontalmente */
  text-align: center;
}
.heroBg {
  z-index: -1; /* fica atrás do texto */
}
.h2 {
  font-size: 2.5rem;
  color: #fff; /* título branco */
  text-shadow: 2px 2px 6px rgba(0,0,0,0.3); /* sombra suave */
}
.btn {
  background: #14b8a6;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 9999px; /* botão arredondado */
  transition: background 0.3s ease;
}
.btn:hover {
  background: #0d9488; /* muda a cor ao passar o mouse */
} 

```
- `section`: cria uma área separada do site.

- `id="home"`: serve para navegação (ex: rolar até essa parte).

- `className={styles.hero}`: aplica estilos CSS definidos em outro arquivo.

- `<Image />`: é o componente de imagem otimizada do Next.js.

- `<Link />`: é o link interno do Next.js (não recarrega a página ao clicar).

```js
<section id="sobre" className={styles.sobreNos}>
  <h2 className={styles.h2}>Sobre Nós</h2>
  <p>Começamos com poucos produtos...</p>
</section>

// css - cria uma seção clara e suave, com fundo rosa claro e texto centralizado.
.sobreNos {
  background: linear-gradient(135deg, #fdf2f8, #fce7f3);
  text-align: center;
  padding: 5rem 2rem;
  color: #333;
}
.sobreNos p {
  max-width: 700px; /* limita a largura do texto */
  margin: 0 auto;
  line-height: 1.6;
}
```
- Mostra um texto explicando sobre a confeitaria. Usa `<h2> `para o título e `<p>` para o parágrafo.


```js
<section id="menu" className={styles.sectionMenu}>
  <NossoCardapio />
</section>

//css - grid para organizar os produtos e cria cartões com leve animação ao passar o mouse.
.sectionMenu {
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  text-align: center;
  padding: 50px;
}
.menuGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.card {
  background: #fff5f9;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}
```
- componente `<NossoCardapio />`,  mostra os produtos. Ele é importado de outro arquivo e inserido dentro dessa seção.

```js
<section id="contato" className={styles.contato}>
  <article className={styles.contatoContainer}>
    <figure className={styles.contatoImagem}>
      <Image src="/rocambole.jpg" ... />
    </figure>
    <section className={styles.contatoTexto}>
      <h2 className={styles.h2}>Contato</h2>
      <p>📞 (11) 99050-0361</p>
      <p>📧 contato@velours.com</p>
      <p>💬 <a href="https://instagram.com/...">Instagram</a></p>
    </section>
  </article>
</section>

// css - Essa parte usa flexbox para colocar a imagem e o texto lado a lado e muda o layout automaticamente no celular (graças ao @media de responsividade).

.contato {
  background: linear-gradient(135deg, #fdf2f8, #fce7f3);
  padding: 4rem 2rem;
}
.contatoContainer {
  display: flex;
  flex-wrap: wrap; /* adapta para telas menores */
}
.contatoImagem {
  flex: 1 1 50%; /* metade da tela */
  overflow: hidden;
}
.contatoTexto {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contatoTexto a {
  color: #e91e63;
  font-weight: bold;
}
.contatoTexto a:hover {
  color: #c2185b;
}
```
- Mostra informações de contato e uma imagem ilustrativa.

- O `<figure>` agrupa a imagem.

- O `<a>` cria um link externo (abre o Instagram em nova aba).

- `target="_blank"` abre o link em outra janela, e `rel="noopener noreferrer"` mantém a segurança.

🧠 *Resumo:*  
Esse arquivo define o **conteúdo visível da página inicial** e utiliza o CSS modular para definir o layout e o estilo.

---

## 🏡 Arquivo: `home.module.css`

Este arquivo define o **estilo visual principal do site** — como cores, gradientes e seções do conteúdo.

---
```js
@media (max-width: 768px) {
  .contatoContainer { flex-direction: column; }
  .h2 { font-size: 2rem; }
  .btn { padding: 0.6rem 1.4rem; }
}
```
- Isso faz o site se ajustar automaticamente em telas menores, empilhando os elementos e diminuindo o tamanho do texto e dos botões.

```js
:global(body.dark) .sobreNos { background: #1e1e1e; color: #f5f5f5; }
```
- Isso muda o fundo e a cor do texto quando o modo escuro estiver ativado.

🧠 *Resumo:*  
Esse CSS define **toda a aparência visual** do site — navbar, seções, cards, responsividade e modo escuro.

---

## 🌍 Arquivo: `globals.css`

Arquivo de **estilos globais**, aplicado a todas as páginas.

### Conteúdo típico:
```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: system-ui, sans-serif;
}
```
- Zera espaçamentos e define o comportamento do box model.  
- Garante que o layout não ultrapasse a largura da tela.  
- Define a fonte padrão de todo o site.

🧠 *Resumo:*  
Serve como “base” para todos os estilos — tudo herda esse comportamento padrão.

---

### Pasta Components
#### Arquivo: `nav.js` 
```js
'use client';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import './nav.css';
```
- componente roda no navegador (lado do cliente)

- `seState`: cria variáveis reativas (por exemplo, saber se o modo escuro está ligado).

- `useEffect`: executa ações quando o componente é carregado ou atualizado.

```js
const [darkMode, setDarkMode] = useState(false);
const [isClient, setIsClient] = useState(false);
```
- `darkMode`: controla se o modo escuro está ativado.

- `isClient`: confirma que o código está sendo executado no navegador, e não no servidor (Next.js faz essa separação).

```js
useEffect(() => {
  setIsClient(true);
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkMode(true);
    document.body.classList.add("dark");
  }
}, []);
```
- Roda apenas uma vez, quando o componente carrega.

- Verifica no localStorage se o usuário já escolheu o modo escuro antes.

- Faz o site lembrar a preferência de tema do usuário.

```js
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
```

- Adiciona a classe .dark no corpo do site (<body>).

- Salva a escolha (claro ou escuro) no localStorage.

- Assim, mesmo ao atualizar a página, o tema escolhido continua o mesmo.

```js
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
```
- O `<img>` mostra o logo da confeitaria.

- A `<ul>` contém os links de navegação (Home, Sobre, Menu, Contato).

- O `<button>` alterna o modo escuro/claro com emojis de sol e lua.

```js
// css - nav.css
/* Organiza os links e efeito de cor ao passar o mouse.*/
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #e91e63; 
}

/*pequena logo á esquerda*/
.logo {
  width: 50px;
  height: auto;
}
/*dark mode */
body.dark .navbar {
  background: #1e1e1e;
}

body.dark .nav-links a {
  color: #f5f5f5;
}

body.dark .nav-links a:hover {
  color: #e91e63;
}
```
 #### Arquivo: `Footer.js`
```js
 <footer className={styles.footer}>
            <p>&copy; 2025 VELOURS Pâtisserie</p>
 </footer>

// css footer.module.css

.footer {
    text-align: center;
    background: linear-gradient(135deg, #fffbeb, #fef3c7);
    padding: 1rem;
}

```
- Footer padronizado para todas as páginas com apenas um `<p>` relacionado aos direitosautorais. 

#### Arquivo: `NossoCarapio.js`

```js
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
```
- O que esse componente faz: 
- Mostra o cardápio da confeitaria.
- Cada item vem de um arquivo de dados (data/cardapio.js), que contém imagem, nome e descrição.
- Ao clicar em um card, o usuário é levado para a página /cardapio/[item].


### Formulário 
```js
"use client";
import styles from "./formulario.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Formulario() {
  const router = useRouter();
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset(); // limpa o formulário
    setTimeout(() => setEnviado(false), 4000); // mensagem some depois de 4s
  };

  return (
    <section className={styles["formulario-section"]}>
      <form onSubmit={handleSubmit} className={styles["form-card"]}>
       ...
        <div className={styles.btns}>
          <button
            type="button"
            className={styles.voltar}
            onClick={() => router.back()}
          >
            Voltar
          </button>
          <button type="submit" className={styles.enviar}>
            Enviar
          </button>
        </div>

        {enviado && (
          <p className={styles.mensagemSucesso}>
            ✅ Formulário enviado com sucesso!
          </p>
        )}
      </form>
    </section>
  );
}
```
- `use client` para referir-se ao lado do cliente

- Usa o hook useState para controlar se o formulário foi enviado.

- ao Enviar, o formulário: Não recarrega a página (`e.preventDefault()`), mostra a mensagem ✅ de sucesso por 4 segundos e limpa todos os campos (`e.target.reset()`).

- Botão “Voltar”: usa o `useRouter()` do Next.js.

- O método router.back() retorna para a página anterior do histórico (como o botão voltar do navegador).

### Arquivo: `dark-theme.css`
```js
body.dark {
  background-color: #121212;
  color: #f5f5f5;
  transition: background 0.3s ease, color 0.3s ease;
}

/* ---------- LINKS ---------- */
body.dark a {
  color: #f5f5f5;
}

body.dark a:hover {
  color: #e91e63;
}

/* ---------- HERO ---------- */
body.dark .heroBg {
  filter: brightness(0.4);
}

/* ---------- SEÇÃO SOBRE NÓS ---------- */
body.dark .sobreNos {
  background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
  color: #f5f5f5;
}

body.dark .sobreNos p {
  color: #ccc;
}

/* ---------- SEÇÃO CARDÁPIO ---------- */
body.dark #menu,
body.dark .menu {
  background: linear-gradient(135deg, #1e1e1e, #121212);
  color: #f5f5f5;
}

body.dark .card {
  background: #2b2b2b;
  color: #f5f5f5;
  box-shadow: 0 3px 8px rgba(255, 255, 255, 0.08);
}

body.dark .card:hover {
  background: #333;
  box-shadow: 0 8px 15px rgba(255, 255, 255, 0.1);
}

/* ---------- SEÇÃO CONTATO ---------- */
body.dark .contato {
  background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
  color: #f5f5f5;
}

body.dark .contatoTexto h2 {
  color: #e91e63;
}

body.dark .contatoTexto p {
  color: #ddd;
}

/* ---------- FOOTER ---------- */
body.dark footer {
  background: #1a1a1a;
  color: #ccc;
}

/* ---------- BOTÃO DE TOGGLE ---------- */
body.dark .darkToggle {
  color: #f5f5f5;
}

/* ---------- TRANSIÇÕES ---------- */
body.dark * {
  transition: background 0.3s ease, color 0.3s ease;
}
body.dark .logo {
  filter: invert(1) brightness(2);
}
```

- Define todo o css global do tema escuro

### Rota dinâmica .Arquivo `[id]` pasta `cardapio`
```js
export default async function PaginaCardapio({ params }) {
  const { id } = await params;
  ...
}

```

- O parâmetro { params } é fornecido automaticamente pelo Next.js e contém o valor dinâmico da URL.

```js
const OpcaoCardapio = {
  doces: { ... },
  salgados: { ... },
  bolo: { ... },
};
```

- Aqui, criamos um objeto JavaScript que guarda as informações de cada tipo de cardápio: nome, descrição, título, e as imagens com legenda.

- Cada item tem essa estrutura:
```js
{
  nome: "Doces",
  descricao: "Macarons, tortas e chocolates finos.",
  titulo: "Pequenas delícias",
  imagens: [
    { src: "/limao.jpg", texto: "Torta de Limão" },
    ...
  ],
}
```

```js
const cardapio = OpcaoCardapio[id?.toLowerCase().trim()];
```
- Aqui estamos usando o id da URL (como “doces”) para acessar a opção correspondente no objeto OpcaoCardapio.

```js
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
```
- .map() percorre o array de imagens dentro de cardapio.imagens.

- Para cada imagem, cria um bloco <div> com: uma imagem (<Image /> ) e uma legenda (<p>) com o texto abaixo da imagem.

- A prop key={index} é necessária para o React identificar cada item da lista.


### Arquivo: app/api/coffee/route.js
```js
export async function GET() 
```
- quando alguém acessar /api/café/route.js com método GET, essa função será executada.
- Recebe requisições GET para uma rota de API.

```js
const res = await fetch("https://coffee.alexflipnote.dev/random.json", {
  cache: "no-store",
});
```
- Acessando uma API externa que retorna uma imagem aleatória de café.
- cache significa não guardar o resultado em cache, sempre buscar um novo café a cada requisição.

```js
const data = await res.json();
return Response.json(data);
```
- Converte o corpo da resposta em objeto JavaScript.
- Retornando JSON para o cliente

### Arquivo components/CafeImagens.js

```js
"use client";
import { useEffect, useState } from "react";

export default function CafeImagem() {
  const [cafe, setCafe] = useState(null);
  const [erro, setErro] = useState(null);

```
- Diz que esse arquivo roda no navegador, Por isso é possível usar useState, useEffect
- "cafe" vai armazenar a URL da imagem que vem da API.
- "erro" guarda um erro caso algo dê errado na requisição.

```js
useEffect(() => {
  fetch("/api/cafe")
    .then(async (res) => {
      if (!res.ok) throw new Error("Erro ao buscar café");
      return res.json();
    })
    .then((data) => {
      if (data && data.file) {
        setCafe(data.file);
      } else {
        throw new Error("Formato de dados inesperado");
      }
    })
    .catch((err) => {
      console.error(err);
      setErro("Falha ao carregar a imagem ☕");
    });
}, []);
```

- Chama API interna
- Verifica se resposta é ok
- Converte para JSON e garente que os dados tenham o formato correto

```js
return (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <img
      src={cafe}
      alt="Café aleatório"
      style={{
        maxWidth: "300px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    />
  </div>
);
```
- com tudo dando certo é retornado a imagen!