# 📋 App - Lista de Tarefas

Um aplicativo web moderno e responsivo para gerenciamento de tarefas com interface dark mode elegante.

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas** — Digite e pressione Enter ou clique no botão "Add"
- 🗑️ **Excluir Tarefas** — Remova tarefas com um clique
- 🎯 **Drag & Drop** — Reorganize suas tarefas arrastando e soltando
- 💾 **Persistência** — Tarefas são salvas automaticamente no localStorage
- 📊 **Contador** — Visualize o total de tarefas adicionadas
- 🌙 **Dark Mode** — Design moderno e confortável para os olhos
- 📱 **Responsivo** — Funciona perfeitamente em desktop, tablet e mobile

## 🛠️ Tecnologias

- **React 18** — Framework JavaScript via CDN
- **HTML5** — Estrutura semântica
- **CSS3** — Estilização dark mode com animações suaves
- **JavaScript ES6+** — Lógica moderna e Hooks React (useState, useEffect)
- **LocalStorage API** — Persistência de dados local

## 📱 Responsividade

O aplicativo é totalmente responsivo com breakpoints para:
- 🖥️ **Desktop** (600px+) — Layout completo com todas as features
- 📱 **Mobile** (até 600px) — Interface adaptada com touch-friendly
- 📱 **Small Mobile** (até 400px) — Otimizado para dispositivos pequenos

## 🚀 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Digite sua tarefa no campo de entrada
3. Pressione **Enter** ou clique em **Add**
4. Passe o mouse sobre as tarefas para ver opções
5. Arraste as tarefas para reorganizar a ordem
6. Clique em **Excluir** para remover uma tarefa

As tarefas são salvas automaticamente!

## 📂 Estrutura do Projeto

```
├── index.html       # Estrutura HTML e setup React
├── app.jsx          # Componentes React (App e TaskItem)
├── style.css        # Estilos dark mode e animações
└── README.md        # Este arquivo
```

## 🎨 Design

- **Paleta de Cores**: Azul (#0066ff), Cyan (#00d4ff), Cinza escuro (#1a1a2e)
- **Animações**: Transições suaves (0.3s), slide-in, fade-in
- **Tipografia**: Segoe UI com hierarchy clara
- **Componentes**: Card-based, border-left accent, hover effects

## 📝 Commits Importantes

- `b2a0a94` — Implementação da função de adicionar tarefas
- `48723ec` — Adição da função de excluir
- `de2fe24` — LocalStorage e persistência de dados
- `b43eaad` — Estilização CSS dark mode
- Atual — Migração para React com drag & drop

## 🎯 Próximas Melhorias

- [ ] Filtros (todas, completas, pendentes)
- [ ] Categorias/Tags
- [ ] Edição de tarefas
- [ ] Checkbox para marcar como concluída
- [ ] Busca/filtro por texto

---

**Desenvolvido com ❤️ por Dev.matheus**
