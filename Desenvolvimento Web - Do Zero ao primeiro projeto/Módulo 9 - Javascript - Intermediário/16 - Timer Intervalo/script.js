(function full(win, doc) {
    'use strict';

    let h1 = doc.getElementsByTagName('h1')[0];

    let button = doc.getElementsByTagName('input')[0];

    let Parar = doc.getElementsByTagName('input')[1];

    // button.addEventListener('click', function () {
    //     h1.innerHTML = 'Novo Titulo';

    //     function mudarCor() {
    //         h1.style.color = 'blue';
    //     }

    //     setTimeout(mudarCor, 3000);
    // }, false)


    var numero = 0;
    var interval;

    button.addEventListener('click', function () {

        function atualizarTexto() {
            h1.innerHTML += " " + numero;
            numero++;
        }

        interval = setInterval(atualizarTexto, 3000);

        Parar.addEventListener('click', function () {
            clearInterval(interval);
        })


    })

})(window, document);