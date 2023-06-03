let isNum1 = true;
let isOperator = false;
let isNum2 = false;

let num1 = 0;
let num2 = 0;
let operator = '';


const firstNumButtons = document.querySelectorAll('.number')
firstNumButtons.forEach(button => {
    button.addEventListener('click', function(){
        if(isNum1 === true){
        const number = parseInt(button.dataset.number);
        num1 = number;
        console.log('num1: '+num1);
        isOperator = true;
        }
    })
})

const secondNumButtons = document.querySelectorAll('.number');
secondNumButtons.forEach(button => {
    button.addEventListener('click', function(){
        if (isNum2 === true){
        const number = parseInt(button.dataset.number);
        num2 = number;
        console.log('num2: '+num2);
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

console.log(operate(operator, num1, num2));


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