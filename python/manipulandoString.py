n1 = input("Escreva um nome: ")
v = input("Escreva um verbo: ")
adj = input("Escreva um adjetivo: ")
n2 = input("Escreva outro nome: ")

r = """  the {} {} the {} {}
     """.format(n1,
           v,
           adj,
           n2)
print(r)

