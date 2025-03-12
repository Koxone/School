let button = document.querySelector('.button-notify');
let input = document.querySelector('.input');
let form = document.querySelector('.form');

button.addEventListener('click', function (evento) {

    let hayError = false;

    if (input.value.trim() === "") {
        hayError = true;
        form.classList.add('error');
        evento.preventDefault();
    }

input.addEventListener('keydown', function(evento) {

    if (evento.key === 'Enter' && this.value.trim() === "") {
        hayError = true;
        form.classList.add('error');
        evento.preventDefault();

    }
})
})

