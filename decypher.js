let code = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'

// HAVE YOU EVER HAD A DREAM NEO THAT YOU WERE SO SURE WAS REAL WHAT IF YOU WERE UNABLE TO WAKE FROM THAT DREAM HOW WOULD YOU KNOW THE DIFFERENCE BETWEEN THE DREAM WORLD AND THE REAL WORLD
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// let i = 0

// console.log((letters.indexOf(code[i]) + 9) % 26)

// utiliser index ci-dessus pour récuperer la lettre correspondante dans la string letters
// console.log(letters[(letters.indexOf(code[i]) + 9) % 26])


/*for (i = 0; i < code.length; i++) {
  sentence = code.replace(code[i], letters[(letters.indexOf(code[i]) + 9) % 26])
}

console.log(sentence)*/


/*for (i = 0; i < code.length; i++) {
  code.replace(`${code[i]}`, `${letters[(letters.indexOf(code[i]) + 9) % 26]}`)
}

console.log(code)*/

for (i = 0; i < code.length; i++) {
  code[i] = letters[(letters.indexOf(code[i]) + 9) % 26]
}

console.log(code)