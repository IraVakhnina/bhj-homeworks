let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let close = document.getElementsByClassName('modal__close');



console.log(close);
modalMain.classList.add('modal_active');

for (let i = 0; i < close.length; i++ ) {
    close[i].onclick = function() {
        this.closest('div[id]').classList.remove('modal_active');
    }
}


let success = close.item(1);
success.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}
console.log(success);
