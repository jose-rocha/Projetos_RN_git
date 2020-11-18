(function logar(win, doc) {
    'use strict'

    let form1 = doc.querySelector('#form1');
    let inpUser = doc.querySelector('#inpUser');
    let inpPass = doc.querySelector('#inpPass');
    let result = doc.querySelector('#result')
    // console.log(inpPass)

    function fazerLogin(e) {
        e.preventDefault();
        // alert('clicou')
        if (inpUser.value == 1234 && inpPass.value == 1) {
            localStorage.setItem("acesso", true);
            window.location.href = '/Home/home.handlebars'

        } else {
            result.innerHTML = 'Usuário ou senha invalidos!'
        }

    }


    form1.addEventListener('submit', fazerLogin, false)


})(window, document)