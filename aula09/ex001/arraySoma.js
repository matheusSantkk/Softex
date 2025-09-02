let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum)

// usando o reduce
let reduceSum = numbers.reduce((soma, valor) => soma + valor, 0); 
console.log(reduceSum)