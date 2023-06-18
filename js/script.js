/*Crea un programa utilizando HTML, CSS y JavaScript que permita al usuario acceder a un contador sencillo (ascendente y descendente) sin límite. Así mismo, se muestre un temporizador que permita al usuario establecer un tiempo (en segundos) y que haga una cuenta regresiva por cada segundo hasta llegar a 0 y arroje una alerta de tiempo finalizado.
Alójalo de manera estática en GitHub Pages y comparte el enlace de dicha página.

*/

// Contador
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
});

// Temporizador
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const countdownElement = document.getElementById('countdown');

let countdownIntervalId;

startButton.addEventListener('click', () => {
    const seconds = parseInt(secondsInput.value);

    if (isNaN(seconds) || seconds <= 0) {
    alert('Enter a valid time in seconds');
    return;
}

startCountdown(seconds);
});

function startCountdown(seconds) {
clearInterval(countdownIntervalId);

countdownIntervalId = setInterval(() => {
    countdownElement.textContent = seconds;
    seconds--;
    
    if (seconds < 0) {
        clearInterval(countdownIntervalId);
        alert('Time up!');
        countdownElement.textContent = '';
    }
}, 1000);
}
