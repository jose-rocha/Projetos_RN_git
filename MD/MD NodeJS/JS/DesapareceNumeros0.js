(function tranparentZero(win, doc) {
    "use strict";


    /* Deasparece com os numeros que forem zero na  nota MD*/

    let quant = doc.querySelectorAll('td');
    for (let q = 0; q < quant.length; q++) {
        if (quant[q].innerText == '0') {

            quant[q].style.color = 'transparent';
        }
    }

    /* --------------------------------- */

    let precoUni = doc.querySelectorAll('td');
    for (let p = 0; p < precoUni.length; p++) {
        if (precoUni[p].innerText == 'R$ 0,00') {
            precoUni[p].style.color = 'transparent';
        }
    }


})(window, document);


