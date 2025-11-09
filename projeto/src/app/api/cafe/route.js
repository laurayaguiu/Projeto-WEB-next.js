export async function GET() {
  try {
    // Faz a requisição para a API externa de café
    const res = await fetch("https://coffee.alexflipnote.dev/random.json", {
      cache: "no-store", // sempre pega um novo café
    });

    if (!res.ok) {
      throw new Error("Falha ao buscar café externo");
    }

    const data = await res.json();

    // Retorna o JSON diretamente
    return Response.json(data);
  } catch (error) {
    console.error("Erro na rota API:", error);
    return Response.json({ error: "Erro ao buscar café" }, { status: 500 });
  }
}