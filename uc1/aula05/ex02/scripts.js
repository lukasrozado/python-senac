let num1 = parseInt(prompt("Digite o primeiro valor"))
let num2 = parseInt(prompt("Digite o segundo valor"))
soma = num1 + num2

if (isNaN(soma)){
   document.write("Digite valores válidos")
}
else{
    if(soma > 20) {
        document.write("Soma maior do que vinte")
    }
else if (soma < 20) {
        document.write("Soma menor do que vinte")
    }
else {
        document.write("Soma igual a vinte")
    }
}
