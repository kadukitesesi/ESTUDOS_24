

def even_odd():
    n = input("Escreva um número: ")
    n = int(n)

    if n % 2 == 0:
        print("Este Número é par")
    else:
         print("Este Número é impar")


even_odd()

#Manipulando exceções

a = input("Escreva um número:")
a = int(a)
b = input("Escreva outro número:")
b = int(b)
try:
    print(a/b)
except ZeroDivisionError:
    print("Não da pra dividir com 0")