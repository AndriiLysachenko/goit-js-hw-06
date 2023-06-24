function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');
// console.log(number);
// console.log(createBtn);
// console.log(destroyBtn);
//console.log(box);

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let amount = 0;
let divArray = [];

function createBoxes(amount) {
  amount = Number(number.value);
  let sizeCount = 30;
   
  for (let i = 1; i <= amount; i += 1){
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${sizeCount}px`;
    div.style.height = `${sizeCount}px`;

    divArray.push(div);
    sizeCount += 10;
  }
  
  box.append(...divArray);
  console.log(box);
  return box;
};
 console.log(box);


function destroyBoxes(event) {
  box.innerHTML = '';
};