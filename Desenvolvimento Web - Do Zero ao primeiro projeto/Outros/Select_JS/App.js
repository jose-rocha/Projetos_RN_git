(function full(win, doc){
    let Reclamacao = doc.getElementById('Reclamacao');
    let NewIdeias = doc.getElementById('NewIdeias');
    let select2 = doc.getElementById('select2')

    let option = doc.createElement('option');
    let option2 = doc.createElement('option');

    Reclamacao.addEventListener('click', ()=>{

        option.innerHTML = 'Problema no Sistema';
        option.value = 'Problema no Sistema';
        option2.innerHTML = 'Sistema Lento/Oscilado';
        option2.value = 'Sistema Lento/Oscilado'

        select2.append(option, option2);
        console.log(option, option2);

    });

    NewIdeias.addEventListener('click', ()=>{

        option.innerHTML =  'Minimizar os Processos';
        option.value = 'Minimizar os Processos';
        option2.innerHTML = 'Agilizar processos';
        option2.value = 'Agilizar processos';

        select2.append(option, option2);
        console.log(option, option2);


    })

})
(window, document);