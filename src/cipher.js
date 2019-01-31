// window.cipher = {
//   //Función para encriptar
//   function encode(x, n) {
//     let formulaEncode = (x - 65 + n) % 26 + 65
//     return formulaEncode
//   };
//
//
//   //Función para descifrar
//   function decode(x, n) {
//     let formulaDecode = (x + 65 - n) % 26 + 65
//     return formulaDecode
//   };
//
// };


const str = 'hola k ase'
const n = 5

function passStrToEncoded (str, n) {
  const strUpper = str.toUpperCase()
  const splited = strUpper.split(' ') // ['hola', 'k', 'ase']
  const result = []

  for (let i = 0; i < splited.length; i++) {
    let word = splited[i]

    for (let j = 0; j < word.length; j++) {
      let singleChart = word[j]
      let chartAscl = singleChart.charCodeAt(0)
      let encoded = encode(chartAscl, n)
      let encodedToChar = String.fromCharCode(encoded)
      result.push(encodedToChar)
    }

    result.push(' ')
  }

  return result.join('')
}

function encode(x, n) {
  const formulaEncode = (x - 65 + n) % 26 + 65
  return formulaEncode
};

const coded = passStrToEncoded(str, n)

coded
