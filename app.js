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

const displayScreen = document.querySelector('#display-screen');

displayValue = '';
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

one.addEventListener('click', displayNumber('1'));
two.addEventListener('click', displayNumber('2'));
three.addEventListener('click', displayNumber('3'));
four.addEventListener('click', displayNumber('4'));
five.addEventListener('click', displayNumber('5'));
six.addEventListener('click', displayNumber('6'));
seven.addEventListener('click', displayNumber('7'));
eight.addEventListener('click', displayNumber('8'));
nine.addEventListener('click', displayNumber('9'));
zero.addEventListener('click', displayNumber('0'));

function displayNumber(num){
    displayValue += num;
    displayScreen.textContent = displayValue;
}