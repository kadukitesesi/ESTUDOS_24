let opcao  = "";
const imoveis = [];

do{
    opcao = prompt(`Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis:   ${imoveis.length} 
        \n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair`)
    switch(opcao){
        case "1":
            const novoImovel = {}

            novoImovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            novoImovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
            novoImovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))                 
            novoImovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
            let confirma = prompt(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + novoImovel.proprietario +
                "\nQuartos: " + novoImovel.quartos +
                "\nBanheiros: " + novoImovel.banheiros +
                "\nPossui Garagem? " + novoImovel.garagem
              )
        
              if (confirma == "sim") {
                imoveis.push(novoImovel)
              }else{
                alert("excluindo..")
              }
        break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + imoveis[i].proprietario +
                  "\nQuartos: " + imoveis[i].quartos +
                  "\nBanheiros: " + imoveis[i].banheiros +
                  "\nPossui Garagem? " + imoveis[i].garagem
                )
              }
        break
        case "3":
            alert("saindo")
        break
        default:
            alert("Opção invalida")
    }

}while(opcao !== "3");