consumo = float(input("Consumo (kWh): "))
tarifa = 0.50
total = consumo * tarifa

if consumo > 200:
    total *= 0.90

print(f"Valor da conta: R$ {total:.2f}")