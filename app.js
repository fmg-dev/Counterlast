const counterNumber = document.getElementById('counter-number');
const resetBtn = document.getElementById('reset-button');
const deleteAll = document.getElementById('delete-all');
const savedNumber = document.getElementById('saved-number');
const setCounterButtons = document.querySelectorAll('.set-counter');
let counter = 0;

//!!!!!!!!!!!!!!!!!! BUTTONS !!!!!!!!!!!!!!!!!!!!!       
resetBtn.addEventListener('click', function () {
    savedNumberSpan();
    counter = 0;
    counterNumber.innerHTML = counter;
})

deleteAll.addEventListener('click', function () {
    counter = 0;
    counterNumber.innerHTML = counter;
    savedNumber.innerHTML = " ";
})

//!!!!!!!!!!!!!! FUNCTIONS !!!!!!!!!
function savedNumberSpan() {
    let saved =`(${counter}) - `;
    savedNumber.innerHTML  += saved;
    counterNumber.innerHTML = 0;
    counter = 0;
}

function setCounter(count) {
    counter += parseInt(count);
    counterNumber.innerHTML = counter;
    console.log("asdg",count);
}

for (let i = 0; i < setCounterButtons.length; i++) {
    setCounterButtons[i].addEventListener('click', function () {
        const tempCount = this.getAttribute('data-count');
        setCounter(tempCount);
    })
}