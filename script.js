var inputTarefas = document.getElementById('inputTarefa');
var lista = document.querySelector('#lista ul');

var listaTarefas = [];

function adicionar() {
    if(inputTarefas.value === "" || inputTarefas === null){
        alert("Digite uma tarefa!!!")
        inputTarefas.value = "";
    } else {
        let tarefa = inputTarefas.value;
        listaTarefas.push(tarefa);
        inputTarefas.value = "";
        rederLista();
    }

}

function rederLista() {
    lista.innerHTML = "";
    listaTarefas.map((item)=>{
        
        let itemLista= document.createElement("li");
        itemLista.innerHTML = item;
        lista.appendChild(itemLista);

        let bntexcluir = document.createElement("button");
        bntexcluir.innerText = "Excluir";
        bntexcluir.onclick = excluirTarefa;
        itemLista.appendChild(bntexcluir);

    })
}

function excluirTarefa() {
     
 }