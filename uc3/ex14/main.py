valor = float(input("Valor: "))
desconto = float(input("Desconto (%): "))
valor_final = valor * (1 - desconto/100)
print(f"Valor final: {valor_final:.2f}")