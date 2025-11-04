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
        <h2>Formulário de Cadastro</h2>

        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="(99) 99999-9999"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="cep">CEP:</label>
        <input type="text" id="cep" name="cep" placeholder="00000-000" required />

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
            ✅ Formulário enviado com sucesso! Entraremos em contato em breve 💌
          </p>
        )}
      </form>
    </section>
  );
}