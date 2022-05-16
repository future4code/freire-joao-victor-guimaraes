
//Exercícios de interpretação de código

//1. interpretação de código

// const filme = {
//     nome: "Auto da Compadecida",
//     ano: 2000,
//     elenco: [
//         "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
//         "Virginia Cavendish"
//     ],
//     transmissoesHoje: [
//         { canal: "Telecine", horario: "21h" },
//         { canal: "Canal Brasil", horario: "19h" },
//         { canal: "Globo", horario: "14h" }
//     ]
// }

//a) O que vai ser impresso no console?

// console.log(filme.elenco[0])  --- Será impresso o indice "0" do Array = "Matheus Nachtergaele"
// console.log(filme.elenco[filme.elenco.length - 1])  ---  Será impresso o ultimo indice "3" do Array = "Virginia Cavendish"
// console.log(filme.transmissoesHoje[2])  ---  Será impresso =  {canal: "Globo", horario: "14h"}

//2.interpretação de código

// const cachorro = {
//     nome: "Juca",
//     idade: 3,
//     raca: "SRD"
// }

// const gato = { ...cachorro, nome: "Juba" }

// const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

// a) O que vai ser impresso no console?

// console.log(cachorro)  ---  Será impresso o objeto  cachorro, nome: "Juca",	idade: 3, raca: "SRD"
// console.log(gato)  --- Será impresso o objeto alterado gato, nome: "Juba",	idade: 3, raca: "SRD"
// console.log(tartaruga)  --- Será impresso o objeto alterado tartaruga, nome: "Jubo",	idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//  --- E a função de Spread ou Espelhamento, copia informacoes do objeto

//3.interpretação de código

// function minhaFuncao(objeto, propriedade) {
//     return objeto[propriedade]
// }

// const pessoa = {
//     nome: "Caio",
//     idade: 23,
//     backender: false
// }

//a) O que vai ser impresso no console?

// console.log(minhaFuncao(pessoa, "backender"))  --- Será impresso a propriedade em booleano: false
// console.log(minhaFuncao(pessoa, "altura")) --- Será impresso, pois não foi adicionado: undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//  --- isso ocorreu por nao existir altura no objeto



//Exercícios de escrita de código


// 1. Escrita de código

//-------------------A
// const podeMeChamar = {
//     nome: "João Victor", apelidos: ["Jao", "John John", "Johnny"]
// }
// pessoa = (objeto) => {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]} `)
// }
// pessoa(podeMeChamar)

//-------------------B
// const outrosApelidos = {
//     ...podeMeChamar,
//     apelidos: ["Joe", "GGG", "Jojo"]
// }
// pessoa(outrosApelidos)


// 2. Escrita de código

//-------------------A
// const pessoaUm = { nome: "João Victor", idade: 24, profissao: "Desenvolvedor FullStack" }
// const pessoaDois = { nome: "Joice", idade: 23, profissao: "Fisioterapeuta" }

//-------------------B
// funcaoObjetos = (lista) => {
//     let array = [lista.nome, lista.nome.length, lista.idade, lista.profissao, lista.profissao.length]
//     console.log(array)
// }

// funcaoObjetos(pessoaUm)
// funcaoObjetos(pessoaDois)




// 3. Escrita de código

//-------------------A
// let carrinho = []

//-------------------B
// const frutaUm = { nome: "Laranja", disponibilidade: true }
// const frutaDois = { nome: "Banana", disponibilidade: true }
// const frutaTres = { nome: "Pera", disponibilidade: true }

//-------------------C
// function carrinhoComCompras(frutas) {
//     return carrinho.push(frutas)
// }

// carrinhoComCompras(frutaUm)
// carrinhoComCompras(frutaDois)
// carrinhoComCompras(frutaTres)
//-------------------D
// console.log(carrinho)


//-------------------DESAFIO

//----- 1. Desafio

// sobreUsuario = () => {
//     const nome = prompt("Qual seu nome?")
//     const idade = Number(prompt("Qual a sua idade?"))
//     const profissao = prompt("Qual a sua profissão?")


//     const anexoUsuario = {

//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }

//     console.log(anexoUsuario)
//     console.log(typeof (anexoUsuario))
// }
// sobreUsuario()