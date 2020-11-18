(function (win, doc) {
  "use strict";

  let result = doc.querySelector(".result");
  let result2 = doc.querySelector(".result2");

  function data() {
    return `O livro é ${this.title} e tem ${this.pages} páginas.`;
  }

  function data2() {
    return `E o segundo livro é ${this.title} e tem ${this.pages} páginas.`;
  }

  /* let book1 = {
    title: "Aprenda a Usar React JS e Node JS",
    pages: 100,
  };
  let book2 = {
    title: "Aprenda Firebase",
    pages: 50,
  };
  result.innerHTML = data.call(book1);
  result2.innerHTML = data2.call(book2); */

  let ajax = new XMLHttpRequest();
  ajax.open("GET", "./controller.php");
  ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
      console.log(ajax.responseText);
    }
  };
  ajax.send();
})(window, document);
