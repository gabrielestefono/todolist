let input = document.querySelector("input[name=tarefa]");
let btn = document.querySelector("#botao");
let lista = document.querySelector("#lista");
let card = document.querySelector(".card");

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){
    for(tarefa of tarefas){
        let itemLista = document.createElement("li");
        itemLista.setAttribute("class", "list-group-item list-group-item-action");
        let itemTexto = document.createTextNode(tarefa);
        itemLista.appendChild(itemTexto);
        itemLista.onclick = function(){
            deletarTarefa(this);
        }
        lista.appendChild(itemLista);
    };
};

renderizarTarefas();

btn.addEventListener('click', ()=>{
    let novaTarefa = input.value;
    if(novaTarefa !== ''){
    lista.innerHTML = '';
    tarefas.push(novaTarefa);
    renderizarTarefas();
    input.value = '';
    removerSpans();
    salvarDadosNoStorage()
    }else{
        removerSpans();
        let span = document.createElement("span");
        span.setAttribute("class", "alert alert-warning");
        let msg = document.createTextNode("Você precisa informar a tarefa!");
        span.appendChild(msg);
        card.appendChild(span);
    };
});

function removerSpans(){
    let spans = document.querySelectorAll('span');
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    };
};

function deletarTarefa(tarefa){
    lista.innerHTML = '';
    tarefas.splice(tarefas.indexOf(tarefa.textContent),1);
    renderizarTarefas();
    salvarDadosNoStorage();
};

function salvarDadosNoStorage(){
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
};