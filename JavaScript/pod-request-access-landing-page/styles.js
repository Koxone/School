let button = document.querySelector('.request-button');
let mail = document.querySelector('.mail-container');

button.addEventListener('click', function (evento) {

    let field = document.querySelector('.input');
    let mensajeError = field.nextElementSibling;
    let hayError = false;

    if (field.value.trim() === '') {
        mail.classList.add('error');
        hayError = true;
    }

    if (hayError) {
        evento.preventDefault();
    }
   
});