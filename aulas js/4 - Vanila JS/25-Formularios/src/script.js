(function ready(win, doc) {
  "use strict";

  let form = doc.querySelector("#form1");
  /* form.action = "teste.txt";
  console.log(form);
 */

  let inpText = doc.querySelector("#inpText");

  function validateInpText(event) {
    if (event.target.value == "") {
      alert("Preencha o campo!");
    }
  }
  inpText.style.backgroundColor = "gray";
  inpText.value = "texto";
  inpText.addEventListener("blur", validateInpText, false);

  console.log(inpText);
})(window, document);
