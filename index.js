const texto = document.querySelector(".textarea");
const mensaje = document.querySelector(".resultado");
const tituloParrafo = document.querySelector(".tituloParrafo");

function btnEncriptar() {
  const textoEncriptado = encriptar(texto.value);
  mensaje.value = textoEncriptado;
  texto.value = "";
  document.getElementById("muniecoId").style.display = "none";
  document.getElementById("tituloId").style.display = "none";
  document.getElementById("ingresarId").style.display = "none";
}

function encriptar(stringEncriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // stringEncriptar = stringEncriptar.tolowercase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptar.includes(matrizCodigo[i][0])) {
      stringEncriptar = stringEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptar;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(texto.value);
  mensaje.value = textoEncriptado;
  texto.value = "";
}

function desencriptar(stringDesencriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // stringEncriptar = stringEncriptar.tolowercase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptar.includes(matrizCodigo[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptar;
}

// Copiar
function btnCopiar() {
  let copiarTexto = document.querySelector(".copiarArea");
  let texto = document.getElementById("resultadoId");

  texto.select();
  document.execCommand("copy");
  document.getElementById("iBtnCopiar");
  copiarTexto.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(() => {
    document.getElementById("btnCopiar");
    copiarTexto.classList.add("active");
  }, 2500);
}
