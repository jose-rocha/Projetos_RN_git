(function full(win, doc) {
    'use strict';

    // JSON (JavaScript Object Notation - Notação de Objetos JavaScript)

    //  Método stringify pega um objeto JSON e transforma numa string
    //  Método parse pega uma string e transforma num objeto JSON 

    let objeto = { nome: 'José', nota: '8.5' };
    let stingJSON = JSON.stringify(objeto);



    console.log(objeto);
    console.log(stingJSON);

    let string = '{ "Nome": "José", "Nota": "8.5" }';
    let objetoJson = JSON.parse(string);

    console.log(string);
    console.log(objetoJson);





})(window, document);