const prompt = require('prompt-sync')()

console.log('PROMOÇÃO: 12 maçãs por R$0,25 cada')
const quant = Number(prompt('Quantas maçãs deseja comprar? '))

if(quant <= 0) {
  console.log('Digite um número válido')
} else if(quant < 12) {
  console.log(`TOTAL: R$${quant * (30 / 100)}`)
} else {
  console.log(`TOTAL: R$${quant * (25 / 100)}`)
}