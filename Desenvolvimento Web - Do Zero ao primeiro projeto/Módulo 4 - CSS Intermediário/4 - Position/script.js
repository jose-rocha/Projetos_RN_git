(function closed(win, doc) {
    'use strict';

    let sticky = doc.querySelector('.sticky');
    console.log(sticky);
    let b = doc.querySelector('.b');
    console.log(b);
    b.addEventListener('click', function () {
        setTimeout(function () { sticky.style.display = 'none' }, 3000)

    }, false);
})(window, document);