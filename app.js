const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');
const totalRightText = document.querySelector('.totalRight');
const difficultSelect = document.querySelector('.difficult');
const skipButton = document.querySelector('.skip');
const correctMessage = document.querySelector('.correctMessage');

let gameDifficult = 10;
let totalRight = 0;

document.addEventListener('DOMContentLoaded', () => {
    generateRandomNumber(gameDifficult);
})

result.addEventListener('input', (e) => {
    let value = e.target.value;
    if (parseInt(value) === (parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent))) {
        showCorrectMessage();
        generateRandomNumber(gameDifficult);
        result.value = '';
        totalRight++
        totalRightText.textContent = `Acertaste: ${totalRight}`
    }
});

difficultSelect.addEventListener('change', (e) => {
    let value = e.target.value;
    gameDifficult = parseInt(value);
    generateRandomNumber(gameDifficult);
});

skipButton.addEventListener('click', () => {
    generateRandomNumber(gameDifficult);
})

const generateRandomNumber = (difficult) => {
    firstNumber.textContent = Math.ceil(Math.random() * difficult);
    secondNumber.textContent = Math.ceil(Math.random() * difficult);
}

let isInterval = false;
let interval;
let secondInterval
const showCorrectMessage = () => {
    correctMessage.style.display = "block";
    correctMessage.classList.remove('hideCorrectMessage');

    if (isInterval) {
        clearTimeout(interval);
        clearTimeout(secondInterval);
        intervalMessage();
    } else {
        intervalMessage();
    }
}

const intervalMessage = () => {
    isInterval = true;
    interval = setTimeout(() => {
        correctMessage.style.display = "none";
        isInterval = false;
    }, 1000)
    secondInterval = setTimeout(() => {
        correctMessage.classList.add('hideCorrectMessage');
    }, 750)
}

const timer = () => {

}