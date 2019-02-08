const mainScreen = document.getElementById('screen-main');
const resultsScreen = document.getElementById('screen-results');

//funcion que recibe un array y lo itera (para el display)
function display (elements, display = 'inline-block') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

//Ocultar display resultsScreen
display([resultsScreen], "none");


let inputPosition = "";
//funcion para crear un escucha que al soltar la teclas se ingrese el valor en la variable position
const position = document.getElementById('input-position');
position.addEventListener("keyup", function(event) {
  inputPosition = event.target.value;
});


let str = "";
//funcion para crear un escucha que al soltar la teclas se ingrese el valor en la variable text
const text = document.getElementById('input-text-area');
text.addEventListener("keyup", function(event) {
  str = event.target.value;
});



//Botón encriptar
document.getElementById("main-button-encrypt").addEventListener("click", buttonEncrypt);
function buttonEncrypt() {
    // si pasa la validacion
    if (inputPosition.length >= 1 && str.length >= 1) {
      display([mainScreen], "none");
      display([resultsScreen]);
      document.getElementById("new-text").innerHTML = window.cipher.encode(parseInt(inputPosition), str);
      document.getElementById('original-text').innerHTML = str;
      document.getElementById('subtitle-new-text').innerHTML = 'Texto Cifrado';
      document.getElementById('subtitle-screen-results').innerHTML = 'Encritpado';
    }
}

//Botón Descifrar
document.getElementById("main-button-decipher").addEventListener("click", buttonDecipher);
function buttonDecipher() {
    // si pasa la validacion
    if (inputPosition.length >= 1 && str.length >= 1) {
      display([mainScreen], "none");
      display([resultsScreen]);
      document.getElementById("new-text").innerHTML = window.cipher.decode(inputPosition, str);
      document.getElementById('original-text').innerHTML = str;
      document.getElementById('subtitle-new-text').innerHTML = 'Texto Descifrado';
      document.getElementById('subtitle-screen-results').innerHTML = 'Descifrado';

    }
}

//Botón Regresar
document.getElementById('second-buttons-return').addEventListener('click', buttonReturn);
function buttonReturn() {
  location.reload(); //Para recargar la página
}

//Botón Copiar
document.getElementById('second-buttons-copy').addEventListener('click', buttonCopy);
function buttonCopy() {
  let range = document.createRange(); //Variable para crear un rango en el documento
  range.selectNode(document.getElementById("new-text")); //seleccionar el elemento del documento al que le quiero pasar el rango
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
}

//Botón Correo
document.getElementById('second-buttons-mail').addEventListener('click', buttonMail);
function buttonMail() {
  window.location.href = "mailto:mail@example.org";
}
