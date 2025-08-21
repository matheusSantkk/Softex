const bt = document.querySelector("button#bt");
const limpar = document.querySelector("button#clear")
const res = document.querySelector("div#res");
let txtn1 = document.querySelector("input#txtn1");

bt.addEventListener('click', function() {
    let n = parseInt(txtn1.value)
    res.innerHTML = "";

    if (isNaN(n)) {
        res.innerHTML = `digite algo no campo number`;
        return
    }

    for (let i = 1; i <= 10; i++) {
        res.innerHTML += `${n} x ${i} = ${n*i}<br>`
    }
});

limpar.addEventListener('click', function() {
    res.innerHTML = `Campo Limpo!`
})
