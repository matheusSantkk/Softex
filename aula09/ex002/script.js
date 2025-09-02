const txtn1 = document.querySelector("input#txtn1");
const txtn2 = document.querySelector("input#txtn2");
const txtn3 = document.querySelector("input#txtn3");
const txtn4 = document.querySelector("input#txtn4");
const txtn5 = document.querySelector("input#txtn5");
const bt = document.querySelector("button#bt")
const res = document.querySelector("p#res")

bt.addEventListener('click', () => {
    let n1 = parseFloat(txtn1.value);
    let n2 = parseFloat(txtn2.value);
    let n3 = parseFloat(txtn3.value);
    let n4 = parseFloat(txtn4.value);
    let n5 = parseFloat(txtn5.value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        res.textContent = "DIGITE UM NUMEROOOO";
        return;
    }

    let numbers = []

    numbers.push(n1, n2, n3, n4, n5)
    let sum = numbers.reduce((soma, valor) => soma + valor, 0)

    res.innerHTML = `A soma entre os números é ${sum}`
})
