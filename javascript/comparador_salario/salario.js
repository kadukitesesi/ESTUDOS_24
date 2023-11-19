let salariosInfl = [
    {ano: 2010 , salario: 510 , ipca: 5.91},
    {ano: 2011, salario: 545 , ipca: 6.50 },
    {ano: 2012 , salario: 622 , ipca: 5.91},
    {ano: 2013, salario: 678 , ipca: 6.50 },
    {ano: 2014 , salario: 724 , ipca: 5.91},
    {ano: 2015, salario: 788 , ipca: 6.50 },
    {ano: 2016 , salario: 880 , ipca: 5.91},
    {ano: 2017, salario: 937 , ipca: 6.50 },
    {ano: 2018, salario: 954 , ipca: 6.50 },
    {ano: 2019 , salario: 998 , ipca: 5.91},
    {ano: 2020, salario: 1039 , ipca: 6.50 },
    {ano: 2021, salario: 1100 , ipca: 6.50 },
    {ano: 2022 , salario: 1212 , ipca: 5.91},
    {ano: 2023, salario: 1320 , ipca: 6.50 },
];

let alternativas =  prompt(`Escolha umadas opções de consulta:
   
   1- listar salários minimos de 2010 à 2023
   2-listar o índice IPCA de 2010 à 2023
   3-comparar o aumento salárial com a inflação
   4-finalizar tarefa`
   );


if(alternativas == 1){
    for(let i = 0;i< salariosInfl.length;i++){
    let anos = salariosInfl[i].ano;
    let salarios = salariosInfl[i].salario;
    let ipcas = salariosInfl[i].ipca

    console.log(`${anos} tinha o valor de ${salarios} e inflação de ${ipcas}`)
}
}else{
    alert("finalizando processo...")
}