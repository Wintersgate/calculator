let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '0';
const firstArray = [];
const buttons = document.querySelectorAll('button');

window.addEventListener('click', (event) => {
    if (event.target.className == 'operand') {
        firstArray.push(event.target.value);
        displayValue = firstArray.join('');
        updateDisplay();
    } else if (event.target.className == 'operator') {
        firstNumber = displayValue;
        clearDisplay();
    } else if (event.target.className == 'clear') {
        clearDisplay();
    }
    
});

function updateDisplay() {
    display = document.getElementById('display');
    display.innerText = displayValue;
    if (displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
};
updateDisplay();

// function to calculate from two numbers and an operator
// Add, subtract, multiply, divide
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

function clearDisplay() {
    displayValue = '0';
    firstArray.length = 0;
    updateDisplay();
};