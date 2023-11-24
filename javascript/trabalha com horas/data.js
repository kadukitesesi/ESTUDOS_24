const hora = new Date().getHours();


if(hora < 5 || hora >= 18){
    document.getElementById('body').style.backgroundColor = '#32cd32';
    document.getElementById('frase').innerHTML = 'Cala a boca trabalho, eu tô vadiando porra'
}else if(hora >= 5 || hora < 18){
    document.getElementById('frase').innerHTML = 'Cala a boca vadia, eu tô trabalhando porra'
    document.getElementById('body').style.backgroundColor = '#111111'
    document.getElementById('body').style.color = 'white'
}