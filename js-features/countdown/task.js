'use strict';

const timer = document.getElementById('timer');

const count = function() {
    
    timer.textContent = timer.textContent - 1;
    if (timer.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countSec);
        timer.textContent = 0;
    }
}

const countSec = setInterval(count, 1000);