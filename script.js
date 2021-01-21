let input = document.getElementById("inputValue");
let display = document.getElementById("topDiv");
let op = identity;

//Sum of two arguments.
function add(a, b) {
    return b + a;
}

function substract(a, b) {
    return b - a;
}

function multiply(a, b) {
    return b * a;
}

function divide(a, b) {
    return b / a;
}

//Concat string
function concatDigits(digito) {
    if (!input.value) {
        input.value = "";
        input.innerHTML = input.value += digito;
    } else {
        input.innerHTML = input.value += digito;
    }
}

function clearInfo() {
    op = identity;
    input.innerHTML = "0";
    input.value = "";
    display.innerHTML = "";
    display.value = "";
}


function sign {

}

function operate(operator) {
    if (input.value == "") {
        op = operator;
    } else {
        display.value = op(parseFloat(input.value), parseFloat(display.value));
        display.innerHTML = display.value;
        input.value = "";
        input.innerHTML = "";
    }
    op = operator;
}

function identity(x) {
    return x = isNaN(x) ? 0 : x;
}

function result() {
    if (input.value == "") {
        op = identity;
        display.value = op(display.value);
    } else {
        display.value = op(parseFloat(input.value), parseFloat(display.value));
        display.innerHTML = display.value;
        input.value = "";
        input.innerHTML = "";
    }

    /*
    val1 = parseFloat(number2);
    // if second arg not provided getIdentity depending on the operation
    val2 = number1 == "" ? getIdentity(op) : parseFloat(number1);
    alert("val1: " + val1 + "\nval2: " + val2 + "\noperation: " + op);
    // if second arg not provided use the same value as the first arg. (like MAC calculator)
    //val2 = number1 == "" ? val1 : parseFloat(number1);
     alert("val1: " + val1 + "\nval2: " + val2 + "\noperation: " + op);

    operate(val2, val1, op);
    number1 = "";
    number2 = "";
    inputValue.innerHTML = "";
    */
}