//Exercícios de interpretação de código
//1.Analise

// let array
// console.log('a. ', array)
// console.log(`Retorna array vazio ou indefinido, pois não esta atribuido`)

// array = null
// console.log('b. ', array)
// console.log(`Retorna array = null`)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// console.log(`Retorna a contagem dentro array Ex: c. 11`)

// let i = 0
// console.log('d. ', array[i])
// console.log(`Mostra o indice 0 que é igual a 3`)

// array[i+1] = 19
// console.log('e. ', array)
// console.log(`(Executei) Ele incrementa o numero 19 na segunda posição`)

// const valor = array[i+6]
// console.log('f. ', valor)
// console.log(`Retorna a posição do indice 6 que e o 9`)

//2.Analise

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// console.log(`Retorna tudo em maiusculo trocando "A" por "I" Ex: SUBI NUM ÔNIBUS EM MIRROCOS`)

//Exercícios de escrita de código

//1.Exercício

// const nomeDoUsuario = prompt(`Qual seu nome?`)
// const emailDoUsuario = prompt(`Qual o seu e-mail:`)

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2.Exercício
// let i = 0
// let outraComida = prompt('Escreva sua comida preferida:')
// let comidasPreferidas= ["Feijoada", "Japa", "Parmegiana", "Strognoff", "Churrasco"]

// console.log(comidasPreferidas)
// console.log(`Essas são as minhas comidas preferidas: 
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}
// `)
// comidasPreferidas [i+1] = outraComida.toLocaleUpperCase()
// console.log(`Essas são as minhas comidas preferidas: 
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}
// `)

//3.Exercício

// let listaDeTarefas = []


// let tarefaUm = prompt("Escreva uma tarefa que realiza durante o dia ")
// let tarefaDois = prompt("Escreva outra tarefa que realiza durante o dia ")
// let tarefaTres = prompt("Escreva outra tarefa que realiza durante o dia ")

// let indice = prompt("Escolha a tarefa que menos gosta de fazer com 1, 2, 3 ")

// listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)

// console.log(listaDeTarefas)

// console.log("A tarefa retirada foi :",listaDeTarefas[indice-1])

// indice-=1

// listaDeTarefas.splice(indice,1)
// console.log(listaDeTarefas)

//Desafio

//1.Exercício

// let fraseRecebida = prompt('Digite uma frase:')
// let i = fraseRecebida.split(" ");
// console.log( i );

//2.Exercício
let fruteira = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let i = 0
const valor = fruteira[i+2]



console.log(valor,'-- Tamanho do indice:', valor.length)
console.log('Tamanho do Array:', fruteira.length)

