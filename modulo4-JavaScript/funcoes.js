// funções

// criando uma função de saudação -> toda vez que um usuário entrar num site ou sistema, irá aparecer essa mensagem

function saudacao() {
    console.log('Olá, seja bem vinda ao nosso curso básico de JavaScript! 🪐✨🧚‍♀️')
}

saudacao()

console.clear()

// enviar parametros para as funções 

function saudacao(nome, curso) {
    console.log(`Olá ${nome}, seja bem vinda ao nosso curso básico de ${curso}! 🪐✨🧚‍♀️`)
}

saudacao('Jessica', 'JavaScript')

// retorno da função

function soma(num1, num2) {
    return num1 + num2
}

let resultado = soma(10, 20)

console.log(resultado)

console.log(resultado / 2)
