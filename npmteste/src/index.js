const moment = require('moment');
 
moment.locale('pt-br');
let dia = moment().format('dddd');
 //let mes = moment().format('lll');
 //let ano = moment().format('YYYY');
 // let horas = moment().format('h:mm:ss a')


 document.getElementById("dia").innerHTML = "Hoje é "+dia;
 

 