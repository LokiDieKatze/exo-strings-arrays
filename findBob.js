const text =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

const trimmed = text.trim()
const textBis = trimmed.toUpperCase()

console.log(textBis)

const splitString = textBis.split(" ")
for (i = 0; i < splitString.length; i++) {
  if (splitString[i] === 'BOB') {
    console.log('Bob is here')
  }
}
