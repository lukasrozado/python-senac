class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
    vender(){
        if (this.estoque > 0) {
            this.estoque = this.estoque - 1; 
        } else {
            console.log("Estoque insuficiente para venda");
        }
    }
    reporEstoque(){
        this.estoque = this.estoque + 1;
    }
    mostrar(){
        document.write("Nome: " + this.nome + "<br>" + 
                        "Preço: " + this.preco + "<br>" + 
                        "Quantidade: " + this.estoque + "<br>");
    }
}

let produto1 = new Produto("Produto top", 1200, 20);

produto1.mostrar();
produto1.vender(); 
produto1.mostrar(); 
