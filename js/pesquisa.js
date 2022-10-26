export function pesquisaProduto(input, urlFetch, urlExibicao) {
    input.addEventListener('keyup', (e)=> {

        if(e.key === 'Enter') {
            const produtoBuscado = input.value.toLowerCase();
    
            fetch(urlFetch)
            .then(response => {
                return response.json();
            })
            .then(response => {
                const produtosSelecionados = response.filter(response => response.titulo.toLowerCase().includes(produtoBuscado));
                const key = 'produtos';
                localStorage.setItem(key, JSON.stringify(produtosSelecionados));
                window.location.href = urlExibicao;
            })
        }
    })
}