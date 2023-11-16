alert("Aplicação de Juros!!\n")

let divida = parseInt(prompt("Me diga o valor de sua dívida: "));
let diasAtraso = parseInt(prompt("Me diga a quantos dias venceu: "))

alert("Sua Divida original é de "+divida+" R$\n e está vencida à "+diasAtraso+" dias.")
 if (diasAtraso >= 15){
   let juros = ((divida* 10)/100)+divida;
    document.getElementById("result").innerHTML = "Você terá que pagar " +juros+" R$ devido os 10% de juros"
 }else if(diasAtraso<15 && diasAtraso>0){
  let  juros = ((divida * 5)/100)+divida;
    document.getElementById("result").innerHTML = "Você terá que pagar " +juros+" R$ devido os 5% de juros"
 }else{
    document.getElementById("result").innerHTML = "Você está em dia por enquanto!"
 }
