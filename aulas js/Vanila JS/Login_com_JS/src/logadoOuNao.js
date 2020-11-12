(function oNoFF(win, doc) {
  "use strict";



  let logado = false;
 

  if (localStorage.getItem("acesso") == "true") {
    logado = true;
    
  }

  if (logado != true) {
    window.location.href = "../reset.html";
       window.location.href = "../index.html"
  }

 


 
})(window, document);
