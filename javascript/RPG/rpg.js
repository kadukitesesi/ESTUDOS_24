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

var dados = [
    {nome: "d20",numero: 20},
    {nome: "d8", numero:8},
    {nome:"d12", numero:12},
    {nome:"d2",numero:2}
];

var escolhaJogador = document.getElementById("escolhaJogador").value;
var escolhaDado = document.getElementById("escolhaDado").value;
var acao = document.getElementById("acaoJogador").value;
var inimigoSelect = document.getElementById("inimigos").value;



function girarDado(){
    switch(escolhaDado){
        case"d20":
             var dado20 = Math.floor(Math.random()*dados[0].numero);
            document.getElementById("sorte").innerHTML = dado20
        break
        case"d8":
        var dado8 = Math.floor(Math.random()*dados[1].numero);
        document.getElementById("nota").innerHTML = dado8    
        break
        }
        switch(escolha){
        case"Inai":
            
               // var dano = inimigos[0].vida - dado
                document.getElementById().innerHTML = inimigos[0].vida
        break
        case"Kokori":
        //    var dano = dado - jogadores_rpg[0].vida
            document.getElementById().innerHTML = dano
        break
    }
}