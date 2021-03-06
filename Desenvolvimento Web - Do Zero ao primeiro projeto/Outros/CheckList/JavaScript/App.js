(function full(win, doc) {
    'use strict';

    let texto = doc.querySelector('.texto');
    texto.innerHTML = '';
    let checkbox = doc.querySelector('.checkbox');
    // console.log(checkbox);


    // checkbox.checked == '0';



    if (checkbox.checked == '0') {
        texto.innerHTML = 'Pedente';
        texto.style.color = 'red';

    } else {
        texto.innerHTML = 'Ok';
        texto.style.color = 'green';

    }

    checkbox.addEventListener('click', function () {
        if (checkbox.checked == '0') {
            texto.innerHTML = 'Pedente';
            texto.style.color = 'red';

        } else {
            texto.innerHTML = 'Ok';
            texto.style.color = 'green';

        }



    })









})(window, document)