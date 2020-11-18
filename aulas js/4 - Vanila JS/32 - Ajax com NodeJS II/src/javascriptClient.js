(function client(win, doc) {
  "use strict";

  let form1 = doc.querySelector("#form1");
  let name = doc.querySelector("#name");
  let response = doc.querySelector("#response");

  function sendForm(e) {
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    let params = "name=" + name.value;

    ajax.open("POST", "http://localhost:3000");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function () {
      if (ajax.status === 200 && ajax.readyState === 4) {
        // console.log(ajax.responseText);
        let arr = JSON.parse(ajax.responseText);
        response.innerHTML = `O usuário ${arr.name} tem ${arr.age} anos`;
      }
    };
    ajax.send(params);
  }

  form1.addEventListener("submit", sendForm, false);
})(window, document);
