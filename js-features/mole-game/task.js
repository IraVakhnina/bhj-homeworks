'use striсt';

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole');

for (let i = 0; i < holes.length; i++) {
	holes[i].onclick = function () {
    if (holes[i].className.includes("hole_has-mole")) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
    if (dead.textContent == 10) {
      alert('Победа!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if (lost.textContent == 5) {
      alert('Проигрыш!');
      lost.textContent = 0;
      dead.textContent = 0;
    }
  }
}
