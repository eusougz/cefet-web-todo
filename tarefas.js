(function () {
  class Tarefa {
    #nome;
    #categoria;
    #realizada = false;

    constructor(nome, categoria, realizada) {
      this.#nome = nome;
      this.#categoria = categoria;
      this.#realizada = realizada;
    }

    adicionaNaPagina(containerEl) {
      // 1a forma - Inner HTML
      const template = `
        <li class="item-tarefa categoria-${this.#categoria} ${this.#realizada && 'marcado'}">
          ${this.#nome}
        </li>
        `;
      containerEl.innerHTML += template;

      // 2a forma
      // const tarefaEl = document.createElement('li');
      // tarefaEl.innerHTML = this.#nome;
      // tarefaEl.classList.add('item-tarefa', `categoria-${this.#categoria}`);
      // this.#realizada && tarefaEl.classList.add('marcado');

      // 3a forma - permite manipular eventos
      //const tarefaEl = document.createRange().createContextualFragment(template);
      //tarefaEl.querySelector.addEventListener('', () => {})

      // 1a forma de adicionar na página
      //containerEl.appendChild(tarefaEl);

      // 2a forma de adicionar na página
      //containerEl.insertAdjacentElement('beforeend', tarefaEl);
    }
  }

  const tarefas = [
    new Tarefa('Limpar o chão', 'lazer'),
    new Tarefa('Exercícios Web', 'estudos', true),
  ];

  const listaTarefasEl = document.querySelector('#lista-tarefas');
  listaTarefasEl.innerHTML = '';
  tarefas.forEach((tarefa) => tarefa.adicionaNaPagina(listaTarefasEl));

  const botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
  const inputEl = document.querySelector('#nova-tarefa-nome');
  const categoriasEl = document.querySelector('#nova-tarefa-categoria');

  function incluirNovaTarefa() {
    const novaTarefa = new Tarefa(inputEl.value, categoriasEl.value);
    tarefas.push(novaTarefa);
    novaTarefa.adicionaNaPagina(listaTarefasEl);

    inputEl.value = '';
    inputEl.focus();
  }

  botaoIncluirEl.addEventListener('click', () => {
    incluirNovaTarefa();
  });

  inputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      incluirNovaTarefa();
    }
  });
})();
