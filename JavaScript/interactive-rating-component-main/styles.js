document.addEventListener("DOMContentLoaded", function () {
    const ratingButtons = document.querySelectorAll(".number");
    const submitButton = document.querySelector(".submit");
    const ratingContainer = document.querySelector(".general-container");
    const thankYouContainer = document.createElement("div"); 
    let selectedRating = null; 


    function selectRating(event) { 
        let i; 
        for (i = 0; i < ratingButtons.length; i++) { 
            ratingButtons[i].classList.remove("selected"); 
        }
       
        let clickedButton = event.target; 
        clickedButton.classList.add("selected"); 
        selectedRating = clickedButton.textContent; 
    }

    let j;
    for (j = 0; j < ratingButtons.length; j++) {
        ratingButtons[j].addEventListener('click', selectRating);
    } 

        // 4. Funcion para manejar el envio de la calificacion
        function submitRating() {
            if (selectedRating === null) {
                alert("Please select a rating before submitting");
                return;
            }
    
            // Ocultar la pantalla de calificacion
            ratingContainer.style.display = "none";
    
            // Agregar la clase al contenedor de agradecimiento
            thankYouContainer.classList.add("general-container");
    
            // Insertar el contenido de la pantalla de agradecimiento
            thankYouContainer.innerHTML = `
                <div class="thanks-phone-container">
                    <img src="images/illustration-thank-you.svg" alt="" class="phone-img">
                    <p class="rating">You selected ${selectedRating} out of 5</p>
                </div>
                <div class="thanks-text-container">
                    <div class="lg-text">Thank you!</div>
                    <div class="sm-text">
                        We appreciate you taking the time to give a rating. If you ever need more support, 
                        do not hesitate to get in touch!
                    </div>
                </div>
            `;
    
            // Agregar la nueva pantalla al HTML
            document.querySelector(".main-container").appendChild(thankYouContainer);
        }
    
        // 5. Agregar evento de clic al boton de enviar
        submitButton.addEventListener("click", submitRating);
    

});




// 1. Esperar a que el DOM este completamente cargado antes de ejecutar el codigo
//    - Agregar un evento "DOMContentLoaded" al document
//    - Dentro de esta funcion, escribir todo el codigo restante

// 2. Capturar elementos del HTML
//    - Obtener todos los botones de calificacion usando querySelectorAll(".number") y guardarlos en una variable
//    - Obtener el boton de enviar usando querySelector(".submit") y guardarlo en una variable
//    - Obtener el contenedor principal de calificacion usando querySelector(".general-container") y guardarlo en una variable
//    - Crear un nuevo div con document.createElement("div") para la pantalla de agradecimiento
//    - Crear una variable que almacene la calificacion seleccionada y asignarle null al inicio

// 3. Crear una funcion para manejar la seleccion de calificacion
//    - La funcion debe recibir un event como parametro
//    - Recorrer todos los botones de calificacion con un bucle y remover la clase "selected"
//    - Obtener el boton que fue clicado usando event.target
//    - Agregar la clase "selected" al boton clicado
//    - Guardar el numero seleccionado en la variable correspondiente

// 4. Agregar evento de clic a cada boton de calificacion
//    - Recorrer todos los botones de calificacion con un bucle
//    - Asignar la funcion de seleccion de calificacion al evento "click" de cada boton

// 5. Crear una funcion para manejar el envio de la calificacion
//    - Verificar si el usuario selecciono una calificacion antes de continuar
//    - Si no ha seleccionado, mostrar un alert con un mensaje de advertencia y salir de la funcion
//    - Si ha seleccionado una calificacion, ocultar el contenedor de calificacion principal
//    - Agregar la clase "general-container" al nuevo div de agradecimiento para que tenga el mismo estilo
//    - Insertar el contenido de la pantalla de agradecimiento en el nuevo div usando innerHTML
//    - Mostrar en la pantalla el numero de calificacion que el usuario selecciono dentro del mensaje de agradecimiento
//    - Agregar el nuevo div al contenedor principal del documento con appendChild

// 6. Agregar evento de clic al boton de enviar
//    - Asignar la funcion de envio de calificacion al evento "click" del boton de enviar
