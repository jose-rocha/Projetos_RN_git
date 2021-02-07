(function some(win, doc) {
    'use strict';

    let SelecioneUmaDasopcoes = doc.querySelector('#SelecioneUmaDasopcoes');
    let Elogio = doc.querySelector('#Elogio');
    let Informacao = doc.querySelector("#Informacao");
    let Reclamacao = doc.querySelector('#Reclamacao');

    let assunto = doc.querySelector('.assunto');



    /* -------------------------------------------------- */

    // SelecioneUmaDasopcoes.addEventListener('click', function () {

    //     let opcoes = 'Selecione as opções';

    //     let newOption = doc.createElement('option').innerText = '<option value"' + opcoes + '">' +
    //         opcoes + "</option";


    //     assunto.innerHTML = newOption;

    // }, false);

    /* -------------------------------------------------- */

    Elogio.addEventListener('click', function () {

        let opcoes = 'Selecione uma das Opções de Elogio';


        let newOption = doc.createElement('option').innerText = '<option  value"' + opcoes + '" selected disabled=""  >' + opcoes + "</option>";


        let opcoes2 = 'Motorista Atencioso';


        let newOption2 = doc.createElement('option').innerText = '<option value"' + opcoes2 + '"  >' + opcoes2 + "</option>";


        assunto.innerHTML = newOption + newOption2;


    }, false);

    /* --------------------------------------------------------- */

    Informacao.addEventListener('click', function () {
        let opcoes = 'Selecione uma das Opções Informações';

        let newOption = doc.createElement('option').innerText = '<option value"' + opcoes + '" selected disabled="" >' + opcoes + "</option>";

        let opcoes2 = 'Quanto custa nova recarga';

        let newOption2 = doc.createElement('option').innerText = '<option value"' + opcoes2 + '"  >' + opcoes2 + "</option>";


        assunto.innerHTML = newOption + newOption2;

    }, false);


    /* --------------------------------------------------------- */
    Reclamacao.addEventListener('click', function () {
        let opcoes = 'Selecione uma das Opções de Reclamação';

        let newOption = doc.createElement('option').innerText = '<option value"' + opcoes + '" selected disabled="" >' + opcoes + "</option>";

        assunto.innerHTML = newOption;
    }, false);



})(window, document);