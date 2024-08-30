const prompt = require('prompt-sync')()

const age = Number(prompt('Digite sua idade: '))

if (age < 0) {
  console.log('Idade inválida')
} else if (age <= 12) {
  console.log('Você é uma crinça')
} else if (age <= 18) {
  console.log('Você é um adolescente')
} else if (age <= 59) {
  console.log('Você é um adulto')
} else {
  console.log('Você é um idoso')
}