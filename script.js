let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '0';

function updateDisplay() {
    display = document.getElementById('display');
    display.innerText = displayValue;
}
updateDisplay();

function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') {
        return firstNumber + secondNumber;
    } else if (operator == '-') {
        return firstNumber - secondNumber;
    } else if (operator == '*') {
        return firstNumber * secondNumber; 
    } else if (operator == '/') {
        return firstNumber / secondNumber;
    }
};