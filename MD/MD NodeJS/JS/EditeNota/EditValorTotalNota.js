(function totalNota(win, doc) {
    'use strict';

    let quant1 = doc.querySelector('#quant1');
    let precoUni1 = doc.querySelector('#precoUni1');
    let frete1 = doc.querySelector('#frete1');

    let resulttotalNota = doc.querySelector('#resulttotalNota');
    // console.log(resulttotalNota);



    frete1.addEventListener('keyup', function () {
        let somaTeste = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let somaTestes = somaTeste.toFixed(2);


        resulttotalNota.innerHTML = `R$ ${somaTestes}`;
    }, false);



    /* -------------------------------------------- */

    let quant2 = doc.querySelector('#quant2');
    let precoUni2 = doc.querySelector('#precoUni2');
    let frete2 = doc.querySelector('#frete2');

    frete2.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let somaValFinal1EValFinal2 = valor_final1 + valor_final2;
        let somaValFinal1EValFinal2s = somaValFinal1EValFinal2.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal1EValFinal2s}`;
    }, false)

    /* ------------------------------------------------------- */

    let quant3 = doc.querySelector('#quant3');
    let precoUni3 = doc.querySelector('#precoUni3');
    let frete3 = doc.querySelector('#frete3');

    frete3.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let valor_final3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
        let somaValFinal3EValFinal3 = valor_final1 + valor_final2 + valor_final3;
        let somaValFinal3EValFinal3s = somaValFinal3EValFinal3.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal3EValFinal3s}`;
    }, false)

    /* ------------------------------------------------------- */

    let quant4 = doc.querySelector('#quant4');
    let precoUni4 = doc.querySelector('#precoUni4');
    let frete4 = doc.querySelector('#frete4');

    frete4.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let valor_final3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
        let valor_final4 = parseInt(quant4.value) * parseInt(precoUni4.value) + parseInt(frete4.value);
        let somaValFinal4EValFinal4 = valor_final1 + valor_final2 + valor_final3 + valor_final4;
        let somaValFinal4EValFinal4s = somaValFinal4EValFinal4.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal4EValFinal4s}`;
    }, false);

    /* ------------------------------------------------------- */

    let quant5 = doc.querySelector('#quant5');
    let precoUni5 = doc.querySelector('#precoUni5');
    let frete5 = doc.querySelector('#frete5');

    frete5.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let valor_final3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
        let valor_final4 = parseInt(quant4.value) * parseInt(precoUni4.value) + parseInt(frete4.value);
        let valor_final5 = parseInt(quant5.value) * parseInt(precoUni5.value) + parseInt(frete5.value);
        let somaValFinal5EValFinal5 = valor_final1 + valor_final2 + valor_final3 + valor_final4 + valor_final5;
        let somaValFinal5EValFinal5s = somaValFinal5EValFinal5.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal5EValFinal5s}`;
    }, false);

    /* ------------------------------------------------------- */

    let quant6 = doc.querySelector('#quant6');
    let precoUni6 = doc.querySelector('#precoUni6');
    let frete6 = doc.querySelector('#frete6');

    frete6.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let valor_final3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
        let valor_final4 = parseInt(quant4.value) * parseInt(precoUni4.value) + parseInt(frete4.value);
        let valor_final5 = parseInt(quant5.value) * parseInt(precoUni5.value) + parseInt(frete5.value);
        let valor_final6 = parseInt(quant6.value) * parseInt(precoUni6.value) + parseInt(frete6.value);
        let somaValFinal6EValFinal6 = valor_final1 + valor_final2 + valor_final3 + valor_final4 + valor_final5 + valor_final6;
        let somaValFinal6EValFinal6s = somaValFinal6EValFinal6.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal6EValFinal6s}`;
    }, false);

    /* ------------------------------------------------------- */

    let quant7 = doc.querySelector('#quant7');
    let precoUni7 = doc.querySelector('#precoUni7');
    let frete7 = doc.querySelector('#frete7');

    frete7.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let valor_final3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
        let valor_final4 = parseInt(quant4.value) * parseInt(precoUni4.value) + parseInt(frete4.value);
        let valor_final5 = parseInt(quant5.value) * parseInt(precoUni5.value) + parseInt(frete5.value);
        let valor_final6 = parseInt(quant6.value) * parseInt(precoUni6.value) + parseInt(frete6.value);
        let valor_final7 = parseInt(quant7.value) * parseInt(precoUni7.value) + parseInt(frete7.value);
        let somaValFinal7EValFinal7 = valor_final1 + valor_final2 + valor_final3 + valor_final4 + valor_final5 + valor_final6 + valor_final7;
        let somaValFinal7EValFinal7s = somaValFinal7EValFinal7.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal7EValFinal7s}`;
    }, false);

    /* ------------------------------------------------------- */

    let quant8 = doc.querySelector('#quant8');
    let precoUni8 = doc.querySelector('#precoUni8');
    let frete8 = doc.querySelector('#frete8');

    frete8.addEventListener('keyup', function () {
        let valor_final1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
        let valor_final2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
        let valor_final3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
        let valor_final4 = parseInt(quant4.value) * parseInt(precoUni4.value) + parseInt(frete4.value);
        let valor_final5 = parseInt(quant5.value) * parseInt(precoUni5.value) + parseInt(frete5.value);
        let valor_final6 = parseInt(quant6.value) * parseInt(precoUni6.value) + parseInt(frete6.value);
        let valor_final7 = parseInt(quant7.value) * parseInt(precoUni7.value) + parseInt(frete7.value);
        let valor_final8 = parseInt(quant8.value) * parseInt(precoUni8.value) + parseInt(frete8.value);
        let somaValFinal8EValFinal8 = valor_final1 + valor_final2 + valor_final3 + valor_final4 + valor_final5 + valor_final6 + valor_final7 + valor_final8;
        let somaValFinal8EValFinal8s = somaValFinal8EValFinal8.toFixed(2);

        resulttotalNota.innerHTML = `R$ ${somaValFinal8EValFinal8s}`;
    }, false);


})(window, document);