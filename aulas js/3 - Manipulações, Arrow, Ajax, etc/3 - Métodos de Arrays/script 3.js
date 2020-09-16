let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function (item) {
  return item * 2;
});

let resultado = lista2;

console.log(resultado);

document.body.style.background = "gray";

/* ------- filter ------ */

let lista3 = [55, 14, 29, 36, 45];
let lista4 = [];

lista4 = lista3.filter(function (item) {
  if (item >= 45) {
    return true;
  } else {
    return false;
  }
});

let resultado2 = lista4;

console.log(resultado2);

/* ------- every ------ */

let lista5 = [85, 34, 49, 166, 56];
let lista6 = [];

lista6 = lista5.every(function (item) {
  return item < 49 ? true : false; // condição ternária, se existir algum numero menor que 49 vai aparecer true,
});

let resultado3 = lista6;

console.log(resultado3);
