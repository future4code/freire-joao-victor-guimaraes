/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



// console.log('Boas  vindas ao jogo Blackjack')
// console.log("\n")

// if (confirm("Gostaria de jogar uma rodada?")) {

//    const primeiraCartaUsuario = comprarCarta()
//    const segundaCartaUsuario = comprarCarta()
//    const terceiraCartaUsuario = comprarCarta()
//    const quartaCartaUsuario = comprarCarta()

//    const primeiraCartaComputador = comprarCarta()
//    const segundaCartaComputador = comprarCarta()
//    const terceiraCartaComputador = comprarCarta()
//    const quartaCartaComputador = comprarCarta()

//    if (primeiraCartaUsuario === "A" && segundaCartaUsuario === "A") {
//       primeiraCartaUsuario = comprarCarta()
//       cartaUsuarioDois = comprarCarta()
//    }
//    if ( primeiraCartaComputador === "A" && cartComputadorDois === "A") {
//       cartaComputador = comprarCarta()
//       cartaComputadorDois = comprarCarta()
//    }

//    let pontosUsuario = (primeiraCartaUsuario.valor + segundaCartaUsuario.valor)
//    let pontosComputador = ( primeiraCartaComputador.valor + segundaCartaComputador.valor)

//    if (confirm(`Suas cartas são ${primeiraCartaUsuario.texto} e ${segundaCartaUsuario.texto}. A carta revelada do compudador é Carta ${ primeiraCartaComputador.texto} Deseja comprar mais uma carta`)) {
//       pontosUsuario = (primeiraCartaUsuario.valor + segundaCartaUsuario.valor + terceiraCartaUsuario.valor)
//       cartas = primeiraCartaUsuario.texto, segundaCartaUsuario.texto,terceiraCartaUsuario.texto, quartaCartaUsuario.texto
//    } 
//    if (confirm(`Suas cartas são ${primeiraCartaUsuario.texto}, ${segundaCartaUsuario.texto} e ${terceiraCartaUsuario.texto}. A carta revelada do compudador é Carta ${primeiraCartaComputador.texto} Deseja comprar mais uma carta`)) {
//       pontosUsuario = (primeiraCartaUsuario.valor + segundaCartaUsuario.valor + terceiraCartaUsuario.valor + quartaCartaUsuario.valor)
//    }








//    console.log('Usuário - cartas:', cartas ,' Pontuação:', pontosUsuario)
//    console.log('Computador - cartas:', primeiraCartaComputador.texto, segundaCartaComputador.texto,terceiraCartaComputador.texto, quartaCartaComputador.texto,' Pontuação:', pontosUsuario)


//    if (pontosUsuario === pontosComputador) {
//       console.log("Empate")

//    } else if (pontosUsuario > pontosComputador) {
//       console.log("O usuário ganhou!")
//    } else {
//       console.log("O computador ganhou!")
//    }
// } else {
//    console.log("O jogo acabou")
// }