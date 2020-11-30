(function (win, doc) {
    'use strict';

    let dadosTabela = doc.querySelector('#dadosTabela').childNodes;
    let Search = doc.querySelector('#Search');
    let filterKeyword = doc.createElement('tr');


    //     try {
    //         for (let i = 0; i < length; i++) {
    //             if (dadosTabela.nodeType != 1 && null != dadosTabela.nextSibling) {
    //                 if (dadosTabela.nextSibling.innerText == filterKeyword) {
    //                     let newtd = doc.createElement('td');
    //                     let newLiText = document.createTextNode(filterKeyword);
    //                     newtd.appendChild(newLiText);
    //                 }
    //             }
    //         }

    //         newFilteredUl.appendChild(newtd)
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     return newFilteredUl
    // }

    Search.addEventListener('keyup', function () {
        let Search = doc.querySelector('#Search').value;


    }, false);


})(window, document);

// length = dadosTabela.length;