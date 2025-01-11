let calcDisplay = document.getElementById('display');
let displayValue = '';
let previousInput = '';
let secondInput = '';
let operator = '';

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(operatorFunc, numOne, numTwo) {
    operatorFunc(numOne, numTwo);
    previousInput = displayValue;
    calcDisplay.innerHTML = displayValue;
}

function updateCalc() {
    if(this.value === 'equals' && previousInput != '' && operator != '' && secondInput != '') {
        operate(operator, previousInput, secondInput);
    } else {
        if(operator === '') {
            displayValue = displayValue + '' + this.value;
            previousInput = displayValue;
        } else {
            displayValue = displayValue + '' + this.value;
            secondInput = displayValue;
        }
        calcDisplay.innerHTML = displayValue;
    }
}

function addOperator() {
    displayValue = '';
    operator = this.value;
    calcDisplay.innerHTML = '';
}

function clearCalc() {
    displayValue = '';
    firstInput = '';
    secondInput = '';
    calcDisplay.innerHTML = "";
}

document.getElementById('equals').addEventListener('click', updateCalc);
document.getElementById('add').addEventListener('click', addOperator);
document.getElementById('decimal').addEventListener('click', updateCalc);
document.getElementById('zero').addEventListener('click', updateCalc);
document.getElementById('one').addEventListener('click', updateCalc);
document.getElementById('two').addEventListener('click', updateCalc);
document.getElementById('three').addEventListener('click', updateCalc);
document.getElementById('four').addEventListener('click', updateCalc);
document.getElementById('five').addEventListener('click', updateCalc);
document.getElementById('six').addEventListener('click', updateCalc);
document.getElementById('seven').addEventListener('click', updateCalc);
document.getElementById('eight').addEventListener('click', updateCalc);
document.getElementById('nine').addEventListener('click', updateCalc);
document.getElementById('clear').addEventListener('click', clearCalc);