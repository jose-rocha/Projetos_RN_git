(function desaparecer(win, doc) {
  "use strict";

  let btn = doc.querySelector("#btn");

  //   console.log(btn);

  let menu = doc.querySelector(".menu");

  function toggle(event) {
    // console.log(event.target);

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      btn.setAttribute("src", "./images/buttonMenu.png");
    } else {
      menu.classList.add("show");
      btn.setAttribute("src", "./images/Close.png");
    }
  }

  btn.addEventListener("click", toggle, false);
})(window, document);
