const red = document.querySelector('.button1');
const green = document.querySelector('.button2');
const black = document.querySelector('.button3');

red.addEventListener('click',clickRed);
function clickRed(event) {
    event.preventDefault();
    const body = document.querySelector('body');
    body.style.background = 'red';
}

green.addEventListener('mouseover',mouseoverGreen);
function mouseoverGreen(event) {
    event.preventDefault();
    const body = document.querySelector('body');
    body.style.background = 'green';
}


black.addEventListener('mouseout',mouseoutBlack);
function mouseoutBlack(event) {
    event.preventDefault();
    const text = document.querySelector('h1');
    text.style.color = 'White';
}