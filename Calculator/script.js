let calcDisplay = document.getElementById('display');
let displayValue = '';
let previousInput = '';
let secondInput = '';
let operator = '';

function operate() {
    switch(operator) {
        case 'add':
            previousInput = Number(previousInput) + Number(secondInput);
            break;
        case 'subtract':
            previousInput = Number(previousInput) - Number(secondInput);            
            break;
        case 'multiply':
            previousInput = Number(previousInput) * Number(secondInput);          
            break;
        case 'divide':
            if(secondInput === '0') {
                alert("Error Cannot Divide By Zero");
                clearCalc();
            } else
            previousInput = Number(previousInput) / Number(secondInput);
            break;
    }
    displayValue = previousInput;
    calcDisplay.innerHTML = displayValue;
    console.log(previousInput);
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
    previousInput = '';
    secondInput = '';
    operator = '';
    calcDisplay.innerHTML = "";
}

const operatorButtons = document.querySelectorAll('.operators')
operatorButtons.forEach(node => {
    node.addEventListener('click', addOperator);
});

const numPadNumbers = document.querySelectorAll('.numbers')
numPadNumbers.forEach(node => {
    node.addEventListener('click', updateCalc);
});

document.getElementById('equals').addEventListener('click', updateCalc);
document.getElementById('clear').addEventListener('click', clearCalc);