(function full(win, doc) {
    'use strict';

    // localStorage.setItem("Name", "José");
    // let n = localStorage.getItem('Name');
    // console.log(n);



    // localStorage.removeItem('Name')
    onload = function () {
        let MSG = localStorage.getItem('MSG');

        let h1 = doc.getElementsByTagName('h1')[0];
        h1.innerHTML = MSG;
    }

    let h1 = doc.getElementsByTagName('h1')[0];
    // console.log(h1)
    let input = doc.getElementsByTagName('input')[0];
    // console.log(input);

    input.addEventListener('input', function () {

        let valor = input.value;
        h1.innerHTML = valor;

        localStorage.setItem('MSG', valor)

    }, false);



})(window, document);