let html = "";

let c = 1;

//Enquanto
while (c <= 10) {
  html += "Numero " + c + "<br/>";
  c++;
}

for (c = 1; c <= 10; c++) {
  html += "Numero" + c + "<br/>";
}

document.getElementById("demo").innerHTML = html;
