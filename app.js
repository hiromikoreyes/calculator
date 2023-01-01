/* 
Display Functions
*/
computationString = '';

//Function Buttons
const displayCurrent = document.querySelector('#display-current');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');




//Typing Buttons

const openBracket = document.querySelector('#open-bracket');
const closedBracket = document.querySelector('#closed-bracket');

const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');
const btnDecimal = document.querySelector('#decimal');

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
btnMultiply.addEventListener('click', () => addToDisplay(' x '));
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
btnDecimal.addEventListener('click', () => addToDisplay('.'));



function addToDisplay(char){
    computationString += char;
    displayCurrent.textContent = computationString;
}


//clear button
clear.addEventListener('click', () =>{
    computationString = '';
    displayCurrent.textContent = '';
});


/*
The interpreter of the terms good luck this is harder
*/

//equal button
function equals(phrase){
    segmentTerms(phrase)


}

function segmentTerms(phrase){
    /* Return an array of math terms, from the phrase.

    Ex. phrase = '(3 + 4) x 7 + 4' returns [(3+4), arr[0] x 7, arr[] + 4]
    
    Ex. 1 + 5 is a math term

    */
}



equal.addEventListener('click', () => {
    equals();
});






