const prompt = require('prompt-sync')()

const grade = Number(prompt('Digite sua nota: '))

if (grade < 0 || grade > 10) {
  console.log('Nota inválida')
} else if (grade < 4) {
  console.log('REPROVADO')
} else if (grade < 6) {
  console.log('RECUPERAÇÃO')
} else {
  console.log('APROVADO')
}