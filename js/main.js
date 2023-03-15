const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
console.log(itens);

itens.forEach(element => {
    criaElemento(element)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual);

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));
    
    nome.value = "";
    quantidade.value = "";
})

function criaElemento(obj) {
    const novoItem = document.createElement('li'); //Cria novo Elemento
    novoItem.classList.add('item'); //adiciona a classe ao elemento criado

    const numeroItem = document.createElement('strong'); //Cria novo Elemento
    numeroItem.innerHTML = obj.quantidade; //adiciona dentro do novo item a quantidade

    novoItem.appendChild(numeroItem); //adiciona dentro do novoItem o filho numeroItem
    novoItem.innerHTML += obj.nome; //adiciona o valor dentro de novo item

    lista.appendChild(novoItem); //Adiciona a lista existente o filho novoItem

}
