const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
const imagemAssustadora = document.getElementById("imagemAssustadora");
const body = document.body;

let paginaAlterada = false;

botao.addEventListener("click",function(){
    if (paginaAlterada === false) {
    body.style.backgroundColor = 'black'; 
    botao.textContent = "Clique para voltar para a luz!"
    botao.style.backgroundColor = "red";
    body.style.color = 'white';
    mensagem.textContent="TÁ TUDO ESCUROOOOO MERMÃO!!!!"
    mensagem.style.display = 'block';
    imagemAssustadora.style.display = "inline";

     paginaAlterada = true;
    }
    else {
        body.style.backgroundColor = '';
        body.style.color = '';
        botao.style.backgroundColor = '';
        mensagem.style.display = 'none'
        botao.textContent = "Clique para ver uma mensagem"
        imagemAssustadora.style.display = "none";

        paginaAlterada = false;
    }
});