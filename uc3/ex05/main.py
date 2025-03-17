valor = float(input("Valor do produto: "))
desconto = float(input("Percentual de desconto (%): "))
valor_final = valor * (1 - desconto/100)
print(f"Valor com desconto: R$ {valor_final:.2f}")