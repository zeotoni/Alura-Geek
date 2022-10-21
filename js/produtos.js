function exibeCards() {
    fetch('http://localhost:3000/produtos')
    .then(response => {
        return response.json();
    })
    .then(response => {
        
        let cardValores = {
            img: "",
            imgAlt: "",
            titulo: "",
            preco: "",
            link: ""
        }

        response.forEach(item => {
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
                <div class="card__icons">
                    <img src="../assets/img/botao-excluir.svg" alt="Ícone de lixeira" class="card__icons-img">
                    <img src="../assets/img/botao-editar.svg" alt="Ícone de lápis" class="card__icons-img">
                </div>
                <img src=".${item.img}" alt="${item.alt}" class="card__img">
                <h3 class="card__nome">${item.titulo}</h3>
                <span class="card__preco">${item.preco}</span>
                <a href="./html/produto-descricao.html" class="card__link">${item.link}</a>
            </div>`
           
            document.querySelector('[data-tipo="produtos"]').appendChild(cardNovo)
        });
    })
}

exibeCards();