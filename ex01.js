const prompt = require('prompt-sync')()

const number = Number(prompt('Digite um número inteiro: '))

if(number === 0) {
  console.log('O número digitado é NEUTRO')
} else if (number % 2 === 0) {
  console.log('O número digitado é PAR')
} else {
  console.log('O número digitado é ÍMPAR')
}