import { valida } from "./validaForm.js";

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (e)=> {
        valida(e.target);
    })
})

const inputMensagem = document.querySelector('[data-tipo="mensagem"]')

inputMensagem.addEventListener('blur', (e) => {
    valida(e.target)
})

const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get('id');

const exibeCardClicado = () =>{
    fetch('http://localhost:3000/produtos')
    .then(response => {
        return response.json();
    })
    .then(response => {

        let cardValores = {
            categoria: "",
            img: "",
            imgAlt: "",
            titulo: "",
            preco: "",
            descricao: "",
            id: ""
        }
        const produtoDetalhado = response.find(response => response.id == id);
        cardValores = {
           categoria: produtoDetalhado.categoria,
           img: produtoDetalhado.img,
           imgAlt: produtoDetalhado.alt,
           titulo: produtoDetalhado.titulo,
           preco: produtoDetalhado.preco,
           descricao: produtoDetalhado.descricao,
           id: produtoDetalhado.id
        }
       
        let cardNovo = document.createElement('section');
        cardNovo.innerHTML =  
        `<section class="produto-descricao">
            <img src=".${produtoDetalhado.img}" alt="${produtoDetalhado.alt}" class="produto-descricao__img">
            <div class="produto-descricao__descricao">
                <h2 class="produto-descricao__titulo">${produtoDetalhado.titulo}</h2>
                <span class="produto-descricao__preco">${produtoDetalhado.preco}</span>
                <p class="produto-descricao__detalhes">${produtoDetalhado.descricao}</p>
            </div>
        </section>`
        document.querySelector('[data-tipo="produto-descricao"]').appendChild(cardNovo)

        response.filter(response => response.categoria == produtoDetalhado.categoria).forEach(item => {
            cardValores = {
                categoria: item.categoria,
                img: item.img,
                imgAlt: item.alt,
                titulo: item.titulo,
                preco: item.preco,
                descricao: item.descricao,
                id: item.id
            }

            let cardNovo = document.createElement('div');
            cardNovo.innerHTML =  
            `<div class="card">
                <img src=".${item.img}" alt="${item.alt}" class="card__img">
                <h3 class="card__nome">${item.titulo}</h3>
                <span class="card__preco">${item.preco}</span>
                <a href="../html/produto-descricao.html?id=${item.id}" class="card__link" data-tipo="link-produto">Ver Produto</a>
            </div>`
            document.querySelector('[data-tipo="produtos-similares"]').appendChild(cardNovo)
        });

    })
}

exibeCardClicado();



