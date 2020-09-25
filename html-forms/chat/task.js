
const chat = document.querySelector('.chat-widget');

chat.addEventListener('click', (event) => {
    chat.classList.add('chat-widget_active');
});


const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const answer = [
    'Добрый день! До свидания!',
    'Кто тут?',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Мы ничего не будем вам продавать',
];


input.addEventListener('keydown', (event) => {

    if (event.code === "Enter" && input.value != '') {

        const i = Math.floor(Math.random() * answer.length);

        messages.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
				<div class="message__text">${input.value}</div>
			</div>  
			<div class="message">
				<div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
				<div class="message__text">${answer[i]}</div>
			</div>`;
        input.value = '';
    }
});