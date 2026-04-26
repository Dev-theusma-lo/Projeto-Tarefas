var inputTarefas = document.getElementById('inputTarefa');
var lista = document.querySelector('#lista ul');


var listaTarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];
renderLista();

function adicionar() {
    if(inputTarefas.value === "" || inputTarefas === null){
        alert("Digite uma tarefa!!!")
        inputTarefas.value = "";
    } else {
        let tarefa = inputTarefas.value;
        listaTarefas.push(tarefa);
        inputTarefas.value = "";
        renderLista();
        AdicionarStorage();
    }

}

function renderLista() {
    lista.innerHTML = "";
    listaTarefas.map((item)=>{
        
        let itemLista= document.createElement("li");
        itemLista.innerHTML = item;
        lista.appendChild(itemLista);

        // let bntexcluir = document.createElement("button");
        // bntexcluir.innerText = "Excluir";
        // bntexcluir.onclick = excluirTarefa;
        // itemLista.appendChild(bntexcluir);

        

        let linkText = document.createTextNode("   Excluir");
       
        let posicaoTarefa = listaTarefas.indexOf(item);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        linkElement.onclick = () => excluirTarefa(posicaoTarefa);
        linkElement.appendChild(linkText);

        itemLista.appendChild(linkElement);
        

    })
}

function excluirTarefa(posicaoTarefa) {
     listaTarefas.splice(posicaoTarefa, 1);
     renderLista();
     AdicionarStorage();
}

function AdicionarStorage() {
    localStorage.setItem("@listaTarefas", JSON.stringify(listaTarefas));
}