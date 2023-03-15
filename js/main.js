const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {
    criaElemento(element)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    };

    if (existe) {
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);

        itens[existe.id] = itemAtual;
    } else {
        itemAtual.id = itens.length;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    };

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(item) {
    const novoItem = document.createElement('li'); //Cria novo Elemento
    novoItem.classList.add('item'); //adiciona a classe ao elemento criado

    const numeroItem = document.createElement('strong'); //Cria novo Elemento
    numeroItem.innerHTML = item.quantidade; //adiciona dentro do novo item a quantidade

    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem); //adiciona dentro do novoItem o filho numeroItem
    novoItem.innerHTML += item.nome; //adiciona o valor dentro de novo item

    lista.appendChild(novoItem); //Adiciona a lista existente o filho novoItem

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}