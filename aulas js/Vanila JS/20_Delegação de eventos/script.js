// (function readyJS(winn, doc) {
//   "use strict";

//   let btn = doc.querySelector("#btn");

//   function alertar(event) {
//     // alert("oi");
//     doc.querySelector("body").style.background = "red";
//   }

//   btn.addEventListener("click", alertar, false);

//   console.log(btn);
// })(window, document);

(function delega(win, doc) {
  "use strict";

  let btn = doc.querySelector("#btn");
  let main = doc.querySelector(".main");
  //   console.log(btn);

  function criarElemento(event) {
    const newButton = doc.createElement("button");
    newButton.id = "newButton";
    newButton.className = "designButton";
    newButton.innerHTML = "Novo Botão";
    main.appendChild(newButton);
  }

  btn.addEventListener("click", criarElemento, false);

  /* Fazendo o novo botão adr um alert */

  function alertar(event) {
    // alert("oi");
    if (event.target.id === "newButton") {
      alert("oi");
    }
  }

  main.addEventListener("click", alertar, false);
})(window, document);

/* --------------------------------------------------- */
