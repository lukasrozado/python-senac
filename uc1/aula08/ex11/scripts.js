function contarImpares() {
    const n = parseInt(prompt("Digite um número positivo:"));
    let contador = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }

    alert(`Existem ${contador} números ímpares de 1 até ${n}.`);
}
