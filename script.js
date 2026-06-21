let number1 ;
let operator = null;
let number2;

function operate(operator){
    if (operator === '+'){
        display.textContent = Number((number1 + number2).toFixed(2));
    }
    else if (operator === '-'){
        display.textContent = Number((number1 - number2).toFixed(2));
    }
    else if(operator === '*'){
        display.textContent = Number((number1 * number2).toFixed(2));
    }
    else if(operator === '/'){
        if(number2 === 0){
            alert("Can't divide by zero");
             display.textContent = '';
             number1 = null;
             number2 = null;
             operator = null;
        }
        else{
        display.textContent = Number((number1 / number2).toFixed(2));
    }
}
}

let display = document.querySelector('.panel');
display.textContent = "";

let one = document.querySelector('.one');
one.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '1';
})

let two = document.querySelector('.two');
two.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }
    display.textContent += '2';
})

let three = document.querySelector('.three');
three.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '3';
})

let four = document.querySelector('.four');
four.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '4';
})

let five = document.querySelector('.five');
five.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '5';
})

let six = document.querySelector('.six');
six.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '6';
})

let seven = document.querySelector('.seven');
seven.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '7';
})

let eight = document.querySelector('.eight');
eight.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '8';
})

let nine = document.querySelector('.nine');
nine.addEventListener('click' , () => {

    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '9';
})

let zero = document.querySelector('.zero');
zero.addEventListener('click' , () => {
    
    if(number1 !== null && number2 !== null &&
       display.textContent !== '' && operator !== null){
           display.textContent = '';
           number1 = null;
           number2 = null;
           operator = null;
    }

    display.textContent += '0';
})

let mul = document.querySelector('.multiply');
mul.addEventListener('click' , () => {
    if(number2 === null && display.textContent === ''){
        operator = '*';
    }
    else{
        if(operator !== null){
            number2 = Number(display.textContent);

            operate(operator);

            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '*';
        }
        else{
            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '*';    
        }

        if(number2 === null){
            display.textContent = '';
        }
    }    
})

let divid = document.querySelector('.divide');
divid.addEventListener('click' , () => {
    if(number2 === null && display.textContent === ''){
        operator = '/';
    }
    else{
        if(operator !== null){
            number2 = Number(display.textContent);

            operate(operator);

            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '/';
        }
        else{
            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '/';    
        }

        if(number2 === null){
            display.textContent = '';
        }
    }    
})

let addition = document.querySelector('.add');
addition.addEventListener('click' , () => {    
    if(number2 === null && display.textContent === ''){
        operator = '+';
    }
    else{
        if(operator !== null){
            number2 = Number(display.textContent);

            operate(operator);

            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '+';
        }
        else{
            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '+'; 
        }
    
        if(number2 === null){
            display.textContent = '';
        }
    }
})

let minus = document.querySelector('.subtract');
minus.addEventListener('click' , () => {
    if(number2 === null && display.textContent === ''){
        operator = '-';
    }
    else{
        if(operator !== null){
            number2 = Number(display.textContent);

            operate(operator);

            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '-';
        }
        else{   
            number1 = Number(display.textContent);
            display.textContent = '';
            operator = '-';   
        }
    
        if(number2 === null){
            display.textContent = '';
        }
    }
})


let clear = document.querySelector('.allclear');
clear.addEventListener('click' , () => {
    display.textContent = '';
    number1 = null;
    number2 = null;
    operator = null;
    dot.style.backgroundColor = 'azure';
})

let equalto = document.querySelector('.equalto');
equalto.addEventListener('click', () =>{
    let num2 = display.textContent;
    number2 = Number(num2);
    operate(operator);
});

let dot = document.querySelector('.dot');
dot.addEventListener('click',() => {
    if(display.textContent.includes('.')){
        display.textContent += '';
    }
    else{
        display.textContent += '.';
    }
    dot.style.backgroundColor = 'grey';
})