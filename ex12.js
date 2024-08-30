const prompt = require('prompt-sync')()
const num = Number(prompt('Digite um número: '))

for(let i = 0; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`)
}