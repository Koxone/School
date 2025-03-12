const inputContainer = document.querySelector('.input-container');
const generalContainer = document.querySelector('.general-container');
const thanksContainer = document.querySelector('.thanks-container');
const buttonSubscribe = document.querySelector('.button-subscribe');
const buttonThanks = document.querySelector('.button-dismiss');
let mainContainer = document.querySelector('.main-container');
let input = document.querySelector('.input');

buttonSubscribe.addEventListener('click', function () {
    if (input.value.trim() === '') {
        inputContainer.classList.add('error');
        return; //INVESTIGAR
    }else {
        inputContainer.classList.remove('error');
    }

    if (mainContainer.classList.contains('error')) {
        generalContainer.style.display = 'flex';
        thanksContainer.style.display = 'none';
    } else {
        mainContainer.classList.add('error');
        generalContainer.style.display = 'none';
        thanksContainer.style.display = 'flex';
    }
});

buttonThanks.addEventListener('click', function () {
    if (mainContainer.classList.contains('error')) {
        generalContainer.style.display = 'grid';
        thanksContainer.style.display = 'none';
        mainContainer.classList.remove('error');
    }
        
});



