function calcularMedia() {
    let num1 = parseFloat(prompt("Digite o primeiro número"));
    let num2 = parseFloat(prompt("Digite o segundo número"));
    let num3 = parseFloat(prompt("Digite o terceiro número"));

    let media = (num1 + num2 + num3) / 3;
    alert(`A média dos números é: ${media.toFixed(2)}`);
}
