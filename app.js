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
displayValue = '';
previousValue = ''

//Number Buttons
const displayScreen = document.querySelector('#display-screen');
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
    //Add the digit num, to the end of the displayValue.
    displayValue += num;
    displayScreen.textContent = displayValue;
}


//clear button
clear.addEventListener('click', () =>{
    displayValue = '';
    previousValue = '';
    displayScreen.textContent = '';
});


//equal button
function equals(){
    displayValue = operate(currentOperator, (previousValue/1), (displayValue/1));
    displayScreen.textContent = displayValue;

}

equal.addEventListener('click', () => {
    equals();
});


const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');

btnAdd.addEventListener('click', () => {
    currentOperator = add;
    equals();
    previousValue = displayValue;
    displayScreen.textContent = displayValue;
});


btnSubtract.addEventListener('click', () => {
    currentOperator = subtract;
    equals();
    previousValue = displayValue;
    displayScreen.textContent = displayValue;
});


btnMultiply.addEventListener('click', () => {
    currentOperator = multiply;
    equals();
    previousValue = displayValue;
    displayScreen.textContent = displayValue;
});


btnDivide.addEventListener('click', () => {
    currentOperator = divide;
    equals();
    previousValue = displayValue;
    displayScreen.textContent = displayValue;
});

