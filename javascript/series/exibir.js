import retornaSerie from "./dados.js";

let data = new Date();
let diaSemana = data.getDay()
let serieDoDia  = retornaSerie(diaSemana)

console.log(`A série do dia é: ${serieDoDia}`)