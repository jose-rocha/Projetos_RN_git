
    let doc = document;
    let inputAit;
    let resultAit = doc.getElementById('resultAit');

//     function inicia(){
//     if(localStorage.AutoDeInfracao){
//         inputAit = localStorage.getItem('AutoDeInfracao');
//         resultAit.innerHTML = inputAit;
//         let inputAitHelp = document.getElementById('inputAit');
//         inputAitHelp.style.display = 'none';
//     }
// }

//ok
    function gravarAit(){
    inputAit = doc.getElementById('inputAit');
        // console.log(inputAit);
       
        localStorage.setItem('AutoDeInfracao', inputAit.value);
        inputAit.style.display = 'none';
        resultAit.style.display = 'inline';
        location.href = 'index.html';
    }

    resultAit.addEventListener('click', ()=>{
        let inputAit = doc.getElementById('inputAit');
        inputAit.style.display = 'inline';
        resultAit.style.display ='none';
        inputAit.value = resultAit.textContent;
    });

    


    // window.addEventListener('load', inicia);

