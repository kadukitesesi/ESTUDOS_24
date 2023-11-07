cores = ["Verde","Azul","Verrmelho"]

adivinhe = input("Adivinhe a cor: ")

if adivinhe in cores:
    print("Você acertou!")
else:
    print("Não tem essa cor.")


    #dicionários 

    rhymes = {"1":"fun",
                    "2":"blue",
                    "3":"me",
                    "4":"floor",
                    "5":"live"
              }
    
    n = input("Escolha um número: ")
    if n in rhymes:
        rhyme = rhymes[n]
        print(rhyme)
    else:
        print("Not found. ")


    #containers em containers

    lists = []
    rap = ["Travis scott", "Djonga","mv bill"]
    rock = ["slash", "Slipknot", "Mandragora"]
    forro = ["Aviões do forró","Calcinha preta","Forró boys"]

    lists.append(rap)
    lists.append(rock)
    lists.append(forro)