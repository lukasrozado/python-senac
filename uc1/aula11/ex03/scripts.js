class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
}
    mostrar(){
        document.write("Nome: "+ this.nome + "<br>" +"Preço: "+ this.preco + "<br>" + "Quantidade: "+ this.quantidade + "<br>"  )
    }
}

produto1 = new Produto("Produto Dahora", 112, 2)
produto1.mostrar()