import { valida } from "./validaForm.js";

const inputPesquisa = document.querySelector('[data-tipo="cabecalho-input"]');
const sessaoProdutosTitulo = document.querySelector('[data-tipo="produtos-titulo"]')
const lupa = document.querySelector('[data-tipo=lupa]');
const botaoFechar = document.querySelector('[data-tipo="botaoFechar"]');
const botaoLogin = document.querySelector('[data-tipo="botao-login"]');
const logo = document.querySelector('[data-tipo="logo"]');

function exibeCardsBuscados() {
    const produtosEncontrados = JSON.parse(localStorage.getItem('produtos'));
    sessaoProdutosTitulo.setAttribute("style", "background: none");

    let cardValores = {
        img: "",
        imgAlt: "",
        titulo: "",
        preco: "",
        id:""
    }
    produtosEncontrados.forEach(item => {
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
            <img src=".${item.img}" alt="${item.alt}" class="card__img">
            <h3 class="card__nome">${item.titulo}</h3>
            <span class="card__preco">${item.preco}</span>
            <a href="../html/produto-descricao.html?id=${item.id}" class="card__link">Ver Produto</a>
        </div>`
        document.querySelector('[data-tipo="produtos-buscados"]').appendChild(cardNovo)
    })
}
exibeCardsBuscados();
lupa.addEventListener('click', ()=> {
    inputPesquisa.setAttribute("style", "display: block");
    botaoLogin.setAttribute("style", "display: none");
    logo.setAttribute("style", "display: none");
    lupa.setAttribute("style", "display: none");
    botaoFechar.setAttribute("style", "display: block");   
})

botaoFechar.addEventListener('click', () => {
    inputPesquisa.setAttribute("style", "display: none");
    botaoLogin.setAttribute("style", "display: block");
    logo.setAttribute("style", "display: block");
    lupa.setAttribute("style", "display: block");
    botaoFechar.setAttribute("style", "display: none");   
})

inputPesquisa.addEventListener('keyup', (e)=> {

    if(e.key === 'Enter') {
        produtoBuscado = inputPesquisa.value.toLowerCase();

        fetch('http://localhost:3000/produtos')
        .then(response => {
            return response.json();
        })
        .then(response => {
            const produtosSelecionados = response.filter(response => response.titulo.toLowerCase().includes(produtoBuscado));
            const key = 'produtos';
            localStorage.setItem(key, JSON.stringify(produtosSelecionados));
            window.location.href = "produtosBuscados.html";
        })
    }
})

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