from datetime import datetime
ano_nasc = int(input("Ano de nascimento: "))
idade = datetime.now().year - ano_nasc
print(f"Sua idade é {idade} anos")