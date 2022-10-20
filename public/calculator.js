const mainDisplay = document.getElementById("display");
const changeMainDisplay = (input) => {
    mainDisplay.innerText=input;
};

const stringDisplay = document.getElementById("display");
const changeStringDisplay = (input) => {
    stringDisplay.innerText=input;
};

const operatorDisplay = document.getElementById("display");
const changeOperatorDisplay = (input) => {
    operatorDisplay.innerText=input;
};

const calculator = document.getElementById("calculator");

const percent = document.getElementById("%");
const CE = document.getElementById("CE");
const C = document.getElementById("C");
const backspace = document.getElementById("←");
const divideByX = document.getElementById("¹/x");
const squared = document.getElementById("x²");
const squareRoot = document.getElementById("√x");
const divide = document.getElementById("÷");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("×");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const subtract = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const add = document.getElementById("+");
const changeSign = document.getElementById("±");
const zero = document.getElementById("0");
const point = document.getElementById(".");
const equals = document.getElementById("=");


const addNumber = (...input) => { 
    let numString = "";
    console.log(input[0].srcElement.id)
    let num = Number(input[0].srcElement.id)
    if (num = 0||1||2||3||4||5||6||7||8||9) {
        changeMainDisplay(num);
    }

        // switch (mathSymbol) {
        //     case "+":
        //         console.log(num1 + num2 + num3);
        //         break;
        //     case "-":
        //         console.log(num1 - num2 - num3);
        //         break;
        //     case "*":
        //         console.log(num1 * num2 * num3);
        //         break;
        //     case "/":
        //         console.log(num1 / num2 / num3);
        //         break;
        //     case "√":
        //         console.log(Math.sqrt(num1));
        //         break;
        //     case "^2":
        //         console.log(Math.pow(num1, 2));
        //         break;
        //     case "^3":
        //         console.log(Math.pow(num1, 3));
        //         break;
        //     case "^":
        //         console.log(Math.pow(num1, num2));
        //         break;
        //     case "%":
        //         console.log(Math.floor(num1/num2) + " Rem " + (num1 % num2));
        //         break;
        //     case "order":
        //         console.log(num1 + num2 * num3);
        //         break;
        //     default:
        //         console.log("You suck at math.");
        //         break;
        //     }
};

calculator.addEventListener("click", addNumber)