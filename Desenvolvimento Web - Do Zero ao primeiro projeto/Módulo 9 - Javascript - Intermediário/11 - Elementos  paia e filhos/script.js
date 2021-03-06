(function full(win, doc) {
    'use strict';



    window.onload = function () {
        // let d1 = doc.getElementById('d1');
        // let h1 = d1.children[0]
        // let d2 = doc.getElementById('d2');

        // console.log(h1.parentElement);

        // console.log(doc.body.children[0].children);

        let h1 = doc.getElementsByTagName('h1');

        for (let h of h1) {
            // console.log(h);

            h.addEventListener('click', qop);
        }

        function qop(e) {
            let t = e.target;
            console.log(t.parentElement)
        }
    }


})(window, document);