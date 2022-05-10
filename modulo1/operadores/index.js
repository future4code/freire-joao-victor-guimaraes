
//Exercícios de interpretação de código
//1.Analise
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

//Retorna FALSE
let resultado = bool1 && bool2
console.log("a. ", resultado)

//Retorna FALSE
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

//Retorna TRUE
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

//Retorna o tipo Booleano, pois anteriormente recebeu  TRUE && FALSE  
console.log("d. ", typeof resultado)
*/
/*
//2.Analise
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
// Ele está concatenando ao inves de somar pois o valor colocado e foi em strin necessario conversão
const soma = primeiroNumero + segundoNumero

console.log(soma)
*/
/*
//3.Analise
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/




//Exercícios de escrita de código

//1.Execicio
/*
let suaIdade = Number(prompt("Digite sua idade:"));
let idadeAmigo  = Number(prompt("Digite a idade do seu amigo:"));

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeAmigo,"-- Diferença de idade",suaIdade-idadeAmigo, "anos")

console.log(typeof suaIdade)
console.log(typeof idadeAmigo)
*/


//2.Execicio
/*
let numeroPar = prompt("Digite um número PAR")

let restoDivisao = Number(numeroPar%2);
//Resultados pares sempre foram "0"
//Resultado impares sempre foram "1"
console.log("O resto da divisão", divisao)
*/

//3.Execicio
/*
const idadeUsuario = Number(prompt("Escreva sua idade:"));

const meses = 12;
const dias = 365;
const horas = 8766;

console.log("A idade do usuário em anos",idadeUsuario);
console.log("A idade do usuário em meses",idadeUsuario * meses);
console.log("A idade do usuário em dias",idadeUsuario * dias);
console.log("A idade do usuário em horas", idadeUsuario * horas );
*/

//4.Execicio
/*
const primeiroNumero = Number(prompt("Digite o primeiro número:"));
const segundoNumero = Number(prompt("Digite segundo número:"));

const divisivelPrimeiro = primeiroNumero%segundoNumero

const divisivelSegundo = segundoNumero%primeiroNumero

console.log("O primeiro número é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero )
console.log("O primeiro número é divisível pelo segundo?", divisivelPrimeiro === 0 )
console.log("O segundo número é divisível pelo primeiro?",divisivelSegundo === 0)

*/

//Desafio