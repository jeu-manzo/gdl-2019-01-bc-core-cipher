window.cipher = {
  //Función para encriptar
  function encode(x, n) {
    let formulaEncode = (x - 65 + n) % 26 + 65
    return formulaEncode
  };


  //Función para descifrar
  function decode(x, n) {
    let formulaDecode = (x + 65 - n) % 26 + 65
    return formulaDecode
  };

};
