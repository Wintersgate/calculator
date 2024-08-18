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
        inputEquals();
        updateDisplay();
    } else if (event.target.className == 'clear') {
        clearOperation();
        updateDisplay();
    } else if (event.target.className == 'sign') {
        inputSign();
        updateDisplay();
    } else if (event.target.className == 'percent') {
        inputPercent();
        updateDisplay();
    } else if (event.target.className == 'decimal') {
        inputDecimal();
        updateDisplay();
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
        displayValue = operate(firstNumber, operator, secondNumber)
        firstNumber = displayValue;
        operator = event.target.value;
        console.log(operator);
        return operator; 
    }
}

function inputSign() {
    if (operator == null) {
        firstNumber = -firstNumber;
        displayValue = firstNumber;
        console.log(firstNumber);
    } else if (operator != null) {
        secondNumber = -secondNumber;
        displayValue = secondNumber;
        console.log(secondNumber);
    }
}

function inputPercent() {
    if(operator == null) {
        firstNumber = (firstNumber / 100);
        displayValue = firstNumber;
    } else if (operator != null) {
        secondNumber = (secondNumber / 100);
        displayValue = secondNumber;   
    }
}

function inputDecimal() {
    if (displayValue.includes('.')) {
        return;
    } else {
        firstArray.push(event.target.value);
        displayValue = firstArray.join('');
    }   
}

function inputEquals() {
    displayValue = operate(firstNumber, operator, secondNumber);
    firstNumber = displayValue;
    operator = null;
}

// function to calculate from two numbers and an operator
// Add, subtract, multiply, divide
function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') {
        return Number(firstNumber) + Number(secondNumber); 
    } else if (operator == '-') {
        return firstNumber - secondNumber;
    } else if (operator == '*') {
        return firstNumber * secondNumber; 
    } else if (operator == '/') {
        if (secondNumber != '0') {
            return firstNumber / secondNumber;
            displayValue = num;
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
}