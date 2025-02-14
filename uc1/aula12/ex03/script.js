class Televisao {
    constructor() {
        this.canalAtual = 1;
        this.volume = 10;
    }

    aumentarVolume() {
        if (this.volume < 100) this.volume++;
    }

    diminuirVolume() {
        if (this.volume > 0) this.volume--;
    }

    mudarCanal(novoCanal) {
        this.canalAtual = novoCanal;
    }
}

const tv = new Televisao();
tv.mudarCanal(5);
tv.aumentarVolume();
tv.aumentarVolume();
document.getElementById("simulacaoTV").innerHTML = `Canal Atual: ${tv.canalAtual}<br>Volume: ${tv.volume}`;
