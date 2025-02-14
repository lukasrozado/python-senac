class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    exibirDetalhes() {
        return `Título: ${this.titulo}<br>Autor: ${this.autor}<br>Ano de Publicação: ${this.anoPublicacao}`;
    }
}

const livro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
document.getElementById("detalhesLivro").innerHTML = livro.exibirDetalhes();
