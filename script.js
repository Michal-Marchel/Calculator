let inputValue = document.getElementById("inputValue");
let botones = document.getElementsByClassName("button");
let display = document.getElementById("topDiv");
let number1 = "";
let number2 = "";
let op = "";

//Sum of two arguments.
function add(a, b) {
    return a + b;
}


function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
// Takes 3 arguments (left digit, right digit, function), entablish inputValue.value as the result of the function over both digits.
function operate(left, right, operation) {
    display.innerHTML = operation(left, right);
}

//Concat string
function concatDigits(digito) {
    inputValue.innerHTML = number1 += digito;
}



function changeToSum() {
    op = add;
    display.innerHTML = number1;
    number2 = number1;
    number1 = "";
    inputValue.innerHTML = "";
}
function getIdentity(operation) {
    if (operation == divide || operation == multiply) {
        return 1;
    } else if (operation == add || operation == substract) {
        return 0;
    }
}

function result() {
    //Si number2 es null, coger valor identidad. getIdentity(op) 
    val1 = parseFloat(number1);
    val2 = number2 == "" ? val1 : parseFloat(number2);
    

    operate(val2, val1, op);
    number1 = "";
    number2 = "";
    inputValue.innerHTML = "";
}

function changeToSub() {
    op = substract;
    display.innerHTML = number1;
    number2 = number1;
    number1 = "";
    inputValue.innerHTML = "";
}

function changeToDivide() {
    op = divide;
    display.innerHTML = number1;
    number2 = number1;
    number1 = "";
    inputValue.innerHTML = "";
}

function changeToMultiply() {
    op = multiply;
    display.innerHTML = number1;
    number2 = number1;
    number1 = "";
    inputValue.innerHTML = "";
}
function clearInfo() {
    op = "";
    number = "";
    number2 = "";
    inputValue.innerHTML = "";
    display.innerHTML = "";
}


















































































