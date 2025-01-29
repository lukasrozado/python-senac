function verificarTriangulo() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo"));
    let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo"));
    let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo"));

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Os lados devem ser positivos.");
        return;
    }

    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2) {
        let tipo = "";
        if (lado1 === lado2 && lado2 === lado3) {
            tipo = "Equilátero";
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }
        alert(`Os lados formam um triângulo do tipo ${tipo}`);
    } else {
        alert("Os lados não formam um triângulo.");
    }
}
