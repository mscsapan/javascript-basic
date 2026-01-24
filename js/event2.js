const countText = document.getElementById('count');
const plusButton = document.getElementById('increment-count');
const minusButton = document.getElementById('decrement-count');
const resetButton = document.getElementById('reset-count');

let currentCount = 0;


function initCount() {
    countText.innerHTML = currentCount;
}

plusButton.addEventListener('click', () => {
    currentCount++;
    initCount();
});

minusButton.addEventListener('click', () => {
    if (currentCount > 0) {
        currentCount--;
        initCount();
    }

});


resetButton.addEventListener('click', () => {
    currentCount = 0;
    initCount();
});


initCount();