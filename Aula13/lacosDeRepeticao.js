/** Código da aula 13 */

var theFlash = {
    nome: "The Flash",
    ano: "2019",
    classificacao: 12,
    temporadas: 6,
    genero: "HQ"
}

var designatedSurvivor = {
    nome: "Designated Survivor",
    ano: "2019",
    classificacao: 16,
    temporadas: 3,
    genero: "Policial",
}

var lupin = {
    nome: "Lupin",
    ano: "2021",
    classificacao: 16,
    temporadas: 2,
    genero: "Mistério",
}

var expressoDoAmanha = {
    nome: "Expresso do Amanhã",
    ano: "2021",
    classificacao: 18,
    temporadas: 2,
    genero: "Policial",
}

var assistirNovamente = [theFlash, designatedSurvivor, lupin, expressoDoAmanha]

assistirNovamente.forEach(serie => {
    if (serie.classificacao > 16) {
        console.log(`A série: ${serie.nome} está bloqueada`)
    } else {
        console.log(`A série: ${serie.nome} está liberada`)
    }
})
