// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let tamanho = array.length
    return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
    // for (var i = array.length - 1; 1 >= 0; i--) {
    //     let inversao = []
    //     inversao.push(array[i])
    // }
    // return array(inversao)
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenar = (a, b) => {
        return a - b
    }
    return array.sort(ordenar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = array.filter((numPares) => {
        return numPares % 2 === 0
    })
    return par
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < ladoB < ladoC) {
        return "Escaleno"
    } else if (ladoA < ladoB >= ladoC) {
        return "Isósceles"
    } else if (ladoA === ladoB === ladoC) {
        return "Equilátero"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}