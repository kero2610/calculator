let isNum1 = true;
let isOperator = false;
let isNum2 = false;

const num1Arr = [0];
const num2Arr = [];

const num1 = num1Arr.join('');
const num2 = num2Arr.join('');
const operator = '';

const firstNumButtons = document.querySelectorAll('.number')
firstNumButtons.forEach(button => {
    button.addEventListener('click', function(){
        if(isNum1 === true){
        const number = parseInt(button.dataset.number);
        num1Arr.push(number);
        console.log('num1Arr: '+num1Arr);
        isOperator = true;
        }
    })
})


const secondNumButtons = document.querySelectorAll('.number');
secondNumButtons.forEach(button => {
    button.addEventListener('click', function(){
        if (isNum2 === true){
        const number = parseInt(button.dataset.number);
        num2Arr.push(number);
        console.log('num2Arr: '+num2Arr);
        isOperator = false;
        }
    })
})


const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', function(){
        if (isOperator === true){
        const operators = button.dataset.operator;
        operator = operators;
        console.log('operator: '+operator);
        isNum1 = false;
        isNum2 = true;
        }
    })
})


function operate(operator, num1, num2){
    if (operator === '+'){
        return num1 + num2;
    }
    else if (operator === '-'){
        return num1 - num2;
    }
    else if (operator === '*'){
        return num1 * num2;
    }
    else if (operator === '/'){
        return num1 / num2;
    }
}