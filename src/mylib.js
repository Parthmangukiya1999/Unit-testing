// Check both inputs before carrying out a calculation.
function validateNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
}

function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

function divide(a, b) {
  validateNumbers(a, b);

  // Stop before dividing if the divisor is zero.
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

// Make the four functions available to other files.
module.exports = { add, subtract, multiply, divide };
