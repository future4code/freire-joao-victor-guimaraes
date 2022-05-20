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


console.log('Boas  vindas ao jogo Blackjack')

if (confirm("Gostaria de jogar uma rodada?")) {

   const cartaUsuario = comprarCarta()
   const cartaUsuarioDois = comprarCarta()
   const pontosUsuario = (cartaUsuario.valor + cartaUsuarioDois.valor)

   console.log(`Usuário - cartas: ${cartaUsuario.texto} , ${cartaUsuarioDois.texto} Pontuação: ${pontosUsuario} `)

   const cartaComputador = comprarCarta()
   const cartaComputadorDois = comprarCarta()
   const pontosComputador = (cartaComputador.valor + cartaComputadorDois.valor)

   console.log(`Usuário - cartas: ${cartaComputador.texto} , ${cartaComputadorDois.texto} Pontuação: ${pontosComputador} `)
   if (pontosUsuario === pontosComputador) {
      console.log("Empate")

   } else if (pontosUsuario > pontosComputador) {
      console.log("O usuário ganhou!")
   } else {
      console.log("O computador ganhou!")
   }
} else {
   console.log("O jogo acabou")
}



