const txtn1 = document.querySelector<HTMLInputElement>("#txtn1");
const txtn2 = document.querySelector<HTMLInputElement>("#txtn2");
const somabtt = document.querySelector<HTMLButtonElement>("#somar");
const res = document.querySelector<HTMLDivElement>("#res");

const somar = (n1: number, n2: number) => n1 + n2;

somabtt?.addEventListener("click", () => {
  const n1 = parseFloat(txtn1?.value || "0");
  const n2 = parseFloat(txtn2?.value || "0");

  if (res) {
    res.innerHTML = `a soma é: ${somar(n1, n2)}`;
  }
});
