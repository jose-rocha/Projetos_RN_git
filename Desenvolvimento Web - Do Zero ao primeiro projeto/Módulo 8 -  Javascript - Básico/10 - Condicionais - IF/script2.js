(function full(win, doc) {
    'use strict';
    let aluno1 = doc.querySelector('.aluno1');
    console.log(aluno1);

    let nota1 = doc.querySelector('.nota1');
    let nota2 = doc.querySelector('.nota2');
    console.log(nota1);

    if (aluno1.textContent == "A nota do aluno 1 é igual á 6 ") {
        nota1.textContent = "Aluno reprovado";
    }

    let som = doc.querySelector('.som');
    let sub = doc.querySelector('.sub');

    let result = doc.querySelector('.result');
    result.innerHTML = 0;

    console.log(result);

    let x = 1;




    som.addEventListener('click', function () {

        let q = x++;

        result.innerHTML = q;



    }, false);

    sub.addEventListener('click', function () {




        if (result.innerHTML <= 0) {
            result.innerHTML = 0;
        } else {
            let s = --x;

            result.innerHTML = s - 1;

        }
    }, false)



})(window, document);