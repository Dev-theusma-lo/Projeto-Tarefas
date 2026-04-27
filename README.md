# Lista de Tarefas

Um aplicativo simples para gerenciar tarefas com uma interface dark mode moderna. Tudo é armazenado localmente no seu navegador, então suas tarefas não desaparecem.

## O que faz

Basicamente você consegue adicionar tarefas, visualizar elas em uma lista e remover quando não precisar mais. Tem a funcionalidade de persistência com localStorage, então quando você fecha e abre de novo, tudo continua lá.

## Tecnologias usadas

- HTML5 para a estrutura
- JavaScript vanilla para a lógica
- CSS3 com variáveis e animações suaves
- LocalStorage para armazenar as tarefas

## Design

O projeto usa um tema dark mode com uma paleta de cores em tons de azul e cinza. A interface é limpa e responsiva, funcionando bem tanto em desktop quanto em celular.

## Como usar

1. Abra o arquivo `index.html` em um navegador
2. Digite o texto da tarefa no campo
3. Clique em "Add" ou pressione Enter
4. Para remover uma tarefa, clique em "Excluir"
5. Tudo é salvo automaticamente

## Estrutura

```
├── index.html      # Página principal
├── script.js       # Lógica da aplicação
├── style.css       # Estilos e animações
└── README.md       # Este arquivo
```

## Responsividade

Funciona em qualquer tamanho de tela. Em celulares, o layout se adapta para ser mais confortável de usar.

## Histórico

O projeto começou bem simples, só com a função de adicionar tarefas. Depois foram adicionadas as funcionalidades de deletar e persistência com localStorage. Por último, foi feita uma customização visual completa com CSS, incluindo animações e um design dark mode bem definido.
