//FOR LOOP
//FOR LOOP ARRAY

/* 
//for loop
let texto = "";

for (let i = 1; i <= 50; i++) {
  texto = texto + i + "<br/>";
}

document.getElementById("demo").innerHTML = texto;

*/

/* Etapas do for
 1ª Etapa -->> let i = 1; criação da variavel.

   2ª Etapa -->>  i <= 50; condição.

   3ª Etapa -->> i++ implementação.


*/

let carros = ["Fusca", "ferrai", "corolla", "mazerati", "lamborgini"];

let html = "<ul>";

//for loop array
for (let i in carros) {
  html += "<li>" + carros[i] + "</li>";
}

html += "</ul>";

document.getElementById("demo").innerHTML = html;
