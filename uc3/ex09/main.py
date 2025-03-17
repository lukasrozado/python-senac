parcelas = int(input("Número de parcelas: "))
valor_parcela = float(input("Valor de cada parcela: "))
total = parcelas * valor_parcela

if total > 1000:
    total *= 1.05
    

print(f"Total a pagar: R$ {total:.2f}")