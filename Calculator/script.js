let calcDisplay = document.getElementById('display');
let displayValue = '';

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
    return operatorFunc(numOne, numTwo);
}

function updateCalc() {
    let btnInput = this.value;
    let firstInput = '';
    let secondInput = '';
    let operatorInput = '';
    if(btnInput === Number) {
        if(firstInput === ''){
            displayValue = displayValue + '' + btnInput;
        } else {
            displayValue = secondInput;
            secondInput = displayValue + '' + btnInput;
        }
    } else {
        firstInput = displayValue;
        operatorInput = btnInput;
    }
    calcDisplay.innerHTML = displayValue;
}

function clearCalc() {
    displayValue = '';
    firstInput = '';
    secondInput = '';
    calcDisplay.innerHTML = "";
}

document.getElementById('add').addEventListener('click', updateCalc);
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