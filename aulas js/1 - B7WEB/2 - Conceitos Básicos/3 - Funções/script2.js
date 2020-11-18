function alterar(titulo) {
  document.getElementById("titulo").innerHTML = titulo;
  document.getElementById("campo").value = titulo;
}

//alterar();

function voltarTexto() {
  document.getElementById("titulo").innerHTML = "Seja Bem vindo ao JS";
  document.getElementById("campo").value = "Nome do usuário";
}

function somar(x, y) {
  let total = x + y;

  return total;

  //document.getElementById("campoTotal").value = total;
}

var resultado = somar(10, 15);

console.log(resultado);
