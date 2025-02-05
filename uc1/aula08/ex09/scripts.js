function verificarNumero() {
    const numero = parseInt(prompt("Digite um número:"));
    
    if (numero > 0) {
        alert("Positivo");
    } else if (numero < 0) {
        alert("Negativo");
    } else {
        alert("Zero");
    }
}
