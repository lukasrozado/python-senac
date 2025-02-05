function contarLetraA() {
    const texto = prompt("Digite uma palavra ou frase:");
    const contagem = texto.split('').filter(c => c.toLowerCase() === 'a').length;
    alert(`A letra "A" aparece ${contagem} vez(es).`);
}
