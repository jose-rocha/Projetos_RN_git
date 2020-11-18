let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.find(function (item) {
  return item == 16 ? true : false;
});

let resultado = lista2;

console.log(resultado);

/* findIndex*/

let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];

lista4 = lista3.findIndex(function (item) {
  return item == 16 ? true : false;
  /* findIndex mostra em qual posição o numero estar */
});

let resultado2 = lista4;

console.log(resultado2);

let listaUsuarios = [
  { id: 1, nome: "José", sobrenome: "Rocha", idade: 29 },
  { id: 2, nome: "Marcos", sobrenome: "Leão", idade: 33 },
  { id: 3, nome: "Elisabete", sobrenome: "Moares", idade: 28 },
];

let resultadoLista = listaUsuarios.find(function (item) {
  return item.id == 3 ? true : false;
});

console.log(resultadoLista);

/* --- --- --- */

document.body.style.background = "gray";
