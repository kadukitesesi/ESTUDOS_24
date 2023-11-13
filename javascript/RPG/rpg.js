//Dados do jogador(Nome,Pontos de Vida, Armadura)

jogador1 = ["Kokori",20,20];

jogador2 = ["inai",20,20];

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
            var dano = jogador2[1] - dado8
            document.getElementById("sorte").innerHTML = dano
        break
        case"Kokori":
            var dano = dado8 - jogador1[1]
            document.getElementById("sorte").innerHTML = dano
        break
    }
}