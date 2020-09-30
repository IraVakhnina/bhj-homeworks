let input = document.getElementById('task__input');
let tasksAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

input.onkeydown = function(e) {
    input.value.trim();
    let enter = String(e.key);
    if (enter === 'Enter' && (input.value !== '')) {
        addTask();
    }
}

tasksAdd.onclick = function(e) {
    e.preventDefault();
    input.value.trim();
    if (input.value !== '') {
        addTask();
    }
}

function addTask() {
    let task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`;
        tasksList.insertAdjacentElement('beforeend', task);
        document.forms[0].reset();
        let elementRemove = task.lastChild;
        elementRemove.onclick = function() {
            task.remove();
        }  
}