const somar = (a, b) => a+b;
const subtrair = (a,b) => a-b;
const multiplicar = (a,b) => a*b
const dividir = (a,b) => b !== 0 ? a/b : 'Erro: divisao por zero'; 

document.addEventListener("DOMContentLoaded", function() {
    const txtn1 = document.querySelector("input#txtn1");
    const txtn2 = document.querySelector("input#txtn2");
    const btsoma = document.querySelector("button#soma");
    const btsub = document.querySelector("button#sub");
    const btmulti = document.querySelector("button#multi");
    const btdiv = document.querySelector("button#div");
    const res = document.querySelector("p#res")

    function calcular(operacao) {
        let n1 = parseFloat(txtn1.value);
        let n2 = parseFloat(txtn2.value);

        if (isNaN(n1) || isNaN(n2)) {
            res.textContent = "ERRO. Insira números nos campos acima.";
            return;     
        }

        const resultado = operacao(n1,n2)
        res.innerHTML = `${resultado}`
    }

    btsoma.addEventListener("click", () => calcular(somar))
    btsub.addEventListener("click", () => calcular(subtrair))
    btmulti.addEventListener("click", () => calcular(multiplicar))
    btdiv.addEventListener("click", () => calcular(dividir))
})