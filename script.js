const display = document.querySelector('#display');
const calBtns = document.querySelector('#buttons');

let firstNumber;
let secondNumber;
let operator;

calBtns.addEventListener('click', (event) => {
    const array1 = [];
    let num1 = event.target;
    array1.push(num1.value);
    display.innerText = num1.value;
    console.log(array1);
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2) 
    } else if (operator == '/') {
        return divide(num1, num2)
    }
};

console.log(operate(2, '-', 2));
