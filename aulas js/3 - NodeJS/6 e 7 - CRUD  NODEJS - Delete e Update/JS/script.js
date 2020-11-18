(function deletar(win, doc) {
    'use strict'

    if (doc.querySelectorAll('.delete')) {
        for (let i = 0; i < doc.querySelectorAll('.delete').length; i++) {
            doc.querySelectorAll('.delete')[i].addEventListener('click', function (e) {
                if (confirm('Tem certeza que quer deletar o item da lista?')) {
                    return true;
                } else {
                    e.preventDefault();
                };
            })
        }
    }


})(window, document)