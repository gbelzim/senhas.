const nomes = ["Vicent", "Isaac", "gon", "Marcelo", "dom precheco", "Rec-ruta", "Aviãozinho do tráfico"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)