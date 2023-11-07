serie  = ["the walking dead","Entourage","The sopranos"]

for series in serie:
    print(serie)

for i in range(25,50):
    print(i)



shows = ["The Walking Dead", "Entourage", "The Sopranos", "The Vampire Diaries"]
for index, show in enumerate(shows):
    print(index)
    print(show)


numeros = [1,23,56,70]

while True:
    palpite = input("tente adivinhar o número")

    if palpite == "q":
        break
    try:
        palpite = int(palpite)
    except ValueError:
        print("please type a number or q to quit.")
    if palpite in numeros:
        print("Seu palpite esta certo")
    else:
        print("Seu palpite está errado")


numeros1 = [8,19,148,4]
numeros2 = [9,1,33,83]
result = []

for i in numeros1:
    for j in numeros2:
        mult = i * j 
        result.append(mult)

        

print(result)