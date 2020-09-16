let n = 10;

let res = n.toString(); // toString tranforma inteiros em string

console.log(res);

/* -- Decimais -- */

let numeros = 10.6578915;

let decimal = "R$ " + numeros.toFixed(2);

console.log(decimal);

/* -- Inteiros  -- */

let int = "25";

let intStr = parseInt(int) + 5; //parseInt transforma string em numero.

console.log(intStr);

/* -- Float -- */

let flutuante = "25.9";

let intfloat = parseFloat(flutuante) + 5;

console.log(intfloat);
