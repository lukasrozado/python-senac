class Carro {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
    }

    exibirVelocidade() {
        return this.velocidade;
    }
}

const carro = new Carro("Fusca", "1975", 50);
carro.acelerar();
carro.acelerar();
document.getElementById("simulacaoCarro").innerHTML = `Velocidade do ${carro.marca} ${carro.modelo}: ${carro.exibirVelocidade()} km/h`;
