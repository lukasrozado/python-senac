class Filme {
    constructor(titulo, diretor, ano_de_lancamento){
        this.titulo = titulo
        this.diretor = diretor
        this.ano_de_lancamento = ano_de_lancamento
    }
    mostrar(){
        document.write("Titulo "+ this.titulo + "<br>" +"Diretor: "+ this.diretor + "<br>" + "Ano de Lançamento "+ this.ano_de_lancamento + "<br>"  )
    }
}
filme1 = new Filme("Filme Dahora", "Dahora", 2015)

filme1.mostrar()