(function ePrint(win, doc) {
  "use strict";


  let print = doc.querySelector("#print");
  let nota = doc.querySelector('.nota');
  let assClient = doc.querySelector('#assClient');
  let cabeDataEntrega = doc.querySelector('.cabeDataEntrega');
  let nav = doc.querySelector('nav');
  // let print2 =doc.createElement('<button class="print">'+ '</button>');

  let form1 = doc.querySelector("#form1");

  function sendPrint() {
    //   e.preventDefault();
    style();
    print = window.print();

    window.location.href = "./";

  }

  function style() {
    print.style = "display:none"; //desaparece o botão de imprimir
    nota.style.marginTop = "226px"; // sobe a nota para não gerar 2 folhas
    // cabeDataEntrega.style.marginRight = "1px";
    nav.style = "display:none";

  }

  print.addEventListener("click", sendPrint, false);

  /* Deasparece com os numeros que forem zero na  nota MD e do Cliente*/

  let quant = doc.querySelectorAll('td');
  for (let q = 0; q < quant.length; q++) {
    if (quant[q].innerText == "0" || quant[q].innerText == 'R$ 0,00') {
      quant[q].style.color = 'transparent';
    }
  }

})(window, document);


