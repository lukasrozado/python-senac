peso = float(input("Peso (kg): "))
altura = float(input("Altura (m): "))
imc = peso / (altura ** 2)
print(f"IMC: {imc:.1f}")

if imc < 18.5:
    status = "Abaixo do peso"
elif 18.5 <= imc < 25:
    status = "Peso normal"
elif 25 <= imc < 30:
    status = "Sobrepeso"
elif 30 <= imc < 35:
    status = "Obesidade Grau I"
elif 35 <= imc < 40:
    status = "Obesidade Grau II"
else:
    status = "Obesidade Grau III"

print(status)