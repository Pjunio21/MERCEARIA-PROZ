const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

const listaProdutos = document.getElementById("lista-produtos")
// Usar o .map() para escrever no html os produtos
// '' apóstrofo ou aspas simples
// "" aspas duplas
// `` crase ${variavel}
listaProdutos.innerHTML = produtosLocalStorage.map((produto) => `
    <article class="produto">

        <div class="informacoes">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$ ${produto.preco}</p>
        </div>

<img src="${produto.imagem}" alt="${produto.nome}">
    </article>
`).join("");
