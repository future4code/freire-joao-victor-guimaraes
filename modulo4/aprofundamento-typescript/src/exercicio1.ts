
console.log('Exercicio 1 ')

let minhaString:string 

console.log("A- O tipo 'number' não pode ser atribuído ao tipo 'string'.")

let meuNumber:number|string

console.log("B- Utilizamos UNION TYPE para atribuir outro calor a variavel.")



type Pessoa = {
    name:string
    age:number
    corFavorita:string
}

const br: Pessoa = {
    name:"Bruno",
    age:30,
    corFavorita:"roxo"
}

const murilo: Pessoa = {
    name:"murilo",
    age:24,
    corFavorita:"laranja"
}
enum Role{
    Preto="Verde",
    Verde="Preto"
}
const beterraba: Pessoa= {
    name:"ricardo",
    age:30,
    corFavorita:`${Role.Preto}`
}
console.log("C",murilo,br,beterraba  )

console.log("D",Role.Preto)

