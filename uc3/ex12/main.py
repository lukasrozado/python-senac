a = float(input("Lado 1: "))
b = float(input("Lado 2: "))
c = float(input("Lado 3: "))

if a + b > c and a + c > b and b + c > a:
    if a == b == c:
        tipo = "Equilátero"
    elif a == b or a == c or b == c:
        tipo = "Isósceles"
    else:
        tipo = "Escaleno"
    print(f"Formam um triângulo {tipo}")
else:
    print("Não formam um triângulo")