// coerção (conversão) de tipo

// explícita

const numero = 10;
console.log(numero, typeof numero)

const numeroString = String(numero)
console.log(numeroString, typeof numeroString)

console.clear()

// implícita (automática)

console.log(10 + 1)
console.log(10 + '1')    // converte numero em texto
console.log('10' - 1)    // converte texto em numero

console.log(2 + 3 + 4 + '5')

console.log('5' + 2 + 3 + 4)

console.log('10' - '4' - '3' - 2 + '5') // quando tem  -  ele entende que é número
