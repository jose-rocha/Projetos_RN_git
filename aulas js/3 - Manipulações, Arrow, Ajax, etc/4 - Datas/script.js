let d = new Date();

document.write("Data completa e hora:  " + d);

/* ---- */

let d2 = new Date();

document.write("<br><br> Data abreviada: " + d2.toDateString());

/* ---- */

let d3 = new Date();

document.write(
  "<br><br> Fuso horário da Europa: " + d3.toUTCString()
); /* Fuso horário da Europa*/
