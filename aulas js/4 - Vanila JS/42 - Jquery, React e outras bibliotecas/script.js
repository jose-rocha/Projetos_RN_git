(function frames(win, doc) {
  "use strict";
  let result = doc.querySelector("#result");
  let form1 = doc.querySelector("#form1");
  let name = doc.querySelector("#name");

  function sendForm(e) {
    // console.log(e);
    e.preventDefault();
    let ajax = new XMLHttpRequest();
    let params = "name=" + name.value;
    ajax.open("POST", "controller.php");
    ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        result.innerHTML = JSON.parse(ajax.responseText);
      }
    };
    ajax.send(params);
  }

  form1.addEventListener("submit", sendForm, false);
})(window, document);
