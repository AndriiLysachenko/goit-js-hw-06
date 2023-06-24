const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput() {
    if (inputEl.value !== '') {
        textEl.textContent = inputEl.value;
    }
    else textEl.textContent = 'Anonymous';
    
};