// operadores booleanos

// igualdade   ==
// desigualdade   !=
// maior que  >
// maior ou igual  >=
// menor que   <
// menor ou igual   <=

const numero = 10

console.log(numero == 10)
console.log(numero > 20)

// comparar conteúdo e tipo de variável   ===  ou !==

console.log(numero == 10)
console.log(numero == '10')
console.log(numero === '10')
console.log(numero !== '10')

console.clear()

// conjuções lógicas

// AND   &&

let idade = 20;
let tenhoCNH = false;

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir? ', possoDirigir)

// OR   ||

let idade2 = 15;
let tenhoCNH2 = true;

const possoDirigir2 = idade2 >= 18 || tenhoCNH2 === true

console.log('Posso dirigir? ', possoDirigir2)

console.clear()

// NOT   !

const gostandoCurso = false;

// inverter o resultado do booleano

console.log(!gostandoCurso)
