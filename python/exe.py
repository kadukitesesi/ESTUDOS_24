#Exercicio 01
def quadrado():
      n = input("Escreva um número pra eu te retornar ele ao quadrado: ")
      number = int(n)

      return number ** 2

print(quadrado())

#Exercicio 02 

def string():
      s = input("Me diga seu nome: ")

      return s
print(string())

#Exercicio 03

def add_mult(a,b,c,x=100,y=1000):
      return a + b + c * x * y
result = add_mult(10,15,25)
print(result)

#Exercicio 04

def inteiro(x):
      return x / 2
ruf = inteiro(4)
print(ruf)

def multiplica(x):
      return x * 4
ref = multiplica(4)
print(ref)

#Exercicio 05

def convert(string):
    try:
        return float(string)
    except ValueError:
        print("Could not convert the string to a float.")

c = input("Me dê um número pra eu converter em decimais")
print(c)