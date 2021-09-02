function codifica() {
  var tipo = document.getElementById('codificar').value;
  console.log(tipo);
  if (tipo == 'base64') {
      formBase64();
  } else {
      cifraCesar();
  }
}
function cifraCesar() {
  var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var letra = document.querySelector('#texto').value.toUpperCase();
  var resultado = '';

  for (var i = 0; i < letra.length; i++) {
    var incremento = document.getElementById('inc').value;
    var incrementoNumero = Number(incremento)
    var posicaoDaLetraNoAlfabeto = letra.charCodeAt(i) - 64;
    console.log(posicaoDaLetraNoAlfabeto)

    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + incrementoNumero) % 26;
    resultado += alfabeto[letraComDeslocamento - 1];
    document.getElementById('resultadoTexto').innerHTML = resultado;

  }
}


function formBase64() {
  var decodiCodi = document.getElementById('codificar').value;
  var entrada = document.getElementById('texto').value;
  var saida = document.getElementById('resultadoTexto');
  
  console.log(decodiCodi.value)

  if (document.getElementById('radioCodificar').checked) {
      saida.innerHTML = btoa(entrada);
  }
  else {
      saida.innerHTML = atob(entrada);
  }
}































































