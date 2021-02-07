(function full(win, doc) {
    'use strict';

    let idade = doc.getElementById('idade');
    console.log(idade);
    let verify = doc.getElementById('verify');
    console.log(verify);
    let ressult = doc.getElementById('ressult');
    console.log(ressult);

    verify.addEventListener('click', function () {

        if (idade.value < 18) {
            alert('Você precisa ter 18 anos de idade para esta ação')
            ressult.innerHTML = 'Volte quando tiver 18 anos de idade!';
            ressult.style.color = 'red';
        } else {
            alert('Parabéns, você é de maior!')
            ressult.innerHTML = 'Qual é a bebida que vai querer?';
            ressult.style.color = 'green';
        }


    }, false)



})(window, document);