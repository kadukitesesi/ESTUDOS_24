let nomeF = prompt('Me diga seu nome:');
let numeroHoras = parseInt(prompt('Me diga quantas horas você trabalha por mês:'));
let valorHora = parseFloat(prompt('Me diga quanto você recebe por hora:'));

let salario = valorHora * numeroHoras;

alert(nomeF+' você tem um salário de '+salario+' $')