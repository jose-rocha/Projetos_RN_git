(function full(win, doc) {
    'use strict';

    let container = doc.querySelector('.container');
    console.log(container)

    let r1 = doc.querySelector('.r1');
    let r2 = doc.querySelector('.r2');
    let r3 = doc.querySelector('.r3');

    let mudaPosition = doc.getElementById('mudaPosition');

    mudaPosition.addEventListener('click', () => {
        container.style.alignItems = 'center';

        let spaceAround = () => { container.style.justifyContent = 'space-around' };
        let bgColor = () => { container.style.backgroundColor = 'gray' }
        let evenly = ()=> {container.style.justifyContent = 'spaceEvenly'}

        // setTimeout(spaceAround, 2000);
        setTimeout(bgColor, 2000);
        setTimeout(evenly, 4000);

    }, false);



})(window, document);