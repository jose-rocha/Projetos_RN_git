let d = new Date();

let diaDaSemana = d.getDay();

let dia = d.getDate();

let mes = d.getMonth() + 1; //coloquei + 1 pq no js o mês começa no 0

let ano = d.getFullYear();

let hora = d.getHours();

let minutos = d.getMinutes();

document.write("Dia da semana: " + diaDaSemana);

document.write("<br> Dia: " + dia + ",");

document.write("<br> Mês: " + mes + ",");

document.write("<br> Ano: " + ano + ",");

document.write("<br> Horas: " + hora + ":" + minutos);
