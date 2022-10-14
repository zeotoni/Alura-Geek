import { valida } from "./validaForm.js";

const inputEmail = document.querySelector('[data-tipo="email"]');
const inputSenha = document.querySelector('[data-tipo="senha"]');
const botaoLogar = document.querySelector('[data-tipo="botao"]');

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (e)=> {
        valida(e.target);
    })
})

botaoLogar.addEventListener('click', (e)=> {
    e.preventDefault();
    if(inputEmail.value == 'user@user.com' && inputSenha.value == 'Admin123') {
        window.location.href = "produtos.html";
    } else {
        console.log('non')
    }
})



