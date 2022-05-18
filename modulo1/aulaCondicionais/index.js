

// ---------- Exercícios de interpretação de código

// ---------- 1. interpretação de código


// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }

// a) Explique o que o código faz.Qual o teste que ele realiza ?
//     --- A estrutura calcula o resto, se for igual a 0 ela devera imprimir  "Passou no teste."
// b) Para que tipos de números ele imprime no console "Passou no teste" ?
//    --- Devera imprimir apenas para numeros pares
// c) Para que tipos de números a mensagem é "Não passou no teste" ?
//     --- Para números impares

// ---------- 2. interpretação de código

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM c.
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima ?
//    --- Escolhe a fruta e ele te retorna a fruta e o preço
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"` ?
//    --- "O preço da fruta ", Maçã, " é ", "R$ ", 2.25s
// c) Considere que um usuário queira comprar uma`Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default`(o`break` indicado pelo comentário "BREAK PARA O ITEM c.") ?
//    --- A Pêra fica valendo o valor do default ela atualiza até o proximo break

// ---------- 3. interpretação de código

// const numero = Number(prompt("Digite o primeiro número."))

// if (numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo ?
//     --- Está perguntando ao usuario um numero para atribuir a variavel
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal ? E se fosse o número - 10 ?
//     --- "Esse número passou no teste", se fosse - 10 ele não retornaria nada
// c) Haverá algum erro no console ? Justifique usando os conceitos de bloco ou escopo.
//     --- Sim, pois o console, esta atribuido a uma variavel dentro do if, o ideal seria do if .


// ---------- Exercícios de escrita de código

// ---------- 1. escrita de código
// ---------- A
// const idade = Number(prompt("Qual a sua idade?"))
// ---------- B
// console.log(typeof idade)
// ---------- C
// if (idade >= 18) {
// console.log("Você pode dirigir")
// } else {
// console.log("Você não pode dirigir")
// }

// ---------- 2. escrita de código

// const turno = prompt("Digite seu turno? M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// if (turno === "M") {
//     console.log("Bom Dia!")
// } else if (turno === "V") {
//     console.log("Boa Tarde!")
// } else if (turno === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log(`Essa entrada ${turno} não é válida digite, M (matutino) ou V (Vespertino) ou N (Noturno)`)

// }

// ---------- 3. escrita de código

// const turno = prompt("Digite seu turno? M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
// switch (turno) {
//     case "M":
//         console.log("Bom Dia!")
//         break;
//     case "V":
//         console.log("Boa Tarde!")
//         break;
//     case "N":
//         console.log("Boa Noite!")
//         break;
//     default:
//         console.log(`Essa entrada ${turno} não é válida digite, M (matutino) ou V (Vespertino) ou N (Noturno)`)
//         break;
// }

// ---------- 4. escrita de código

// const generoFilme = prompt("Qual o genero do filme que vão assistir??").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do Ingresso?"))

// if (generoFilme === "fantasia" && valorIngresso === 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// 🏅  Desafios

// ---------- 1. Desafio

// const generoFilme = prompt("Qual o genero do filme que vão assistir?").toLowerCase()
// const valorIngresso = Number(prompt("Qual o valor do Ingresso?"))
// const lanchinho = prompt("Qual o lanche gostaria para para acompanhar?").toLowerCase()

// if (generoFilme === "fantasia" && valorIngresso === 15) {
//     console.log(`Bom filme! Aproveite seu ${lanchinho}`)
//     console.log(`Aproveite seu ${lanchinho}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// ---------- 2. Desafio
// const nomeCompleto = prompt("Digite seu nome completo")
// const tipoDeJogo = prompt("Digite o tipo de jogo: Exemplo: IN indica internacional; e DO indica doméstico;").toUpperCase()
// const etapaDoJogo = prompt("Digite a Etapa do jogo:  Exemplo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
// const categoria = Number(prompt("Digite a categoria do ingresso: As opções são:  1, 2, 3 ou 4."))
// const quantidadeIngresso = prompt("Qual a quantidade de ingressos desejados?")
// let preco

// if (tipoDeJogo === "DO") {

//     if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1) {
//         preco = 1320.00
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2) {
//         joapreco = 880.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'SF' && categoria === 3) {
//         preco = 550.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'SF' && categoria === 4) {
//         preco = 220.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'DT' && categoria === 1) {
//         preco = 660.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'DT' && categoria === 2) {
//         preco = 440.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'DT' && categoria === 3) {
//         preco = 330.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'DT' && categoria === 4) {
//         preco = 170.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'FI' && categoria === 1) {
//         preco = 1980.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'FI' && categoria === 2) {
//         preco = 1320.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'FI' && categoria === 3) {
//         preco = 880.0
//     } else if (tipoDeJogo === "DO" && etapaDoJogo === 'FI' && categoria === 4) {
//         preco = 330.0
//     } else {

//     }
//     function maisQueUm(quantidadeIngresso) {
//         if (quantidadeIngresso > 1) {
//             return "ingressos"
//         } else {
//             return "ingresso"
//         }
//     }
//     console.log(`-- Dados da compra --
// Nome do Cliente: ${nomeCompleto}
// Tipo do jogo: ${tipoDeJogo}
// Etapa do jogo: ${etapaDoJogo}
// Categoria: ${categoria} 
// Quantidade de ingressos: ${quantidadeIngresso} ${maisQueUm(quantidadeIngresso)}
// -- Valores --
// Valor do ingresso R$ ${preco}
// Valor total: R$ ${preco * quantidadeIngresso}`)


// } else if (tipoDeJogo === "IN") {

//     if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1) {
//         preco = (1320.00 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2) {
//         preco = (880.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'SF' && categoria === 3) {
//         preco = (550.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'SF' && categoria === 4) {
//         preco = (220.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'DT' && categoria === 1) {
//         preco = (660.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'DT' && categoria === 2) {
//         preco = (440.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'DT' && categoria === 3) {
//         preco = (330.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'DT' && categoria === 4) {
//         preco = (170.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'FI' && categoria === 1) {
//         preco = (1980.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'FI' && categoria === 2) {
//         preco = (1320.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'FI' && categoria === 3) {
//         preco = (880.0 * 4.1)
//     } else if (tipoDeJogo === "IN" && etapaDoJogo === 'FI' && categoria === 4) {
//         preco = (330.0 * 4.1)
//     } else {
//     }

//     function maisQueUm(quantidadeIngresso) {
//         if (quantidadeIngresso > 1) {
//             return "ingressos"
//         } else {
//             return "ingresso"
//         }
//     }

//     console.log(`-- Dados da compra --
// Nome do Cliente: ${nomeCompleto}
// Tipo do jogo: ${tipoDeJogo}
// Etapa do jogo: ${etapaDoJogo}
// Categoria: ${categoria} 
// Quantidade de ingressos: ${quantidadeIngresso} ${maisQueUm(quantidadeIngresso)}
// -- Valores --
// Valor do ingresso U$ ${preco}
// Valor total: U$ ${preco * quantidadeIngresso}`)
// } else {
//     console.log("tente novamento")
// }
