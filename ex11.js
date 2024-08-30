const prompt = require('prompt-sync')()
console.log('Digite 5 números')
// const num1 = Number(prompt('Número: '))
// const num2 = Number(prompt('Número: '))
// const num3 = Number(prompt('Número: '))
// const num4 = Number(prompt('Número: '))
// const num5 = Number(prompt('Número: '))

let acc = 0


for(let i = 0; i < 5; i++) {
  acc += Number(prompt('Número: '))
}

console.log(acc)