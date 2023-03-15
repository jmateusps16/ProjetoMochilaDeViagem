const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];
    criaElemento(nome.value, quantidade.value);
    nome.value = "";
    quantidade.value = "";
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li'); //Cria novo Elemento
    novoItem.classList.add('item'); //adiciona a classe ao elemento criado

    const numeroItem = document.createElement('strong'); //Cria novo Elemento
    numeroItem.innerHTML = quantidade; //adiciona dentro do novo item a quantidade

    novoItem.appendChild(numeroItem); //adiciona dentro do novoItem o filho numeroItem
    novoItem.innerHTML += nome; //adiciona o valor dentro de novo item

    lista.appendChild(novoItem); //Adiciona a lista existente o filho novoItem
}
