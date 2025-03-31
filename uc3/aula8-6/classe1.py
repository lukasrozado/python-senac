class Aluno:
    def __init__(self, nome, curso, tempoSemDormir=0):
        self.nome = nome
        self.curso = curso
        self.tempoSemDormir = tempoSemDormir

    def estudar(self, horas):
        self.tempoSemDormir += horas

    def dormir(self, horas):
        self.tempoSemDormir -= horas

aluno = Aluno("Maria", "Ciência da Computação")
aluno.estudar(8)
aluno.dormir(6)
print(f"{aluno.nome} está há {aluno.tempoSemDormir} horas sem dormir.")