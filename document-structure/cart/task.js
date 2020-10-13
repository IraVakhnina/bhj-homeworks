const products = document.querySelector('.products');
const basket = document.querySelector('.cart__products');

products.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('product__quantity-control')) {
        let value = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (e.target.classList.contains('product__quantity-control_inc')) {
            value.textContent++;
        } else if (e.target.classList.contains('product__quantity-control_dec')) {
            value.textContent--;
            if (value.textContent < 1) {
                value.textContent = 1;
            }
        }
    }

    if (e.target.classList.contains('product__add')) {
        let id = e.target.closest('.product').dataset.id;
        let item = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
        let image = e.target.closest('.product').querySelector('.product__image').getAttribute('src');

        if (basket.children.length !== 0 && basket.querySelector(`[data-id="${id}"]`)) {
            basket.querySelector(`[data-id="${id}"]`).querySelector('.cart__product-count').textContent = Number(basket.querySelector(`[data-id="${id}"]`).querySelector('.cart__product-count').textContent) + Number(item);
        } else {
            basket.innerHTML += `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${image}">
            <div class="cart__product-count">${item}</div>
            </div>`;
        }
    }
});