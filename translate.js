let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

const trimmed = str.trim()
const toUpperCase = trimmed.toUpperCase()

str2 = toUpperCase.split(' ')

for (i = 0; i < str2.length; i++) {
  console.log(`mot: ` + `${str2[i]}`)
}
