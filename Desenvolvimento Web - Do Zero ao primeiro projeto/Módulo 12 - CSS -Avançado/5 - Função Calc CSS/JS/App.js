// let titulos = document.querySelector('[title]');
// console.log(titulos);

// let titulos = document.querySelectorAll('[title*=tu]');
// console.log(titulos);

var foo = 9;
var bar = 5;
(function () {
    var foo = 2;
    var bar = 1;
}());

bar = bar + foo;
console.log(bar);

function message() { 
    alert('Welcome');
 }
