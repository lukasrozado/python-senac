function mostrarMes() {
    const numero = parseInt(prompt("Digite o número do mês (1-12):"));
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (numero >= 1 && numero <= 12) {
        alert(`O mês é: ${meses[numero - 1]}`);
    } else {
        alert("Número inválido!");
    }
}
