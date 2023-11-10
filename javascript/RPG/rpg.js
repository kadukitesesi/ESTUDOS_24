//Dados do jogador(Nome,Pontos de Vida, Armadura)

jogador1 = ["Kokori",20,20];

jogador2 = ["inai",20,20];

function girarDado(){
    var dado = Math.floor(Math.random()*20);
    document.getElementById("sorte").innerHTML = dado;

    if(dado < 10){
        document.getElementById("nota").innerHTML = "Você se deu mal"
    }else{
        document.getElementById("nota").innerHTML = "Parabéns"
    }
}