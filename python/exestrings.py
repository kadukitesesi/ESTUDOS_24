#Exercicio 01

rikp = "mamus"

print(rikp[0])
print(rikp[1])
print(rikp[2])
print(rikp[3])
print(rikp[4])

#exercicio 02

comp = input("Complete")
comp2= input("Complete novamente")

resposta = "Yesterday I Wrote a {}. I sent it to {}!".format(comp,comp2)

print(resposta)

#Exercicio 03

geral_junto = "Alaldous huxley was born in 1894".capitalize()

print(geral_junto)

#Exercicio 04

wow = "Where now? Who now? When now?".split(" ") 

print(wow)

#Exercicio 05

fox = ["The", "fox", "jumped", "over", "the", "fence", "."]
fox = " ".join(fox)
fox = fox[0: -2] + "."
print(fox)