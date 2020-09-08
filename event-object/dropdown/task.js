let list = Array.from(document.getElementsByClassName('dropdown__list'));
let item = Array.from(document.getElementsByClassName('dropdown__item'));
let link = Array.from(document.getElementsByClassName('dropdown__link'));

let dropdown = document.querySelector('.dropdown')
dropdown.onclick = function() {
    list[0].classList.toggle('dropdown__list_active');
}

let value = document.querySelector('.dropdown__value');

for (i = 0; i < item.length; i++) {
    link[i].onclick = function() {
        value.textContent = this.textContent;
        return false;
    }
}