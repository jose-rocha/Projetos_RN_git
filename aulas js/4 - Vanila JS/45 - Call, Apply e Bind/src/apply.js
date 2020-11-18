function Applys() {
  let doc = document;
  let result = doc.querySelector(".result");
  let result2 = doc.querySelector(".result2");

  function data(author, age) {
    return `O livro é ${this.title} e tem ${this.pages} páginas. o autor é ${author} e a idade dele é ${age} `;
  }

  function data2() {
    return `E o segundo livro é ${this.title} e tem ${this.pages} páginas.`;
  }
  /*
       let book1 = {
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
  ajax.open("GET", "controller.php");
  ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let res = JSON.parse(ajax.responseText);
      // console.log(res);
      res.map(function (elemento, indice, objeto) {
        // console.log(elemento);
        // result.innerHTML = `${elemento.title} -- ${elemento.pages}`;
        let chield = doc.createElement("div");
        chield.innerHTML = data.apply(elemento, ["José", 29]);
        result.appendChild(chield);
      });
    }
  };
  ajax.send();
}

export default Applys;
