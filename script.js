let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '0';
const firstArray = [];
const buttons = document.querySelectorAll('button');

window.addEventListener('click', (event) => {
    if (event.target.className == 'operand') {
        inputOperand();
        updateDisplay();
    } else if (event.target.className == 'operator') {
        inputOperator();
        updateDisplay();
    } else if (event.target.className == 'equals') {
        operate(firstNumber, operator, secondNumber);
        updateDisplay();
    } else if (event.target.className == 'clear') {
        clearOperation();
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

function inputOperand() {
    if (operator == null) {
        firstArray.push(event.target.value);
        displayValue = firstArray.join('');
        firstNumber = displayValue;
        console.log(firstNumber);
        return firstNumber;
    } else if (operator != null) {
        firstArray.push(event.target.value);
        displayValue = firstArray.join('');
        secondNumber = displayValue;
        console.log(secondNumber);
        return secondNumber;
    }    
}

function inputOperator() {
    clearDisplay();
    operator = event.target.value;
    displayValue = operator;
    console.log(operator);
    return operator;
}

// function to calculate from two numbers and an operator
// Add, subtract, multiply, divide
function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') {
        displayValue = (Number(firstNumber) + Number(secondNumber));
    } else if (operator == '-') {
        displayValue = (firstNumber - secondNumber);
    } else if (operator == '*') {
        displayValue = (firstNumber * secondNumber); 
    } else if (operator == '/') {
        displayValue = (firstNumber / secondNumber);
    }
};

function clearDisplay() {
    displayValue = '0';
    firstArray.length = 0;
    updateDisplay();
};

function clearOperation() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = '0';
    firstArray.length = 0;
    updateDisplay();
}