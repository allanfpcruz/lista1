const prompt = require('prompt-sync')()
console.log('Digite números, para parar, digite 0 (zero)')

let num = 0
let soma = 0
let count = 0

do {
  num = Number(prompt('Digite um número: '))
  soma += num
  count++
} while (num !== 0)

console.log(`MÉDIA: ${soma / (count - 1)}`)

