(function bublling(win, doc) {
  "use strict";

  let parent = doc.querySelector(".parent");
  let chield = doc.querySelector(".chield");
  let granChield = doc.querySelector(".granChield");
  let form1 = doc.querySelector("#form1");
  //   console.log(granChield);

  /*  parent.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("parent");
    },
    false
  );
  chield.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("chield");
    },
    false
  );
  granChield.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("granChield");
    },
    false
  );
 */
  /* parent.addEventListener(
    "click",
    function (e) {
      console.log("this", this);
      console.log("e", e.target);
    },
    false
  ); */

  form1.addEventListener(
    "blur",
    () => {
      console.log("Perdeu o foco!");
    },
    true
  );
})(window, document);
