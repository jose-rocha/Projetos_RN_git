(function readyJS(win, doc) {
  let btn = doc.querySelectorAll(".btn");
  //   console.log(btn);

  let body = doc.querySelector("body");
  function pintar(event) {
    // alert("oi");
    // body.addEventListener()
    body.style.background = event.target.dataset.color;
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", pintar, false);
  }
})(window, document);
