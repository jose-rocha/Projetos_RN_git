(function mascaraTel(win, doc) {
    'use strict';

    let telefone = doc.querySelector('#telefone');

    telefone.oninput = function () {
        let tel = telefone.value;

        if (tel.length == 2) {
            telefone.value = '(' + telefone.value + ')';
        }
        if (tel.length == 9) {
            telefone.value = telefone.value + '-';
        }
        // if (tel.length == 6) {
        //     telefone.value = 
        // }
    }
})(window, document)