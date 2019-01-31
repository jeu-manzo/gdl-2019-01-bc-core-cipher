 window.cipher = {
   encode: function passStrToEncoded (str, n) {
     const str = 'Hola como estas'
     const n = 5
     const strUpper = str.toUpperCase(); // Convertir cadena de texto en Mayúsculas
     const splited = strUpper.split(' '); // ['hola', 'como', 'estas']
     const result = []; // Variable que guardará un array que contendrá cada palabra ya codificada y convertida en letra humana


     //Bucle que pasara por cada índice del array splited (cada palabra)
     for (let i = 0; i < splited.length; i++) {
       let word = splited[i];
       //Bucle que pasara por cada índice de cada cadena de el índice anterior (cada letra de cada palabra)
       for (let j = 0; j < word.length; j++) {
         let singleChart = word[j]; //Variable para arrojar cada letra
         let chartAscii = singleChart.charCodeAt(0); //Convertir cada letra en Ascii
         let encoded = (chartAscii - 65 + n) % 26 + 65; //Encriptar cada #Ascii con la fórmula
         let encodedToChar = String.fromCharCode(encoded); //Convertir cada #Ascii Encriptado a letra
         result.push(encodedToChar); //Ingresar al array result cada palabra ya codificada y convertida a letra
       }

       result.push(' '); //Agregar un espacio entre cada palabra del array result
     }

     return result.join(''); //Unir cada índice del array (cada palabra) con un espacio
   },

   decode: function passStrToDecoded(str, n) {
     const str = 'Hola como estas'
     const n = 5
     const strUpper = str.toUpperCase(); // Convertir cadena de texto en Mayúsculas
     const splited = strUpper.split(' '); // ['hola', 'como', 'estas']
     const result = []; // Variable que guardará un array que contendrá cada palabra ya codificada y convertida en letra humana


     //Bucle que pasara por cada índice del array splited (cada palabra)
     for (let i = 0; i < splited.length; i++) {
       let word = splited[i];
       //Bucle que pasara por cada índice de cada cadena de el índice anterior (cada letra de cada palabra)
       for (let j = 0; j < word.length; j++) {
         let singleChart = word[j]; //Variable para arrojar cada letra
         let chartAscii = singleChart.charCodeAt(0); //Convertir cada letra en Ascii
         let encoded = (chartAscii + 65 - n) % 26 + 65; //Encriptar cada #Ascii con la fórmula
         let encodedToChar = String.fromCharCode(encoded); //Convertir cada #Ascii Encriptado a letra
         result.push(encodedToChar); //Ingresar al array result cada palabra ya codificada y convertida a letra
       }

       result.push(' '); //Agregar un espacio entre cada palabra del array result
     }

     return result.join(''); //Unir cada índice del array (cada palabra) con un espacio
   },

};

//
// const str = 'Hola como estas'
// const n = 5
//
// function passStrToEncoded (str, n) {
//
//   const strUpper = str.toUpperCase() // Convertir cadena de texto en Mayúsculas
//   const splited = strUpper.split(' ') // ['hola', 'como', 'estas']
//   const result = [] // Variable que guardará un array que contendrá cada palabra ya codificada y convertida en letra humana
//
//
//   //Bucle que pasara por cada índice del array splited (cada palabra)
//   for (let i = 0; i < splited.length; i++) {
//     let word = splited[i]
//     //Bucle que pasara por cada índice de cada cadena de el índice anterior (cada letra de cada palabra)
//     for (let j = 0; j < word.length; j++) {
//       let singleChart = word[j] //Variable para arrojar cada letra
//       let chartAscii = singleChart.charCodeAt(0) //Convertir cada letra en Ascii
//       let encoded = (chartAscii - 65 + n) % 26 + 65 //Encriptar cada #Ascii con la fórmula
//       let encodedToChar = String.fromCharCode(encoded) //Convertir cada #Ascii Encriptado a letra
//       result.push(encodedToChar) //Ingresar al array result cada palabra ya codificada y convertida a letra
//     }
//
//     result.push(' ') //Agregar un espacio entre cada palabra del array result
//   }
//
//   return result.join('') //Unir cada índice del array (cada palabra) con un espacio
//
// };
//
// const coded = passStrToEncoded(str, n) //
//
// coded
//
//
// function passStrToDecoded(str, n) {
//
//   const strUpper = str.toUpperCase() // Convertir cadena de texto en Mayúsculas
//   const splited = strUpper.split(' ') // ['hola', 'como', 'estas']
//   const result = [] // Variable que guardará un array que contendrá cada palabra ya codificada y convertida en letra humana
//
//
//   //Bucle que pasara por cada índice del array splited (cada palabra)
//   for (let i = 0; i < splited.length; i++) {
//     let word = splited[i]
//     //Bucle que pasara por cada índice de cada cadena de el índice anterior (cada letra de cada palabra)
//     for (let j = 0; j < word.length; j++) {
//       let singleChart = word[j] //Variable para arrojar cada letra
//       let chartAscii = singleChart.charCodeAt(0) //Convertir cada letra en Ascii
//       let encoded = (chartAscii + 65 - n) % 26 + 65 //Encriptar cada #Ascii con la fórmula
//       let encodedToChar = String.fromCharCode(encoded) //Convertir cada #Ascii Encriptado a letra
//       result.push(encodedToChar) //Ingresar al array result cada palabra ya codificada y convertida a letra
//     }
//
//     result.push(' ') //Agregar un espacio entre cada palabra del array result
//   }
//
//   return result.join('') //Unir cada índice del array (cada palabra) con un espacio
// };
//
// const decoded = passStrToDecoded(str, n) //
//
// decoded
