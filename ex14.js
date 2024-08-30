const prompt = require('prompt-sync')()

const num = Number(prompt('Digite um número: '))

let acc = 1
let count = 1

while(count <= num) {
  acc = acc * count
  count++
}

console.log(`Fatorial de ${num} = ${acc}`)