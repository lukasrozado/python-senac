reais = float(input("Valor em R$: "))
taxa = float(input("Taxa de câmbio (R$/US$): "))
dolares = reais / taxa
print(f"Valor em US$: {dolares:.2f}")