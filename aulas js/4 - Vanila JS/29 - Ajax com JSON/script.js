(function dbJSON(doc, win) {
  "use strict";

  let btn = doc.querySelector("#btn");

  function showDB(e) {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "db.json");
    ajax.send();
    ajax.onreadystatechange = function () {
      //   console.log(ajax.status);
      if (ajax.status === 200 && ajax.readyState === 4) {
        // alert("Tudo ok!");

        let res = JSON.parse(ajax.responseText);
        let moto = res.moto;
        for (let i = 0; i < moto.length; i++) {
          console.log(moto[i].color);
          console.log(moto[i].year);
        }
      }
      if (ajax.status === 404) {
        console.log(
          `Conexão recusada!, Erro ${ajax.status}, arquivo não encontrado`
        );
      }
    };
  }

  btn.addEventListener("click", showDB, false);
})(document, window);
