function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso (em kg)"));
    let altura = parseFloat(prompt("Digite sua altura (em metros)"));

    let imc = peso / (altura * altura);
    let situacao = "";

    if (imc < 18.5) {
        situacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        situacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        situacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 39.9) {
        situacao = "Obesidade";
    } else {
        situacao = "Obesidade grave";
    }

    alert(`Seu IMC é ${imc.toFixed(2)}. Situação: ${situacao}`);
}
