//Dados do jogador(Nome,Pontos de Vida, Armadura)

var jogadores_rpg = [
    {nome : "kokori", vida : 20, armadura : 10},
    {nome : "Inai", vida : 20, armadura : 10}
]

var inimigos = [
    {nome: "Muzan", especie: "Demonio", vida:200},
    {nome: "Stuart", especie: "Goblin", vida:23},
    {nome: "REX", especie:"Ogro", vida:80}
];

var escolhaJogador = document.getElementById("escolhaJogador").value;
var escolhaDado = document.getElementById("escolhaDado").value
var acao = document.getElementById("acaoJogador").value
var inimigoSelect = document.getElementById("inimigos").value



function girarDado(){
    switch(escolhaDado){
        case"d20":
             var dado = Math.floor(Math.random()*20);
            document.getElementById("sorte").innerHTML = dado
        break
        case"d8":
        var dado8 = Math.floor(Math.random()*8);
        document.getElementById("nota").innerHTML = dado8    
        break
        }
        switch(escolha){
        case"Inai":
            if(acao == "ataque"){
                var dano = inimigos[0].vida - dado
                document.getElementById().innerHTML = inimigos[0].vida
            }
        break
        case"Kokori":
            var dano = dado - jogadores_rpg[0].vida
            document.getElementById().innerHTML = dano
        break
    }
}