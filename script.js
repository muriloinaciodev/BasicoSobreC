hljs.highlightAll();

function copy (codeId) {
  const code = document.getElementById(codeId).innerText;
  navigator.clipboard.writeText(code);
}

// Esse funciona no opera mobile
// function copy(elementoId) {
//   // Obtém o elemento pelo ID
//   var elemento = document.getElementById(elementoId);

//   // Verifica se o elemento existe
//   if (!elemento) {
//       console.error("Elemento não encontrado!");
//       return;
//   }

//   // Cria um elemento temporário para armazenar o texto
//   var inputTemp = document.createElement("textarea");
//   inputTemp.value = elemento.innerText || elemento.textContent;
//   document.body.appendChild(inputTemp);
//   inputTemp.select();
//   inputTemp.setSelectionRange(0, 99999);
//   document.execCommand("copy");
//   document.body.removeChild(inputTemp);
// }