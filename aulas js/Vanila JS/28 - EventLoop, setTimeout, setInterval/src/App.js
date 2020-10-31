import eventLoop from "./modules/eventLoop.js";
// import SetInterval from "./modules/setInterval.js";
import SetTimeout from "./modules/setTimout.js";

eventLoop();
// SetInterval();
SetTimeout();

/* (function App(win, doc) {
  "use strict";
  let btn = doc.querySelector("#btn");

  console.log("Hello");

  function clicou(e) {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }
  console.log("World!!");

  btn.addEventListener("click", clicou, false);
})(window, document);
 */
