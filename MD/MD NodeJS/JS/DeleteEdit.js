(function Delete(win, doc) {
    'use strict';

    if (doc.querySelectorAll('.Delete')) {
        for (let i = 0; i < doc.querySelectorAll('.Delete').length; i++) {
            doc.querySelectorAll('.Delete')[i].addEventListener('click', function (e) {
                if (confirm("Você deseja mesmo apagar essa nota do Sistema?")) {
                    return true;
                } else {
                    e.preventDefault();
                }
            })
        }
    }

})(window, document);