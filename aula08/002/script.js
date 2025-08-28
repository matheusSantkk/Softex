const bt = document.querySelector("button#bt");
const clickZone = document.querySelector("div#cliques")
const txtn1 = document.querySelector("input#txtn1")


bt.addEventListener('click', function() {
    let n1 = parseFloat(txtn1.value)
    clickZone.innerHTML = `O dobro de ${n1} é igual a ${n1*2}`

    if (isNaN(n1)) {   
    clickZone.innerHTML = `USUARIO DIGITE UM NUMERO!!!!!!`
    }   
})
