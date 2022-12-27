let input = document.querySelector("input[name=tarefa]");
let btn = document.querySelector("#botao");
let lista = document.querySelector("#lista");

let tarefas = [
    "Tarefa 01",
    "Tarefa 02",
    "Tarefa 03",
];

function rederizarTarefas(){
    for(tarefa of tarefas){
        let itemLista = document.createElement("li");
        itemLista.setAttribute("class", "list-group-item list-group-item-action");
        let itemTexto = document.createTextNode(tarefa);
        itemLista.appendChild(itemTexto);
        lista.appendChild(itemLista);
    };
};

function adicionarLista(){
    tarefas.push(input.value);
}

rederizarTarefas();

btn.onclick = adicionarLista;