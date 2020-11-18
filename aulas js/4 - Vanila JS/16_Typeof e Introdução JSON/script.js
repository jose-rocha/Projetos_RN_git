// (function readyJS(win, doc) {
//   "use strict";

//   /*  let type = ['funcao', "progr", { name: "José" }];
//   console.log(typeof type); */
//   // typeof é para saber que tipo, ex: Number, string, Array, Object

//   let lista = [0, 1, 2, { Name: "Jose" }];
//   //   console.log(typeof lista);

//   for (let i = 0; i < lista.length; i++) {
//     if (typeof lista[i] === "number") {
//       console.log(lista[i]);
//       /*   nesse caso o console só vai mostrar as posições [i] do tipo number
//      do tipo number como foi pedido na função */
//     }
//   }

//   let dados = ["tipo", "Pesso Fisica", { Name: "José", age: "29" }];
//   /* Para saber se é um array puro/mesmo usa a func
//      Array.isArray(sua variavel)  */
//   console.log(Array.isArray(dados));
// })(window, document);

/* Apartir daqui é  JSON */
(function readyJSON(win, doc) {
  "use strict";
  let data = {
    car: {
      year: 2019,
      color: "black",
      arr: [1, 2, 3],
    },
  };

  console.log(
    JSON.stringify(data)
  ); /* stringify transfroma o Object em string */
})(window, document);

(function fcJS(win, doc) {
  let data2 = '{"name":"José","age":"29"}';
  console.log(JSON.parse(data2)); /* pasre transfroma o string em object */
})(window, document);
