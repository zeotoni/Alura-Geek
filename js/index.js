import { valida } from "./validaForm.js";

const lupa = document.querySelector('[data-tipo=lupa]');
const inputPesquisa = document.querySelector('[data-tipo="cabecalho-input"]');
const botaoLogin = document.querySelector('[data-tipo="botao-login"]');
const logo = document.querySelector('[data-tipo="logo"]');
const botaoFechar = document.querySelector('[data-tipo="botaoFechar"]');
const inputs = document.querySelectorAll('input');




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

exibeCards();

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
        const produtoBuscado = inputPesquisa.value.toLowerCase();

        fetch('http://localhost:3000/produtos')
        .then(response => {
            return response.json();
        })
        .then(response => {
            const produtosSelecionados = response.filter(response => response.titulo.toLowerCase().includes(produtoBuscado));
            const key = 'produtos';
            localStorage.setItem(key, JSON.stringify(produtosSelecionados));
            window.location.href = "./html/produtosBuscados.html";
        })
    }
})
const mensagem = document.querySelector('[data-tipo="mensagem"]')
mensagem.addEventListener('blur', () => {
    valida(mensagem)
})
inputs.forEach(input => {
    input.addEventListener('blur', (e)=> {
        valida(e.target);
    })
})


