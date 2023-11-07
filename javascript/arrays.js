/*let array = [1,2,3,4,5];

let arrayP = prompt('Me peça um número do array?');

switch(arrayP){
    case '0':
        alert(array[0])
    break
    case '1':
        alert(array[1])
    break
    case '2':
        alert(array[2])
    break
    case '3':
        alert(array[3])
    break
}*/

//Adicionar item no final: push
//Adcionar item no inicio: unshift
//Remover item no final: pop
//Remover item no inicio: shift
//Pesquisar por um elemento:includes,indexof
let arr = ['luta','jiu-jitsu','KaratÊ'];
let outraArray = ['charlie','anderson silva']

arr.push(prompt('me diga um estilo de luta: '));

console.log(arr)
//concatenar
const lutador = arr.splice(0,3)

console.log(lutador)

let sociedade = arr.concat(lutador,outraArray)

console.log(sociedade)

//substituindo

let elementosRemovidos = sociedade.splice(sociedade,1,'Eu sou o melhor');

console.log(elementosRemovidos);

// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
  }