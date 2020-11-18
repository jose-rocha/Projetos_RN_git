(function readyJS(win, doc) {
  "use strict";
  let check = doc.querySelector("#check");
  let radio = doc.getElementsByName("gender");
  let sel = doc.querySelector("#sel");
  let btn = doc.querySelector("#btn");

  //   checkBox
  console.log(check.checked);
  if (check.checked == false) {
    alert("Accept the terms!");
  }

  //radio
  console.log(radio);
  function radioTest(e) {
    if (e.target.value == "Male") {
      alert("A opção masculina foi selecionada");
    } else {
      alert("A opção feminina foi selecionada");
    }
  }
  for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener("click", radioTest, false);
  }

  function selValidate(e) {
    if (e.target.selectedIndex == 0) {
      alert("Selecione pelo menos uma opção!");
    }
  }

  //Select
  console.log(sel);
  sel.addEventListener("change", selValidate, false);

  //   Button
  console.log(btn);

  function submitForm(e) {
    e.preventDefault();
    console.log(e);
  }
  btn.addEventListener("click", submitForm, false);
})(window, document);
