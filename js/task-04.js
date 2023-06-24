const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;

// console.log(value);
// console.log(btnDecrement);
// console.log(btnIncrement);

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log(value.textContent);

});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
    console.log(value.textContent);
});