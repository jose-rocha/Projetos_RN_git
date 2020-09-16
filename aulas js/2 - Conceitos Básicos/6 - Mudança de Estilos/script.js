function azul() {
  limpar();
  document.getElementById("titulo").classList.add("azul");
}
function vermelho() {
  limpar();
  document.getElementById("titulo").classList.add("vermelho");
}

function verde() {
  limpar();
  document.getElementById("titulo").classList.add("verde");
}

function limpar() {
  document
    .getElementById("titulo")
    .classList.remove("azul", "vermelho", "verde");
}

function darkMode() {
  removebackground();
  document.getElementById("corpo").classList.add("darkMode");
}

function White() {
  removebackground();
  document.getElementById("corpo").classList.add("corpoWhite");
}

function removebackground() {
  document.getElementById("corpo").classList.remove("darkMode", "corpoWhite");
}

function mostarTelefone(e) {
  e.style.display = "none";
  document.getElementById("esconde").style.display = "block";
}
