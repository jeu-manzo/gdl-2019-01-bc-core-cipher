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
