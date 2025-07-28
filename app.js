// let titulo = document.querySelector('h1'); //Isso seleciona uma parte de um código HTML
// titulo.innerHTML = 'Jogo do número secreto'; //Define o que vai aparecer no HTML

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'

let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1}) //Essa é uma importação que é usada para narrar o que está escrito no HTML/JavaScript, a importação é feita pelo HTML. Dentro do parênteses, você coloca os parâmetros
}
//Feita a função para poder declarar no HTML

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto') //Declarada a função, a tag que vai utilizar e o valor que deseja apresentar
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute(){ //Criar função declarando a tag Function e o nome da função
    let chute = document.querySelector('input').value //Nesse caso ele está selecionando a tag input e o .value vai apenas capturar os valores
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!')
        let palavraTentantiva = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentantiva}!`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled') //Puxa o ID de um tag no HTML //Nesse caso em específico, está sendo utilizado a função .removeAttrivute, que basicamente remove um atributo que estiver dentro de uma tag
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que o chute')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }

        tentativas++ //Adiciona na variavel tentativas
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //Faz o retorno do valor que vier da função
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length // length retorna a quantidade de itens em uma lista 

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [] // Deixa a lista vazia
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //O método includes verifica se o elemento está na lista, se estiver na lista é true, se não é false
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido) //O método push adiciona um item na lista
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '' //Define que deve ficar vazio
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true) //Nesse caso, foi feito o código para setar o atributo disabled no Id Reiniciar, o true serve para que ele ocorra

}

//Referente a listas, a função pop remove  o último elemento.

