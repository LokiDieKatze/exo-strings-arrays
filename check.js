const text = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript '
const splitString = text.split(" ")
let count = 0

for (i = 0; i < splitString.length; i++) {
  if (splitString[i] === 'Javascript') {
    count++
  }
}
console.log(` Il y a ${count} fois le mot Javascript dans cette phrase`)