//Dados do jogador(Nome,Pontos de Vida, Armadura)

var jogadores_rpg = [
    {nome : "kokori", vida : 20, armadura : 10},
    {nome : "Inai", vida : 20, armadura : 10}
]

var escolhaJogador = document.getElementById("escolhaJogador").value;
var escolhaDado = document.getElementById("escolhaDado").value

function girarDado(){

    var dado = Math.floor(Math.random()*20);
    document.getElementById("sorte").innerHTML = dado;
    var dado8 = Math.floor(Math.random()*8);
    document.getElementById("sorte").innerHTML = dado8;
    

    if(dado < 10){
        document.getElementById("nota").innerHTML = "Você se deu mal"
    }else{
        document.getElementById("nota").innerHTML = "Parabéns"
    }
    switch(escolha){
        case"Inai":
            var dano = jogadores.rpg[0].vida - dado8
            document.getElementById("sorte").innerHTML = dano
        break
        case"Kokori":
            var dano = dado8 - jogadores_rpg[1].vida
            document.getElementById("sorte").innerHTML = dano
        break
    }
}