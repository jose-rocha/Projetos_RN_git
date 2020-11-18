(function (win, doc) {
    'use strict';

    let a = 'José';
    let b = 'BR7';
    let number1 = 5;
    let number2 = 10;
    let arr = [0, 1, 2, 'a', 3, 'b'];

    /*     doc.querySelector('.result').innerHTML = `${a} 
        e trabalha 
        na ${b}`; */

    /*  doc.querySelector('.result').innerHTML = '';
     arr.map((elem, ind, obj) => {
         doc.querySelector('.result').innerHTML += ` ${elem}  
 `
     }); */

    function tag(string, ...values) {
        console.log(`${values[1]} ${string[1]} ${values[0]}`)
    }
    tag`${a} trabalha na empresa ${b}`

})(window, document)