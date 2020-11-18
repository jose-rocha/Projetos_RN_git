let aredonda = Math.round(63.5); // arredonda o numero

document.write('O "round" Arredonda O numero:' + aredonda + "<br>");

/* ------- --------- -------------- ---------------*/

let arredondaParaAbaixo = Math.floor(25.99);

document.write(
  'O  "floor" Arredonda o numero para baixo:' + arredondaParaAbaixo + "<br>"
);

/* ------- --------- -------------- ---------------*/

let arredondaParaCima = Math.ceil(24.3);

document.write('O "ceil" Arredonda o numero para baixo: ' + arredondaParaCima);

/* ------- --------- -------------- ---------------*/

let numeroAbsoluto = Math.abs(-9.555);

document.write('<br> O "abs" pega numero absoluto: ' + numeroAbsoluto);

/* ------- --------- -------------- ---------------*/

let numMinimo = Math.min(25, 10, 50, 35);

document.write('<br> O "min" pega o menor numero: ' + numMinimo);

/* ------- --------- -------------- ---------------*/

let numMaior = Math.max(25, 10, 50, 35);

document.write('<br> "O" maior numero é: ' + numMaior);

/* ------- --------- -------------- ---------------*/

let numAleatorio = Math.floor(Math.random() * 100); //o max do numero é 100

document.write('<br> "O" random pega  numero aleatório: ' + numAleatorio);
