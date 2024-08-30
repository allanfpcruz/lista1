let first = 1
let last = 1
let next = 0
console.log(1)
console.log(1)

for(let i = 0; i < 10; i++) {
  next = first + last
  console.log(next)
  last = first
  first = next
}