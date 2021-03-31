
// let resultAit = doc.getElementById('resultAit');


function iniciaVerAIT(){
    if(localStorage.AutoDeInfracao){
        // inputAit = localStorage.getItem
        resultAit.innerHTML =localStorage.getItem('AutoDeInfracao');
        let inputAitHelp = document.getElementById('inputAit');
        inputAitHelp.style.display = 'none'

    }

    
}




window.addEventListener('load', iniciaVerAIT);