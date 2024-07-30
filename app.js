let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function vezesClicadas() {
    console.log("O botão foi clicado");
}

function verificarAlerta() {
    alert('Eu amo js')
}

function minhaCidade() {
    let cidadeVisitada = prompt('Qual é a cidade que você mas gosta');
    alert(`Estive em ${cidadeVisitada} e lembrei de você`);
}

function numeroInteiro(){
    let num1 = prompt('Digite um número inteiro');
    let num2 = prompt('Digite mais um número inteiro');
    let soma = parseInt(num1) + parseInt(num2)
    alert(`A soma dos números é ${soma}`);
}