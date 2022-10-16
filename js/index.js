const exibeCards = () => {
    fetch('http://localhost:3000/produtos')
    .then(response => {
        return response.json();
    })
    .then(response => {
        // let produtosSelect = response.filter(response => response.categoria == "diversos")
        // console.log(produtosSelect);
        
        let cardValores = {
            img: "",
            imgAlt: "",
            titulo: "",
            preco: "",
            link: ""
        }

        response.filter(response => response.categoria == "star wars").forEach(item => {
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
                <img src="${item.img}" alt="${item.alt}" class="card__img">
                <h3 class="card__nome">${item.titulo}</h3>
                <span class="card__preco">${item.preco}</span>
                <a href="./html/produto-descricao.html" class="card__link">${item.link}</a>
            </div>`
            document.querySelector('[data-tipo="starWars"]').appendChild(cardNovo)
        });
        response.filter(response => response.categoria == "consoles").forEach(item => {
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
                <img src="${item.img}" alt="${item.alt}" class="card__img">
                <h3 class="card__nome">${item.titulo}</h3>
                <span class="card__preco">${item.preco}</span>
                <a href="./html/produto-descricao.html" class="card__link">${item.link}</a>
            </div>`
            document.querySelector('[data-tipo="consoles"]').appendChild(cardNovo)
        });
        response.filter(response => response.categoria == "diversos").forEach(item => {
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
                <img src="${item.img}" alt="${item.alt}" class="card__img">
                <h3 class="card__nome">${item.titulo}</h3>
                <span class="card__preco">${item.preco}</span>
                <a href="./html/produto-descricao.html" class="card__link">${item.link}</a>
            </div>`
            document.querySelector('[data-tipo="diversos"]').appendChild(cardNovo)
        });
    })
}
