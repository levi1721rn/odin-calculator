function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return (a-b);
}

function multiply(a,b){
    return (a*b);
}

function divide(a,b){
    return (a/b);
}

let number1;
let operator;
let number2;

function operate(operator){
    switch (operator){
        case "+":
            add(number1,number2);
            break;
        case "-":
            subtract(number1,number2);
            break;
        case "*":
            multiply(number1,number2);
            break;
        case "/":
            divide(number1,number2);
            break;
        default :
            return "";
    }
}

let display = document.querySelector('.panel');

let one = document.querySelector('.one');
one.addEventListener('click' , () => {
    number1 = 1;
    display.textContent = '1';
})

let two = document.querySelector('.two');
two.addEventListener('click' , () => {
    number1 = 2;
    display.textContent = '2';
})

let three = document.querySelector('.three');
three.addEventListener('click' , () => {
    number1 = 3;
    display.textContent = '3';
})

let four = document.querySelector('.four');
four.addEventListener('click' , () => {
    number1 = 4;
    display.textContent = '4';
})

let five = document.querySelector('.five');
five.addEventListener('click' , () => {
    number1 = 5;
    display.textContent = '5';
})

let six = document.querySelector('.six');
six.addEventListener('click' , () => {
    number1 = 6;
    display.textContent = '6';
})

let seven = document.querySelector('.seven');
seven.addEventListener('click' , () => {
    number1 = 7;
    display.textContent = '7';
})

let eight = document.querySelector('.eight');
eight.addEventListener('click' , () => {
    number1 = 8;
    display.textContent = '8';
})

let nine = document.querySelector('.nine');
nine.addEventListener('click' , () => {
    number1 = 9;
    display.textContent = '9';
})

let zero = document.querySelector('.zero');
zero.addEventListener('click' , () => {
    number1 = 0;
    display.textContent = '0';
})