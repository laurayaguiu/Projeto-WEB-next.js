"use  client"
export async function GET() {
  try {
    const res = await fetch("https://coffee.alexflipnote.dev/random.json", {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error("Falha ao buscar café externo");
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("Erro na rota API:", error);
    return Response.json({ error: "Erro ao buscar café" }, { status: 500 });
  }
}

//client 