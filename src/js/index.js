const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".card");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".first");
    cartaoSelecionado.classList.remove("first");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("first");
}

btnAvancar.addEventListener("click", function() {
    if(cartaoAtual === cartoes.length - 1) {
        cartaoAtual = - 1;
    };
    
    esconderCartaoSelecionado(); 
    
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) {
        cartaoAtual = cartoes.length;
    };

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})