
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
// 1.Exercicio
/*

let Kelvin = 0
let Fahrenheit = 77
let Celsius = 80
let CparaK = 0
let CparaF = 0


//Graus Fahrenheit(°F) para Kelvin(K)
Kelvin = (Fahrenheit-32)*(5/9) + 273.15
console.log("A.",Kelvin)

//Graus Celsius(°C) para Graus Fahrenheit (°F)
Fahrenheit = (Celsius)*(9/5) + 32
console.log("B.", Fahrenheit)

Celsius = Number(prompt("Digite segundo número:"));

CparaF = Celsius * (1.8) + (32)
CparaK = Celsius + 273

console.log("B. ",CparaF,"F ", CparaK,"K") 
*/


// 2.Exercicio

/*
let quilowatt = 280
const desconto = 0.85
const custoEnergia = 0.05

let valor = quilowatt*custoEnergia;
console.log("O valor da sua energia foi de:", "R$",valor)

let valorComDesconto = (valor*desconto);
console.log("O valor com desconto da sua energia foi de:","R$",valorComDesconto,"o desconto foi de R$",valor-valorComDesconto);
*/

// 3.Exercicio

const lb = 20
let oncas = 10.5
let Kg  
const mi = 100
const ft = 50
let Metros
let gal = 103.56
const xic = 450 
const Litros = 6

console.log("Valor convertido de lb(libra) para Kg", lb/2.2046 )
console.log("Valor convertido de Oz(onças) para Kg", oncas*0.028349 )
console.log("Valor convertido de mi(milhas) para M", mi*1609)
console.log("Valor convertido de ft(pes) para M", 50*0.3048)
console.log("Valor convertido de Gal(galões) para L", gal*3.78)

console.log("Valor convertido de Xic(xicara) para L", xic/6)

let xicaras = Number(prompt("Digite o valor para converter de xicaras para litros"))
console.log("O valor de xícaras foi convertido em:",xicaras/Litros,"Lts")
