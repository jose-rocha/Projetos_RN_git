let d = new Date();

/* ------------------------------------------------ */
/* numero do dia da semana */
let diaDaSemana = d.getDay();

document.write("Dia da semana: " + diaDaSemana + "<br><br>");

/* ------------------------------------------------ */
/* colocando meses a frente */
let Ano = d;
d.setFullYear(2022);
document.write("Anos a frente: " + Ano + "<br><br>");

/* ------------------------------------------------ */

/* colocando meses a frente */
let m = new Date();
m.setMonth(11 - 1); // colquei - 1 para representar o mes de novembro, pois no js o mês começa por 0
let mes = m;
document.write("Meses a frente : " + mes);

/* ------------------------------------------------ */

/* colocando dias a frente */

let data = new Date();

data.setDate(d.getDate() + 112);

let diasAFrente = data;

document.write("<br><br> Dias a frente: " + diasAFrente);

/* ------------------------------------------------ */

/* colocando horas a frente */

let tempo = new Date();

tempo.setHours(tempo.getHours() + 24);

let hoursAFrente = tempo;

document.write("<br><br> Horas a frente: " + hoursAFrente);
