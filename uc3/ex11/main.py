idade = int(input("Idade: "))
contribuicao = int(input("Tempo de contribuição (anos): "))

if idade >= 60 or contribuicao >= 35:
    print("Pode se aposentar agora!")
else:
    tempo_idade = 60 - idade
    tempo_contrib = 35 - contribuicao
    restante = min(tempo_idade, tempo_contrib)
    print(f"Tempo restante: {restante} anos")