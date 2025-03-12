document.querySelectorAll('.plus-icon, .minus-icon').forEach(function (button) {
    button.addEventListener('click', function () {
        let faqItem = button.closest('.faq-item');
        if (faqItem) { //Esto es como decir 'Si faqItem existe...'
            if (button.classList.contains('plus-icon')) {
                faqItem.classList.toggle('active'); // Alternar al hacer clic en plus-icon
            } else {
                faqItem.classList.remove('active'); // Remover si es minus-icon
            }
        }
    });
});





