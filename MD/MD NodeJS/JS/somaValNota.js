(function somarVal(win, doc) {
    'use strict'

    let quant1 = doc.querySelector('#quant1');
    quant1.value = 0;
    if (quant1.value == 0) {
        quant1.style.color = "red";
        console.log(`O valor de quant1 por enquanto é ${quant1.value} `);

        function remoValue() {
            quant1.value = '';
        }

        quant1.addEventListener('click', remoValue, false);
    }
    let descricao1 = doc.querySelector('#descricao1');
    // descricao1.value = 0;
    let precoUni1 = doc.querySelector('#precoUni1');
    precoUni1.value = 0;
    let frete1 = doc.querySelector('#frete1');
    frete1.value = 0;
    let result = doc.querySelector('#result');
    result.value = 0;




    //responsavel pela linha valor final da linha 1
    function valorFina1() {
        let multQuant1ePrecouni1 = parseInt(quant1.value) * parseInt(precoUni1.value);
        let multQuant1ePrecouni1s = multQuant1ePrecouni1.toFixed(2);

        if (precoUni1.value == '') {
            multQuant1ePrecouni1s = `...`;
        }

        result.innerHTML = `R$${multQuant1ePrecouni1s} `;


        function somar() {

            let juntos = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
            let juntas = juntos.toFixed(2)

            if (frete1.value == '') {
                juntas = `...`;
            }
            result.textContent = `R$${juntas} `;

        }
        frete1.addEventListener('keyup', somar, false);

    }

    precoUni1.addEventListener('keyup', valorFina1, false)

    /* ------------- Fim da  function valorFina1()  ------------------------ */


    let quant2 = doc.querySelector('#quant2');
    quant2.value = 0;
    let descricao2 = doc.querySelector('#descricao2');
    // descricao2.value = 0;
    let precoUni2 = doc.querySelector('#precoUni2');
    precoUni2.value = 0;
    let frete2 = doc.querySelector('#frete2');
    frete2.value = 0;
    let result2 = doc.querySelector('#result2');
    result2.value = 0;


    //responsavel pela linha valor final da linha 2
    function valorFina2() {
        let multQuant1ePrecouni2 = parseInt(quant2.value) * parseInt(precoUni2.value);
        let multQuant1ePrecouni2s = multQuant1ePrecouni2.toFixed(2);

        if (precoUni2.value == '') {
            multQuant1ePrecouni2s = `...`;
        }

        result2.innerHTML = `R$ ${multQuant1ePrecouni2s}`;

        function somar2() {
            let juntos2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
            let juntas2 = juntos2.toFixed(2);

            if (frete2.value == '') {
                juntas2 = `...`;
            }

            result2.innerHTML = `R$ ${juntas2}`
        }

        frete2.addEventListener('keyup', somar2, false)
    }


    precoUni2.addEventListener('keyup', valorFina2, false);

    /* ----------------Fim da  function valorFina2()------------------------- */



    let quant3 = doc.querySelector('#quant3');
    quant3.value = 0;
    let descricao3 = doc.querySelector('#descricao3');
    // descricao3.value = 0;
    let precoUni3 = doc.querySelector('#precoUni3');
    precoUni3.value = 0;
    let frete3 = doc.querySelector('#frete3');
    frete3.value = 0;
    let result3 = doc.querySelector('#result3');
    // result3.value = 0

    //responsavel pela linha valor final da linha
    function valorFina3() {
        let multQuant1ePrecouni3 = parseInt(quant3.value) * parseInt(precoUni3.value);
        let multQuant1ePrecouni3s = multQuant1ePrecouni3.toFixed(2);

        if (precoUni3.value == '') {
            multQuant1ePrecouni3s = '...';
        }

        result3.innerHTML = `R$ ${multQuant1ePrecouni3s}`;

        function somar3() {
            let juntos3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
            let juntos3s = juntos3.toFixed(2);

            if (frete3.value == '') {
                juntos3s = '...'
            }
            result3.innerHTML = `R$ ${juntos3s}`;
        }

        frete3.addEventListener('keyup', somar3, false);
    }

    precoUni3.addEventListener('keyup', valorFina3, false);

    /* ----------------Fim da  function valorFina3()------------------------- */

})(window, document);