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