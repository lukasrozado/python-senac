let exercicios = prompt("1- Calculadora entre 2 números\n 2- Calculadora de IMC \n 3- Conversor de unidades de cm para m \n 4-área de um triângulo \n 5-área de um retângulo \n 6- Volume de uma caixa");


if(exercicios == 1){
let operador = prompt("1- Adição\n 2- Subtração\n 3- Multiplicação\n 4- Divisão \n 5- Média");
let numero_1 = parseFloat(prompt("Escreva um número:"));
let numero_2 = parseFloat(prompt("Escreva outro número:"));
let resultado;

switch(operador){
    case "1":
        resultado = numero_1 + numero_2;
        document.writeln("A operação escolhida foi: Adição <br>", resultado);
        break;
    case "2":
        resultado = numero_1 - numero_2;
        document.writeln("A operação escolhida foi: Subtração <br>", resultado);
        break;
    case "3":
        resultado = numero_1 * numero_2;
        document.writeln("A operação escolhida foi: Multiplicação <br>", resultado);
        break;
    case "4":
        resultado = numero_1 / numero_2;
        document.writeln("A operação escolhida foi: Divisão <br>", resultado);
        break;
    case "5":
        resultado = (numero_1 + numero_2) / 2
        document.writeln("A operação escolhida foi: Média <br>", resultado);
        break;
    default:
        document.writeln("Operação inválida.");
        break;
}
} else if (exercicios == 2){
    let altura = parseFloat(prompt("Qual a altura do indivíduo: "));
    let peso = parseFloat(prompt("Qual o peso do indivíduo: "));
    let IMC = peso / (altura * altura);
    document.writeln("O IMC do indivíduo é: " , IMC);
} else if (exercicios == 3){
    let numero_cm = parseFloat(prompt("Digite o número a seguir em cm: "))
    let numero_cm_para_m = numero_cm / 100
    document.writeln("O número digitado de CM para Metros é: " , numero_cm_para_m);
} else if (exercicios == 4){
    let base_do_triangulo = parseFloat(prompt("Digite a seguir a base do triângulo: "));
    let altura_do_triangulo = parseFloat(prompt("Digite a seguir a altura do triângulo: "));
    let area_do_triangulo = (base_do_triangulo * altura_do_triangulo) / 2
    document.writeln("A área do triângulo com as propriedades escolhidas é: " , area_do_triangulo);
} else if (exercicios == 5){
    let base_do_retangulo = parseFloat(prompt("Digite a seguir a base do retângulo: "));
    let altura_do_retangulo = parseFloat(prompt("Digite a seguir a altura do retângulo: "));
    let area_do_retangulo = (base_do_retangulo * altura_do_retangulo) / 2
    document.writeln("A área do retângulo com as propriedades escolhidas é: " , area_do_retangulo);
} else {
    let base_da_caixa = parseFloat(prompt("Digite a seguir a base da caixa: "));
    let altura_da_caixa = parseFloat(prompt("Digite a seguir a altura da caixa: "));
    let largura_da_caixa = parseFloat(prompt("Digite a seguir a largura da caixa: "));
    let area_da_caixa = base_da_caixa * altura_da_caixa * largura_da_caixa;
    document.writeln("A área da caixa com as propriedades escolhidas é: " , area_da_caixa);

}