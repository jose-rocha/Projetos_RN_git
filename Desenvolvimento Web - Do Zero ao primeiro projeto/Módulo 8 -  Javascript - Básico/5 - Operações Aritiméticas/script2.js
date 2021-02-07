(function opcoes(win, doc) {
    'use strict';

    let nums = doc.querySelectorAll('.nums');
    // console.log(nums.length);



    for (let i = 0; i < nums.length; i++) {
        if (nums[i].innerHTML == '0') {
            nums[i].style.color = 'red';
        }
    }





})(window, document)