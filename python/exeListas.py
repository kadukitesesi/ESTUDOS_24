#exercicio 01

favs = ["Yunk Vino", "Steff", "Veigh"]

#exercicio 02

cords = [(157714, 482488),(180269.46, 8228365.3 ),( 5542, 425013)]

#exercicio 03

caracteristicas = {
    "altura":"1,71",
    "idade":"20",
    "musica":"rap",
}


#exercicio 04

pergunta = input("Me pergunte sobre minha altura, idade e meu estilo de música")

if pergunta in caracteristicas:
    resposta = caracteristicas[pergunta]
    print(resposta)
else:
    print("Não posso te dizer")