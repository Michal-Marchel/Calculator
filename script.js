
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

function operate(a, b, c) {
    if (c == "+") {
         add(a, b);
    }
    if (c == "-") {
        return substract(a, b);
    }
    if (c == "*") {
        return multiply(a, b);
    }
    if (c == "/") {
        return divide(a, b);
    }
}
