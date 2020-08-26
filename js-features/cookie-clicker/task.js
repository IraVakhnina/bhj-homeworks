'use strict';


const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
	counter.textContent++;
	if (this.width === 200) {
    this.width += 20;
    this.height += 20;
  } else {
    this.width -= 20;
    this.height -= 20;
  }
}