/* 
Calculator Functions
*/

function add(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

function subtract(a,b){
    return a - b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    /*Given the first parameter, perform the corresponding
    arithmetic operation. with a and b*/
    switch(operator){
        case add:
            return add(a,b);
        case multiply:
            return multiply(a,b);
        case subtract:
            return subtract(a,b);
        case divide:
            return divide(a,b);
    }
}

/* 
Display Functions
*/


currentOperator = '';
currentValue = '';
previousValue = ''

//Number Buttons
const displayCurrent = document.querySelector('#display-current');
const displayPrevious = document.querySelector('#display-previous');
const displayOperator = document.querySelector('#display-operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');


const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');


one.addEventListener('click', () => addDigitToDisplay('1'));
two.addEventListener('click', () => addDigitToDisplay('2'));
three.addEventListener('click', () => addDigitToDisplay('3'));
four.addEventListener('click', () => addDigitToDisplay('4'));
five.addEventListener('click', () => addDigitToDisplay('5'));
six.addEventListener('click', () => addDigitToDisplay('6'));
seven.addEventListener('click', () => addDigitToDisplay('7'));
eight.addEventListener('click', () => addDigitToDisplay('8'));
nine.addEventListener('click', () => addDigitToDisplay('9'));
zero.addEventListener('click', () => addDigitToDisplay('0'));


function addDigitToDisplay(num){
    //Add the digit num, to the end of the currentValue.
    currentValue += num;
    displayCurrent.textContent = currentValue;
}


//clear button
clear.addEventListener('click', () =>{
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    displayCurrent.textContent = '';
    displayPrevious.textContent = '';
});


//equal button
function equals(){
    if (previousValue != ''){
        currentValue = operate(currentOperator, (previousValue/1), (currentValue/1));
        displayCurrent.textContent = currentValue;
    }
}

function buttonOperation(operator){
    currentOperator = operator;
    equals();   
    previousValue = currentValue;
    displayCurrent.textContent = currentValue;
    displayPrevious.textContent = previousValue;
}

equal.addEventListener('click', () => {
    equals();
});


const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');


btnAdd.addEventListener('click', () => {
    buttonOperation(add);
    displayOperator.textContent = '+';
});


btnSubtract.addEventListener('click', () => {
    buttonOperation(subtract);
    displayOperator.textContent = '-';
});


btnMultiply.addEventListener('click', () => {
    buttonOperation(multiply);
    displayOperator.textContent = 'x';
});


btnDivide.addEventListener('click', () => {
    buttonOperation(divide);
    displayOperator.textContent = '/';
});

