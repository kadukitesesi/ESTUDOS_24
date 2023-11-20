let salariosInfl = [
    {ano: 2010 , salario: 510 , ipca: 5.91},
    {ano: 2011, salario: 545 , ipca: 6.50 },
    {ano: 2012 , salario: 622 , ipca: 5.84},
    {ano: 2013, salario: 678 , ipca: 5.91 },
    {ano: 2014 , salario: 724 , ipca: 6.41},
    {ano: 2015, salario: 788 , ipca: 10.67 },
    {ano: 2016 , salario: 880 , ipca: 9.68},
    {ano: 2017, salario: 937 , ipca: 4.5 },
    {ano: 2018, salario: 954 , ipca: 3.75 },
    {ano: 2019 , salario: 998 , ipca: 4.31},
    {ano: 2020, salario: 1039 , ipca: 4.52 },
    {ano: 2021, salario: 1100 , ipca: 10.06 },
    {ano: 2022 , salario: 1212 , ipca: 5.80},
    {ano: 2023, salario: 1320 , ipca: "Em andamento" },
];

let alternativas =  prompt(`Escolha umadas opções de consulta:
   
   1- listar salários minimos de 2010 à 2023
   2-listar o índice IPCA de 2010 à 2023
   3-comparar o aumento salárial com a inflação
   4-finalizar tarefa`
   );

    for(let i = 0;i< salariosInfl.length;i++){
            let anos = salariosInfl[i].ano;
            let salarios = salariosInfl[i].salario;
            let ipcas = salariosInfl[i].ipca
                if(alternativas == 1 ){
            
                console.log(`${anos} tinha o valor de ${salarios}R$ e inflação de ${ipcas}%`)

                }else if(alternativas == 2){
                    console.log(`${anos} a inflação fechou em ${ipcas}%`)
                }else if(alternativas == 3){
                        if(i>0){
                    let salarioAnterior = salariosInfl[i-1].salario;
                    let diferenca = salarios-salarioAnterior;
                    let crescimento = (diferenca/salarioAnterior)*100
                    let formDiferenca = crescimento.toFixed(2);
                    console.log(`O crescimento salárial de ${formDiferenca}%`)
                        }else{
                            console.log("Não teve aumento")
                        }
                }else{
                    i = 22
                    alert("Finalizando tarefa...")
                }
    
   }
