let items = document.getElementById('items');
let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');

request.onreadystatechange = function () {
	if (request.readyState === 4 && request.status === 200) {
		let loader = document.getElementById('loader');
        loader.classList.remove('loader_active');
        let text = JSON.parse(request.responseText);
        let textAll = text.response.Valute;
        for(valute in textAll) {
        	let itemEl = document.createElement('div');
        	itemEl.className = 'item';
        	items.insertAdjacentElement('beforeend', itemEl);
        	let div = document.createElement('div');
        	itemEl.insertAdjacentElement('beforeend', div);
            div.className = 'item__code';
            div.textContent = textAll[valute].CharCode;
            let div1 = document.createElement('div');
            div1.className = 'item__value';
            itemEl.insertAdjacentElement('beforeend', div1);
            div1.textContent = textAll[valute].Value;
            let div2 = document.createElement('div');
            div2.className = 'item__currency';
            itemEl.insertAdjacentElement('beforeend', div2);
            div2.textContent = 'руб.';
        }
	}
}

request.send();