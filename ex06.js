const prompt = require('prompt-sync')()

console.log('FORME UM TRIÂNGULO!')
console.log('--------------------')
console.log('Informe três medidas e veja se elas formam um triângulo')

const side1 = Number(prompt('Primeira medida: '))
const side2 = Number(prompt('Segunda medida: '))
const side3 = Number(prompt('Terceira medida: '))

if (! ((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2))) {
  console.log('Não foi possíevl formar um triângulo!')
} else {
  if (side1 === side2 && side2 === side3) {
    console.log('TRIÂNGULO EQUILÁTERO')
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log('TRIÂNGULO ISÓSCELES')
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
    console.log('TRIÂNGULO ESCALENO')
  }
}