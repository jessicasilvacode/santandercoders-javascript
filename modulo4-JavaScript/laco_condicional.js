// laços condicionais   WHILE

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe? '))

console.log(numero, typeof numero)

//if (numero === numero_sorteado) {
//    console.log('Acertou!!')
//} else {
//   console.log('Errou...')
//}

while (numero !== numero_sorteado) {
    console.log('Errou... Tente novamente...')

    numero = Number(input.question('Qual numero voce escolhe? '))
}
console.log('Você acertou!!!')

