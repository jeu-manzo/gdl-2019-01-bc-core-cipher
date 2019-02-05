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



let position = "";

const inputPosition = document.getElementById('input-position');

inputPosition.addEventListener("keyup", function(event) {
  position = event.target.value;
});


//Botón encriptar
document.getElementById("main-button-encrypt").addEventListener("click", buttonEncrypt);
function buttonEncrypt() {
    // si pasa la validacion
    if (position.length >= 1) {
      display([mainScreen], "none");
      display([resultsScreen]);
      let str = document.getElementById("input-text-area").value;
      let inputPosition = Number(document.getElementById("input-position").value);
      document.getElementById("new-text").innerHTML = window.cipher.encode(inputPosition, str);
      document.getElementById('original-text').innerHTML = str;
    }
}

//Botón Descifrar
document.getElementById("main-button-decipher").addEventListener("click", buttonDecipher);
function buttonDecipher() {
    // si pasa la validacion
    if (position.length >= 1) {
      display([mainScreen], "none");
      display([resultsScreen]);
      let str = document.getElementById("input-text-area").value;
      let inputPosition = Number(document.getElementById("input-position").value);
      document.getElementById("new-text").innerHTML = window.cipher.decode(inputPosition, str);
      document.getElementById('original-text').innerHTML = str;
    }
}

//Botón Regresar
document.getElementById('second-buttons-return').addEventListener('click', buttonReturn);
function buttonReturn() {
  location.reload(); //Para recargar la página
  display([mainScreen]);
  display([resultsScreen], "none");
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

//Botón Copiar
document.getElementById('second-buttons-mail').addEventListener('click', buttonMail);
function buttonMail() {
  window.location.href = "mailto:mail@example.org";
}
