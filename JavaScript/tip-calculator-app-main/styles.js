//Editado

const inputBill = document.getElementById('bill-amount'); //Input de bill
const buttonTip = document.querySelectorAll('.button-tip');
const customTip = document.querySelector('.custom-tip');
const inputPeople = document.querySelector('.people-result');

let billAmount = 0;//Input de bill convertido a numero
let selectedPercentage = 0;//Porcentaje elegido
let peopleNumber = 0;
let tipResult = 0;//String
let totalResult = 0;
let resetButtton = document.querySelector('.reset');

// Escucha el evento input de Bill Amount y activa/desactiva toggleButton
inputBill.addEventListener('input', toggleButton);
// Función para manejar la activación/desactivación de botones
function toggleButton() {
    let billEmpty = inputBill.value.trim() === ''; 
    buttonTip.forEach(function (button) {
        button.disabled = billEmpty;
        resetButtton.disabled = billEmpty;
    });
    customTip.disabled = billEmpty; // También desactiva el input personalizado de propina
    inputPeople.disabled = true; // Mantiene deshabilitado hasta seleccionar un botón de propina
    billAmount = parseFloat(inputBill.value);
    if (isNaN(billAmount)) {
        billAmount = 0;
    }
    console.log('Bill Amount:', billAmount);
}

// Escucha evento click en botones de propina
buttonTip.forEach(function (button) {
    button.addEventListener('click', function (event) {
        selectTip(event);
        customTip.value = '';
        calcularCuenta();
    });
});

// Función para seleccionar la propina
function selectTip(event) {
    buttonTip.forEach(function (button) {
        button.classList.remove('active'); 
    });
    event.target.classList.add('active'); // Marca el botón seleccionado
    selectedPercentage = parseFloat(event.target.getAttribute('data-percentage')); // Obtiene el porcentaje
    if (isNaN(selectedPercentage)) {
        selectedPercentage = 0;
    }
    console.log('Percetage Selected:', selectedPercentage);
    inputPeople.disabled = false; // Ahora que hay un botón seleccionado, habilita inputPeople
}

// Función para manejar cuando el usuario usa el input de propina personalizada
function customTipSelected() {
    customTip.addEventListener('focus', function () {
        buttonTip.forEach(function (button) {
            button.classList.remove('active'); // Quitar la clase "active" de botones de propina
            button.disabled = true; // Desactivar los botones
        });
    });

customTip.addEventListener('input', function () {
    if (customTip.value.trim() !== '') {
        selectedPercentage = parseFloat(customTip.value) / 100;
        inputPeople.disabled = false;
        calcularCuenta();
        } else {
            inputPeople.disabled = true; // Desactivar inputPeople si customTip está vacío
        }
    });
    customTip.addEventListener('blur', function () {
        buttonTip.forEach(function (button) {
            button.disabled = false;
            inputPeople.disabled = true;
        })
    })
}
//Guarda numero de personas
inputPeople.addEventListener('input', function () {
    peopleNumber = parseFloat(inputPeople.value);
    if (isNaN(peopleNumber)) {
        peopleNumber = 1;
    }
    console.log('Numero de personas:', peopleNumber);
    calcularCuenta();
});

//Funcion calcular cuenta
function calcularCuenta() {
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');

    if (!tip.classList.contains('calculado') && !total.classList.contains('calculado')) {
        let tipResult = (billAmount / peopleNumber * selectedPercentage).toFixed(2);
        let tipNumber = parseFloat(tipResult);
        let totalResult = (billAmount / peopleNumber + tipNumber).toFixed(2);

        tip.textContent = `$${tipResult}`;
        total.textContent = `$${totalResult}`;
    }
}

function calcularCuenta() {
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');

    // Verificar si los valores están definidos y son numéricos
    let bill = parseFloat(billAmount);
    let people = parseInt(peopleNumber);
    let percentage = parseFloat(selectedPercentage);

    // Validaciones para evitar cálculos con valores no válidos
    if (isNaN(bill) || isNaN(people) || isNaN(percentage) || people <= 0) {
        tip.textContent = '$0.00';
        total.textContent = '$0.00';
        return;
    }

    // Cálculo de la propina y total
    let tipResult = (bill / people * percentage).toFixed(2);
    let tipNumber = parseFloat(tipResult);
    let totalResult = (bill / people + tipNumber).toFixed(2);

    // Actualizar los valores en la interfaz
    tip.textContent = `$${tipResult}`;
    total.textContent = `$${totalResult}`;
}

//Boton de reinicio
resetButtton.addEventListener('click', function () {
    // Restablecer valores de variables
    billAmount = 0;
    selectedPercentage = 0;
    peopleNumber = 0;

    // Reiniciar inputs
    inputBill.value = '';
    inputPeople.value = '';
    customTip.value = '';

    // Reiniciar la propina y total en la interfaz
    document.getElementById('tip').textContent = '$0.00';
    document.getElementById('total').textContent = '$0.00';

    // Quitar clase "active" de los botones de propina
    buttonTip.forEach(function (button) {
        button.classList.remove('active');
    });

    // Deshabilitar botones e inputs nuevamente
    toggleButton();

    console.log('Todo se ha reiniciado correctamente');
});



// Ejecutar al inicio para asegurar el estado correcto
toggleButton();
customTipSelected();
