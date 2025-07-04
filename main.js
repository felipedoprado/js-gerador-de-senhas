const numeroSenha = document.querySelectorAll('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho
botoes[0].onclick = aumentaTamanho

function diminuitamanho(){
    if (tamanhoSenha > 1 ){
        tamanhoSenha--;
    }   
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);