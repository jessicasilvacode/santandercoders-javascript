// arrays 
// guardar inúmeras informações -> estruturas de dados

let arr = ['Jessica', 29, 'Salvador', true]

console.log(arr)

// acessar elemenytos do array

console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])
console.log('Quarto elemento: ', arr[3])

// como obter o tamanho do array

console.log('Tamanho do array: ', arr.length)

// percorrendo arrays
// primeiro metodo

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// segundo metodo  ->    for  off

for (let elemento of arr) {
    console.log(elemento)
}

// terceiro metodo  ->    for  in

for (let indice in arr) {
    console.log(indice)
}

console.clear()


// métodos de array 

const arr1 = [30, 12, 45, 34, 29]

// fatiamento

console.log(arr1.slice(1, 3))

console.log(arr1.slice(2))

console.clear()

 
// adicionando elementos  ->   inclui no final 

console.log('Antes de adicionar: ', arr1)

arr1.push(10)

console.log('Depois de adicionar: ', arr1)

// adicionando elementos  ->   inclui no inicio

arr1.unshift(0)

console.log(arr1)

console.clear()


// removendo elementos  ->    remove no final (ultimo elemento)

console.log(arr1)

arr1.pop()

console.log(arr1)

const elementoRemovido = arr1.pop()
console.log(elementoRemovido)

console.clear()

// removendo elementos  ->    remove no inicio  (primeiro elemento)

console.log(arr1)

arr1.shift()

console.log(arr1)

console.clear()

// concatenação de arrays

let arr2 = [10, 20, 30]

console.log('Array 1 = ', arr1)
console.log('Array 2 = ', arr2)

console.log(arr1.concat(arr2))

// buscar elementos  indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento45 = arr1.indexOf(45)
console.log(indiceDoElemento45)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.indexOf(3)) // primeira posição

console.log(arr3.lastIndexOf(3)) // última posição

console.clear()

// descobrindo a existencia do elemento 

console.log(arr1)

console.log(arr1.includes(10))
console.log(arr1.includes(12))

// invertendo elementos da array

console.log('Array1 normal: ', arr1)
console.log('Array1 invertido: ', arr1.reverse())



