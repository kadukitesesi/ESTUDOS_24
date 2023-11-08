function aleatorio(){
    thein = ["Gabriella é gay", "Ela é muito gay","ela é gay demaize 😆","COMO É GAY","Gosta de taylor swift 🤢", "Você gasta demais"];

    var mudar = Math.floor(Math.random()*thein.length);


    document.getElementById("traduzir").innerHTML = (thein[mudar]);
}