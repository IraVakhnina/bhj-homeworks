let input = document.getElementById('task__input');
let tasksAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

input.onkeydown = function(e) {
    input.value.trim();
    let enter = String(e.key);
    if (enter === 'Enter' && (input.value !== '')) {
        toDo();
    }
}

tasksAdd.onclick = function(e) {
    e.preventDefault();
    input.value.trim();
    if (input.value !== '') {
        toDo();
    }
}

function toDo() {
    let todo = document.createElement('div');
        todo.className = 'task';
        todo.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`;
        tasksList.insertAdjacentElement('beforeend', todo);
        document.forms[0].reset();
        let elementRemove = todo.lastChild;
        elementRemove.onclick = function() {
            todo.remove();
        }  
}