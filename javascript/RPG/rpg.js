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
    let dados = Math.floor(Math.random()*20)
    document.getElementById("sorte").innerText = dados
}

function ataque(){
    
}