const produtosAchados = document.querySelector('[data-tipo="produtos-buscados"]')

const exibeCardsBuscados = () => {
    const produtosEncontrados = JSON.parse(localStorage.getItem('produtos'));

    produtosEncontrados.forEach(item => {
        cardValores = {
            img: item.img,
            imgAlt: item.alt,
            titulo: item.titulo,
            preco: item.preco,
            link: item.link
        }

        let cardNovo = document.createElement('div');
        cardNovo.innerHTML =  
        `<div class="card">
            <img src=".${item.img}" alt="${item.alt}" class="card__img">
            <h3 class="card__nome">${item.titulo}</h3>
            <span class="card__preco">${item.preco}</span>
            <a href="../html/produto-descricao.html" class="card__link">${item.link}</a>
        </div>`
        document.querySelector('[data-tipo="produtos-buscados"]').appendChild(cardNovo)
    })
}