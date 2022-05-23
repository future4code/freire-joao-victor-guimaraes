// ---------------------- Exercícios de interpretação de código

// ---------------------- 1. interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
// })

//   a) O que vai ser impresso no console ?
//     --- Possivelmente será impresso o mapeamento da array listando cada usuario em array


// ---------------------- 2. interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
// })

//   a) O que vai ser impresso no console ?
//     --- Será impresso arrays listando os nomes 


// ---------------------- 3. interpretação de código

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//   a) O que vai ser impresso no console ?
//     --- Esse array é diferente dos anteriores pois ele realizara um filtro em apelidos, mostrando nomes diferentes de "Chijo"

// ---------------------- Exercícios de escrita de código


// ---------------------- 1. escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// ---------------------- a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomeDosDqoguinhos = pets.map((item, indice, array) => {
//     return item.nome
// })

//console.log(nomeDosDqoguinhos)

// ---------------------- b) Crie um novo array apenas com os cachorros salsicha
// const doguinhosSalsinha = pets.filter((item, indice, array ) => {
//     return item.raca === "Salsicha"
// })
// console.log(doguinhosSalsinha)

// ---------------------- c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
// const racaPoodle = pets.map((item) => {
//     if (item.raca === "Poodle") {
//         return item
//     }
// })
// const descontoPoodle = racaPoodle.filter((item, indice, array) => {

//    return`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
     
// })
// console.log(descontoPoodle)



// ---------------------- 2. escrita de código

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item
const nomeDosProdutos = produtos.map((item, indice, array) => {
    return item.nome
})
console.log(nomeDosProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const descontoComNomePreco = produtos.map((item, indice, array) => {
    const descontoNoPreco = (item.preco*0.95)
    return `${item.nome} ${descontoNoPreco}`
})
console.log(descontoComNomePreco)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const categoriaBebidas = produtos.filter((item, indice, array) => {
    if(item.categoria === "Bebidas"){
            return item
    }
})
console.log(categoriaBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const nomeYpe = produtos.filter((item, indice, array) => {
    return item.nome.includes("Ypê") 
})
console.log(nomeYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const nomeYpeComPreco = produtos.filter((item, indice, array) => {
    preco = item.preco
    return `${item.nome.includes("Ypê")} ${preco}`
})
console.log(nomeYpeComPreco)


















