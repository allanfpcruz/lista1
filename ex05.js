const prompt = require('prompt-sync')()

const weight = Number(prompt('Digite seu peso'))

if(weight < 0) {
  console.log('Digite um peso válido')
} else if (weight <= 50) {
  console.log('ABAIXO DO PESO')
} else if (weight <= 70) {
  console.log('PESO NORMAL')
} else if (weight <= 100) {
  console.log('SOBREPESO')
} else {
  console.log('OBESIDADE MÓRBIDA')
}