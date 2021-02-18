let code = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


for (base = 0; base < 26; base++) {
  let sentence = ' '
  for (i = 0; i < code.length; i++) {
    if (code[i] !== ' ') {
      sentence += letters[(letters.indexOf(code[i]) + base) % 26]
    }
    else {
      sentence += ' '
    }
  }
  console.log(`Si le décalage est ${base} alors le message est: \n  ${sentence}`)
}