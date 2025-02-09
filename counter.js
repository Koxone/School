if (!localStorage.getItem('counter')) { //Si aun no hay nada en el local storage
    localStorage.setItem('counter, 0'); //Tenemos que asegurarnos que haya algo en counter
}

function count() {
        let counter = localStorage.getItem('counter');
        counter++;
        document.querySelector('h1').innerHTML = counter;
        localStorage.setItem('counter', counter);

        if (counter % 10 === 0) {
        }
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector("button").onclick = count;

  let interval = setInterval(count, 1);
}); 