let pollAnswers = document.getElementById('poll__answers');
let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');


request.onreadystatechange = function () {
	if(request.readyState === 4 && request.status === 200) {
		let json = JSON.parse(request.responseText);
		let pollTitle = document.getElementById('poll__title');
        pollTitle.textContent = json.data.title;
        for(let answer of json.data.answers) {
        	let button = document.createElement('button');
            button.className = 'poll__answer';
            pollAnswers.insertAdjacentElement('beforeend', button);
            button.textContent = answer;
        }

        let pollAnswerEl = document.getElementsByClassName('poll__answer');
        for(button of pollAnswerEl) {
        	button.onclick = function () {
        		alert('Спасибо, ваш голос засчитан!')
        	}
        }
	}
}

request.send();