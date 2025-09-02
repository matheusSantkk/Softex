let numbers = []
let par = []
let impar = []

while (numbers.length < 10) {
    let random = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(random)) {
        numbers.push(random)
    }
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        par.push(numbers[i])
    } else {
        impar.push(numbers[i])
    }
}

console.log("Numeros: ")
console.table(numbers.sort((a, b) => a-b))
console.log("Numeros pares: ")
console.table(par.sort((a, b) => a-b))
console.log("Numeros impares: ")
console.table(impar.sort((a, b) => a-b))