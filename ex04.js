const prompt = require('prompt-sync')()

console.log('Escolha um sabor de sorvete: ')

console.log('-------------------------')

console.log('CHOCOLATE (digite 1)')
console.log('MORANGO (digite 2)')
console.log('BAUNILHA (digite 3)')

console.log('-------------------------')

const option = Number(prompt('Digite sua opção: '))
let flavow 

switch (option) {
  case 1:
    flavow = 'Chocolate'
    break
  case 2:
    flavow = 'Morango'
    break
  case 3: 
    flavow = 'Baunilha'
    break
  default:
    console.log('Digite um número válido')
    break
}

if (flavow.length > 0) {
  console.log(`Sorvete de: ${flavow.toUpperCase()}`)
}