const smallDisplay = document.querySelector('.smallDisplay');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.delete');
const point = document.querySelector('.point');


let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let displayValue = '';
let isFirstNumber = true;


numbers.forEach(number => {
    number.addEventListener('click', () => saveNumber(number.value))
});

operators.forEach(symbol => {
    symbol.addEventListener('click', () => saveOperator(symbol.value))
});

equal.addEventListener('click', () => operate(firstNumber, secondNumber, operator));
clear.addEventListener('click', () => resetAll());
backspace.addEventListener('click', ()=> deleteNumber());
point.addEventListener('click', ()=> savePoint());

function saveNumber(number) {
    if (isFirstNumber) {
        displayValue += number;
        display.textContent = displayValue;
        firstNumber = displayValue;
    } else if (!isFirstNumber) {
        displayValue += number;
        display.textContent = displayValue;
        secondNumber = displayValue;
    }
}


function saveOperator(symbol) {
    if (!isFirstNumber){
        operate(firstNumber, secondNumber, operator);
    }
    isFirstNumber = false;
    displayValue = '';
    operator = symbol;
    smallDisplay.textContent = `${firstNumber}${operator}`;
}

function savePoint(){
    if (!displayValue.includes('.')){
        displayValue += '.';
        display.textContent = displayValue;
    } return;
}


function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a,b) {
    return a % b;
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
        result = add(a, b);
    } else if (operator === '-') {
        result = minus(a, b);
    } else if (operator === '*') {
        result = multiply(a, b);
    } else if (operator === '/') {
        result = divide(a, b);
    } else if (operator === '%') {
        result = modulus(a, b);
    }
    displayValue = result;
    display.textContent = displayValue;
    smallDisplay.textContent = `${firstNumber}${operator}${secondNumber}=`;
    firstNumber = result;
}

function resetAll() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    displayValue = '';
    isFirstNumber = true;

    display.textContent = 0;
    smallDisplay.textContent = '';
}

function deleteNumber(){
    displayValue = displayValue.toString().slice(0,-1);
    display.textContent = displayValue;
}