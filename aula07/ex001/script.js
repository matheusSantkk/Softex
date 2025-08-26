let notas = [
    {Disciplina: "Portugues", nota: 10},
    {Disciplina: "Matematica", nota: 10},
    {Disciplina: "Ingles", nota: 2},
    {Disciplina: "Historia", nota: 5},
    {Disciplina: "Fisica", nota: 8}
]

document.addEventListener('DOMContentLoaded', function() {
    let res = document.querySelector('div#res')
    let listaHTMl = '';
    notas.forEach(prova => {
        listaHTMl += `<li id="item-nota">${prova.Disciplina} - ${prova.nota}</li>`
    })
    res.innerHTML = `<ul id="lista-notas">${listaHTMl}</ul>`;
})

function gerarMedia() {
    let p = document.querySelector('p#media')
    const soma = notas.reduce((total, item) => total + item.nota, 0)
    const media = soma / notas.length
    if (media >= 7) {
        p.innerHTML = `A sua media foi: ${media.toFixed(1)}<br> Parabens vc passou!`;    
    } else {
        p.innerHTML = `A sua media foi: ${media.toFixed(1)} <br>VOCÊ ESTÁ REPROVADO!!!!!!!!!!`;
    }
    
}


