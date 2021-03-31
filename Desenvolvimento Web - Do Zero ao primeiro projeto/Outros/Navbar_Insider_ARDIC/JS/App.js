(function nav(win, doc) {
    'use strict';


    // let op1 = doc.querySelector('.op1');
    // let op2 = doc.querySelector('.op2');
    // let op3 = doc.querySelector('.op3');
    // let op4 = doc.querySelector('.op4');
    // let op5 = doc.querySelector('.op5');

    let op = doc.querySelectorAll('.op');
    let Login = doc.getElementsByTagName('button')[0];
    
    Login.addEventListener('click', ()=>{
        // alert(Login);
    }, false)



    for (let i = 0; i < op.length; i++) {
        op[i].addEventListener('click', function () {
            // console.log(op[i].innerHTML);
            alert(op[i].innerHTML);
        }, false)
    }




})(window, document);