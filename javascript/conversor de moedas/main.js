import {converteParaReal, converteParaEuro} from './converte.js';
import {formataReal, formataEuro, formataDolar} from './formata.js';

let conversor = 'real';

let dolar = '5.00';
let valor_convertido;

if(conversor == 'real')
{
    valor_convertido = converteParaReal(dolar);
    valor_convertido = formataReal(valor_convertido);
}
else if(conversor == 'euro')
{
    valor_convertido = converteParaEuro(dolar);
    valor_convertido = formataEuro(valor_convertido);
}

console.log("Valor em Dólar: "+formataDolar(dolar));
console.log("Valor convertido: "+valor_convertido);