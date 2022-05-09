/*

// Analise 1
let a = 10 
let b = 10 
console.log(b)
b = 5
//Será impresso a =10, b =5
console.log(a,b)


// Analise 2
let x = 10 
let y = 10 
 z = x
 y = z 
 x = y
// Será impresso 10, 10, 10
 console.log(x, y, z)

  
// Analise 3

 // Alterada variavel "p" por "horaTrabalhada, utilizando camelCase
 // Alterada variavel "t" por "diaria"

 let horaTrabalhada = prompt("Quantas horas horas você trabalha por dia?")
 let diaria = prompt("Quanto você recebe por dia?")

 alert('Você recebe ${diaria/horaTrabalhada} por hora')

 // console.log ("Voce recebe", diaria/horaTrabalhada, "por hora.")

 // Ele deve imprimir quanto receber por hora 
 
 */


//Exercício 1


 let nome 
 let idade 

 console.log(typeof nome)
 console.log(typeof idade)
 Ambos deram "Undefined"
 
 

//Exercício 2


 let nome = prompt("Qual é seu nome?") 
 let idade = prompt("Qual a sua idade?")

 console.log(typeof nome)
 console.log(typeof idade)
// Observado que ambos vieram como "String"

 console.log("Olá,",nome,"você tem", idade, "anos." )



//Exercício 2


let roupa = prompt("Você está usando verde?") 
let comida = prompt("Você gosta de feijão?")
let viagem = prompt("Você gosta de viajar?")


console.log("Você está usando verde?  -", roupa)
console.log("Você gosta de feijão?  -", comida)
console.log("Você gosta de viajar?  -" , viagem )



//Exercício 3

let a = 10 
let b = 25
c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)



//Desafio

let primeiroNumero  = prompt("Digite um número:")
let segundoNumero = prompt("Digite outro número:")

//Convertendo de String para Number
const nTesteUm = Number(primeiroNumero)
const nTesteDois = Number(segundoNumero)

//Impressão dos resultados
console.log(" O primeiro número somado ao segundo número resulta em:",nTesteUm+nTesteDois)
console.log(" O primeiro número multiplicado pelo segundo número resulta em:", nTesteUm*nTesteDois)



