// objetos

// criar um objeto

let pessoa = {
    nome: 'Jessica',
    idade: 29,
    cidade: 'Salvador',
}

// como acessar informações

console.log(pessoa)

console.log(pessoa.nome)

console.log(pessoa['nome'])

// adicionar informações

pessoa.estudando = true

console.log(pessoa)

// remover uma chave do objeto

delete pessoa.estudando

console.log(pessoa)

// percorrer o objeto

console.clear()

for (let chave in pessoa) {
    console.log(chave)
}
