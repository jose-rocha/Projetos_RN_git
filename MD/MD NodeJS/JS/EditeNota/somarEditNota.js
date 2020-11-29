(function somarVal(win, doc) {
    'use strict'

    let quant1 = doc.querySelector('#quant1');
    quant1.addEventListener('keyup', function () {
        if (quant1.value == '') {
            quant1.value = 0;
        }
    }, false);

    console.log(quant1.value)

    let descricao1 = doc.querySelector('#descricao1');

    let precoUni1 = doc.querySelector('#precoUni1');
    precoUni1.addEventListener('keyup', function () {
        if (precoUni1.value == '') {
            precoUni1.value = 0;
        }
    }, false);

    let frete1 = doc.querySelector('#frete1');
    frete1.addEventListener('keyup', function () {
        if (frete1.value == '') {
            frete1.value = 0;
        }
    }, false);

    let result = doc.querySelector('#result');



    //responsavel pela linha valor final da linha 1



    precoUni1.addEventListener('keyup', function () {
        let multQuant1ePrecouni1 = parseInt(quant1.value) * parseInt(precoUni1.value);
        let multQuant1ePrecouni1s = multQuant1ePrecouni1.toFixed(2);

        if (precoUni1.value == '') {
            multQuant1ePrecouni1s = `...`;
        }

        result.innerHTML = `R$${multQuant1ePrecouni1s} `;



        frete1.addEventListener('keyup', function () {

            let juntos1 = parseInt(quant1.value) * parseInt(precoUni1.value) + parseInt(frete1.value);
            let juntos1s = juntos1.toFixed(2)

            if (frete1.value == '') {
                juntos1s = `...`;
            }
            let result1s = result.innerHTML = `R$${juntos1s} `;





        }, false);

    }, false);





    /* ------------- Fim da  function valorFina1()  ------------------------ */


    let quant2 = doc.querySelector('#quant2');
    quant2.addEventListener('keyup', function () {
        if (quant2.value == '') {
            quant2.value = 0;
        }
    }, false);

    let descricao2 = doc.querySelector('#descricao2');

    let precoUni2 = doc.querySelector('#precoUni2');
    precoUni2.addEventListener('keyup', function () {
        if (precoUni2.value == '') {
            precoUni2.value = 0;
        }
    }, false);

    let frete2 = doc.querySelector('#frete2');
    frete2.addEventListener('keyup', function () {
        if (frete2.value == '') {
            frete2.value = 0;
        }
    }, false);

    let result2 = doc.querySelector('#result2');



    //responsavel pela linha valor final da linha 2



    precoUni2.addEventListener('keyup', function () {
        let multQuant1ePrecouni2 = parseInt(quant2.value) * parseInt(precoUni2.value);
        let multQuant1ePrecouni2s = multQuant1ePrecouni2.toFixed(2);

        if (precoUni2.value == '') {
            multQuant1ePrecouni2s = `...`;
        }

        result2.innerHTML = `R$ ${multQuant1ePrecouni2s}`;



        frete2.addEventListener('keyup', function () {
            let juntos2 = parseInt(quant2.value) * parseInt(precoUni2.value) + parseInt(frete2.value);
            let juntas2 = juntos2.toFixed(2);

            if (frete2.value == '') {
                juntas2 = `...`;
            }

            result2.innerHTML = `R$ ${juntas2}`
        }, false)
    }, false);

    /* ----------------Fim da  function valorFina2()------------------------- */



    let quant3 = doc.querySelector('#quant3');
    quant3.addEventListener('keyup', function () {
        if (quant3.value == '') {
            quant3.value = 0;
        }
    }, false);

    let descricao3 = doc.querySelector('#descricao3');
    // descricao3.value = 0;
    let precoUni3 = doc.querySelector('#precoUni3');
    precoUni3.addEventListener('keyup', function () {
        if (precoUni3.value == '') {
            precoUni3.value = 0;
        }
    }, false);

    let frete3 = doc.querySelector('#frete3');
    frete3.addEventListener('keyup', function () {
        if (frete3.value == '') {
            frete3.value = 0;
        }
    }, false);

    let result3 = doc.querySelector('#result3');


    //responsavel pela linha valor final da linha 3


    precoUni3.addEventListener('keyup', function () {
        let multQuant1ePrecouni3 = parseInt(quant3.value) * parseInt(precoUni3.value);
        let multQuant1ePrecouni3s = multQuant1ePrecouni3.toFixed(2);

        if (precoUni3.value == '') {
            multQuant1ePrecouni3s = '...';
        }

        result3.innerHTML = `R$ ${multQuant1ePrecouni3s}`;



        frete3.addEventListener('keyup', function () {
            let juntos3 = parseInt(quant3.value) * parseInt(precoUni3.value) + parseInt(frete3.value);
            let juntos3s = juntos3.toFixed(2);

            if (frete3.value == '') {
                juntos3s = '...'
            }
            result3.innerHTML = `R$ ${juntos3s}`;
        }, false);
    }, false);

    /* ----------------Fim da  function valorFina3()------------------------- */

    let quant4 = doc.querySelector('#quant4');
    quant4.addEventListener('keyup', function () {
        if (quant4.value == '') {
            quant4.value = 0;
        }
    }, false);

    let descricao4 = doc.querySelector('#descricao4');

    let precoUni4 = doc.querySelector('#precoUni4');
    precoUni4.addEventListener('keyup', function () {
        if (precoUni4.value == '') {
            precoUni4.value = 0;
        }
    }, false);

    let frete4 = doc.querySelector('#frete4');
    frete4.addEventListener('keyup', function () {
        if (frete4.value == '') {
            frete4.value = 0;
        }
    }, false);

    let valor_final4 = doc.querySelector('#valor_final4');

    let result4 = doc.querySelector('#result4');


    //responsavel pela linha valor final da linha 4



    precoUni4.addEventListener('keyup', function () {
        let multQuant4ePrecouni4 = parseInt(quant4.value) * parseInt(precoUni4.value);
        let multQuant4ePrecouni4s = multQuant4ePrecouni4.toFixed(2);

        if (precoUni4.value == '') {
            multQuant1ePrecouni4s = `...`;
        }

        result4.innerHTML = `R$ ${multQuant4ePrecouni4s}`;




        frete4.addEventListener('keyup', function () {
            let juntos4 = parseInt(quant4.value) * parseInt(precoUni4.value) + parseInt(frete4.value);
            let juntos4s = juntos4.toFixed(2);

            if (frete4.value == '') {
                juntos4s = `...`;
            }

            result4.innerHTML = `R$ ${juntos4s}`
        }, false);
    }, false);

    /* ----------------Fim da  function valorFina4()------------------------- */

    let quant5 = doc.querySelector('#quant5');
    quant5.addEventListener('keyup', function () {
        if (quant5.value == '') {
            quant5.value = 0;
        }
    }, false);

    let descricao5 = doc.querySelector('#descricao5');
    // descricao5.value = 0;
    let precoUni5 = doc.querySelector('#precoUni5');
    precoUni5.addEventListener('keyup', function () {
        if (precoUni5.value == '') {
            precoUni5.value = 0;
        }
    }, false);

    let frete5 = doc.querySelector('#frete5');
    frete5.addEventListener('keyup', function () {
        if (frete5.value == '') {
            frete5.value = 0;
        }
    }, false);

    let result5 = doc.querySelector('#result5');

    //responsavel pela linha valor final da linha 5



    precoUni5.addEventListener('keyup', function () {
        let multQuant5ePrecouni5 = parseInt(quant5.value) * parseInt(precoUni5.value);
        let multQuant5ePrecouni5s = multQuant5ePrecouni5.toFixed(2);

        if (precoUni5.value == '') {
            multQuant5ePrecouni5s = `...`;
        }
        result5.innerHTML = `R$ ${multQuant5ePrecouni5s}`;



        frete5.addEventListener('keyup', function () {
            let juntos5 = parseInt(quant5.value) * parseInt(precoUni5.value) + parseInt(frete5.value);
            let juntos5s = juntos5.toFixed(2);

            if (frete5.value == '') {
                juntos5s = `...`;
            }

            result5.innerHTML = `R$ ${juntos5s}`;
        }, false);

    }, false);

    /* ----------------Fim da  function valorFina5()------------------------- */


    let quant6 = doc.querySelector('#quant6');
    quant6.addEventListener('keyup', function () {
        if (quant6.value == '') {
            quant6.value = 0;
        }
    }, false);

    let descricao6 = doc.querySelector('#descricao6');

    let precoUni6 = doc.querySelector('#precoUni6');
    precoUni6.addEventListener('keyup', function () {
        if (precoUni6.value == '') {
            precoUni6.value = 0;
        }
    }, false);

    let frete6 = doc.querySelector('#frete6');
    frete6.addEventListener('keyup', function () {
        if (frete6.value == '') {
            frete6.value = 0;
        }
    }, false);

    let result6 = doc.querySelector('#result6');



    //responsavel pela linha valor final da linha 6



    precoUni6.addEventListener('keyup', function () {
        let multQuant6ePrecouni6 = parseInt(quant6.value) * parseInt(precoUni6.value);
        let multQuant6ePrecouni6s = multQuant6ePrecouni6.toFixed(2);

        if (precoUni6.value == '') {
            multQuant6ePrecouni6s = '...';
        }

        result6.innerHTML = `R$ ${multQuant6ePrecouni6s}`;



        frete6.addEventListener('keyup', function () {
            let juntos6 = parseInt(quant6.value) * parseInt(precoUni6.value) + parseInt(frete6.value);
            let juntos6s = juntos6.toFixed(2);

            if (frete6.value == '') {
                juntos6s = `...`;
            }


            result6.innerHTML = `R$ ${juntos6s}`;
        }, false);
    }, false);


    /* ----------------Fim da  function valorFina6()------------------------- */

    let quant7 = doc.querySelector('#quant7');
    quant7.addEventListener('keyup', function () {
        if (quant7.value == '') {
            quant7.value = 0;
        }
    }, false);

    let descricao7 = doc.querySelector('#descricao7');

    let precoUni7 = doc.querySelector('#precoUni7');
    precoUni7.addEventListener('keyup', function () {
        if (precoUni7.value == '') {
            precoUni7.value = 0;
        }
    }, false);

    let frete7 = doc.querySelector('#frete7');
    frete7.addEventListener('keyup', function () {
        if (frete7.value == '') {
            frete7.value = 0;
        }
    }, false);

    let result7 = doc.querySelector('#result7');

    //responsavel pela linha valor final da linha 7


    precoUni7.addEventListener('keyup', function () {
        let multQuant7ePrecouni7 = parseInt(quant7.value) * parseInt(precoUni7.value);
        let multQuant7ePrecouni7s = multQuant7ePrecouni7.toFixed(2);

        if (frete7.value == '') {
            multQuant7ePrecouni7s = `...`;
        }
        result7.innerHTML = `R$ ${multQuant7ePrecouni7s}`;



        frete7.addEventListener('keyup', function () {
            let juntos7 = parseInt(quant7.value) * parseInt(precoUni7.value) + parseInt(frete7.value);
            let juntos7s = juntos7.toFixed(2);

            if (frete7.value == '') {
                juntos7s = `...`;
            }

            result7.innerHTML = `R$ ${juntos7s}`
        }, false);
    }, false);
    /* ----------------Fim da  function valorFina7()------------------------- */

    let quant8 = doc.querySelector('#quant8');
    quant8.addEventListener('keyup', function () {
        if (quant8.value == '') {
            quant8.value = 0;
        }
    }, false);

    let descricao8 = doc.querySelector('#descricao8');

    let precoUni8 = doc.querySelector('#precoUni8');
    precoUni8.addEventListener('keyup', function () {
        if (precoUni8.value == '') {
            precoUni8.value = 0;
        }
    }, false);

    let frete8 = doc.querySelector('#frete8');
    frete8.addEventListener('keyup', function () {
        if (frete8.value == '') {
            frete8.value = 0;
        }
    }, false);

    let result8 = doc.querySelector('#result8');

    //responsavel pela linha valor final da linha 8



    precoUni8.addEventListener('keyup', function () {
        let multQuant8ePrecouni8 = parseInt(quant8.value) * parseInt(precoUni8.value);
        let multQuant8ePrecouni8s = multQuant8ePrecouni8.toFixed(2);

        if (precoUni8.value == '') {
            multQuant8ePrecouni8s = `...`;
        }

        result8.innerHTML = `R$ ${multQuant8ePrecouni8s}`;



        frete8.addEventListener('keyup', function () {
            let juntos8 = parseInt(quant8.value) * parseInt(precoUni8.value) + parseInt(frete8.value);
            let juntos8s = juntos8.toFixed(2);

            if (frete8.value == '') {
                juntos8s = `...`;
            }

            result8.innerHTML = `R$ ${juntos8s}`;
        }, false);
    }, false);

    /* ----------------Fim da  function valorFina8()------------------------- */

    // console.log(`Verificação da nota ${}`)



})(window, document);