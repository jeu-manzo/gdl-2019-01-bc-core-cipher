 window.cipher = {
   encode: function passStrToEncoded (inputPosition, str) {
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
         let encoded = (chartAscii - 65 + inputPosition) % 26 + 65; //Encriptar cada #Ascii con la fórmula
         let encodedToChar = String.fromCharCode(encoded); //Convertir cada #Ascii Encriptado a letra
         result.push(encodedToChar); //Ingresar al array result cada palabra ya codificada y convertida a letra
       }

       result.push(' '); //Agregar un espacio entre cada palabra del array result
     }

     let finish = result.join(''); //Unir cada índice del array (cada palabra) con un espacio
     return finish.trim(); //Remover los espacios en blanco al inicio y final de una cadena
   },

   decode: function passStrToDecoded(inputPosition, str) {
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
         let encoded = (chartAscii + 65 - inputPosition) % 26 + 65; //Encriptar cada #Ascii con la fórmula
         let encodedToChar = String.fromCharCode(encoded); //Convertir cada #Ascii Encriptado a letra
         result.push(encodedToChar); //Ingresar al array result cada palabra ya codificada y convertida a letra
       }

       result.push(' '); //Agregar un espacio entre cada palabra del array result
     }

     let finish = result.join(''); //Unir cada índice del array (cada palabra) con un espacio
     return finish.trim(); //Remover los espacios en blanco al inicio y final de una cadena
   },

};
