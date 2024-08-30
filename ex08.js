const prompt = require('prompt-sync')()

const num1 = Number(prompt('Primmeiro n°: '))
const num2 = Number(prompt('Segundo n°: '))

if(num1 === num2) {
  console.log('Os número não podem ser iguais')
} else {
  if(num1 < num2) {
    console.log(num1, num2)
  } else {
    console.log(num2, num1)
  }
}