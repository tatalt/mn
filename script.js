let count = 0;
const counterElement = document.getElementById('counter');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});