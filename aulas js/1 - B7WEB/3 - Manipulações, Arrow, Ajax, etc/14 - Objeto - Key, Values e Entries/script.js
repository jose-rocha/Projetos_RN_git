/* let lista = [1, 2, 3, 4, 5, 6];

console.log(typeof lista); */

/* let lista = { nome: "José", idade: 90 };

console.log(typeof lista); */

let lista = ["Ovo", "macarrão", "feijão", "pipoca"];

console.log(Object.keys(lista));

/*

// Evitando copiar o contéudo da página
document.addEventListener(
  "copy",
  function (evt) {
    evt.clipboardData.setData("text/plain", "A cópia não é permitida");
    evt.preventDefault();
  },
  false
);
*/

function mostrar() {
  document.getElementById("conteudo").style =
    "display: block; background-color: aqua; width: 180px; height: 180px; border-radius: 5px;";
}

function esconder() {
  document.getElementById("conteudo").style = "display: none; ";
}
