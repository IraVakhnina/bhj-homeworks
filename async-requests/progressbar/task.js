const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', e => {

    e.preventDefault();
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total * 100;
    });

    request.upload.addEventListener('loadend', () => {
        progress.value = 1;
    });

    request.send(formData);
})
