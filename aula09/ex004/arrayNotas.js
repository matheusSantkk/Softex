let boletim = [
    [10, 6, 5],
    [1, 10, 10],
    [3, 10, 10]
];

let medias = boletim.map(linha => {
    let soma = linha.reduce((total, numero) => total+numero, 0)
    return (soma/linha.length).toFixed(1)
})

for (let i = 0;i < medias.length; i++) {
    if (medias[i] >= 7) {
        console.log(`Media: ${medias[i]} - APROVADO`)
    } else {
        console.log(`Media: ${medias[i]} - REPROVADO`)
    }
}