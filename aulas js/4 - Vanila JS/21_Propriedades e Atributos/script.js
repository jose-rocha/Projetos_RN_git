(function readyJS(win, doc) {
  "use strict";
  let body = doc.querySelector("body");
  body.style.background = "black";

  let image = doc.querySelector("#imageJS");
  console.log(`Aqui mostra a classe da imagem: ${image.className}`);
  console.log(`Fonte ou diretório onde se enconta a img: ${image.src} `);
  console.log(`Aqui mostra o data-info da imagem: ${image.dataset.info}`);
  console.log(image.hasAttribute("data-info2"));
  console.log(image.attributes);
  console.log(image.setAttribute("data-color", "pink"));
  image.removeAttribute("height");
})(window, document);
