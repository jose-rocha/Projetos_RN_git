// // Bollean
// // Null
// // Undefined
// // Number
// // String

// var linhas = "Primeira linha \nSegunda linha"
// var a = null;

// // console.log(typeof (a));
// console.log(linhas);
// console.log(a)

(function input(win, doc) {
    'use strict';

    let text = doc.querySelector('#text');
    // console.log(text);
    let result = doc.querySelector('.result');

    text.addEventListener('keyup', function () {

        result.innerHTML = text.value;

    }, false)


})(window, document)
