let formContainer = document.querySelector('.form-container');
let button = document.querySelector('.button-send');

button.addEventListener('click', function (event) {
    let input = document.querySelector('.input');
    let errorMessage = document.querySelector('.error-message');
    let errorLogo = document.querySelector('.error-logo');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    let hayError = false;

    if (input.value.trim() === '') {
        hayError = true;
    }else if (!emailRegex.test(input.value.trim())) { //Validancion de email
        hayError = true;
        errorMessage.textContent = 'Please enter a valid email address'; //Sustituye el mensaje por defectod el navegador
    }

    if (hayError) {
        if (!formContainer.classList.contains('error')) {
            formContainer.classList.add('error');
            errorLogo.style.display = 'block';
            errorMessage.style.display = 'block';
        }
        event.preventDefault(); // Evita que el formulario se envíe si hay error
    }
    
});

// Agregar evento para ocultar errores cuando el usuario empiece a escribir
document.querySelector('.input').addEventListener('input', function () { //Este eventListener 'input' sirve para escuchar si se escribe
    let errorMessage = document.querySelector('.error-message');
    let errorLogo = document.querySelector('.error-logo');

    if (formContainer.classList.contains('error')) {
        formContainer.classList.remove('error');
        errorLogo.style.display = 'none';
        errorMessage.style.display = 'none';
    }
});