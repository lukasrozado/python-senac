salario = float(input("Salário: R$ "))
imposto = 0.0

if salario > 4664.68:
    imposto += (salario - 4664.68) * 0.275
    salario = 4664.68
if salario > 3751.05:
    imposto += (salario - 3751.05) * 0.225
    salario = 3751.05
if salario > 2826.65:
    imposto += (salario - 2826.65) * 0.15
    salario = 2826.65
if salario > 2112.00:
    imposto += (salario - 2112.00) * 0.075

print(f"IRPF a pagar: R$ {imposto:.2f}")