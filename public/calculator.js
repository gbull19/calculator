const mainDisplay = document.getElementById("display");
const changeMainDisplay = (input) => {
    mainDisplay.innerText += input;
};

const stringDisplay = document.getElementById("display2");
const changeStringDisplay = (input) => {
    stringDisplay.innerText=input;
};

const operatorDisplay = document.getElementById("operator");
const changeOperatorDisplay = (input) => {
    operatorDisplay.innerText=input;
};

const numbers = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const functions = document.querySelectorAll('[data-function]');
const equals = document.querySelectorAll('[data-equals]');
const clear = document.querySelectorAll('[data-clear]');
const clearEntry = document.querySelectorAll('[data-clearEntry]');

const newInput = event => {

}

numbers.addEventListener("click", newInput)
operator.addEventListener("click", newInput)
functions.addEventListener("click", newInput)
equals.addEventListener("click", newInput)
clear.addEventListener("click", newInput)
clearEntry.addEventListener("click", newInput)

// const calculator = document.getElementById("calculator");
// const percent = document.getElementById("%");
// const CE = document.getElementById("CE");
// const C = document.getElementById("C");
// const backspace = document.getElementById("←");
// const divideByX = document.getElementById("¹/x");
// const squared = document.getElementById("x²");
// const squareRoot = document.getElementById("√x");
// const divide = document.getElementById("÷");
// const seven = document.getElementById("7");
// const eight = document.getElementById("8");
// const nine = document.getElementById("9");
// const multiply = document.getElementById("×");
// const four = document.getElementById("4");
// const five = document.getElementById("5");
// const six = document.getElementById("6");
// const subtract = document.getElementById("-");
// const one = document.getElementById("1");
// const two = document.getElementById("2");
// const three = document.getElementById("3");
// const add = document.getElementById("+");
// const changeSign = document.getElementById("±");
// const zero = document.getElementById("0");
// const point = document.getElementById(".");
// const equals = document.getElementById("=");

// const addNumber = (...event) => {
//     console.log(event) 
//     let numString = 0;
//     // console.log(input[0].srcElement.id);
//     // let num = Number(input[0].srcElement.id);
//     // if (num = 0||1||2||3||4||5||6||7||8||9) {
//     if (event == zero||one||two) {
//         changeMainDisplay(Number(event[0].srcElement.id));
//     } else if (event == "+"||"-"||"×"||"÷") {
//         numString += Number(mainDisplay.innerText)
//         changeOperatorDisplay(input);
//         changeMainDisplay("");
//         numString += Number(input);
//         changeStringDisplay(numString);
//     } else if (event = "=") {
//         changeOperatorDisplay(input);
//         changeMainDisplay("");
//         numString = Number(numString);
//         changeStringDisplay(numString);
//     } else if (event == "CE") {
//         mainDisplay.clear();
//     }
// };
// calculator.addEventListener("click", addNumber)