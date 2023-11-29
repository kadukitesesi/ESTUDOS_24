//Criação das tarefas e horário que foi publicado

let hoje = new Date();

function criaTarefa() {
    let conteudo = document.getElementById("tarefa").value;
    let selectLista = document.getElementById("lista");
    let novaTarefa = document.createElement("li");

    let horaTarefa = hoje.getHours();
    let minutoTarefa = hoje.getMinutes();
    let momentoTarefa = `${horaTarefa}:${minutoTarefa}`;

    novaTarefa.textContent = conteudo;
    selectLista.appendChild(novaTarefa);

    let dataElement = document.createElement("span");
    dataElement.textContent = momentoTarefa;
    dataElement.className = "data-tarefa";
    novaTarefa.appendChild(dataElement);
}