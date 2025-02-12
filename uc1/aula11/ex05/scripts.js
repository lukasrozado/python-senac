class Personagem {
    constructor(nome, energia, nivel){
        this.nome = nome
        this.energia = energia
        this.nivel = nivel
    }
    ganharEnergia(){
        document.write("Ganhando Energia")
    }
    perderEnergia(){
        document.write("Perdendo Energia")
    }
    subirDeNivel(){
        document.write("Ganhando Nível")
    }
}
filme1 = new Filme("Filme Dahora", "Dahora", 2015)

filme1.mostrar()