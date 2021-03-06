(function full(win, doc) {
    'use strict';



    let pi = Math.PI;
    console.log(pi);

    let raizQuadrada = Math.sqrt(16); //sqrt() é o calculo da raiz quadrada
    console.log(raizQuadrada);

    let p = doc.getElementsByTagName('p')[0];


    setInterval(function () {
        let n = Math.round(Math.random() * 100);
        if (n < 10) {
            n = '0' + n;
        }
        p.innerHTML = n

    }, 1000)







})(window, document);