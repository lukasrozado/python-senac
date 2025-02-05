function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    return a / b;
}

function multiplicacao(a, b) {
    return a * b;
}

function realizarOperacao() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const operacao = prompt("Qual operação você deseja? (soma, subtração, divisão, multiplicação)");

    let resultado;
    switch (operacao.toLowerCase()) {
        case 'soma':
            resultado = soma(num1, num2);
            break;
        case 'subtração':
            resultado = subtracao(num1, num2);
            break;
        case 'divisão':
            resultado = divisao(num1, num2);
            break;
        case 'multiplicação':
            resultado = multiplicacao(num1, num2);
            break;
        default:
            resultado = "Operação inválida!";
    }
    
    alert(`Resultado: ${resultado}`);
}
