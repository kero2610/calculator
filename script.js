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
let displayValue = '0';
let isFirstNumber = true;

window.addEventListener('keydown', keyboardInput)

numbers.forEach(number => {
    number.addEventListener('click', () => saveNumber(number.value))
});

operators.forEach(symbol => {
    symbol.addEventListener('click', () => saveOperator(symbol.value))
});

equal.addEventListener('click', () => operate(firstNumber, secondNumber, operator));
clear.addEventListener('click', () => resetAll());
backspace.addEventListener('click', () => deleteNumber());
point.addEventListener('click', () => savePoint());

function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    }
}
updateDisplay();


function saveNumber(number) {
    if (isFirstNumber) {
        if (display.textContent === '0' && number === '0') {
            return;
        } else if (displayValue === '0') {
            displayValue = '';
        }
        displayValue += number;
        updateDisplay();
        firstNumber = displayValue;
    } else if (!isFirstNumber) {
        if (displayValue === '0') {
            displayValue = '';
        }
        displayValue += number;
        updateDisplay();
        secondNumber = displayValue;
    }
}


function saveOperator(symbol) {
    if (firstNumber && secondNumber && operator && !smallDisplay.textContent.includes('=') && display.textContent !== '') {
        operate(firstNumber, secondNumber, operator);
        secondNumber = '';
    } else if (!firstNumber) {
        firstNumber = '0';
    }
    isFirstNumber = false;
    displayValue = '0';
    operator = symbol;
    smallDisplay.textContent = `${firstNumber}${operator}`;
}

function savePoint() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
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
    if (b === 0) {
        return 'NaN';
    } return a / b;
}

function modulus(a, b) {
    return a % b;
}

function operate(a, b, operator) {
    if (!a || !b || !operator) {
        return;
    }
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
    displayValue = roundAccurately(result, 15).toString();;
    updateDisplay();
    smallDisplay.textContent = `${firstNumber}${operator}${secondNumber}=`;
    firstNumber = result;
}

function resetAll() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    displayValue = '0';
    isFirstNumber = true;

    display.textContent = 0;
    smallDisplay.textContent = '';
}

function deleteNumber() {
    if (smallDisplay.textContent.includes('=')) {
        smallDisplay.textContent = '';
        operator = '';
    } else if (result !== '' && !smallDisplay.textContent) {
        return;
    } else {
        displayValue = displayValue.toString().slice(0, -1);
        updateDisplay();
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        saveNumber(e.key);
    } if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        saveOperator(e.key);
    } if (e.key === '.') {
        savePoint();
    } if (e.key === '=' || e.key === 'Enter') {
        operate(firstNumber, secondNumber, operator);
    } if (e.key === 'Backspace') {
        deleteNumber();
    } if (e.key === 'Escape') {
        resetAll();
    }
}