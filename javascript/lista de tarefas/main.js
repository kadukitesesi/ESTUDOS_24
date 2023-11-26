let arrayTarefas = []

function criaTarefa(){
    let conteudo = document.getElementById("tarefa").value
    let selectLista = document.getElementById("lista")
    let novaTarefa = document.createElement("li")

    novaTarefa.textContent = conteudo;
    selectLista.appendChild(novaTarefa);


}