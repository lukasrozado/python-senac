function verificarIdade() {
    const idade = parseInt(prompt("Qual a sua idade?"));
    
    if (idade >= 18) {
        alert("Maior de idade");
    } else {
        alert("Menor de idade");
    }
}
