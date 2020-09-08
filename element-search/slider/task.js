
const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const next = document.getElementsByClassName('slider__arrow_next')[0];
const item = document.getElementsByClassName('slider__item');


let counter = 0;

function activeSlide() {
    item[counter].className = 'slider__item slider__item_active';
}

prev.onclick = function() {
    item[counter].className = 'slider__item';
    counter--;
    if (counter <0) {
        counter = item.length -1;
    }
    activeSlide();
}

next.onclick = function() {
    item[counter].className = 'slider__item';
    counter++;
    if (counter >= item.length) {
        counter = 0;
    }
    activeSlide();
}
