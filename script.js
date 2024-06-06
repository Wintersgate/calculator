const display = document.querySelector('#display');
const calBtns = document.querySelector('#buttons');
const clear = document.querySelector('#clear');

let num1;
let num2;
let operator;

const array1 = [];

calBtns.addEventListener('click', (event) => {
    array1.push(event.target.value);
    display.innerText = array1.join('');
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
        return multiply(num1, num2); 
    } else if (operator == '/') {
        return divide(num1, num2);
    }
};

console.log(operate(2, '-', 2));
