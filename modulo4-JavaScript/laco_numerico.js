// laços numéricos

// acumulador

let acumulador = 0
acumulador += 10
acumulador += 2 

acumulador ++    //soma +1 no acumulador

console.log(acumulador)

console.clear()

// estrutura FOR ++

for (let i = 0; i <=4; i++) {
    console.log('Repetição', i)
}

// estrutura FOR -

for (let i = 12; i > 8; i--) {
    console.log('Repetição', i)
}

console.clear()

// resolvendo um problema

const input = require('readline-sync')

let nota
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))

    soma = soma + nota
}

console.log(soma, `. A média do aluno é: ${soma / 3}.`)
