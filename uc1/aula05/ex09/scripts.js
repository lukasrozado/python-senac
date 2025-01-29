function verificarIdadeParaDirigir() {
    let idade = parseInt(prompt("Digite sua idade"));

    if (idade >= 18) {
        alert("Você tem idade suficiente para dirigir.");
    } else {
        alert("Você não tem idade suficiente para dirigir.");
    }
}
