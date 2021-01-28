let input = document.getElementById("inputValue");
let display = document.getElementById("topDiv");
let op = identity;
let decimalBtn = document.getElementById("decimalBtn");
let symbol = document.getElementById("symbol");
let backsp = document.getElementById("backspace");
input.value = "";

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
    if (input.value.length < 1 && digito === ".") {
        input.innerHTML = input.value += "0";
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
    decimalBtn.disabled = false;
    printSymbol();
}


function operate(operator) {
    if (input.value == "") {
        op = operator;
    }  else {
        display.value = op(parseFloat(input.value), parseFloat(display.value));
        display.innerHTML = display.value;
        input.value = "";
        input.innerHTML = "";
    }
    op = operator;
    decimalBtn.disabled = false; 
    printSymbol(op);
}

function identity(x) {
    return x = isNaN(x) ? 0 : x;
}

function result() {
    if (input.value == "") {
        display.value = op(parseFloat(display.value), parseFloat(display.value));
        display.innerHTML = display.value;
        
    } else if (op == divide && display.value == 0 || op == divide && input.value == 0) {
        display.innerHTML = "Is not possible to divide by 0";
        input.value = "";
        display.value = "";
        input.innerHTML = "";
    }else {
        display.value = op(parseFloat(input.value), parseFloat(display.value));
        display.innerHTML = display.value;
        input.value = "";
        input.innerHTML = "";
    }
    decimalBtn.disabled = false;
    printSymbol();
}

function printSymbol(operator) {
    switch (operator) {
        case add:
            symbol.innerHTML = "+";
        break;
        case substract:
            symbol.innerHTML = "-";
        break;
        case divide:
            symbol.innerHTML = "/";
        break;
        case multiply:
            symbol.innerHTML = "*";
        break;
        default:
            symbol.innerHTML = "";
    }

}


function backspace() {
    let check = false;
    input.value = input.value.substring(0, input.value.length-1);
    input.innerHTML = input.value;
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] == ".") {
            check = true;
        }
    }
    if (check == false) {
        decimalBtn.disabled = false;
    }
}

function disableBtn() {
    decimalBtn.disabled = true;
}

//Keyboard support
document.addEventListener('keydown', (event) => {
	
	let getOperators = {
		'/': 'divide',
		'x': 'multiply',
		'*': 'multiply',
		'%': 'remainder',
		'+': 'plus',
		'-': 'minus'
	}

	if(!isNaN(event.key) && event.key !== ' '){
		document.getElementById(`digit-${event.key}`).click();
	}
	if (['/', 'x', '+', '-', '*', '%'].includes(event.key)) {
		document.getElementById(getOperators[event.key]).click();
	}
	if (event.key === 'Backspace' || event.key ==='c' || event.key === 'C') {
        //document.getElementById('backspace').click();	
        backsp.click();
    }
    if (event.key ==='c' ) {
        document.getElementById('clearAll').click();	
	}
	if (event.key === '=' || event.key === 'Enter') {
		document.getElementById('equals').click();	
	}
	if (event.key === '.') {
		document.getElementById('decimalBtn').click();	
	}
});