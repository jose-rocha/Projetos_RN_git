(function ePrint(win, doc) {
  "use strict";

  
  let print = doc.querySelector("#print");
  let nota = doc.querySelector('.nota');
  let assClient = doc.querySelector('#assClient');
  let cabeDataEntrega = doc.querySelector('.cabeDataEntrega')
  console.log(assClient)

  // console.log(nota);
  // let print2 =doc.createElement('<button class="print">'+ '</button>');
  console.log(print);
  let form1 = doc.querySelector("#form1");

  function sendPrint() {
    //   e.preventDefault();
    style();
    print = window.print();
    
    window.location.href = "./index.html"

    
  
  }

  function style(){
    print.style = "display:none"; //desaparece o botão de imprimir
    nota.style.marginTop = "226px"; // sobe a nota para não gerar 2 folhas
    // cabeDataEntrega.style.marginRight = "1px";
    
  }

  

  print.addEventListener("click", sendPrint, false);
})(window, document);
