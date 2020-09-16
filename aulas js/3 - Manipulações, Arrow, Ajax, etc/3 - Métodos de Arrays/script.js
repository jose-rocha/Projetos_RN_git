/* -- Join -- */
let lista = ["Ovo", "Farinha", "Corante", "Massa"];

//join = juntar
let res = lista.join("-");

console.log(res);

/* -- IndexOf -- */
let lista2 = ["Ovo", "Farinha", "Corante", "Massa"];

//indexof = mostra a posisão do objeto ou variável etc.
let res2 = lista.indexOf("Massa");

if (res2 > -1) {
  alert("Existe na lista");
} else {
  alert("Não existe na lista");
}

console.log(res2);

/* -- shift(), pop() e push(); */
let lista3 = ["Ovo", "Farinha", "Corante", "Massa"];

lista3.shift(); //Remove o Primeiro item
lista3.pop(); //Remove o último item
lista3.push("Fermento"); //Adiciona um item ao array

console.log(lista3);
