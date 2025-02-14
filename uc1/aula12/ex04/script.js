class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto() {
        this.preco *= 0.9;
        return this.preco;
    }
}

const produto = new Produto("Camiseta", 50);
document.getElementById("produtoComDesconto").innerHTML = `Produto: ${produto.nome}<br>Preço com Desconto: R$${produto.aplicarDesconto()}`;
