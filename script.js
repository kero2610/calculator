const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let firstNum = '';
let isFirstNum = false;
let secondNum = '';
let isSecondNum = false;
let operator = '';
let result = 0;


numbers.forEach(number => {
    number.addEventListener('click', () => {
        let numberValue = number.value;
        console.log(numberValue);
        if (isFirstNum === false) {
            getFirstNum(numberValue);
        }
        if (isSecondNum === false) {
            getSecondNum(numberValue)
        }
    })
})

function getFirstNum(num) {
    display.textContent = '';
    firstNum += num;
    display.textContent = firstNum;
    firstNum = +firstNum;
}

function getSecondNum(num) {
    if (firstNum != '' && operator != '') {
        secondNum += num;
        display.textContent = secondNum;
        secondNum = +secondNum;
    }
}

function getOperator(){
    operators.forEach(symbol => {
        symbol.addEventListener('click', () => {
            operator = symbol.value;
            console.log(operator);
            isFirstNum = true;
        })
    })
}
getOperator();

equal.addEventListener('click', () =>{
    display.textContent = '';
    if (operator === '+'){
        result = firstNum+secondNum;
    } else if (operator === '-'){
        result = firstNum-secondNum;
    } else if (operator === '*'){
        result = firstNum*secondNum;
    } else if (operator === '/'){
        result = firstNum/secondNum;
    }
    display.textContent = result;
    firstNum = result;
    secondNum = '';
})

clear.addEventListener('click', () =>{
    display.textContent = 0;

    firstNum = '';
    isFirstNum = false;
    secondNum = '';
    isSecondNum = false;
    operator = '';
    result = 0;
})