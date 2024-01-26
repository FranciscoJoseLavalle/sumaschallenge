const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');
const totalRightText = document.querySelector('.totalRight');
const difficultSelect = document.querySelector('.difficult');

let gameDifficult = 10;
let totalRight = 0;

document.addEventListener('DOMContentLoaded', () => {
    generateRandomNumber(gameDifficult);
})

result.addEventListener('input', (e) => {
    let value = e.target.value;
    if (parseInt(value) === (parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent))) {
        console.log('correcto');
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

const generateRandomNumber = (difficult) => {
    firstNumber.textContent = Math.ceil(Math.random() * difficult);
    secondNumber.textContent = Math.ceil(Math.random() * difficult);
}

const timer = () => {

}