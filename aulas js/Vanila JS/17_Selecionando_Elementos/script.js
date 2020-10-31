(function mudaCor(win, doc) {
  "use strict";

  // let teste = doc.getElementById("teste");
  // teste.className = "New Class";
  // teste.style.color = "pink";
  // console.log(teste);

  // let dv2 = doc.getElementsByClassName("bt");
  // console.log(dv2[0].innerHTML);

  // let byName = doc.getElementsByName("JS");
  // console.log(byName);

  // let byTag = doc.getElementsByTagName("h2");
  // console.log(byTag);

  // let byQuery = doc.querySelector(
  //   "#teste"
  // );

  // console.log(byQuery);

  // let by_Query = doc.querySelector(".segundaDiv");
  // console.log(by_Query);

  // let query = doc.querySelector('[alt = "JS"]');
  // console.log(query);

  // let byQureyAddEvent = doc.querySelector(".bt");
  // byQureyAddEvent.addEventListener("click", function () {
  //   alert("Botão 1 clicado");
  // });

  // let byQueryAll = doc.querySelectorAll(".bt");
  // console.log(byQueryAll);

  // let byQueryAll = doc.querySelectorAll(".bt");
  // for (let i = 0; i < byQueryAll.length; i++) {
  //   byQueryAll[i].addEventListener("click", function () {
  //     alert("Clicou no botão: " + this.innerHTML);
  //   });
  // }

  let byQueryAll = doc.querySelectorAll(".bt");
  for (let i = 0; i < byQueryAll.length; i++) {
    byQueryAll[i].addEventListener("click", function () {
      doc.querySelector("body").style.background = this.getAttribute(
        "data-color"
      );
    });
  }
})(window, document);
