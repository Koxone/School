let form = document.querySelector('.form-container');
let button = document.querySelector('.button-free');
let buttonStarted = document.querySelector('.button-started');
let input = document.querySelector('.input');
let hayError = false;

button.addEventListener('click', function (event) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Validacion comun de email
    if (input.value.trim() === '') {
        hayError = true;
        form.classList.add('error');
    }

    if (hayError) {
        if (!form.classList.contains('error')) {
            form.classList.add('error');
            errorMessage.style.display = 'block';
        }
        event.preventDefault(); // Evita que el formulario se envíe si hay error
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos
    let buttonStarted = document.querySelector(".button-started");
    let buttonFree = document.querySelector(".button-free");
    let inputField = document.querySelector(".input");

    // Agregar evento de click al botón "Get Started"
    buttonStarted.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento por defecto

        // Desplazarse suavemente hasta el input
        inputField.scrollIntoView({ behavior: "smooth", block: "center" });

        // Agregar efecto de resalte
        inputField.classList.add("highlight-input");

        // Eliminar el efecto después de 2 segundos
        setTimeout(() => {
            inputField.classList.remove("highlight-input");
        }, 2000);
    });
});
