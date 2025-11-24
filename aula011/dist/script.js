"use strict";
const txtn1 = document.querySelector("#txtn1");
const txtn2 = document.querySelector("#txtn2");
const somabtt = document.querySelector("#somar");
const res = document.querySelector("#res");
const somar = (n1, n2) => n1 + n2;
somabtt === null || somabtt === void 0 ? void 0 : somabtt.addEventListener("click", () => {
    const n1 = parseFloat((txtn1 === null || txtn1 === void 0 ? void 0 : txtn1.value) || "0");
    const n2 = parseFloat((txtn2 === null || txtn2 === void 0 ? void 0 : txtn2.value) || "0");
    if (res) {
        res.innerHTML = `a soma é: ${somar(n1, n2)}`;
    }
});
//# sourceMappingURL=script.js.map