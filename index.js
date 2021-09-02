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
  var letra = document.documentElementById('texto').value.toUpperCase();
  var resultado = '';

  for (var i = 0; i < letra.length; i++) {
    var posicaoDaLetraNoAlfabeto = letra.charCodeAt(i) - 64;
    console.log(posicaoDaLetraNoAlfabeto)

    var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + 1) % 26;
    resultado += alfabeto[letraComDeslocamento - 1];
    document.getElementById('resultadoTexto').innerHTML = resultado;

  }
}


function formBase64() {
  var decodiCodi = document.getElementById('codificar').value;
  var entrada = document.getElementById('texto').value;
  var saida = document.getElementById('resultadoTexto');

  if (decodiCodi == '') {
      saida.innerHTML = btoa(entrada);
  }
  else {
      saida.innerHTML = atob(entrada);
  }
  // if (decodiCodi == 'decode') {
  //     saida.innerHTML = atob(texto);
  // }
  // else {
  //     saida.innerHTML = btoa(texto);
  // }
}















//EXEMPLO 

// function codCaesar(chaveCaesar){
//     var escreva = document.getElementById("texto").value;
//     var saida = document.getElementById("resultadoTexto"); 
//     var codificador = "";
//     saida.innerHTML = "";

//     for (var i = 0; i < escreva.length; i++ ){
//         codificador = escreva.charCodeAt(i);


//         if (codificador>=97 && codificador<= 122){
//             codificador = codificador + chaveCaesar;
//             if (codificador> 122){
//                 codificador = codificador - 26;
//             }else if(codificador< 97){
//                 codificador = codificador + 26;
//             }
//         }

//         if (codificador>=65 && codificador<= 90){
//             codificador = codificador + chaveCaesar;
//             if (codificador> 90){
//                 codificador = codificador - 26;
//             }else if(codificador<65){
//                 codificador = codificador + 26;
//             }
//         }
//         saida.innerHTML += String.fromCharCode(codificador);
//     }

// }
























































// EXEMPLO


// const resultado = document.getElementById('saida');

// document.getElementById('enviar').addEventListener('click', () => {

//   var textarea = document.getElementById('texto').value;
//   var result = [];
//   const chave = +document.getElementById('radioCodificar').value;
//   var listaText = textarea.split('');


//   for (var i = 0; i < listaText.length; i++) {
//     if (listaText[i].charCodeAt() >= 65 && listaText[i].charCodeAt() <= 90) {

//       var str = String.fromCharCode(((listaText[i].charCodeAt() - 65 + chave) % 25) + 65)
//       result.push(str)

//     } else {
//       result.push(listaText[i])
//     }

//   }

//   console.log(result)
//   resultado.innerText = result;

// })















































