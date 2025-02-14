class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }

    calcularMedia() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
}

const aluno = new Aluno("João", 20, [7, 8, 9, 6]);
document.getElementById("mediaAluno").innerHTML = `Média do Aluno ${aluno.nome}: ${aluno.calcularMedia()}`;
