arrayPerguntasRespostas = [
    {pergunta: "Em que ano o Brasil foi descoberto? ", resposta: 1500},
    {pergunta: "Qual ano a escravidão foi abolida? ", resposta: 1888},
    {pergunta: "Ano da independencia do Brasil? ", resposta: 1822},
    {pergunta: "Quando começou a era Vargas? ", resposta: 1930},
    {pergunta: "Primeiro Reinado? ", resposta: 1822},
    {pergunta: "Brasil colônia? ", resposta: 1530},
    {pergunta: "Segundo Reinado ", resposta: 1831},
    {pergunta: "Quando começou a ditadura militar? ", resposta: 1964},
    {pergunta: "Quando acabou a ditadura militar? ", resposta: 1985},
    {pergunta: "Em que ano o o primeiro celular foi lançado no Brasil? ", resposta: 1990},
    {pergunta: " Em que ano a internet chegou ao Brasil? ", resposta: 1988},
    {pergunta: "Quando Brasilia foi construida? ", resposta: 1960},
    {pergunta: "Quando morreu lampião? ", resposta: 1938}
];


function perguntaAleatoria(){
   let perguntaNumero =  Math.floor(Math.random()*12);
   let pergunta = arrayPerguntasRespostas[perguntaNumero].pergunta
   return pergunta;
};



alert(perguntaAleatoria())