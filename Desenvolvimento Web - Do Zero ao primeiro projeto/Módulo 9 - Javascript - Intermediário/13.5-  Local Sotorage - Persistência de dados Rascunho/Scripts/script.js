(function full(win, doc) {
    'use strict';

    // localStorage.setItem("Nome", "José");
    // let n = localStorage.getItem("Nome");
    // console.log(n);

    // localStorage.removeItem("Nome");

    // let h1 = doc.getElementById('nome');
    // let input = doc.getElementById('input');


    onload = function () {
        let nome = localStorage.getItem("nome");
        let h1 = doc.getElementById('nome');
        h1.innerHTML = nome;

    }

    let valor = input.value;
    let button = doc.querySelector('#gravar');
    // console.log(button);

    // input.addEventListener('input', function () {
    //     let valor = input.value;
    //     // console.log(valor);

    //     let h1 = doc.getElementById('nome');
    //     h1.innerHTML = valor;

    //     localStorage.setItem('nome', valor);
    // });

    button.addEventListener('click', function () {
        let h1 = document.querySelector('#nome');
        let valor = input.value;



        if (h1.innerHTML == '') {
            h1.innerHTML = `AIT: ${valor}`;
        } else {

            let elementFather = doc.body;
            let titulo = doc.createElement('p');
            titulo.innerHTML = valor;

            elementFather.appendChild(titulo)
        }


        localStorage.setItem('nome', valor)

    })

    clear.addEventListener('click', function () {



        let h1 = doc.getElementById('nome');
        h1.innerHTML = valor;
        localStorage.removeItem('nome', valor);
    })


})(window, document);