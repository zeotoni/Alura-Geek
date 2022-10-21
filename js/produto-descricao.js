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