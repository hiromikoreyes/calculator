/* 
Display Functions
*/
computationString = '';

//Function Buttons
const displayAnswer = document.querySelector('#display-answer');
const displayCurrent = document.querySelector('#display-current');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');




//Typing Buttons

const openBracket = document.querySelector('#open-bracket');
const closedBracket = document.querySelector('#closed-bracket');

const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');
const decimal = document.querySelector('#decimal');

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

openBracket.addEventListener('click', () => addToDisplay('('));
closedBracket.addEventListener('click', () => addToDisplay(')'));

btnAdd.addEventListener('click', () => addToDisplay(' + '));
btnSubtract.addEventListener('click', () => addToDisplay(' - '));
btnMultiply.addEventListener('click', () => addToDisplay(' * '));
btnDivide.addEventListener('click', () => addToDisplay(' / '));


one.addEventListener('click', () => addToDisplay('1'));
two.addEventListener('click', () => addToDisplay('2'));
three.addEventListener('click', () => addToDisplay('3'));
four.addEventListener('click', () => addToDisplay('4'));
five.addEventListener('click', () => addToDisplay('5'));
six.addEventListener('click', () => addToDisplay('6'));
seven.addEventListener('click', () => addToDisplay('7'));
eight.addEventListener('click', () => addToDisplay('8'));
nine.addEventListener('click', () => addToDisplay('9'));
zero.addEventListener('click', () => addToDisplay('0'));
decimal.addEventListener('click', () => addToDisplay('.'));


del.addEventListener('click', () => removeFromDisplay());

//Keyboard input


function addToDisplay(char){
    computationString += char;
    displayCurrent.textContent = computationString;
}
function removeFromDisplay(){
    newString = computationString.trim().slice(0,-1).trim();
    computationString = newString;


    
}


//clear button
clear.addEventListener('click', () =>{
    computationString = '';
    displayCurrent.textContent = '';
    displayAnswer.textContent = '';
});


/*
The interpreter of the terms good luck this is harder than you thought
Revisit this when you get good for now just use eval
*/

//equal button
function equals(phrase){
    displayAnswer.textContent = eval(phrase)
    console.log(eval(phrase));
}


equal.addEventListener('click', () => {
    equals(computationString);
});


//recreate eval()