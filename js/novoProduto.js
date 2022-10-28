import { valida } from "./validaForm.js";

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

const uma = document.getElementById("ppp")

inputImg.addEventListener('change', function() {

    const imagem = inputImg.files;

    if(imagem.length > 0) {
        var lerArquivo = new FileReader();
        lerArquivo.onload = function(e) {
            var x = lerArquivo.result;
            document.getElementById("img-local").src = x;
            // document.getElementById("img-local")
            uma.innerHTML = x;
            // console.log(x)
            
        }
        lerArquivo.readAsDataURL(imagem[0])
        return uma;
    }
    
})


formCadastroProduto.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let novoProduto = {
        "categoria": inputCategoria.value,
        "img": uma.textContent,
        "alt": inputTitulo.value,
        "titulo": inputTitulo.value,
        "preco": inputPreco.value,
        "descricao": inputDescricao.value
    }
    const url = 'https://smiling-longing-diamond.glitch.me/produtos';
    const options  = {
        method: 'POST',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novoProduto)
    }
    console.log(options.body)
    fetch(url, options)
    .then(
        response => response.text()
    )
    .catch(error => console.log(error)); 
    window.location.href = "produto-cadastrado.html";
})
