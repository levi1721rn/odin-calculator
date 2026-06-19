function add(a,b){
    display.textContent = (a+b);
}

function subtract(a,b){
    display.textContent = (a-b);
}

function multiply(a,b){
    display.textContent = (a*b);
}

function divide(a,b){
    display.textContent = (a/b);
}

let number1 ;
let operator = null;
let number2;

function operate(operator){
    if (operator === '+'){
        return add(number1,number2);
    }
    else if (operator === '-'){
        return subtract(number1,number2);
    }
    else if(operator === '*'){
        return multiply(number1,number2);
    }
    else if(operator === '/'){
        return divide(number1,number2);
    }
        return "";
}

let display = document.querySelector('.panel');
display.textContent = "";

let one = document.querySelector('.one');
one.addEventListener('click' , () => {
    display.textContent += '1';
})

let two = document.querySelector('.two');
two.addEventListener('click' , () => {
    display.textContent += '2';
})

let three = document.querySelector('.three');
three.addEventListener('click' , () => {
    display.textContent += '3';
})

let four = document.querySelector('.four');
four.addEventListener('click' , () => {
    display.textContent += '4';
})

let five = document.querySelector('.five');
five.addEventListener('click' , () => {
    display.textContent += '5';
})

let six = document.querySelector('.six');
six.addEventListener('click' , () => {
    display.textContent += '6';
})

let seven = document.querySelector('.seven');
seven.addEventListener('click' , () => {
    display.textContent += '7';
})

let eight = document.querySelector('.eight');
eight.addEventListener('click' , () => {
    display.textContent += '8';
})

let nine = document.querySelector('.nine');
nine.addEventListener('click' , () => {
    display.textContent += '9';
})

let zero = document.querySelector('.zero');
zero.addEventListener('click' , () => {
    display.textContent += '0';
})

let clear = document.querySelector('.allclear');
clear.addEventListener('click' , () => {
    display.textContent = '';
})

let mul = document.querySelector('.multiply');
mul.addEventListener('click' , () => {
    let num1 = display.textContent;
    number1 = Number(num1);
   
    operator = '*';    

    display.textContent = '';
})

let divid = document.querySelector('.divide');
divid.addEventListener('click' , () => {
    let num1 = display.textContent;
    number1 = Number(num1);
   
    operator = '/';    

    display.textContent = '';
})

let addition = document.querySelector('.add');
addition.addEventListener('click' , () => {
    let num1 = display.textContent;
    number1 = Number(num1);
   
    operator = '+';    

    display.textContent = '';
})

let minus = document.querySelector('.subtract');
minus.addEventListener('click' , () => {
    let num1 = display.textContent;
    number1 = Number(num1);
   
    operator = '-';    

    display.textContent = '';
})

let equalto = document.querySelector('.equalto');
equalto.addEventListener('click', () =>{
    let num2 = display.textContent;
    number2 = Number(num2);

    operate(operator);
});