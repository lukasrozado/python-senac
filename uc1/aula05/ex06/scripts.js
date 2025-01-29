function calcularDesconto() {
    let valor = parseFloat(prompt("Digite o valor original"));
    let desconto = parseFloat(prompt("Digite o percentual de desconto"));

    let valorFinal = valor - (valor * (desconto / 100));
    alert(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
}
