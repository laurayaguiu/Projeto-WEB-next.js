"use client";
import { useEffect, useState } from "react";

export default function CafeImagem() {
  const [cafe, setCafe] = useState(null);
  const [erro, setErro] = useState(null);

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

  if (erro) return <p style={{ color: "red" }}>{erro}</p>;
  if (!cafe) return <p>Carregando café...</p>;

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
}