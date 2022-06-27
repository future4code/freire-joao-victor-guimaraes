// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = Number(prompt("Digite a altura do retangulo"))
  largura = Number(prompt("Digite a largura do retangulo"))

  const area = altura*largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui
  anoAtual = prompt("Digite o ano atual:")
  anoDeNascimento = prompt("Digite o ano de nascimento:")

  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso/(altura*altura)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome:")
  idade = prompt("Digite sua idade:")
  email = prompt("Digite seu e-mail:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("Digite seu nome:")
  cor2 = prompt("Digite sua idade:")
  cor3 = prompt("Digite seu e-mail:")
  
  let array= [cor1, cor2, cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const vendaIngressos = custo/valorIngresso
  return vendaIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 const testeString = string2.length === string1.length
  return testeString
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array
 return primeiroElemento[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  const ultimo = array[array.length -1]
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length-1]
  const primeiro = array[0]
  array[array.length-1] = primeiro;
  array[0] = ultimo
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 let testeString = string1.toLowerCase() === string2.toLowerCase()

  return testeString
}
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 let anoAtual = Number(prompt("Qual é ano atual:"))
 let anoDeNascimento = Number(prompt("Qual ano você nasceu:"))
 let anoDoRG = Number(prompt("Qual ano foi emitido o RG:"))
 let idade = anoAtual - anoDeNascimento
 let emissaoRg = anoAtual - anoDoRG

 let novo = idade <= 20 && emissaoRg >= 5
 let adulto = idade > 20 && idade <= 50 && emissaoRg >= 10
 let Acima50Anos = idade > 50 && emissaoRg >= 15

console.log( novo|| adulto || Acima50Anos )

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let eBissexto = ano % 400 === 0 
  let eBis = ano % 4 === 0 && ano % 100 !== 0 

 return eBissexto || eBis  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let maior = prompt("Você tem mais de 18 anos?")
  let eMCompleto = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  let validacao = maior === "sim" && eMCompleto === "sim" && disponibilidade === "sim"

  console.log(validacao)

}