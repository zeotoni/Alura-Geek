import { valida } from "./validaForm.js";

// const botaoCadastrar = document.querySelector('[data-tipo="botao-cadastrar"]');

const formCadastroProduto = document.querySelector('[data-tipo="form-produto"]');
const inputImg = document.querySelector('[data-tipo="imagem"]');
const inputCategoria = document.querySelector('[data-tipo="categoria"]');
const inputTitulo = document.querySelector('[data-tipo="nome"]');
const inputPreco = document.querySelector('[data-tipo="preco"]');
const inputDescricao = document.querySelector('[data-tipo="descricao"]');

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {

    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
        
    }

    input.addEventListener('blur', (e)=> {
        valida(e.target);
    })
})


inputDescricao.addEventListener('blur', (e) => {
    valida(e.target)
})

formCadastroProduto.addEventListener('submit', (e) => {
    e.preventDefault();

    let novoProduto = {
        "categoria": inputCategoria.value,
        "img": inputImg.value,
        "alt": inputTitulo.value,
        "titulo": inputTitulo.value,
        "preco": inputPreco.value,
        "descricao": inputDescricao.value
    }
    const url = 'http://localhost:3000/produtos';
    const options  = {
        method: 'POST',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novoProduto)
    }
    fetch(url, options)
    .then(
        response => response.text()
    )
    .catch(error => console.log(error))
})