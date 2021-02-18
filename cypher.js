let code = 'HAVE YOU EVER HAD A DREAM NEO THAT YOU WERE SO SURE WAS REAL WHAT IF YOU WERE UNABLE TO WAKE FROM THAT DREAM HOW WOULD YOU KNOW THE DIFFERENCE BETWEEN THE DREAM WORLD AND THE REAL WORLD'
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let base = 8
let sentence = ' '

for (i = 0; i < code.length; i++) {
  if (code[i] !== ' ') {
    sentence += letters[(letters.indexOf(code[i]) + base) % 26]
  }
  else {
    sentence += ' '
  }
}
console.log(sentence)