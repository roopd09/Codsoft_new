// JavaScript code for the calculator

// Get the display element
const display = document.getElementById('display');

// Function to append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    display.value += operator;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
