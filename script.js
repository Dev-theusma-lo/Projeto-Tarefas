var inputTarefas = document.getElementById('inputTarefa');

var listaTarefas = [];

function adicionar() {
    if(inputTarefas.value === "" || inputTarefas === null){
        alert("Digite uma tarefa!!!")
        inputTarefas.value = "";
    }else{
        listaTarefas.push(inputTarefas.value);
    }
    console.log(listaTarefas);
}

function rederLista() {
    
}