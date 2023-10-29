/*
Filename: ComplexCalculator.js
Description: A sophisticated and complex calculator program that performs various mathematical operations with advanced features.
*/

// Importing external libraries
const math = require('mathjs');
const moment = require('moment');
const _ = require('lodash');

// Defining global variables
let result;
let history = [];

// Function to perform addition
function add(...numbers) {
    result = math.add(...numbers);
    updateHistory(`Addition - Result: ${result}`);
    return result;
}

// Function to perform subtraction
function subtract(...numbers) {
    result = math.subtract(...numbers);
    updateHistory(`Subtraction - Result: ${result}`);
    return result;
}

// Function to perform multiplication
function multiply(...numbers) {
    result = math.multiply(...numbers);
    updateHistory(`Multiplication - Result: ${result}`);
    return result;
}

// Function to perform division
function divide(...numbers) {
    if (_.some(numbers, (num) => num === 0)) {
        throw new Error('Division by zero is not allowed.');
    }
    result = math.divide(...numbers);
    updateHistory(`Division - Result: ${result}`);
    return result;
}

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to update history with calculations
function updateHistory(entry) {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    history.push(`${timestamp} - ${entry}`);
}

// Usage Example:
console.log(add(5, 10)); // Output: 15
console.log(subtract(10, 7)); // Output: 3
console.log(multiply(3, 4, 2)); // Output: 24
console.log(divide(30, 5)); // Output: 6

// Performing complex calculations
console.log(add(1, 2, 3, 4, 5)); // Output: 15
console.log(subtract(100, 20, 10)); // Output: 70
console.log(multiply(2, 4, 6, 8)); // Output: 384
console.log(divide(100, 2, 5)); // Output: 10

// Printing calculation history
console.log('Calculation History:');
history.forEach((entry) => console.log(entry));

// End