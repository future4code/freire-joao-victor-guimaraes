```function calculaNota(ex, p1, p2) {
    // Escreva seu código aqu
    const pesoUm = 1
    const pesoDois = 2
    const pesoTres = 3
    let soma = (pesoTres * p2) + (pesoDois * p1) + (pesoUm * ex)
    const somaPeso = pesoUm + pesoDois + pesoTres
    mediaPonderada = soma / somaPeso

    if (mediaPonderada < 6) {
        return "D"
    } else if (mediaPonderada < 7.5) {
        return "C"
    } else if (mediaPonderada < 9) {
        return "B"
    } else {
        return "A"
    }
}```