const input = document.querySelector('#validation-input');

input.addEventListener('input', () => {
    input.addEventListener('blur', (event) => {
        console.log(event.target.value.length);
        if (event.target.value.length !== Number(input.getAttribute('data-length'))) {
            input.classList.add('invalid'); 
        } else input.classList.add('valid');
    });
    input.classList.remove('invalid');
    input.classList.remove('valid');
});