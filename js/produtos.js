const exibeCards = ()=> {
    fetch('https://db-geek.herokuapp.com/produtos')
    .then(response => {
        return response.json();
    })
    .then(response => {
        
        let cardValores = {
            img: "",
            imgAlt: "",
            titulo: "",
            preco: "",
            id: ""
        }

        response.forEach(item => {
            cardValores = {
                img: item.img,
                imgAlt: item.alt,
                titulo: item.titulo,
                preco: item.preco,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.innerHTML =  
            `<div class="card">
                <div class="card__icons">
                    <img src="../assets/img/botao-excluir.svg" onclick="excluiProduto('${item.id}','${item.titulo}')" alt="Ícone de lixeira" class="card__icons-img" data-tipo="excluir-produto">
                    <img src="../assets/img/botao-editar.svg" alt="Ícone de lápis" class="card__icons-img">
                </div>
                <img src="${item.img}" alt="${item.alt}" class="card__img">
                <h3 class="card__nome">${item.titulo}</h3>
                <span class="card__preco">${item.preco}</span>
                <a href="../html/produto-descricao.html?id=${item.id}" class="card__link" data-tipo="link-produto">Ver Produto</a>
            </div>`
            document.querySelector('[data-tipo="produtos"]').appendChild(cardNovo)
        });
    })
    .catch(error => console.log(error))
}

exibeCards();

function excluiProduto(id, nome) {
    console.log(id)
    alert(`Deseja excluir o produto:  ${nome} ?`)
    // alert(`Deseja excluir o produto ${id} ?`)
    // fetch('https://db-geek.herokuapp.com/produtos/'+id, {
    //     method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(error => console.log(error)); 
}