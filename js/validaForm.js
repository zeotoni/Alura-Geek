export const valida = (input) =>{
    const tipoDeInput = input.dataset.tipo;
    
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);

    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campode de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não símbolos.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.'
    },
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    },
    categoria: {
        valueMissing: 'O campo de categoria não pode estar vazio.'
    },
    imagem: {
        valueMissing: 'O campo de imagem não pode estar vazio.'
    },
    descricao: {
        valueMissing: 'O campo de descrição não pode estar vazio.'
    }
}

const mostraMensagemDeErro = (tipoDeInput, input)=> {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem;
}