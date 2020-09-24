//função tradicional
/*
function somar(x, y) {
  return x + y;
} */

//2 método de função tradicional
/*
let somar = function (x, y) {
  return x + y;
};  */

//Arrow Function
/*
let somar = (x, y) => {
  return x + y;
}; */

/* Outo método de Arrow Function, lembrando que se a soma não estiver dentro de chaves
não tem a necessiade de colocar o return, caso  contário é obrigatório o return. */
let somar = (x, y) => x + y;

console.log(somar(14, 15));

/*
let qtdeLetrasNoNome = (nome) => {
  return nome.length;
}; */

let qtdeLetrasNoNome = (nome) => nome.length; //forma menor

console.log(qtdeLetrasNoNome("José"));
