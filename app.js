const counterNumber = document.getElementById('counter-number');
const increaseBtn = document.getElementById('increase-button');
const decreaseBtn = document.getElementById('decrease-button');
const resetBtn = document.getElementById('reset-button');
const increaseTenBtn = document.getElementById('increase-ten-button');
const decreaseTenBtn = document.getElementById('decrease-ten-button');
const deleteAll = document.getElementById('delete-all');
const savedNumber = document.getElementById('saved-number');
let counter = 0;

//!!!!!!!!!!!!!!!!!! BUTTONS !!!!!!!!!!!!!!!!!!!!!
increaseBtn.addEventListener('click', function () {
    counter += 1;
    counterNumber.innerHTML = counter; 
})

decreaseBtn.addEventListener('click', function () {
    counter -= 1;
    counterNumber.innerHTML = counter; 
})

resetBtn.addEventListener('click', function () {
    savedNumberSpan()
    counter = 0;
    counterNumber.innerHTML = counter;
})

increaseTenBtn.addEventListener('click', function () {
    counter += 10;
    counterNumber.innerHTML = counter;
})

decreaseTenBtn.addEventListener('click', function () {
    counter -= 10;
    counterNumber.innerHTML = counter;
})

deleteAll.addEventListener('click', function () {
    counter = 0;
    counterNumber.innerHTML = counter;
    savedNumber.innerHTML = " ";
})


//!!!!!!!!!!!!!! FUNCTIONS !!!!!!!!!
function savedNumberSpan() {
    let saved =`(${counter}) - ` 
    savedNumber.innerHTML  += saved;
    counterNumber.innerHTML = 0;
    counter = 0;
}