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
        firstNumber = displayValue;
        operator = null;
        updateDisplay();
    } else if (event.target.className == 'clear') {
        clearOperation();
    } else if (event.target.className == 'sign') {
        inputSign();
    } else if (event.target.className == 'percent') {
        inputPercent();
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
    if (operator == null) {
        operator = event.target.value;
        console.log(operator);
        return operator;
    } else if (operator != null) {
        operate(firstNumber, operator, secondNumber)
        firstNumber = displayValue;
        updateDisplay();
        operator = event.target.value;
        console.log(operator);
        return operator; 
    }
}

function inputSign() {
    if (operator == null) {
        firstNumber = -firstNumber;
        displayValue = firstNumber;
        updateDisplay();
        console.log(firstNumber);
    } else if (operator != null) {
        secondNumber = -secondNumber;
        displayValue = secondNumber;
        updateDisplay();
        console.log(secondNumber);
    }
}

function inputPercent() {
    if(operator == null) {
        firstNumber = (firstNumber / 100);
        displayValue = firstNumber;
        updateDisplay();
    } else if (operator != null) {
        secondNumber = (secondNumber / 100);
        displayValue = secondNumber;
        updateDisplay();
    }
}

// function to calculate from two numbers and an operator
// Add, subtract, multiply, divide
function operate(firstNumber, operator, secondNumber) {
    let number;
    if (operator == '+') {
        number = (Number(firstNumber) + Number(secondNumber));
        displayValue = number.toFixed(2); 
    } else if (operator == '-') {
        number = (firstNumber - secondNumber);
        displayValue = number.toFixed(2);
    } else if (operator == '*') {
        number = (firstNumber * secondNumber);
        displayValue = number.toFixed(2); 
    } else if (operator == '/') {
        if (secondNumber != '0') {
            number = (firstNumber / secondNumber);
            displayValue = number.toFixed(2);
        } else if (secondNumber == '0') {
            displayValue = 'ERROR';
        }
        
    }
};

function clearDisplay() {
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